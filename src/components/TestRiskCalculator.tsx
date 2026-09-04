"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldAlert, CheckCircle2, ArrowRight, RotateCcw, Award } from "lucide-react";

export default function TestRiskCalculator() {
  const { lang } = useLanguage();

  const [projectType, setProjectType] = useState<string>("integrations");
  const [systemComplexity, setSystemComplexity] = useState<number>(3);
  const [currentQA, setCurrentQA] = useState<string>("manual");
  const [criticality, setCriticality] = useState<number>(4);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const calculateRisk = () => {
    let score = 0;
    if (projectType === "building") score += 25;
    else if (projectType === "public") score += 22;
    else if (projectType === "integrations") score += 18;
    else score += 10;

    score += systemComplexity * 7;

    if (currentQA === "none") score += 25;
    else if (currentQA === "manual") score += 18;
    else if (currentQA === "partial") score += 10;
    else score += 4;

    score += criticality * 6;

    const clampedScore = Math.min(Math.max(score, 15), 98);
    let level: "lav" | "moderat" | "høy" | "kritisk" = "moderat";
    if (clampedScore >= 75) level = "kritisk";
    else if (clampedScore >= 55) level = "høy";
    else if (clampedScore >= 35) level = "moderat";
    else level = "lav";

    return { score: clampedScore, level };
  };

  const riskResult = calculateRisk();

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-semibold text-[#009FE3] mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === "no" ? "Faglig vurdering" : "Quality Risk Assessment"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
            {lang === "no"
              ? "Vurder kvalitetsrisiko for din leveranse"
              : "Assess Quality Risk for Your Delivery"}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === "no"
              ? "Svar på fire sentrale spørsmål for å evaluere prosjektets risikoprofil og se hvilken testtilnærming vi anbefaler."
              : "Answer four fundamental parameters to evaluate your delivery risk profile and view recommended QA methodologies."}
          </p>
        </div>

        {/* Evaluation Card */}
        <div className="p-8 sm:p-10 rounded-xl bg-white border border-slate-200 shadow-sm">
          {!submitted ? (
            <div className="space-y-7">
              {/* Question 1: Project Type */}
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2.5">
                  1. {lang === "no" ? "Prosjekttype eller leveranseområde:" : "Project Type or Delivery Domain:"}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: "public", labelNo: "Offentlig IKT / Samfunnskritisk system", labelEn: "Public Sector IT / Critical Systems" },
                    { id: "building", labelNo: "Bygg, sykehus eller infrastruktur (NS 6450)", labelEn: "Commissioning & Smart Buildings (NS 6450)" },
                    { id: "integrations", labelNo: "Bank, finans eller integrert enterprise-system", labelEn: "Banking, Finance or Integrated ERP" },
                    { id: "saas", labelNo: "Kundeportal, web eller fagsystem", labelEn: "Customer Portal, Web or Business App" },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setProjectType(opt.id)}
                      className={`p-3.5 rounded-md text-left border text-xs sm:text-sm font-medium transition-all ${
                        projectType === opt.id
                          ? "bg-blue-50 border-[#009FE3] text-slate-900 ring-1 ring-[#009FE3]"
                          : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      {lang === "no" ? opt.labelNo : opt.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Complexity Slider */}
              <div>
                <div className="flex justify-between text-sm font-bold text-slate-900 mb-2">
                  <span>2. {lang === "no" ? "Systemkompleksitet & grensesnitt:" : "System Complexity & Interfaces:"}</span>
                  <span className="text-[#009FE3] font-semibold text-xs sm:text-sm">
                    {systemComplexity === 1 && (lang === "no" ? "Enkelt fagsystem" : "Single application")}
                    {systemComplexity === 2 && (lang === "no" ? "2-4 integrasjoner" : "2-4 integrated APIs")}
                    {systemComplexity === 3 && (lang === "no" ? "5-15 komplekse grensesnitt" : "5-15 complex interfaces")}
                    {systemComplexity === 4 && (lang === "no" ? "Mange delsystemer / maskinvare / Big Testing" : "Multi-system / cyber-physical")}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={systemComplexity}
                  onChange={(e) => setSystemComplexity(Number(e.target.value))}
                  className="w-full accent-[#009FE3] cursor-pointer h-2 bg-slate-200 rounded"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1.5">
                  <span>Enkelt</span>
                  <span>Moderat</span>
                  <span>Høyt integrert</span>
                  <span>Kritisk helhet</span>
                </div>
              </div>

              {/* Question 3: Current QA maturity */}
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2.5">
                  3. {lang === "no" ? "Etablert testledelse og kvalitetssikring i dag:" : "Current Testing Governance & Rigor:"}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: "none", labelNo: "Mangler dedikert testleder", labelEn: "No dedicated test manager" },
                    { id: "manual", labelNo: "Manuell testing i sluttfasen", labelEn: "Manual testing in late stages" },
                    { id: "partial", labelNo: "Noe automatisering / testteam etablert", labelEn: "Partial automation / team established" },
                    { id: "advanced", labelNo: "Strukturert testregime, ønsker faglig revisjon", labelEn: "Structured regime, seeking senior audit" },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setCurrentQA(opt.id)}
                      className={`p-3.5 rounded-md text-left border text-xs sm:text-sm font-medium transition-all ${
                        currentQA === opt.id
                          ? "bg-blue-50 border-[#009FE3] text-slate-900 ring-1 ring-[#009FE3]"
                          : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      {lang === "no" ? opt.labelNo : opt.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 4: Consequence */}
              <div>
                <div className="flex justify-between text-sm font-bold text-slate-900 mb-2">
                  <span>4. {lang === "no" ? "Konsekvens av feil ved produksjonssetting:" : "Impact of Defects at Go-Live:"}</span>
                  <span className="text-[#009FE3] font-semibold text-xs sm:text-sm">
                    {criticality === 1 && (lang === "no" ? "Begrenset intern ulempe" : "Minor internal inconvenience")}
                    {criticality === 2 && (lang === "no" ? "Moderat forsinkelse" : "Moderate delay")}
                    {criticality === 3 && (lang === "no" ? "Betydelig økonomisk / omdømmerisiko" : "Substantial financial risk")}
                    {criticality === 4 && (lang === "no" ? "Samfunnskritisk / lovpålagt / helse" : "Mission-critical / health / regulatory")}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={criticality}
                  onChange={(e) => setCriticality(Number(e.target.value))}
                  className="w-full accent-[#009FE3] cursor-pointer h-2 bg-slate-200 rounded"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSubmitted(true)}
                  className="px-6 py-3 rounded-md bg-[#009FE3] hover:bg-[#0088C5] text-white font-semibold text-sm transition-all shadow-sm flex items-center gap-2"
                >
                  <span>{lang === "no" ? "Vis risikoprofil & anbefaling" : "View Risk Profile & Recommendation"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Results View */
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-bold text-slate-500 tracking-wider block mb-1">
                    {lang === "no" ? "Samlet risikoprofil for leveransen" : "Aggregated Delivery Risk Score"}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-extrabold text-slate-900">{riskResult.score} / 100</span>
                    <span
                      className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider ${
                        riskResult.level === "kritisk"
                          ? "bg-red-100 text-red-800 border border-red-200"
                          : riskResult.level === "høy"
                          ? "bg-amber-100 text-amber-800 border border-amber-200"
                          : "bg-blue-100 text-[#009FE3] border border-blue-200"
                      }`}
                    >
                      {riskResult.level.toUpperCase()} RISIKO
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-slate-300 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{lang === "no" ? "Juster svar" : "Change inputs"}</span>
                </button>
              </div>

              {/* Concrete advice */}
              <div className="p-6 rounded-lg bg-white border border-slate-200 space-y-4">
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-[#009FE3]" />
                  <span>{lang === "no" ? "Promis Qualifys faglige anbefaling:" : "Promis Qualify Professional Advisory:"}</span>
                </h4>

                <p className="text-slate-700 text-sm leading-relaxed">
                  {projectType === "building" &&
                    "Prosjektet bør styres iht. NS 6450 (Systematisk ferdigstillelse). Tverrfaglig teknisk testledelse må forankres tidlig for å samordne elektro, VVS, SD-anlegg, IKT og adgangskontroll før innbygging, slik at forsinket overtakelse unngås."}
                  {projectType === "public" &&
                    "Samfunnskritiske offentlige anskaffelser krever uavhengig testledelse med ISTQB Advanced-sertifisert lederskap, formell akseptansetest med brukerorganisasjonen, samt dokumentert oppfyllelse av Digdirs krav til universell utforming (WCAG 2.2 AA)."}
                  {projectType === "integrations" &&
                    "Forretningskritiske integrasjoner krever Promis Qualifys 'Big Testing'-tilnærming: strukturert prøvedrift i produksjonslike miljøer, stresstesting av driftsrutiner og full transaksjonssikkerhet før lansering."}
                  {projectType === "saas" &&
                    "Etablering av hensiktsmessig teststrategi, kontinuerlig testautomatisering i CI/CD og uavhengig testrådgivning for å sikre at nye versjoner rulles ut trygt uten utilsiktet feillekkasje."}
                </p>

                <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#009FE3]" />
                    <span>Uavhengig risikorapportering til styringsgruppen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#009FE3]" />
                    <span>Konkrete akseptansekriterier for leverandører</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-700">
                  <strong className="text-slate-900 block mb-0.5">Ønsker du en uforpliktende fagprat?</strong>
                  Vi diskuterer gjerne prosjektets risikoprofil og hvordan en erfaren testleder kan bidra.
                </div>
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded bg-[#009FE3] hover:bg-[#0088C5] text-white text-xs font-semibold shrink-0 shadow-sm"
                >
                  Kontakt oss
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
