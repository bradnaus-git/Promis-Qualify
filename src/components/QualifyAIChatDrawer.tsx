"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Bot, Send, ShieldCheck, User, Sparkles, RotateCcw, ArrowUpRight, Zap, X, Minimize2 } from "lucide-react";
import { ActionChip } from "@/lib/qualify-knowledge";

interface Message {
  role: "assistant" | "user";
  content: string;
  chips?: ActionChip[];
  mode?: "gemini" | "groq" | "local";
}

interface QualifyAIChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QualifyAIChatDrawer({ isOpen, onClose }: QualifyAIChatDrawerProps) {
  const { lang } = useLanguage();

  const initialAssistantMessage: Message = {
    role: "assistant",
    content:
      lang === "no"
        ? "Hei! Jeg er QualifyAI. Spør meg om testledelse, Big Testing, universell utforming (WCAG), byggeprosjekter (NS 6450) eller våre transparente lønnsmodeller."
        : "Hello! I am QualifyAI. Ask me about test management, Big Testing, public sector WCAG, building commissioning (NS 6450), or our transparent compensation models.",
    chips: [
      { labelNo: "Hva er Big Testing?", labelEn: "What is Big Testing?", actionType: "scroll", target: "#services" },
      { labelNo: "Krav i offentlig sektor", labelEn: "Public Sector QA", actionType: "scroll", target: "#cases" },
      { labelNo: "Testledelse i bygg (NS 6450)", labelEn: "NS 6450 Commissioning", actionType: "scroll", target: "#services" },
      { labelNo: "Lønnsmodeller (6G / 7G)", labelEn: "Salary Models (6G / 7G)", actionType: "scroll", target: "#salary-calculator" },
    ],
  };

