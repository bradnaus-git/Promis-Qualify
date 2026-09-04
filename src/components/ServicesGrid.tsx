"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONTENT, ServiceItem } from "@/data/site-content";
import { ShieldCheck, LineChart, Building2, Cpu, Check, ArrowRight } from "lucide-react";

export default function ServicesGrid() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("testledelse");

  const icons: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#009FE3]" />,
    LineChart: <LineChart className="w-5 h-5 text-[#009FE3]" />,
    Building2: <Building2 className="w-5 h-5 text-[#009FE3]" />,
    Cpu: <Cpu className="w-5 h-5 text-[#009FE3]" />,
  };

  const activeService = SITE_CONTENT.services.find((s) => s.id === activeTab) || SITE_CONTENT.services[0];

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#009FE3] mb-2">
          <span>01 / TJENESTEOMRÅDER</span>
        </div>
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-semibold text-[#009FE3] mb-3">
            <span>{lang === "no" ? "Våre kjerneområder" : "Core Practice Areas"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {lang === "no"
              ? "Uavhengig testledelse og testrådgivning"
              : "Independent Test Management & QA Advisory"}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {lang === "no"
              ? "Promis Qualify er et spisskompetent nisjemiljø som utelukkende leverer tjenester relatert til test og kvalitetsforbedring av software og integrerte systemer."
              : "Promis Qualify is a specialist consultancy dedicated exclusively to testing, quality assurance, and systematic commissioning of complex systems."}
          </p>
        </div>

        {/* 4 Tabs / Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {SITE_CONTENT.services.map((service) => {
            const isSelected = service.id === activeTab;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`p-5 rounded-lg text-left transition-all border flex flex-col justify-between ${
                  isSelected
                    ? "bg-white border-[#009FE3] shadow-md ring-1 ring-[#009FE3]"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded bg-slate-100 border border-slate-200">
                      {icons[service.icon]}
                    </div>
                    {service.badgeNo && (
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          service.isSpecialty
                            ? "bg-blue-50 text-[#009FE3] border border-blue-200"
                            : "bg-slate-100 text-slate-600 border border-slate-200"
                        }`}
                      >
                        {lang === "no" ? service.badgeNo : service.badgeEn}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {lang === "no" ? service.titleNo : service.titleEn}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {lang === "no" ? service.taglineNo : service.taglineEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? "text-[#009FE3]" : "text-slate-500"}>
                    {lang === "no" ? "Les mer" : "View details"}
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isSelected ? "translate-x-1 text-[#009FE3]" : "text-slate-400"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Detailed Corporate Panel */}
        <div id="specialties" className="p-8 sm:p-10 rounded-xl bg-white border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block px-2.5 py-1 rounded bg-blue-50 border border-blue-200 text-xs font-bold text-[#009FE3]">
                {lang === "no" ? activeService.badgeNo : activeService.badgeEn}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {lang === "no" ? activeService.titleNo : activeService.titleEn}
              </h3>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {lang === "no" ? activeService.descriptionNo : activeService.descriptionEn}
              </p>

              <div className="flex flex-wrap gap-3 pt-3">
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded-md bg-[#009FE3] hover:bg-[#0088C5] text-white font-semibold text-xs tracking-wide transition-all shadow-sm flex items-center gap-2"
                >
                  <span>{lang === "no" ? "Diskuter oppdrag med oss" : "Discuss Engagement"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#calculator"
                  className="px-5 py-2.5 rounded-md bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-medium text-xs transition-all flex items-center gap-2"
                >
                  <span>{lang === "no" ? "Vurder prosjektrisiko" : "Assess Project Risk"}</span>
                </a>
              </div>
            </div>

            {/* Right: Key Deliverables Table / Box */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 p-6 rounded-lg space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 pb-2 border-b border-slate-200">
                {lang === "no" ? "Våre leveranser og fokusområder" : "Key Deliverables & Responsibilities"}
              </h4>

              <ul className="space-y-3">
                {(lang === "no" ? activeService.bulletsNo : activeService.bulletsEn).map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#009FE3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 leading-snug">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#009FE3] shrink-0" />
                <span>
                  {lang === "no"
                    ? "Uavhengig rådgivning forankret i ISTQB og NS 6450 standarder."
                    : "Independent governance aligned with ISTQB and NS 6450 standards."}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
