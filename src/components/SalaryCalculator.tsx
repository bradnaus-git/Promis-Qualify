"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONTENT } from "@/data/site-content";
import { DollarSign, ShieldCheck, HeartHandshake, Sparkles, ArrowRight, UserPlus } from "lucide-react";

export default function SalaryCalculator() {
  const { lang } = useLanguage();
  const [hourlyRate, setHourlyRate] = useState<number>(1450);
  const [billableHours, setBillableHours] = useState<number>(1650); // ~100% normalized annual billing (ex vacation)
  const [selectedModel, setSelectedModel] = useState<string>("standard");

  const G = SITE_CONTENT.salaryModel.grunnbelopG; // 124 028 NOK

  // Estimated annual turnover
  const annualTurnover = hourlyRate * billableHours;

  // Calculation formulas for models:
  // Standard: 6G guarantee. Company overhead/cost pool is accounted for, consultant earns 55% of turnover above baseline.
  const calcStandard = () => {
    const baseGuarantee = 6 * G;
    const estimatedPayout = Math.max(baseGuarantee, Math.round(annualTurnover * 0.58));
    return { baseGuarantee, estimatedPayout };
  };

  // Trygghet: 7G guarantee. Consultant earns 48% of turnover above baseline.
  const calcSecure = () => {
    const baseGuarantee = 7 * G;
    const estimatedPayout = Math.max(baseGuarantee, Math.round(annualTurnover * 0.52));
    return { baseGuarantee, estimatedPayout };
  };

  // Fixed: Guaranteed competitive senior market wage
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
    <section id="careers" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-[#00D2A0] mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>{lang === "no" ? "Karriere & Åpenhet" : "Careers & Radical Transparency"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {lang === "no" ? SITE_CONTENT.salaryModel.titleNo : SITE_CONTENT.salaryModel.titleEn}
          </h2>
          <p className="text-slate-300 text-base">
            {lang === "no" ? SITE_CONTENT.salaryModel.descNo : SITE_CONTENT.salaryModel.descEn}
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sliders Control Panel */}
          <div className="lg:col-span-6 p-7 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00D2A0]" />
              <span>{lang === "no" ? "Simuler ditt potensial" : "Simulate Your Earnings"}</span>
            </h3>

            {/* Slider 1: Hourly rate */}
            <div>
              <div className="flex justify-between items-center text-sm font-semibold mb-2">
                <span className="text-slate-200">
                  {lang === "no" ? "Fakturert timepris (eks. mva):" : "Hourly billing rate (ex. VAT):"}
                </span>
                <span className="text-[#00D2A0] text-base font-bold">{hourlyRate} kr / time</span>
              </div>
              <input
                type="range"
                min="1100"
                max="1950"
                step="50"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full accent-[#00D2A0] cursor-pointer h-2 bg-slate-800 rounded-lg"
                aria-label="Hourly rate slider"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1.5">
                <span>1 100 kr</span>
                <span>1 450 kr (snitt)</span>
                <span>1 950 kr</span>
              </div>
            </div>

            {/* Slider 2: Billable hours per year */}
            <div>
              <div className="flex justify-between items-center text-sm font-semibold mb-2">
                <span className="text-slate-200">
                  {lang === "no" ? "Fakturerbare timer pr. år:" : "Billable hours per year:"}
                </span>
                <span className="text-[#00D2A0] text-base font-bold">{billableHours} timer</span>
              </div>
              <input
                type="range"
                min="1200"
                max="1750"
                step="25"
                value={billableHours}
                onChange={(e) => setBillableHours(Number(e.target.value))}
                className="w-full accent-[#00D2A0] cursor-pointer h-2 bg-slate-800 rounded-lg"
                aria-label="Billable hours slider"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1.5">
                <span>1 200 t (~70% belegg)</span>
                <span>1 500 t</span>
                <span>1 750 t (~100% belegg)</span>
              </div>
            </div>

            {/* Annual Turnover Info */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center text-xs">
              <span className="text-slate-400">
                {lang === "no" ? "Beregnet årlig omsetning for oppdraget:" : "Estimated annual assignment revenue:"}
              </span>
              <span className="text-white font-bold text-sm">{formatNOK(annualTurnover)}</span>
            </div>

            {/* Values Callout */}
            <div className="pt-2 text-xs text-slate-400 border-t border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#00D2A0]" />
                <span>{lang === "no" ? "Balanse • Inkludering • Engasjement" : "Balance • Inclusion • Dedication"}</span>
              </div>
              <p>
                {lang === "no"
                  ? "Modellen velges fritt for ett kalenderår av gangen. Du har full kontroll over egen karriere og oppdragshverdag."
                  : "Freely choose your preferred model each calendar year. Full autonomy over your career and work-life balance."}
              </p>
            </div>
          </div>

          {/* Results Comparison Cards */}
          <div className="lg:col-span-6 space-y-4">
            {SITE_CONTENT.salaryModel.models.map((model) => {
              const res = results[model.id as keyof typeof results];
              const isSelected = selectedModel === model.id;

              return (
                <div
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? "bg-slate-900 border-[#00D2A0] shadow-lg shadow-[#00D2A0]/10 scale-[1.01]"
                      : "bg-slate-950/60 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-white">
                      {lang === "no" ? model.nameNo : model.nameEn}
                    </span>
                    <span className="text-xs text-[#00D2A0] font-semibold">
                      {lang === "no" ? `Garantilønn: ${formatNOK(res.baseGuarantee)}` : `Base: ${formatNOK(res.baseGuarantee)}`}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#00D2A0]">
                      {formatNOK(res.estimatedPayout)}
                    </span>
                    <span className="text-xs text-slate-400">
                      {lang === "no" ? "/ estimert årslønn" : "/ est. annual payout"}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400">
                    {lang === "no" ? model.descNo : model.descEn}
                  </p>
                </div>
              );
            })}

            {/* Join Us CTA Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5 flex items-center gap-1.5">
                  <UserPlus className="w-4 h-4 text-[#00D2A0]" />
                  <span>{lang === "no" ? "Vil du jobbe i Promis Qualify?" : "Want to join Promis Qualify?"}</span>
                </h4>
                <p className="text-xs text-slate-400">
                  {lang === "no"
                    ? "Vi ser alltid etter dyktige testledere og testrådgivere med ISTQB-erfaring."
                    : "We are actively recruiting test managers and technical QA advisors with ISTQB track records."}
                </p>
              </div>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl bg-[#00D2A0] hover:bg-[#00B88C] text-slate-950 font-bold text-xs shrink-0 transition-all shadow"
              >
                {lang === "no" ? "Søk hos oss" : "Apply Now"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
