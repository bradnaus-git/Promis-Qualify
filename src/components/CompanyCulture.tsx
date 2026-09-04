"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONTENT } from "@/data/site-content";
import { Heart, MapPin, Users, Award } from "lucide-react";

export default function CompanyCulture() {
  const { lang } = useLanguage();

  return (
    <section id="culture" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#009FE3] mb-2">
          <span>06 / KULTUR & MENNESKER</span>
        </div>
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-semibold text-[#009FE3] mb-3">
            <span>{lang === "no" ? "Våre verdier" : "Our Cultural Values"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Balanse • Inkludering • Engasjement
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {lang === "no"
              ? "Promis Qualify er bygget på langsiktighet, tillit og faglig stolthet. Vi vet at de beste leveransene skapes når konsulentene opplever balanse mellom krevende oppdrag og privatliv."
              : "Promis Qualify is founded on sustainable careers, mutual trust, and craft excellence. We believe top quality stems from work-life balance."}
          </p>
        </div>

        {/* 3 Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SITE_CONTENT.culture.values.map((v, idx) => (
            <div
              key={idx}
              className="p-7 rounded-lg bg-white border border-slate-200 shadow-sm text-left"
            >
              <div className="w-9 h-9 rounded bg-blue-50 border border-blue-100 flex items-center justify-center text-[#009FE3] font-bold text-sm mb-4">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {lang === "no" ? v.titleNo : v.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {lang === "no" ? v.descNo : v.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* Rebel Oslo & Nepal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-7 rounded-lg bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-3">
                <MapPin className="w-4 h-4 text-[#009FE3]" />
                <span>Rebel Oslo • Universitetsgata 2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Hovedkontor i hjertet av Oslo
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Vi holder til på Rebel i Universitetsgata 2 – Oslos fremste samlingspunkt for teknologimiljøer og kunnskapsdeling. Her møtes vi jevnlig til faglige samlinger, kurs og sosiale aktiviteter.
              </p>
            </div>
            <div className="text-xs font-semibold text-[#009FE3]">
              0164 Oslo, Norge
            </div>
          </div>

          <div className="p-7 rounded-lg bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-3">
                <Heart className="w-4 h-4 text-red-500" />
                <span>Samfunnsengasjement (10+ år)</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Education for Life Nepal
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                I mer enn 10 år har Promis Qualify støttet stiftelsen Education for Life Nepal, som gir skolegang og trygghet til underprivilegerte barn og unge i Katmandudalen.
              </p>
            </div>
            <div className="text-xs text-slate-500">
              Langsiktig forankret bistand og utdanningsstøtte.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
