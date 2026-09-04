"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONTENT } from "@/data/site-content";
import { Sparkles, Heart, Users, Compass, MapPin } from "lucide-react";

export default function CompanyCulture() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 lg:py-28 relative bg-[#060c17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-[#00D2A0] mb-3">
            <Heart className="w-3.5 h-3.5" />
            <span>{lang === "no" ? "Kultur & Mennesker" : "Culture & Values"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {lang === "no"
              ? "Balanse • Inkludering • Engasjement"
              : "Balance • Inclusion • Dedication"}
          </h2>
          <p className="text-slate-300 text-base">
            {lang === "no"
              ? "Vi tror på at de beste resultatene skapes av mennesker som trives, opplever trygghet og brenner for faget sitt."
              : "We believe the highest quality is forged by people who thrive, experience autonomy, and share genuine craft passion."}
          </p>
        </div>

        {/* 3 Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SITE_CONTENT.culture.values.map((v, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#00D2A0] font-bold mb-4">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {lang === "no" ? v.titleNo : v.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === "no" ? v.descNo : v.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* Rebel Oslo & Nepal Community Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Rebel Oslo */}
          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold mb-4">
                <MapPin className="w-3.5 h-3.5 text-[#00D2A0]" />
                <span>Rebel Oslo • Universitetsgata 2</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {lang === "no" ? "Hjertet i Oslos teknologimiljø" : "The Heart of Oslo Tech Hub"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {lang === "no"
                  ? "Vårt hovedkontor ligger på Rebel i Oslo sentrum – Norges mest levende arena for kunnskapsdeling, tech-meetups og faglig nyskaping. Her møtes vi for faglunsjer, hackathons og sosialt samvær."
                  : "Our headquarters are based at Rebel in central Oslo – Norway's premier community hub for tech innovation, knowledge exchange, and conferences."}
              </p>
            </div>
            <div className="text-xs text-[#00D2A0] font-semibold flex items-center gap-1.5">
              <span>Universitetsgata 2, 0164 Oslo</span>
            </div>
          </div>

          {/* Nepal 10 Year Partnership */}
          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold mb-4">
                <Heart className="w-3.5 h-3.5 text-[#00D2A0]" />
                <span>10+ {lang === "no" ? "års samfunnsansvar" : "Years Commitment"}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Education for Life Nepal
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {lang === "no" ? SITE_CONTENT.culture.communityNo : SITE_CONTENT.culture.communityEn}
              </p>
            </div>
            <div className="text-xs text-slate-400 font-medium">
              {lang === "no"
                ? "Fokus på utdanning, trygghet og langsiktig samfunnsutvikling."
                : "Dedicated to education, security, and sustainable youth development."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
