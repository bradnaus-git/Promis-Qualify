"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONTENT, CaseStudy } from "@/data/site-content";
import { Briefcase, Building, Building2, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function CaseStudies() {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState<"all" | "public" | "private" | "building">("all");

  const filteredCases = SITE_CONTENT.caseStudies.filter((c) => {
    if (filter === "all") return true;
    return c.sector === filter;
  });

  return (
    <section id="cases" className="py-20 lg:py-28 relative bg-[#060c17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-[#00D2A0] mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{lang === "no" ? "Dokumenterte resultater" : "Proven Track Record"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {lang === "no" ? "Utvalgte referanseoppdrag" : "Selected Client Engagements"}
          </h2>
          <p className="text-slate-300 text-base">
            {lang === "no"
              ? "Siden 2014 har Promis Qualify levert testledelse i noen av Norges mest krevende IT- og infrastrukturprosjekter."
              : "Since 2014, Promis Qualify has governed testing in Norway's most demanding public and enterprise deliveries."}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 flex-wrap justify-center gap-1">
            {[
              { id: "all", labelNo: "Alle oppdrag", labelEn: "All Engagements" },
              { id: "public", labelNo: "Offentlig forvaltning & Helse", labelEn: "Public Sector & Healthcare" },
              { id: "private", labelNo: "Bank & Finans", labelEn: "Banking & Finance" },
              { id: "building", labelNo: "Bygg & Samferdsel", labelEn: "Infrastructure & Transport" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  filter === f.id
                    ? "bg-[#00D2A0] text-slate-950 shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {lang === "no" ? f.labelNo : f.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCases.map((c) => (
            <div
              key={c.id}
              className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {lang === "no" ? c.domainNo : c.domainEn}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {lang === "no" ? c.clientNo : c.clientEn}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#00D2A0] transition-colors">
                  {lang === "no" ? c.titleNo : c.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {lang === "no" ? c.summaryNo : c.summaryEn}
                </p>
              </div>

              {/* Verified Metrics Chips */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-2">
                  {lang === "no" ? "Målbare resultater:" : "Measurable Results:"}
                </span>
                <div className="flex flex-wrap gap-2">
                  {(lang === "no" ? c.metricsNo : c.metricsEn).map((m, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-semibold text-[#00D2A0]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
