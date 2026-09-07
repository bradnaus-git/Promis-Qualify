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
          <span>{lang === "no" ? "06 / KULTUR & MENNESKER" : "06 / CULTURE & PEOPLE"}</span>
        </div>
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-semibold text-[#009FE3] mb-3">
            <span>{lang === "no" ? "Våre verdier" : "Our Cultural Values"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {lang === "no" ? "Balanse • Inkludering • Engasjement" : "Balance • Inclusion • Dedication"}
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
        <div id="rebel-samfunn" className="scroll-mt-28 pt-8 border-t border-slate-200">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#009FE3] mb-4">
            <span>{lang === "no" ? "LOKASJON & SAMFUNNSANSVAR" : "LOCATION & SOCIAL IMPACT"}</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-7 rounded-lg bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-3">
                  <MapPin className="w-4 h-4 text-[#009FE3]" />
                  <span>Rebel Oslo • Universitetsgata 2</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {lang === "no" ? "Hovedkontor i hjertet av Oslo" : "Headquarters in the Heart of Oslo"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {lang === "no"
                    ? "Vi holder til på Rebel i Universitetsgata 2 – Oslos fremste samlingspunkt for teknologimiljøer og kunnskapsdeling. Her møtes vi jevnlig til faglige samlinger, kurs og sosiale aktiviteter."
                    : "We are located at Rebel in Universitetsgata 2 – Oslo's premier hub for tech communities and knowledge sharing. Here we gather regularly for workshops, courses, and social events."}
                </p>
              </div>
              <div className="text-xs font-semibold text-[#009FE3]">
                {lang === "no" ? "0164 Oslo, Norge" : "0164 Oslo, Norway"}
              </div>
            </div>

            <div className="p-7 rounded-lg bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-3">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span>{lang === "no" ? "Samfunnsengasjement (10+ år)" : "Social Impact (10+ years)"}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Education for Life Nepal
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {lang === "no"
                    ? "I mer enn 10 år har Promis Qualify støttet stiftelsen Education for Life Nepal, som gir skolegang og trygghet til underprivilegerte barn og unge i Katmandudalen."
                    : "For over a decade, Promis Qualify has proudly supported Education for Life Nepal, providing schooling, food, and safety for underprivileged children in the Kathmandu Valley."}
                </p>
              </div>
              <div className="text-xs text-slate-500">
                {lang === "no" ? "Langsiktig forankret bistand og utdanningsstøtte." : "Long-term committed international education & community aid."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
