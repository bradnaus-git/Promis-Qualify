"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Bot, Send, ShieldCheck, User, Sparkles, RotateCcw, ArrowUpRight, Zap } from "lucide-react";
import { ActionChip } from "@/lib/qualify-knowledge";

interface Message {
  role: "assistant" | "user";
  content: string;
  chips?: ActionChip[];
  mode?: "gemini" | "groq" | "local";
}

export default function QualifyAICopilot() {
  const { lang } = useLanguage();

  const initialAssistantMessage: Message = {
    role: "assistant",
    content:
      lang === "no"
        ? "Hei. Jeg er QualifyAI – Promis Qualifys faglige rådgiverassistent. Du kan stille meg spørsmål om testledelse, Big Testing, universell utforming (WCAG 2.2), testledelse i byggeprosjekter (NS 6450) eller våre transparente lønnsmodeller."
        : "Hello. I am QualifyAI – Promis Qualify's advisory copilot. Ask me about test management, Big Testing, public sector WCAG requirements, facility commissioning (NS 6450), or our transparent compensation models.",
    chips: [
      { labelNo: "Hva er Big Testing?", labelEn: "What is Big Testing?", actionType: "scroll", target: "#services" },
      { labelNo: "Krav i offentlig sektor", labelEn: "Public Sector QA Standards", actionType: "scroll", target: "#cases" },
      { labelNo: "Testledelse i bygg (NS 6450)", labelEn: "Commissioning & NS 6450", actionType: "scroll", target: "#services" },
      { labelNo: "Lønnsmodeller (6G / 7G)", labelEn: "Salary Models (6G / 7G)", actionType: "scroll", target: "#salary-calculator" },
    ],
  };

  const [messages, setMessages] = useState<Message[]>([initialAssistantMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeEngineMode, setActiveEngineMode] = useState<"gemini" | "groq" | "local">("local");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const predefinedPrompts = [
    {
      labelNo: "Hva er Big Testing?",
      labelEn: "What is Big Testing?",
      queryNo: "Hva innebærer Big Testing og hvordan skiller det seg fra tradisjonell systemtest?",
      queryEn: "What does Big Testing entail and how does it differ from conventional system testing?",
    },
    {
      labelNo: "Krav i offentlig sektor",
      labelEn: "Public Sector QA Standards",
      queryNo: "Hvilke standarder og krav til test gjelder i offentlige IT-anskaffelser?",
      queryEn: "What standards and regulations govern QA in Norwegian public sector tenders?",
    },
    {
      labelNo: "Testledelse i bygg & sykehus",
      labelEn: "Commissioning & Smart Buildings",
      queryNo: "Hvordan gjennomføres systematisk ferdigstillelse iht. NS 6450 i nye bygg og sykehus?",
      queryEn: "How is systematic commissioning per NS 6450 executed in smart facilities and hospitals?",
    },
    {
      labelNo: "Lønnsmodeller (6G / 7G)",
      labelEn: "Transparent Salary Models",
      queryNo: "Forklar Promis Qualifys transparente lønnsmodeller basert på G.",
      queryEn: "Explain Promis Qualify's transparent G-based compensation models.",
    },
  ];

  const handleActionChipClick = (chip: ActionChip) => {
    if (chip.actionType === "scroll" && chip.target.startsWith("#")) {
      const el = document.querySelector(chip.target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (chip.actionType === "link") {
      window.location.href = chip.target;
    }
  };

  const handleReset = () => {
    setMessages([initialAssistantMessage]);
    setInput("");
  };

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMessage: Message = { role: "user", content: query };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    if (!textToSend) setInput("");
    setLoading(true);

    // Add placeholder assistant message for streaming
    const assistantIndex = updatedMessages.length;
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({ role: m.role, content: m.content })),
          lang,
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error("Kunne ikke hente svar fra rådgiveren.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let currentContent = "";
      let receivedChips: ActionChip[] = [];
      let detectedMode: "gemini" | "groq" | "local" = "local";
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n\n");
        buffer = lines.pop() || "";

        for (const block of lines) {
          if (!block.trim()) continue;

          let eventType = "chunk";
          let dataText = "";

          for (const line of block.split("\n")) {
            if (line.startsWith("event: ")) {
              eventType = line.slice(7).trim();
            } else if (line.startsWith("data: ")) {
              dataText = line.slice(6);
            }
          }

          if (eventType === "chunk") {
            try {
              const chunkStr = JSON.parse(dataText);
              currentContent += chunkStr;
              setMessages((prev) => {
                const copy = [...prev];
                if (copy[assistantIndex]) {
                  copy[assistantIndex] = {
                    ...copy[assistantIndex],
                    content: currentContent,
                  };
                }
                return copy;
              });
            } catch {
              // Ignore parse error on raw chunk
            }
          } else if (eventType === "done") {
            try {
              const doneData = JSON.parse(dataText);
              if (doneData.chips) receivedChips = doneData.chips;
              if (doneData.mode) {
                detectedMode = doneData.mode;
                setActiveEngineMode(detectedMode);
              }
            } catch {
              // Ignore parse error
            }
          }
        }
      }

      // Finalize the assistant message
      setMessages((prev) => {
        const copy = [...prev];
        if (copy[assistantIndex]) {
          copy[assistantIndex] = {
            ...copy[assistantIndex],
            content: currentContent || copy[assistantIndex].content,
            chips: receivedChips,
            mode: detectedMode,
          };
        }
        return copy;
      });
    } catch (err) {
      console.error("QualifyAI chat error:", err);
      setMessages((prev) => {
        const copy = [...prev];
        if (copy[assistantIndex]) {
          copy[assistantIndex] = {
            role: "assistant",
            content:
              lang === "no"
                ? "Takk for henvendelsen. Promis Qualify er lokalisert på Rebel i Oslo, og er et rendyrket seniormiljø innen testledelse og kvalitetssikring. Kontakt oss på post@promis-qualify.no for en uforpliktende prat."
                : "Thank you for reaching out. Promis Qualify is based at Rebel in Oslo, operating as a dedicated senior consultancy in test management. Contact post@promis-qualify.no for consultation.",
            chips: [
              { labelNo: "Se referanseoppdrag", labelEn: "View Case Studies", actionType: "scroll", target: "#cases" },
              { labelNo: "Kontakt oss", labelEn: "Contact Us", actionType: "scroll", target: "#contact" },
            ],
            mode: "local",
          };
        }
        return copy;
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="qualify-ai" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-9 rounded-xl bg-white border border-slate-200 shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#009FE3] shadow-sm">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-slate-900">QualifyAI Rådgiverassistent</h3>
                  {activeEngineMode === "gemini" || activeEngineMode === "groq" ? (
                    <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live AI ({activeEngineMode === "gemini" ? "Gemini" : "Groq"})
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-[#009FE3] font-semibold border border-blue-200">
                      <Sparkles className="w-3 h-3" />
                      Faglig assistanse
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  {lang === "no"
                    ? "Svarer på spørsmål om testledelse, anbud, NS 6450, Big Testing og våre tjenester"
                    : "Answers queries regarding test strategy, tenders, NS 6450, Big Testing and services"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-[#009FE3]" />
                <span>ISTQB & NS 6450 forankret</span>
              </div>
              {messages.length > 2 && (
                <button
                  onClick={handleReset}
                  className="p-1.5 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                  title={lang === "no" ? "Start samtalen på nytt" : "Reset conversation"}
                  aria-label="Reset chat"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Predefined Prompt Chips */}
          <div className="flex flex-wrap gap-2 mb-5">
            {predefinedPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(lang === "no" ? p.queryNo : p.queryEn)}
                disabled={loading}
                className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#009FE3] text-xs font-medium text-slate-700 hover:text-slate-900 transition-all text-left shadow-2xs hover:shadow-xs disabled:opacity-50"
              >
                {lang === "no" ? p.labelNo : p.labelEn}
              </button>
            ))}
          </div>

          {/* Messages Container */}
          <div className="space-y-4 max-h-96 overflow-y-auto pr-2 mb-4 scrollbar-thin scrollbar-thumb-slate-200">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-3 text-xs sm:text-sm ${
                  m.role === "assistant" ? "items-start" : "items-start flex-row-reverse"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold shadow-2xs ${
                    m.role === "assistant"
                      ? "bg-blue-50 border border-blue-200 text-[#009FE3]"
                      : "bg-slate-200 text-slate-800"
                  }`}
                >
                  {m.role === "assistant" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>

                <div className="flex flex-col gap-2 max-w-[85%]">
                  <div
                    className={`p-3.5 sm:p-4 rounded-xl leading-relaxed whitespace-pre-wrap ${
                      m.role === "assistant"
                        ? "bg-slate-50 border border-slate-200 text-slate-800 shadow-2xs"
                        : "bg-[#009FE3] text-white font-medium"
                    }`}
                  >
                    {m.content || (
                      <span className="flex items-center gap-1 text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#009FE3] animate-pulse" />
                        <span>Genererer svar...</span>
                      </span>
                    )}
                  </div>

                  {/* Render Action Chips under Assistant replies */}
                  {m.role === "assistant" && m.chips && m.chips.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {m.chips.map((chip, chipIdx) => (
                        <button
                          key={chipIdx}
                          onClick={() => handleActionChipClick(chip)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white border border-blue-200 text-[#009FE3] hover:bg-blue-50 hover:border-[#0088C5] shadow-2xs transition-all"
                        >
                          <span>{lang === "no" ? chip.labelNo : chip.labelEn}</span>
                          <ArrowUpRight className="w-3 h-3 text-[#009FE3]" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {loading && messages[messages.length - 1]?.role !== "assistant" && (
              <div className="flex gap-2 items-center text-xs text-slate-500 py-1 pl-10">
                <div className="w-2 h-2 rounded-full bg-[#009FE3] animate-pulse" />
                <span>Rådgiveren vurderer spørsmålet...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2 pt-3 border-t border-slate-200"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              placeholder={
                lang === "no"
                  ? "Still et spørsmål om testledelse, anbud, NS 6450, Big Testing eller lønn..."
                  : "Ask about test management, tenders, NS 6450, Big Testing or compensation..."
              }
              className="flex-1 bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#009FE3] focus:bg-white transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="p-2.5 rounded-lg bg-[#009FE3] text-white hover:bg-[#0088C5] disabled:opacity-40 transition-all flex items-center justify-center shrink-0 shadow-sm"
              aria-label="Send"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Bottom subtle note */}
          <div className="flex items-center justify-between mt-3 text-[11px] text-slate-400 px-1">
            <span className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-[#009FE3]" />
              {lang === "no"
                ? "Forankret i Promis Qualifys metodikk og referanseoppdrag."
                : "Grounded in Promis Qualify's methodology and verified client cases."}
            </span>
            <span className="hidden sm:inline">Rebel, Oslo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
