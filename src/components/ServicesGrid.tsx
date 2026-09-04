"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONTENT, ServiceItem } from "@/data/site-content";
import { ShieldCheck, LineChart, Building2, Cpu, Check, ArrowRight, Sparkles } from "lucide-react";

export default function ServicesGrid() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("testledelse");

  const icons: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#00D2A0]" />,
    LineChart: <LineChart className="w-6 h-6 text-[#00D2A0]" />,
    Building2: <Building2 className="w-6 h-6 text-[#00D2A0]" />,
    Cpu: <Cpu className="w-6 h-6 text-[#00D2A0]" />,
  };

  const activeService = SITE_CONTENT.services.find((s) => s.id === activeTab) || SITE_CONTENT.services[0];

  return (
    <section id="services" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-[#00D2A0] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === "no" ? "Faglig tyngde & tjenester" : "Core Capabilities & Services"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {lang === "no"
              ? "Kvalitetssikring forankret i forretningsverdi"
              : "Quality Assurance Anchored in Business Value"}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            {lang === "no"
              ? "Uavhengig spisskompetanse som sikrer at programvare, integrerte anlegg og tekniske systemer leverer som lovet."
              : "Independent domain authority ensuring software, integrated facilities, and technical infrastructure perform as promised."}
          </p>
        </div>

        {/* Service Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {SITE_CONTENT.services.map((service) => {
            const isSelected = service.id === activeTab;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`p-5 rounded-2xl text-left transition-all relative border flex flex-col justify-between ${
                  isSelected
                    ? "bg-slate-900/95 border-[#00D2A0] shadow-lg shadow-[#00D2A0]/10 scale-[1.02]"
                    : "bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      {icons[service.icon]}
                    </div>
                    {service.badgeNo && (
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          service.isSpecialty
                            ? "bg-[#00D2A0]/20 text-[#00D2A0] border border-[#00D2A0]/40"
                            : "bg-slate-800 text-slate-300 border border-slate-700"
                        }`}
                      >
                        {lang === "no" ? service.badgeNo : service.badgeEn}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    {lang === "no" ? service.titleNo : service.titleEn}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {lang === "no" ? service.taglineNo : service.taglineEn}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? "text-[#00D2A0]" : "text-slate-400"}>
                    {lang === "no" ? "Se detaljer" : "View details"}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "translate-x-1 text-[#00D2A0]" : "text-slate-500"}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Deep Dive Panel */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D2A0]/5 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00D2A0]/10 border border-[#00D2A0]/30 text-xs font-bold text-[#00D2A0] mb-4">
                {lang === "no" ? activeService.badgeNo : activeService.badgeEn}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                {lang === "no" ? activeService.titleNo : activeService.titleEn}
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {lang === "no" ? activeService.descriptionNo : activeService.descriptionEn}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded-xl bg-[#00D2A0] hover:bg-[#00B88C] text-slate-950 font-bold text-xs tracking-wide transition-all shadow-md flex items-center gap-2"
                >
                  <span>{lang === "no" ? "Be om uforpliktende fagprat" : "Request Consultation"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#calculator"
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs border border-slate-700 transition-all flex items-center gap-2"
                >
                  <span>{lang === "no" ? "Test risiko for dette området" : "Assess Risk for this Area"}</span>
                </a>
              </div>
            </div>

            {/* Bullets & Methodology Card */}
            <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800 p-6 rounded-2xl">
              <h4 className="text-xs uppercase font-bold tracking-wider text-[#00D2A0] mb-4">
                {lang === "no" ? "Hva vi leverer i oppdraget" : "Key Deliverables & Value"}
              </h4>
              <ul className="space-y-3.5">
                {(lang === "no" ? activeService.bulletsNo : activeService.bulletsEn).map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#00D2A0]/20 border border-[#00D2A0]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#00D2A0]" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-300 leading-snug">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00D2A0] shrink-0" />
                <span>
                  {lang === "no"
                    ? "Alle oppdrag bemannes med sertifiserte seniorer iht. ISTQB og Prince2."
                    : "Staffed exclusively with senior consultants certified under ISTQB & Prince2."}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
