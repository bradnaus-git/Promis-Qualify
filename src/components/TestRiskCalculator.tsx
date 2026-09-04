"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldAlert, CheckCircle2, ArrowRight, RotateCcw, Sparkles, AlertTriangle } from "lucide-react";

export default function TestRiskCalculator() {
  const { lang } = useLanguage();

  // Questions state
  const [projectType, setProjectType] = useState<string>("integrations");
  const [systemComplexity, setSystemComplexity] = useState<number>(3);
  const [currentQA, setCurrentQA] = useState<string>("manual");
  const [criticality, setCriticality] = useState<number>(4);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Risk calculation logic
  const calculateRisk = () => {
    let score = 0;

    // Type score
    if (projectType === "building") score += 25;
    else if (projectType === "public") score += 22;
    else if (projectType === "integrations") score += 18;
    else score += 10;

    // Complexity score (1 to 4)
    score += systemComplexity * 7;

    // Current QA deficit score
    if (currentQA === "none") score += 25;
    else if (currentQA === "manual") score += 18;
    else if (currentQA === "partial") score += 10;
    else score += 4;

    // Criticality score (1 to 4)
    score += criticality * 6;

    // Clamp between 0 and 100
    const clampedScore = Math.min(Math.max(score, 15), 98);

    let level: "low" | "medium" | "high" | "critical" = "medium";
    if (clampedScore >= 75) level = "critical";
    else if (clampedScore >= 55) level = "high";
    else if (clampedScore >= 35) level = "medium";
    else level = "low";

    return { score: clampedScore, level };
  };

  const riskResult = calculateRisk();

  return (
    <section id="calculator" className="py-20 lg:py-28 relative bg-[#060c17]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-[#00D2A0] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === "no" ? "Interaktivt analyseverktøy" : "Interactive Assessment Tool"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {lang === "no" ? "Evaluer ditt prosjekts kvalitetsrisiko" : "Evaluate Your Project's Quality Risk"}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {lang === "no"
              ? "Svar på 4 raske parametere for å få en objektiv vurdering av risikoprofil og anbefalt teststrategi basert på beste bransjepraksis."
              : "Answer 4 quick questions to receive an objective risk rating and tailored QA methodology roadmap."}
          </p>
        </div>

        {/* Assessment Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md">
          {!submitted ? (
            <div className="space-y-8">
              {/* Question 1: Project Type */}
              <div>
                <label className="block text-sm font-bold text-white mb-3">
                  1. {lang === "no" ? "Hva slags prosjekt eller leveranse gjelder det?" : "What type of project or system is this?"}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: "public", labelNo: "Offentlig IKT / Samfunnskritisk system", labelEn: "Public Sector IT / Critical Registry" },
                    { id: "building", labelNo: "Bygg, sykehus eller infrastruktur (IoT/SD)", labelEn: "Building, Hospital or Infrastructure (IoT/BMS)" },
                    { id: "integrations", labelNo: "Integrerte enterprise-systemer / Bank / Finans", labelEn: "Integrated Enterprise / Banking / ERP" },
                    { id: "saas", labelNo: "SaaS, web eller digital kundeapplikasjon", labelEn: "SaaS, Web or Digital Customer Portal" },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setProjectType(opt.id)}
                      className={`p-4 rounded-xl text-left border text-xs sm:text-sm font-medium transition-all ${
                        projectType === opt.id
                          ? "bg-[#00D2A0]/15 border-[#00D2A0] text-white shadow-sm"
                          : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      {lang === "no" ? opt.labelNo : opt.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Integrations & Complexity */}
              <div>
                <label className="block text-sm font-bold text-white mb-3 flex justify-between">
                  <span>
                    2. {lang === "no" ? "Systemkompleksitet & integrasjoner:" : "System complexity & external integrations:"}
                  </span>
                  <span className="text-[#00D2A0] font-semibold">
                    {systemComplexity === 1 && (lang === "no" ? "Frittstående system" : "Standalone single app")}
                    {systemComplexity === 2 && (lang === "no" ? "2-4 integrerte tjenester" : "2-4 integrated services")}
                    {systemComplexity === 3 && (lang === "no" ? "5-15 komplekse grensesnitt" : "5-15 complex interfaces")}
                    {systemComplexity === 4 && (lang === "no" ? "Omfattende økosystem / maskinvare" : "Massive ecosystem / cyber-physical")}
                  </span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={systemComplexity}
                  onChange={(e) => setSystemComplexity(Number(e.target.value))}
                  className="w-full accent-[#00D2A0] cursor-pointer h-2 bg-slate-800 rounded-lg"
                  aria-label="System complexity slider"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-2">
                  <span>{lang === "no" ? "Lav kompleksitet" : "Low complexity"}</span>
                  <span>{lang === "no" ? "Middels" : "Moderate"}</span>
                  <span>{lang === "no" ? "Høy" : "High"}</span>
                  <span>{lang === "no" ? "Svært kompleks / Big Testing" : "Critical / Big Testing"}</span>
                </div>
              </div>

              {/* Question 3: Current Test Maturity */}
              <div>
                <label className="block text-sm font-bold text-white mb-3">
                  3. {lang === "no" ? "Dagens testpraksis og automasjonsgrad:" : "Current testing maturity and automation level:"}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: "none", labelNo: "Ad-hoc / nesten ingen dedikert test", labelEn: "Ad-hoc / minimal dedicated QA" },
                    { id: "manual", labelNo: "Hovedsakelig manuell akseptansetest", labelEn: "Predominantly manual acceptance testing" },
                    { id: "partial", labelNo: "Noe automatisering (enhetstester/CI)", labelEn: "Partial automation (unit tests/CI)" },
                    { id: "advanced", labelNo: "Etablert testregime, men trenger løft", labelEn: "Established regime, but needs scaling/auditing" },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setCurrentQA(opt.id)}
                      className={`p-4 rounded-xl text-left border text-xs sm:text-sm font-medium transition-all ${
                        currentQA === opt.id
                          ? "bg-[#00D2A0]/15 border-[#00D2A0] text-white shadow-sm"
                          : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      {lang === "no" ? opt.labelNo : opt.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 4: Criticality */}
              <div>
                <label className="block text-sm font-bold text-white mb-3 flex justify-between">
                  <span>
                    4. {lang === "no" ? "Konsekvens ved produksjonsfeil eller forsinket åpning:" : "Consequence of production defects or delayed launch:"}
                  </span>
                  <span className="text-[#00D2A0] font-semibold">
                    {criticality === 1 && (lang === "no" ? "Mindre intern irritasjon" : "Minor internal nuisance")}
                    {criticality === 2 && (lang === "no" ? "Moderat forretningsavbrudd" : "Moderate disruption")}
                    {criticality === 3 && (lang === "no" ? "Betydelig økonomisk / omdømmetap" : "Severe financial / reputational hit")}
                    {criticality === 4 && (lang === "no" ? "Samfunnskritisk / lovkrav / helse" : "Mission-critical / legal / public safety")}
                  </span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={criticality}
                  onChange={(e) => setCriticality(Number(e.target.value))}
                  className="w-full accent-[#00D2A0] cursor-pointer h-2 bg-slate-800 rounded-lg"
                  aria-label="Criticality slider"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-2">
                  <span>{lang === "no" ? "Lav konsekvens" : "Low impact"}</span>
                  <span>{lang === "no" ? "Merkbar" : "Noticeable"}</span>
                  <span>{lang === "no" ? "Kritisk" : "Critical"}</span>
                  <span>{lang === "no" ? "Katastrofal for drift/helse" : "Catastrophic impact"}</span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSubmitted(true)}
                  className="px-8 py-3.5 rounded-xl bg-[#00D2A0] hover:bg-[#00B88C] text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#00D2A0]/20 flex items-center gap-2"
                >
                  <span>{lang === "no" ? "Beregn risikoprofil & anbefaling" : "Generate Risk Profile & Recommendations"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Results View */
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-slate-950 border border-slate-800 gap-6">
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-1">
                    {lang === "no" ? "Beregnet prosjektrisiko" : "Calculated Project Risk"}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-black text-white">{riskResult.score} / 100</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        riskResult.level === "critical"
                          ? "bg-red-500/20 text-red-400 border border-red-500/40"
                          : riskResult.level === "high"
                          ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                          : riskResult.level === "medium"
                          ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40"
                          : "bg-[#00D2A0]/20 text-[#00D2A0] border border-[#00D2A0]/40"
                      }`}
                    >
                      {lang === "no"
                        ? riskResult.level === "critical"
                          ? "Svært Høy Risiko"
                          : riskResult.level === "high"
                          ? "Høy Risiko"
                          : riskResult.level === "medium"
                          ? "Moderat Risiko"
                          : "Lav Risiko"
                        : `${riskResult.level.toUpperCase()} RISK`}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-800 text-xs font-medium text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{lang === "no" ? "Juster parametere" : "Adjust inputs"}</span>
                </button>
              </div>

              {/* Tailored Methodology Advice */}
              <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-4">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-[#00D2A0]" />
                  <span>{lang === "no" ? "Anbefalt teststrategi fra Promis Qualify" : "Recommended Strategy from Promis Qualify"}</span>
                </h4>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {projectType === "building" && (
                    lang === "no"
                      ? "Prosjektet krever systematisk ferdigstillelse iht. NS 6450. Teknisk testledelse bør kobles på før tekniske anlegg forsegles, med dedikert testing av samspill mellom elektro, HVAC, IKT og adgangskontroll."
                      : "This delivery demands systematic commissioning per NS 6450. Technical test leadership must be mobilized prior to physical sealing of facility systems, verifying interactions across electrical, HVAC, IT, and security."
                  )}
                  {projectType === "public" && (
                    lang === "no"
                      ? "Offentlige leveranser med høy samfunnsmessig eksponering krever uavhengig testledelse med ISTQB Advanced-styring, rigorøs akseptansetest, Digdir-tilgjengelighetsaudit (WCAG 2.2) og sporbar risikorapportering til styringsgruppen."
                      : "Public sector deliveries with high citizen impact require independent test management with ISTQB Advanced governance, strict user acceptance testing, Digdir WCAG 2.2 accessibility audits, and traceable reporting."
                  )}
                  {projectType === "integrations" && (
                    lang === "no"
                      ? "Kombinasjonen av komplekse grensesnitt og høye forretningskrav tilsier 'Big Testing'-metodikk: realistisk prøvedrift i produksjonslike miljøer, stresstesting av arbeidsprosesser og ende-til-ende transaksjonssikkerhet."
                      : "Complex interfaces combined with mission-critical SLAs warrant 'Big Testing' methodology: realistic trial operations in production-like environments, workflow stress-testing, and end-to-end data integrity."
                  )}
                  {projectType === "saas" && (
                    lang === "no"
                      ? "Fokus bør ligge på testautomatisering i CI/CD-pipelinen, regresjonstesting og ytelsesvalidering (k6/Playwright) for å sikre raske utrullinger uten utilsiktet feillekkasje."
                      : "Focus should be placed on CI/CD pipeline test automation, regression safety nets, and performance benchmarking (k6/Playwright) to empower rapid feature shipping without defect leakage."
                  )}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#00D2A0] shrink-0 mt-0.5" />
                    <span>{lang === "no" ? "Uavhengig risikovurdering for styringsgruppen" : "Independent risk assessment for steering group"}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#00D2A0] shrink-0 mt-0.5" />
                    <span>{lang === "no" ? "Definisjon av akseptansekriterier & anbudsstøtte" : "Acceptance criteria definition & tender support"}</span>
                  </div>
                </div>
              </div>

              {/* Action Call */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-[#00D2A0]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h5 className="text-sm font-bold text-white mb-1">
                    {lang === "no" ? "Ønsker du en uforpliktende gjennomgang med en senior testleder?" : "Want a complimentary review with a senior test lead?"}
                  </h5>
                  <p className="text-xs text-slate-400">
                    {lang === "no"
                      ? "Vi setter opp et 30-minutters uforpliktende fagmøte for å drøfte risikoreduserende tiltak."
                      : "We schedule a 30-minute consultation to review targeted risk mitigation steps."}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="px-6 py-2.5 rounded-xl bg-[#00D2A0] hover:bg-[#00B88C] text-slate-950 font-bold text-xs shrink-0 tracking-wide transition-all shadow-md"
                >
                  {lang === "no" ? "Book fagprat" : "Book Consultation"}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
