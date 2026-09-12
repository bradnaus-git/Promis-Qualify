"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONTENT } from "@/data/site-content";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ReferencesTeaser() {
  const { lang } = useLanguage();

  const clientLogos = [
    { name: "Tolletaten", logo: "/images/references/tolletaten.png" },
    { name: "Ruter", logo: "/images/references/ruter.png" },
    { name: "Kartverket", logo: "/images/references/kartverket.png" },
    { name: "Felleskjøpet", logo: "/images/references/felleskjopet.png" },
    { name: "BankAxept", logo: "/images/references/bankaxept.png" },
    { name: "Avinor (Oslo Lufthavn)", logo: "/images/references/avinor.png" },
  ];

  // Pick 3 high-impact cases
  const featuredCases = SITE_CONTENT.caseStudies.slice(0, 3);

  return (
    <section id="cases" className="py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#009FE3] mb-2">
              <span>02 / DOKUMENTERT ERFARING</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {lang === "no"
                ? "Testledelse for samfunnskritiske leveranser"
                : "Assuring Mission-Critical Deliveries"}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              {lang === "no"
                ? "Våre konsulenter har hatt sentrale testleder- og rådgiverroller i noen av Norges mest komplekse offentlige og private digitaliseringsprogrammer."
                : "Our advisors have led testing and quality governance across Norway's most demanding digital modernization programs."}
            </p>
          </div>

          <Link
            href="/referanser"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all shadow-xs shrink-0 self-start md:self-auto"
          >
            <span>{lang === "no" ? "Se alle referanser & bransjematrise" : "Explore All References"}</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          </Link>
        </div>

        {/* Client Logos Ribbon */}
        <div className="mb-10 p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 items-center">
            {clientLogos.map((item, idx) => (
              <div
                key={idx}
                className="h-12 px-3 py-1.5 bg-white rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-center transition-all hover:border-[#009FE3]/40 group"
              >
                <div className="relative w-full h-7 opacity-75 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Featured Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCases.map((c) => (
            <div
              key={c.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-[#009FE3]/60 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-[#009FE3] uppercase tracking-wider">
                    {lang === "no" ? c.clientNo : c.clientEn}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    {lang === "no" ? c.domainNo : c.domainEn}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {lang === "no" ? c.titleNo : c.titleEn}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {lang === "no" ? c.summaryNo : c.summaryEn}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {(lang === "no" ? c.metricsNo : c.metricsEn).slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/referanser"
                className="inline-flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#009FE3] pt-3 border-t border-slate-100 group"
              >
                <span>{lang === "no" ? "Les case og erfaringer" : "Read case study"}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#009FE3]" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
