"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONTENT } from "@/data/site-content";
import {
  ShieldCheck,
  LineChart,
  Building2,
  Cpu,
  ArrowRight,
  Check,
} from "lucide-react";

export default function ServicesTeaser() {
  const { lang } = useLanguage();

  const icons: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#009FE3]" />,
    LineChart: <LineChart className="w-5 h-5 text-[#009FE3]" />,
    Building2: <Building2 className="w-5 h-5 text-[#009FE3]" />,
    Cpu: <Cpu className="w-5 h-5 text-[#009FE3]" />,
  };

  return (
    <section id="services" className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Eyebrow & Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#009FE3] mb-2">
              <span>01 / VÅRE FAGOMRÅDER</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {lang === "no"
                ? "Spisskompetanse innen test og kvalitet"
                : "Specialist Capabilities in QA & Governance"}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              {lang === "no"
                ? "Vi leverer utelukkende tjenester knyttet til test, testledelse og kvalitetssikring. Våre rådgivere sikrer kontroll, fremdrift og trygghet i komplekse leveranser."
                : "We deliver focused advisory in test management and quality engineering, ensuring governance and predictability in mission-critical deliveries."}
            </p>
          </div>

          <Link
            href="/tjenester"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all shadow-xs shrink-0 self-start md:self-auto"
          >
            <span>{lang === "no" ? "Se alle tjenester & metoder" : "Explore All Services"}</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          </Link>
        </div>

        {/* 4 Teaser Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONTENT.services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-[#009FE3]/70 hover:shadow-sm transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-100 w-fit mb-4 group-hover:bg-blue-100/70 transition-colors">
                  {icons[service.icon]}
                </div>

                <h3 className="font-bold text-slate-900 text-lg mb-2 leading-snug">
                  {lang === "no" ? service.titleNo : service.titleEn}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {lang === "no" ? service.descriptionNo : service.descriptionEn}
                </p>

                <ul className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                  {(lang === "no" ? service.bulletsNo : service.bulletsEn).slice(0, 2).map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-[#009FE3] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/tjenester#${service.id}`}
                className="inline-flex items-center justify-between text-xs font-semibold text-[#009FE3] hover:text-[#0088C5] pt-3 border-t border-slate-100"
              >
                <span>{lang === "no" ? "Les om fagområdet" : "Read more"}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
