"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONTENT } from "@/data/site-content";
import { ShieldCheck, CheckCircle2, Lock, ArrowRight, Phone, Mail } from "lucide-react";

export default function SalaryCalculator() {
  const { lang } = useLanguage();
  const [selectedModel, setSelectedModel] = useState<string>("standard");

  const G = SITE_CONTENT.salaryModel.grunnbelopG; // 124 028 NOK

  const formatNOK = (val: number) => {
    return new Intl.NumberFormat("no-NO", {
      style: "currency",
      currency: "NOK",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="careers" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#009FE3] mb-2">
          <span>05 / KARRIERE & LØNNSMODELLER</span>
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {lang === "no" ? "Lønnsmodeller i Promis Qualify" : "Compensation Models at Promis Qualify"}
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {lang === "no"
              ? "Promis Qualify tilbyr en av markedets mest åpne og forutsigbare avlønninger. Du velger fritt mellom tre etablerte modeller for ett kalenderår av gangen, tilpasset ditt behov for trygghet kontra oppside."
              : "Promis Qualify offers one of the industry's most transparent compensation frameworks. Select freely between three established models annually."}
          </p>
        </div>

        {/* 3 Model Cards Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {SITE_CONTENT.salaryModel.models.map((m) => {
            const isSelected = selectedModel === m.id;
            const baseAmount = m.baseGuaranteeG * G;

            return (
              <div
                key={m.id}
                onClick={() => setSelectedModel(m.id)}
                className={`p-7 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                  isSelected
                    ? "bg-white border-[#009FE3] shadow-md ring-2 ring-[#009FE3]"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-50 text-[#009FE3] border border-blue-200">
                      {lang === "no" ? m.tagNo : m.tagEn}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">
                      {m.baseGuaranteeG} {lang === "no" ? "G garantilønn" : "G base guarantee"}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 mb-1">
                    {lang === "no" ? m.nameNo : m.nameEn}
                  </h3>

                  <div className="my-4 p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                    <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                      {lang === "no" ? "Garantilønn i bunn:" : "Base salary guarantee:"}
                    </div>
                    <div className="text-xl font-bold text-slate-900">
                      {formatNOK(baseAmount)}
                    </div>
                    <div className="text-xs font-semibold text-[#009FE3] pt-1">
                      {m.bonusGrad} {lang === "no" ? "bonusgrad" : "bonus share"}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {lang === "no" ? m.descNo : m.descEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-[#009FE3] shrink-0" />
                  <span>{lang === "no" ? "Valgfrihet for 1 kalenderår av gangen" : "Annual choice for 1 calendar year"}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Structure & Principles Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
          <div className="lg:col-span-8 p-7 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#009FE3]" />
              <span>{lang === "no" ? "Slik fungerer utbetalingene:" : "How compensation is structured:"}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 text-xs sm:text-sm text-slate-700">
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <strong className="block text-slate-900">
                  {lang === "no" ? "Fast garantilønn" : "Fixed Base Guarantee"}
                </strong>
                <p className="text-slate-600 text-xs">
                  {lang === "no"
                    ? "Utbetales fast hver måned uavhengig av oppdragsstatus, basert på valgt G-nivå (6G, 7G eller fast)."
                    : "Paid monthly regardless of project billing status, anchored in your selected G-tier (6G, 7G, or fixed)."}
                </p>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <strong className="block text-slate-900">
                  {lang === "no" ? "Variabelt honorar (provisjon)" : "Variable Performance Bonus"}
                </strong>
                <p className="text-slate-600 text-xs">
                  {lang === "no"
                    ? "Beregnes ut fra fakturert timeomsetning og valgt provisjonsgrad (55% eller 48%), og utbetales kvartalsvis."
                    : "Calculated from billed revenue and your chosen bonus percentage (55% or 48%), disbursed quarterly."}
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
              {lang === "no"
                ? `* Folketrygdens grunnbeløp G reguleres årlig av Stortinget (pr. 2024: kr ${formatNOK(G)}). Alle modeller gir fulle pensjons- og forsikringsordninger.`
                : `* The National Insurance basic amount (G) is adjusted annually by parliament (currently NOK ${formatNOK(G)}). All models include full pension and private insurance.`}
            </p>
          </div>

          {/* Confidential Dialogue Card */}
          <div className="lg:col-span-4 p-7 rounded-xl bg-slate-900 text-white flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#009FE3] uppercase tracking-wider mb-2">
                <Lock className="w-3.5 h-3.5" />
                <span>{lang === "no" ? "Konfidensiell dialog" : "Confidential Dialogue"}</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {lang === "no" ? "Nysgjerrig på hva dette betyr for deg?" : "Curious what this means for you?"}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {lang === "no"
                  ? "Vi tar gjerne en uformell og konfidensiell kaffeprat om hvordan modellene vil slå ut for din senioritet og kompetanse."
                  : "We welcome an informal, confidential conversation about how our models apply to your seniority and career goals."}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-300">
              <div className="font-semibold text-white">
                {lang === "no" ? "Kontaktperson for rekruttering:" : "Head of Recruitment:"}
              </div>
              <div className="text-slate-200 font-medium">Heidi Raae Bønke / Remi Hansen</div>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-3.5 h-3.5 text-[#009FE3]" />
                <a href="mailto:rh@promis.no" className="hover:text-white underline font-semibold">
                  rh@promis.no
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
