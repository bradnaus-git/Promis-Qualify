"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONTENT } from "@/data/site-content";
import { ShieldCheck, CheckCircle2, ArrowRight, Building, Sparkles, Building2 } from "lucide-react";

export default function Hero() {
  const { lang } = useLanguage();
  const [selectedSector, setSelectedSector] = useState<"all" | "public" | "private">("all");

  const sectorHeadlines = {
    all: {
      no: "Trygghet, presisjon og forretningsverdi i komplekse leveranser",
      en: "Certainty, precision, and business value in complex deliveries",
      subNo: "Norges ledende nisjemiljø innen testledelse, rådgivning, Big Testing og systematisk ferdigstillelse av IT- og tekniske bygningssystemer.",
      subEn: "Norway's leading specialist consultancy in test management, advisory, Big Testing, and systematic commissioning of IT and facility systems.",
    },
    public: {
      no: "Spesialister på samfunnskritiske offentlige IT-anskaffelser og helsebygg",
      en: "Specialists in mission-critical public sector IT tenders and healthcare infrastructure",
      subNo: "Dokumentert erfaring fra statlige etater, helseforetak og samferdsel. 100% ISTQB Advanced-kompetanse, Digdir-overholdelse og NS 6450-kompatibilitet.",
      subEn: "Proven track record with government agencies, healthcare trusts, and transport. 100% ISTQB Advanced certified, Digdir compliant, and NS 6450 aligned.",
    },
    private: {
      no: "Raskere time-to-market med smidig kvalitet og moderne testautomatisering",
      en: "Accelerate time-to-market with agile QA and modern test automation",
      subNo: "Fra kjernebank og sanntidsbetalinger til SaaS og industrielle plattformer. Vi reduserer feilkostnader og rigger robuste CI/CD-kvalitetslinjer.",
      subEn: "From core banking to SaaS and industrial platforms. We slash defect leakage and architect resilient CI/CD quality gates.",
    },
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-gradient-to-tr from-[#00D2A0]/10 via-[#2563EB]/15 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#00D2A0]/5 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tagline Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-[#00D2A0]" />
            <span className="text-xs font-semibold tracking-wide text-slate-200">
              {SITE_CONTENT.brand.taglineNo}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#00D2A0]" />
            <span className="text-xs text-slate-400">Rebel Oslo</span>
          </div>
        </div>

        {/* Sector Filter Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl bg-slate-900/90 border border-slate-800 shadow-md">
            <button
              onClick={() => setSelectedSector("all")}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedSector === "all"
                  ? "bg-[#00D2A0] text-slate-950 font-semibold shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {lang === "no" ? "Hele Promis Qualify" : "All Capabilities"}
            </button>
            <button
              onClick={() => setSelectedSector("public")}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                selectedSector === "public"
                  ? "bg-[#00D2A0] text-slate-950 font-semibold shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Building className="w-3.5 h-3.5" />
              {lang === "no" ? "Offentlig sektor" : "Public Sector"}
            </button>
            <button
              onClick={() => setSelectedSector("private")}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                selectedSector === "private"
                  ? "bg-[#00D2A0] text-slate-950 font-semibold shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              {lang === "no" ? "Næringsliv & Finans" : "Private Enterprise"}
            </button>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            {sectorHeadlines[selectedSector][lang]}
          </h1>
          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            {lang === "no" ? sectorHeadlines[selectedSector].subNo : sectorHeadlines[selectedSector].subEn}
          </p>
        </div>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#calculator"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#00D2A0] hover:bg-[#00B88C] text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#00D2A0]/20 flex items-center justify-center gap-2 group"
          >
            <span>{lang === "no" ? "Start prosjektets risikovurdering" : "Start Project Risk Assessment"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 font-semibold text-sm transition-all flex items-center justify-center gap-2"
          >
            <span>{lang === "no" ? "Utforsk tjenester & metoder" : "Explore Services & Methods"}</span>
          </a>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {SITE_CONTENT.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition-all text-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-[#00D2A0] tracking-tight mb-1">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white mb-0.5">
                {lang === "no" ? metric.labelNo : metric.labelEn}
              </div>
              <div className="text-[11px] text-slate-400">
                {lang === "no" ? metric.subNo : metric.subEn}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00D2A0]" />
            <span>ISTQB Advanced Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00D2A0]" />
            <span>NS 6450 Systematisk ferdigstillelse</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00D2A0]" />
            <span>100% Leverandøruavhengig</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00D2A0]" />
            <span>Medlem av PROMIS-familien</span>
          </div>
        </div>
      </div>
    </section>
  );
}
