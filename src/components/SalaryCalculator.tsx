"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONTENT } from "@/data/site-content";
import { CheckCircle2, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";

export default function SalaryCalculator() {
  const { lang } = useLanguage();
  const [hourlyRate, setHourlyRate] = useState<number>(1450);
  const [billableHours, setBillableHours] = useState<number>(1650);
  const [selectedModel, setSelectedModel] = useState<string>("standard");

  const G = SITE_CONTENT.salaryModel.grunnbelopG; // 124 028 NOK
  const annualTurnover = hourlyRate * billableHours;

  const calcStandard = () => {
    const baseGuarantee = 6 * G;
    const estimatedPayout = Math.max(baseGuarantee, Math.round(annualTurnover * 0.58));
    return { baseGuarantee, estimatedPayout };
  };

  const calcSecure = () => {
    const baseGuarantee = 7 * G;
    const estimatedPayout = Math.max(baseGuarantee, Math.round(annualTurnover * 0.52));
    return { baseGuarantee, estimatedPayout };
  };

  const calcFixed = () => {
    const baseGuarantee = Math.round(8.5 * G);
    return { baseGuarantee, estimatedPayout: baseGuarantee };
  };

  const results = {
    standard: calcStandard(),
    secure: calcSecure(),
    fixed: calcFixed(),
  };

  const formatNOK = (val: number) => {
    return new Intl.NumberFormat("no-NO", {
      style: "currency",
      currency: "NOK",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="careers" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-semibold text-[#009FE3] mb-3">
            <span>{lang === "no" ? "Karriere & Rammebetingelser" : "Careers & Compensation"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {lang === "no" ? "Lønnsmodeller i Promis Qualify" : "Compensation Models at Promis Qualify"}
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {lang === "no"
              ? "Vi har en av konsulentbransjens mest ryddige og transparente lønnsordninger. Du velger selv modell for ett kalenderår av gangen etter hva som passer din livssituasjon best."
              : "We offer an exceptionally transparent and fair compensation structure. Choose your preferred model annually based on your personal priorities."}
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sliders Input Panel */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 p-7 rounded-xl space-y-6">
            <h3 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-200">
              {lang === "no" ? "Simuler forventet utbetaling" : "Simulate Projected Earnings"}
            </h3>

            <div>
              <div className="flex justify-between items-center text-sm font-semibold mb-2">
                <span className="text-slate-700">Faktureringspris (timepris eks. mva):</span>
                <span className="text-[#009FE3] font-bold text-base">{hourlyRate} kr / time</span>
              </div>
              <input
                type="range"
                min="1100"
                max="1900"
                step="50"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full accent-[#009FE3] cursor-pointer h-2 bg-slate-200 rounded"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>1 100 kr</span>
                <span>1 450 kr (normalsnitt)</span>
                <span>1 900 kr</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-sm font-semibold mb-2">
                <span className="text-slate-700">Fakturerte timer pr. år:</span>
                <span className="text-[#009FE3] font-bold text-base">{billableHours} timer</span>
              </div>
              <input
                type="range"
                min="1200"
                max="1750"
                step="25"
                value={billableHours}
                onChange={(e) => setBillableHours(Number(e.target.value))}
                className="w-full accent-[#009FE3] cursor-pointer h-2 bg-slate-200 rounded"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>1 200 t (~70% belegg)</span>
                <span>1 500 t</span>
                <span>1 750 t (~100% belegg)</span>
              </div>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-md flex justify-between items-center text-xs">
              <span className="text-slate-500">Estimert årlig omsetning for oppdraget:</span>
              <span className="font-bold text-slate-900 text-sm">{formatNOK(annualTurnover)}</span>
            </div>

            <div className="pt-2 text-xs text-slate-600 space-y-2 border-t border-slate-200">
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-[#009FE3]" />
                <span>Balanse • Inkludering • Engasjement</span>
              </div>
              <p>
                Garantilønn er knyttet til Folketrygdens grunnbeløp G (kr {formatNOK(G)}). Modellen gir trygghet i bunn med markedsledende oppside ved god oppdragsdekning.
              </p>
            </div>
          </div>

          {/* Model Cards */}
          <div className="lg:col-span-6 space-y-3.5">
            {SITE_CONTENT.salaryModel.models.map((model) => {
              const res = results[model.id as keyof typeof results];
              const isSelected = selectedModel === model.id;

              return (
                <div
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={`p-6 rounded-lg border cursor-pointer transition-all ${
                    isSelected
                      ? "bg-white border-[#009FE3] shadow-md ring-1 ring-[#009FE3]"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-bold text-slate-900">
                      {lang === "no" ? model.nameNo : model.nameEn}
                    </span>
                    <span className="text-xs font-semibold text-[#009FE3]">
                      Garantilønn: {formatNOK(res.baseGuarantee)}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {formatNOK(res.estimatedPayout)}
                    </span>
                    <span className="text-xs text-slate-500">/ estimert årslønn</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === "no" ? model.descNo : model.descEn}
                  </p>
                </div>
              );
            })}

            <div className="p-5 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-0.5">Vi har plass til flere dyktige testledere!</h4>
                <p className="text-xs text-slate-600">
                  Ønsker du deg til et sterkt fagmiljø med fokus på kompetansebygging og deling?
                </p>
              </div>
              <a
                href="#contact"
                className="px-4 py-2 rounded bg-[#009FE3] hover:bg-[#0088C5] text-white text-xs font-semibold shrink-0 shadow-sm"
              >
                Kontakt oss
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
