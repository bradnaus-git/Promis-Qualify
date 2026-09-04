"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Bot, Send, ShieldCheck, User } from "lucide-react";

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
          ? "Hei. Jeg er QualifyAI – Promis Qualifys faglige rådgiverassistent. Du kan stille meg spørsmål om testledelse, Big Testing, universell utforming (WCAG 2.2), testledelse i byggeprosjekter eller våre lønnsmodeller."
          : "Hello. I am QualifyAI – Promis Qualify's advisory copilot. Ask me about test management, Big Testing, public sector WCAG requirements, facility commissioning, or our compensation models.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

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
            ? "Big Testing er Promis Qualifys spesialmetodikk for komplekse leveranser der software samvirker med tungt teknisk utstyr, mennesker og driftsprosesser. Vi gjennomfører strukturert prøvedrift i produksjonsnære miljøer for å verifisere reell driftsklarhet (Operational Readiness) før lansering."
            : "Big Testing is Promis Qualify's specialized methodology for deliveries where software interfaces with heavy technical hardware, operators, and business procedures. We conduct structured trial operations (prøvedrift) to verify true Operational Readiness before go-live.";
      } else if (lower.includes("offentlig") || lower.includes("public") || lower.includes("wcag") || lower.includes("digdir") || lower.includes("standard")) {
        reply =
          lang === "no"
            ? "Offentlige IT-anskaffelser i Norge krever uavhengig testledelse, etterlevelse av Digdirs veiledere, universell utforming iht. WCAG 2.1/2.2 AA (Forskrift om universell utforming av IKT), samt ISTQB Advanced-sertifiserte testledere med dokumentert leveranseerfaring. Promis Qualify bistår jevnlig statlige etater og helseforetak."
            : "Norwegian public sector tenders require independent test management, adherence to Digdir guidelines, universal design under WCAG 2.1/2.2 AA, and ISTQB Advanced certified leadership. Promis Qualify regularly supports national agencies and healthcare trusts.";
      } else if (lower.includes("bygg") || lower.includes("building") || lower.includes("ferdigstillelse") || lower.includes("hospital") || lower.includes("sykehus")) {
        reply =
          lang === "no"
            ? "Testledelse i byggeprosjekter baserer seg på systematisk ferdigstillelse iht. NS 6450. Våre testledere sikrer at samspillet mellom elektro, VVS, SD-anlegg, IKT og adgangskontroll testes tidlig, før komponenter bygges inn. Dette eliminerer dyre utbedringer og forsinkelser ved overtakelse."
            : "Commissioning in smart buildings is governed by systematic completion per NS 6450. Our test managers verify cross-discipline integrations across HVAC, electrical, BMS, IT, and security early, before components are enclosed, preventing costly handover delays.";
      } else if (lower.includes("lønn") || lower.includes("salary") || lower.includes("6g") || lower.includes("7g") || lower.includes("modell")) {
        reply =
          lang === "no"
            ? "Promis Qualify tilbyr tre åpne modeller: Standard (6 G garantilønn på ca. kr 744 000 + 55% provisjonsandel), Trygghet (7 G garantilønn på ca. kr 868 000 + 48% provisjonsandel), og Fastlønn. Hver ansatt velger modell fritt for ett kalenderår av gangen."
            : "Promis Qualify offers three transparent models: Standard (6 G base guarantee ~NOK 744k + 55% share), Security (7 G base guarantee ~NOK 868k + 48% share), and Fixed Base. Chosen annually by each consultant.";
      } else {
        reply =
          lang === "no"
            ? "Takk for henvendelsen. Promis Qualify er lokalisert på Rebel i Oslo, og er et rendyrket seniormiljø innen testledelse og kvalitetssikring. Kontakt oss på post@promis-qualify.no for en uforpliktende samtale om ditt oppdrag."
            : "Thank you for reaching out. Promis Qualify is based at Rebel in Oslo, operating as a dedicated senior consultancy in test management and quality assurance. Contact post@promis-qualify.no for consultation.";
      }

      setMessages([...newMessages, { role: "assistant", content: reply }]);
      setLoading(false);
    }, 500);
  };

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-7 sm:p-9 rounded-xl bg-white border border-slate-200 shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-blue-50 border border-blue-200 flex items-center justify-center text-[#009FE3]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span>QualifyAI Rådgiverassistent</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-50 text-[#009FE3] font-semibold border border-blue-200">
                    Faglig AI-assistanse
                  </span>
                </h3>
                <p className="text-xs text-slate-500">
                  {lang === "no"
                    ? "Svarer på spørsmål om testledelse, anbud, NS 6450 og våre tjenester"
                    : "Answers queries regarding test strategy, tenders, and standards"}
                </p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-[#009FE3]" />
              <span>ISTQB & NS 6450 forankret</span>
            </div>
          </div>

          {/* Prompt Chips */}
          <div className="flex flex-wrap gap-2 mb-5">
            {predefinedPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(lang === "no" ? p.queryNo : p.queryEn)}
                className="px-3 py-1.5 rounded border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#009FE3] text-xs font-medium text-slate-700 hover:text-slate-900 transition-all text-left"
              >
                {lang === "no" ? p.labelNo : p.labelEn}
              </button>
            ))}
          </div>

          {/* Messages Container */}
          <div className="space-y-3.5 max-h-72 overflow-y-auto pr-2 mb-4">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-3 text-xs sm:text-sm ${
                  m.role === "assistant" ? "items-start" : "items-start flex-row-reverse"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded flex items-center justify-center shrink-0 text-xs font-bold ${
                    m.role === "assistant"
                      ? "bg-blue-100 text-[#009FE3]"
                      : "bg-slate-200 text-slate-800"
                  }`}
                >
                  {m.role === "assistant" ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                </div>
                <div
                  className={`p-3.5 rounded-lg max-w-[85%] leading-relaxed ${
                    m.role === "assistant"
                      ? "bg-slate-50 border border-slate-200 text-slate-800"
                      : "bg-[#009FE3] text-white"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-2 items-center text-xs text-slate-500 py-1">
                <div className="w-2 h-2 rounded-full bg-[#009FE3] animate-pulse" />
                <span>Tenker...</span>
              </div>
            )}
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
              placeholder={
                lang === "no"
                  ? "Still et spørsmål om testledelse, anbud eller standarder..."
                  : "Ask about test management, tenders or standards..."
              }
              className="flex-1 bg-slate-50 border border-slate-300 rounded-md px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#009FE3] focus:bg-white"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-md bg-[#009FE3] text-white hover:bg-[#0088C5] disabled:opacity-40 transition-all"
              aria-label="Send"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
