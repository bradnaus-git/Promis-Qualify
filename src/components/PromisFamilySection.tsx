"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONTENT } from "@/data/site-content";
import { Network, ExternalLink, ShieldCheck, Compass, CheckCircle2 } from "lucide-react";

export default function PromisFamilySection() {
  const { lang } = useLanguage();

  return (
    <section id="family" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-[#00D2A0] mb-3">
            <Network className="w-3.5 h-3.5" />
            <span>{lang === "no" ? "Økosystem & Partnerskap" : "Ecosystem & Strategic Synergies"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {lang === "no" ? SITE_CONTENT.promisFamily.titleNo : SITE_CONTENT.promisFamily.titleEn}
          </h2>
          <p className="text-slate-300 text-base">
            {lang === "no" ? SITE_CONTENT.promisFamily.descNo : SITE_CONTENT.promisFamily.descEn}
          </p>
        </div>

        {/* 3 Family Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SITE_CONTENT.promisFamily.companies.map((comp, idx) => {
            const isSelf = comp.name === "Promis Qualify AS";

            return (
              <div
                key={idx}
                className={`p-7 rounded-3xl border flex flex-col justify-between transition-all ${
                  isSelf
                    ? "bg-slate-900/90 border-[#00D2A0] shadow-xl shadow-[#00D2A0]/10 scale-[1.02]"
                    : "bg-slate-950/70 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        isSelf
                          ? "bg-[#00D2A0]/20 text-[#00D2A0] border border-[#00D2A0]/40"
                          : "bg-slate-800 text-slate-300 border border-slate-700"
                      }`}
                    >
                      {lang === "no" ? comp.roleNo : comp.roleEn}
                    </span>
                    {comp.url && !isSelf && (
                      <a
                        href={comp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-white"
                        aria-label={`Besøk ${comp.name}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-3 flex items-center gap-2">
                    <span>{comp.name}</span>
                    {isSelf && <span className="text-xs px-2 py-0.5 rounded bg-[#00D2A0] text-slate-950 font-bold">Du er her</span>}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {lang === "no" ? comp.descNo : comp.descEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2A0]" />
                  <span>
                    {isSelf
                      ? (lang === "no" ? "Test, kvalitet & Big Testing" : "Test, quality & Big Testing")
                      : (lang === "no" ? "Sømløst strategisk samarbeid" : "Seamless strategic collaboration")}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
