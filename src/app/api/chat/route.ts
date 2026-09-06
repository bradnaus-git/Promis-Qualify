import { NextRequest } from "next/server";
import { QUALIFY_SYSTEM_PROMPT, resolveLocalKnowledge } from "@/lib/qualify-knowledge";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const { messages = [], lang = "no" } = await req.json();

    const lastUserMessage = [...messages].reverse().find((m: ChatMessage) => m.role === "user")?.content || "";
    const localResolution = resolveLocalKnowledge(lastUserMessage, lang);

    const geminiKey = process.env.GEMINI_API_KEY?.trim();
    const groqKey = process.env.GROQ_API_KEY?.trim();

    // Determine target provider
    let apiUrl = "";
    let apiKey = "";
    let modelName = "";
    let activeMode: "gemini" | "groq" | "local" = "local";

    if (geminiKey) {
      apiUrl = "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions";
      apiKey = geminiKey;
      modelName = "gemini-1.5-flash";
      activeMode = "gemini";
    } else if (groqKey) {
      apiUrl = "https://api.groq.com/openai/v1/chat/completions";
      apiKey = groqKey;
      modelName = "llama-3.3-70b-versatile";
      activeMode = "groq";
    }

    // If an external API key is present, attempt live streaming
    if (apiKey && apiUrl) {
      try {
        const upstreamResponse = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: modelName,
            messages: [
              { role: "system", content: QUALIFY_SYSTEM_PROMPT },
              ...messages.map((m: ChatMessage) => ({ role: m.role, content: m.content })),
            ],
            stream: true,
            temperature: 0.6,
          }),
        });

        if (upstreamResponse.ok && upstreamResponse.body) {
          const encoder = new TextEncoder();
          const decoder = new TextDecoder();
          const upstreamReader = upstreamResponse.body.getReader();

          const stream = new ReadableStream({
            async start(controller) {
              let buffer = "";

              try {
                while (true) {
                  const { done, value } = await upstreamReader.read();
                  if (done) break;

                  buffer += decoder.decode(value, { stream: true });
                  const lines = buffer.split("\n");
                  buffer = lines.pop() || "";

                  for (const line of lines) {
                    const trimmed = line.trim();
                    if (!trimmed || trimmed.startsWith(":")) continue;

                    if (trimmed === "data: [DONE]") {
                      continue;
                    }

                    if (trimmed.startsWith("data: ")) {
                      try {
                        const json = JSON.parse(trimmed.slice(6));
                        const token = json.choices?.[0]?.delta?.content;
                        if (token) {
                          controller.enqueue(encoder.encode(`event: chunk\ndata: ${JSON.stringify(token)}\n\n`));
                        }
                      } catch {
                        // Skip malformed chunk
                      }
                    }
                  }
                }

                // Send completion with action chips
                const donePayload = JSON.stringify({
                  chips: localResolution.chips,
                  mode: activeMode,
                });
                controller.enqueue(encoder.encode(`event: done\ndata: ${donePayload}\n\n`));
                controller.close();
              } catch (err) {
                controller.error(err);
              }
            },
          });

          return new Response(stream, {
            headers: {
              "Content-Type": "text/event-stream; charset=utf-8",
              "Cache-Control": "no-cache, no-transform",
              Connection: "keep-alive",
            },
          });
        } else {
          console.warn(`Upstream AI API returned ${upstreamResponse.status}. Falling back to local knowledge engine.`);
        }
      } catch (apiErr) {
        console.warn("Error calling AI provider, falling back to local engine:", apiErr);
      }
    }

    // Local knowledge fallback stream
    const encoder = new TextEncoder();
    const words = localResolution.reply.split(" ");
    
    const stream = new ReadableStream({
      async start(controller) {
        // Stream in chunks of words for natural fluid pacing
        for (let i = 0; i < words.length; i += 3) {
          const slice = words.slice(i, i + 3).join(" ") + (i + 3 < words.length ? " " : "");
          controller.enqueue(encoder.encode(`event: chunk\ndata: ${JSON.stringify(slice)}\n\n`));
          await new Promise((resolve) => setTimeout(resolve, 35));
        }

        const donePayload = JSON.stringify({
          chips: localResolution.chips,
          mode: "local",
        });
        controller.enqueue(encoder.encode(`event: done\ndata: ${donePayload}\n\n`));
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process chat message." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