  const [messages, setMessages] = useState<Message[]>([initialAssistantMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeEngineMode, setActiveEngineMode] = useState<"gemini" | "groq" | "local">("local");

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync initial message if language toggled before chatting
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].role === "assistant") {
        return [
          {
            role: "assistant",
            content:
              lang === "no"
                ? "Hei! Jeg er QualifyAI. Spør meg om testledelse, Big Testing, universell utforming (WCAG), byggeprosjekter (NS 6450) eller våre transparente lønnsmodeller."
                : "Hello! I am QualifyAI. Ask me about test management, Big Testing, public sector WCAG, building commissioning (NS 6450), or our transparent compensation models.",
            chips: [
              { labelNo: "Hva er Big Testing?", labelEn: "What is Big Testing?", actionType: "scroll", target: "#services" },
              { labelNo: "Krav i offentlig sektor", labelEn: "Public Sector QA", actionType: "scroll", target: "#cases" },
              { labelNo: "Testledelse i bygg (NS 6450)", labelEn: "NS 6450 Commissioning", actionType: "scroll", target: "#services" },
              { labelNo: "Lønnsmodeller (6G / 7G)", labelEn: "Salary Models (6G / 7G)", actionType: "scroll", target: "#salary-calculator" },
            ],
          },
        ];
      }
      return prev;
    });
  }, [lang]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (messages.length > 1 || loading) {
      scrollToBottom();
    }
  }, [messages, loading]);

  if (!isOpen) return null;

  const predefinedPrompts = [
    {
      labelNo: "Hva er Big Testing?",
      labelEn: "What is Big Testing?",
      queryNo: "Hva innebærer Big Testing og hvordan skiller det seg fra tradisjonell systemtest?",
      queryEn: "What does Big Testing entail and how does it differ from conventional system testing?",
    },
    {
      labelNo: "Krav i offentlig sektor",
      labelEn: "Public Sector QA",
      queryNo: "Hvilke standarder og krav til test gjelder i offentlige IT-anskaffelser?",
      queryEn: "What standards and regulations govern QA in Norwegian public sector tenders?",
    },
    {
      labelNo: "NS 6450 i bygg",
      labelEn: "NS 6450 Commissioning",
      queryNo: "Hvordan gjennomføres systematisk ferdigstillelse iht. NS 6450 i nye bygg og sykehus?",
      queryEn: "How is systematic commissioning per NS 6450 executed in smart facilities and hospitals?",
    },
    {
      labelNo: "Lønnsmodeller (6G / 7G)",
      labelEn: "Salary Models",
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
      let accumulatedContent = "";
      let metadataParsed = false;

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (!line.trim()) continue;

          if (line.startsWith("__META__:")) {
            try {
              const metaJson = JSON.parse(line.replace("__META__:", ""));
              if (metaJson.mode) setActiveEngineMode(metaJson.mode);

              setMessages((prev) => {
                const copy = [...prev];
                if (copy[assistantIndex]) {
                  copy[assistantIndex] = {
                    ...copy[assistantIndex],
                    chips: metaJson.chips,
                    mode: metaJson.mode,
                  };
                }
                return copy;
              });
              metadataParsed = true;
            } catch (err) {
              console.error("Failed to parse metadata", err);
            }
          } else {
            accumulatedContent += line + "\n";
            setMessages((prev) => {
              const copy = [...prev];
              if (copy[assistantIndex]) {
                copy[assistantIndex] = {
                  ...copy[assistantIndex],
                  content: accumulatedContent.trim(),
                };
              }
              return copy;
            });
          }
        }
      }

      if (!metadataParsed) {
        setMessages((prev) => {
          const copy = [...prev];
          if (copy[assistantIndex]) {
            copy[assistantIndex] = {
              ...copy[assistantIndex],
              chips: [
                { labelNo: "Forespør rådgiver", labelEn: "Request Consultant", actionType: "scroll", target: "#contact" },
                { labelNo: "Våre tjenester", labelEn: "Our Services", actionType: "scroll", target: "#services" },
              ],
            };
          }
          return copy;
        });
      }
    } catch (err) {
      console.error("QualifyAI error:", err);
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
    <div
      className="fixed bottom-20 right-3 sm:right-6 z-50 w-[calc(100vw-1.5rem)] sm:w-[420px] h-[540px] max-h-[82vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-fade-in"
      role="dialog"
      aria-label="QualifyAI Chat Assistant"
    >
      {/* Header */}
      <div className="px-4 py-3 bg-slate-900 text-white flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#009FE3] flex items-center justify-center text-white shadow-sm shrink-0">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold leading-tight">QualifyAI</span>
              {activeEngineMode === "gemini" || activeEngineMode === "groq" ? (
                <span className="inline-flex items-center gap-1 text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-400/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live AI
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-[9px] px-1.5 py-0.2 rounded-full bg-blue-500/20 text-blue-300 font-medium border border-blue-400/30">
                  <Sparkles className="w-2.5 h-2.5" />
                  {lang === "no" ? "Fagassistent" : "Copilot"}
                </span>
              )}
            </div>
            <div className="text-[10px] text-slate-300">
              {lang === "no" ? "Senior testrådgivning & metodikk" : "Senior QA Advisory & Standards"}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {messages.length > 2 && (
            <button
              onClick={handleReset}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title={lang === "no" ? "Start ny samtale" : "Reset chat"}
              aria-label="Reset conversation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title={lang === "no" ? "Lukk chat" : "Close chat"}
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Predefined Quick Prompt Pills */}
      <div className="p-2 bg-slate-50 border-b border-slate-200 flex gap-1.5 overflow-x-auto scrollbar-none shrink-0">
        {predefinedPrompts.map((p, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(lang === "no" ? p.queryNo : p.queryEn)}
            disabled={loading}
            className="px-2.5 py-1 rounded-md border border-slate-200 bg-white hover:border-[#009FE3] text-[11px] font-medium text-slate-700 whitespace-nowrap transition-all shadow-2xs hover:text-[#009FE3] disabled:opacity-50"
          >
            {lang === "no" ? p.labelNo : p.labelEn}
          </button>
        ))}
      </div>

      {/* Messages Scroll Area */}
      <div
        ref={chatContainerRef}
        className="flex-1 p-3.5 space-y-3 overflow-y-auto bg-slate-50/50 text-xs"
      >
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex gap-2.5 ${m.role === "assistant" ? "items-start" : "items-start flex-row-reverse"}`}
          >
            <div
              className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 text-[11px] font-bold ${
                m.role === "assistant" ? "bg-blue-50 border border-blue-200 text-[#009FE3]" : "bg-slate-200 text-slate-700"
              }`}
            >
              {m.role === "assistant" ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
            </div>

            <div className="flex flex-col gap-1.5 max-w-[85%]">
              <div
                className={`p-3 rounded-xl leading-relaxed whitespace-pre-wrap ${
                  m.role === "assistant"
                    ? "bg-white border border-slate-200 text-slate-800 shadow-2xs"
                    : "bg-[#009FE3] text-white font-medium shadow-2xs"
                }`}
              >
                {m.content || (
                  <span className="flex items-center gap-1 text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#009FE3] animate-pulse" />
                    <span>{lang === "no" ? "Genererer svar..." : "Generating response..."}</span>
                  </span>
                )}
              </div>

              {m.role === "assistant" && m.chips && m.chips.length > 0 && (
                <div className="flex flex-wrap gap-1 pt-0.5">
                  {m.chips.map((chip, chipIdx) => (
                    <button
                      key={chipIdx}
                      onClick={() => handleActionChipClick(chip)}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-white border border-blue-200 text-[#009FE3] hover:bg-blue-50 transition-colors shadow-2xs"
                    >
                      <span>{lang === "no" ? chip.labelNo : chip.labelEn}</span>
                      <ArrowUpRight className="w-2.5 h-2.5" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {loading && messages[messages.length - 1]?.role !== "assistant" && (
          <div className="flex gap-2 items-center text-[11px] text-slate-500 py-1 pl-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#009FE3] animate-pulse" />
            <span>{lang === "no" ? "Rådgiveren vurderer spørsmålet..." : "Evaluating query..."}</span>
          </div>
        )}
      </div>

      {/* Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0"
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
          placeholder={
            lang === "no"
              ? "Spør om testledelse, Big Testing, lønn..."
              : "Ask about test advisory, NS 6450, salary..."
          }
          className="flex-1 bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#009FE3] focus:bg-white disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          className="p-2 rounded-lg bg-[#009FE3] hover:bg-[#0088C5] text-white disabled:opacity-40 transition-all shrink-0 shadow-sm"
          aria-label="Send"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>

      {/* Footer Subtext */}
      <div className="px-3 py-1.5 bg-slate-100 text-[10px] text-slate-500 flex items-center justify-between border-t border-slate-200 shrink-0">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-[#009FE3]" />
          ISTQB & NS 6450
        </span>
        <span>Rebel, Oslo</span>
      </div>
    </div>
  );
}
