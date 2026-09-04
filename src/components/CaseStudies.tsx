"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONTENT, CaseStudy } from "@/data/site-content";
import { Briefcase, CheckCircle2, Building, ShieldCheck } from "lucide-react";

export default function CaseStudies() {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState<"all" | "public" | "private" | "building">("all");

  const filteredCases = SITE_CONTENT.caseStudies.filter((c) => {
    if (filter === "all") return true;
    return c.sector === filter;
  });

  return (
    <section id="cases" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#009FE3] mb-2">
          <span>02 / BRANSJER & REFERANSER</span>
        </div>
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-semibold text-[#009FE3] mb-3">
            <span>{lang === "no" ? "Dokumentert erfaring" : "Client Track Record"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {lang === "no" ? "Bransjer og utvalgte referanseoppdrag" : "Sectors & Selected References"}
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {lang === "no"
              ? "Siden 2014 har vi bistått oppdragsgivere i offentlig forvaltning, helsesektor, bank/finans og samferdsel med krevende testoppdrag."
              : "Since 2014, Promis Qualify has served clients across public governance, healthcare, finance, and infrastructure."}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex mb-8">
          <div className="inline-flex p-1 rounded-lg bg-slate-100 border border-slate-200 flex-wrap gap-1">
            {[
              { id: "all", labelNo: "Alle bransjer", labelEn: "All Sectors" },
              { id: "public", labelNo: "Offentlig sektor & Helse", labelEn: "Public & Healthcare" },
              { id: "private", labelNo: "Bank & Finans", labelEn: "Banking & Finance" },
              { id: "building", labelNo: "Bygg & Samferdsel", labelEn: "Infrastructure & Buildings" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as any)}
                className={`px-4 py-2 rounded-md text-xs font-semibold transition-all ${
                  filter === f.id
                    ? "bg-white text-slate-900 shadow-sm border border-slate-200/60"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {lang === "no" ? f.labelNo : f.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCases.map((c) => (
            <div
              key={c.id}
              className="p-7 rounded-lg bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    {lang === "no" ? c.domainNo : c.domainEn}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {lang === "no" ? c.clientNo : c.clientEn}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2.5 leading-snug">
                  {lang === "no" ? c.titleNo : c.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {lang === "no" ? c.summaryNo : c.summaryEn}
                </p>
              </div>

              {/* Metrics */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                  {lang === "no" ? "Nøkkeltall for leveransen:" : "Key Delivery Metrics:"}
                </span>
                <div className="flex flex-wrap gap-2">
                  {(lang === "no" ? c.metricsNo : c.metricsEn).map((m, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#009FE3]" />
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
