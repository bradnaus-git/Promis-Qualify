"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Bot, Send, Sparkles, ShieldCheck, User, CornerDownLeft } from "lucide-react";

interface Message {
  role: "assistant" | "user";
  content: string;
}

export default function QualifyAICopilot() {
  const { lang } = useLanguage();

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        lang === "no"
          ? "Hei! Jeg er QualifyAI – Promis Qualifys rådgiverassistent. Still meg spørsmål om testledelse, Big Testing, universell utforming (WCAG 2.2), test i bygg eller våre lønnsmodeller."
          : "Hello! I am QualifyAI – Promis Qualify's advisory copilot. Ask me anything about test management, Big Testing, public sector WCAG requirements, commissioning, or our career models.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const predefinedPrompts = [
    {
      labelNo: "Hva er Big Testing?",
      labelEn: "What is Big Testing?",
      queryNo: "Hva innebærer Big Testing og hvordan skiller det seg fra vanlig systemtest?",
      queryEn: "What is Big Testing and how does it differ from conventional system testing?",
    },
    {
      labelNo: "Krav i offentlig sektor",
      labelEn: "Public Sector QA Requirements",
      queryNo: "Hvilke standarder og krav gjelder for test i offentlige IT-anskaffelser?",
      queryEn: "What standards and regulations govern QA in Norwegian public sector tenders?",
    },
    {
      labelNo: "Testledelse i byggeprosjekter",
      labelEn: "Testing in Smart Buildings",
      queryNo: "Hvordan gjennomføres systematisk ferdigstillelse i nye bygg og sykehus?",
      queryEn: "How is systematic commissioning executed in smart facilities and hospitals?",
    },
    {
      labelNo: "Lønnsmodeller (6G / 7G)",
      labelEn: "Transparent Salary Models",
      queryNo: "Forklar Promis Qualifys transparente lønnsmodeller basert på G.",
      queryEn: "Explain Promis Qualify's transparent G-based compensation models.",
    },
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const newMessages: Message[] = [...messages, { role: "user", content: query }];
    setMessages(newMessages);
    if (!textToSend) setInput("");
    setLoading(true);

    setTimeout(() => {
      let reply = "";
      const lower = query.toLowerCase();

      if (lower.includes("big testing") || lower.includes("prøvedrift")) {
        reply =
          lang === "no"
            ? "Big Testing er Promis Qualifys flaggskipmetodikk for komplekse leveranser der software integreres tett med teknisk utstyr, mennesker og driftsprosesser. Vi gjennomfører realistisk prøvedrift i produksjonsnære miljøer for å evaluere reell 'Operational Readiness' før lansering."
            : "Big Testing is Promis Qualify's signature methodology for deliveries where software merges with heavy hardware, human operators, and operational routines. We conduct realistic trial operations (prøvedrift) to evaluate true Operational Readiness before go-live.";
      } else if (lower.includes("offentlig") || lower.includes("public") || lower.includes("wcag") || lower.includes("digdir") || lower.includes("standard")) {
        reply =
          lang === "no"
            ? "I offentlig sektor kreves uavhengig testledelse, oppfyllelse av Digdirs veiledere, universell utforming iht. WCAG 2.1/2.2 AA (forskrift om universell utforming av IKT), samt streng sporbarhet og ISTQB Advanced-sertifiserte testledere. Promis Qualify har lang erfaring fra statlige etater og helseforetak."
            : "Norwegian public sector projects mandate independent QA governance, adherence to Digdir guidelines, universal design under WCAG 2.1/2.2 AA, and ISTQB Advanced certified leadership. Promis Qualify brings a proven delivery record across government agencies and healthcare trusts.";
      } else if (lower.includes("bygg") || lower.includes("building") || lower.includes("ferdigstillelse") || lower.includes("hospital") || lower.includes("sykehus")) {
        reply =
          lang === "no"
            ? "Testledelse i byggeprosjekter handler om systematisk ferdigstillelse (iht. NS 6450). Vi tester samspillet mellom elektro, VVS/HVAC, SD-anlegg, IKT og adgangskontroll *før* komponenter bygges inn, slik at dyre utbedringer og åpningsforsinkelser unngås."
            : "Commissioning in smart buildings and hospitals focuses on systematic completion (NS 6450). We verify cross-discipline integrations across HVAC, electrical, BMS, IT, and security *before* systems are sealed, preventing costly postponements.";
      } else if (lower.includes("lønn") || lower.includes("salary") || lower.includes("6g") || lower.includes("7g") || lower.includes("modell")) {
        reply =
          lang === "no"
            ? "Promis Qualify tilbyr full åpenhet: Velg mellom Standard (6 G garantilønn på ca. kr 744 000 + 55% provisjon for maksimal oppside), Trygghet (7 G garantilønn på ca. kr 868 000 + 48% provisjon), eller fastlønn. Modellen velges for ett år av gangen."
            : "Promis Qualify offers complete transparency: choose between Standard (6 G base guarantee ~NOK 744k + 55% share for maximum upside), Security (7 G base guarantee ~NOK 868k + 48% share), or fixed salary. Chosen annually.";
      } else {
        reply =
          lang === "no"
            ? "Takk for henvendelsen! Promis Qualify er et spisskompetent konsulenthus basert på Rebel i Oslo, med fokus på testledelse, testrådgivning, Big Testing og byggeprosjekter. Vi bistår gjerne med en uforpliktende gjennomgang av dine behov. Send en e-post til post@promis-qualify.no eller ring oss direkte!"
            : "Thank you! Promis Qualify is a specialist consultancy based at Rebel Oslo, dedicated to test management, QA advisory, Big Testing, and facility commissioning. Contact us at post@promis-qualify.no for a consultation with our senior leads.";
      }

      setMessages([...newMessages, { role: "assistant", content: reply }]);
      setLoading(false);
    }, 600);
  };

  return (
    <section className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00D2A0] to-[#2563EB] flex items-center justify-center text-slate-950 font-bold">
                <Bot className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>QualifyAI Copilot</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#00D2A0]/20 text-[#00D2A0] font-semibold border border-[#00D2A0]/30">
                    Agent Skill Active
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  {lang === "no" ? "Interaktiv testrådgivning & kompetanseagent" : "Interactive QA advisory & knowledge agent"}
                </p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#00D2A0]" />
              <span>ISTQB & NS 6450 Data Grounded</span>
            </div>
          </div>

          {/* Quick Prompts */}
          <div className="flex flex-wrap gap-2 mb-6">
            {predefinedPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(lang === "no" ? p.queryNo : p.queryEn)}
                className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-[#00D2A0] text-xs font-medium text-slate-300 hover:text-white transition-all text-left"
              >
                {lang === "no" ? p.labelNo : p.labelEn}
              </button>
            ))}
          </div>

          {/* Chat Messages Log */}
          <div className="space-y-4 max-h-80 overflow-y-auto pr-2 mb-4 scrollbar-thin">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-3 text-xs sm:text-sm ${
                  m.role === "assistant" ? "items-start" : "items-start flex-row-reverse"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                    m.role === "assistant"
                      ? "bg-[#00D2A0] text-slate-950"
                      : "bg-[#2563EB] text-white"
                  }`}
                >
                  {m.role === "assistant" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>
                <div
                  className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed ${
                    m.role === "assistant"
                      ? "bg-slate-950 border border-slate-800 text-slate-200"
                      : "bg-[#2563EB]/20 border border-[#2563EB]/40 text-white"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-2 items-center text-xs text-slate-400 py-2">
                <div className="w-2 h-2 rounded-full bg-[#00D2A0] animate-pulse" />
                <span>QualifyAI tenker...</span>
              </div>
            )}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2 pt-2 border-t border-slate-800"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                lang === "no"
                  ? "Still et spørsmål om testledelse, anbud, standarder..."
                  : "Ask a question about test strategy, tenders, standards..."
              }
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#00D2A0] transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-[#00D2A0] text-slate-950 hover:bg-[#00B88C] disabled:opacity-40 transition-all"
              aria-label="Send melding"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
