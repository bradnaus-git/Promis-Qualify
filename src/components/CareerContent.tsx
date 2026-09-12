"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONTENT } from "@/data/site-content";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Phone,
  Mail,
  ChevronRight,
  Award,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

interface CareerContentProps {
  onOpenInquiry?: (serviceId: string) => void;
}

export default function CareerContent({ onOpenInquiry }: CareerContentProps = {}) {
  const { lang } = useLanguage();
  const [selectedModel, setSelectedModel] = useState<string>("standard");
  const [selectedRole, setSelectedRole] = useState<"technical" | "manager">("technical");

  const G = SITE_CONTENT.salaryModel.grunnbelopG; // 124 028 NOK

  const formatNOK = (val: number) => {
    return new Intl.NumberFormat("no-NO", {
      style: "currency",
      currency: "NOK",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="py-10 sm:py-16 bg-white min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Brødsmuler" className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            {lang === "no" ? "Hjem" : "Home"}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">{lang === "no" ? "Karriere & Lønn" : "Careers & Compensation"}</span>
        </nav>

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#009FE3] mb-2">
            <span>04 / KARRIERE & LØNNSMODELLER</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            {lang === "no" ? "Bli en del av Promis Qualify" : "Join Promis Qualify"}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {lang === "no"
              ? "Vi er kontinuerlig på jakt etter dyktige seniorer innen testledelse og teknisk test. Hos oss blir du del av et uavhengig, høyt spesialisert fagmiljø med flat struktur og full transparens på avlønning."
              : "We continuously seek experienced test management and technical QA specialists. Join an independent, specialized collective with flat governance and full salary transparency."}
          </p>
        </div>

        {/* 2 Core Role Profiles */}
        <div className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
            {lang === "no" ? "Roller vi rekrutterer til" : "Open Senior Positions"}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Role 1: Teknisk Testleder */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#009FE3] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-blue-50 text-[#009FE3] border border-blue-200">
                    {lang === "no" ? "Teknologi & Automasjon" : "Technology & Automation"}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {lang === "no" ? "Fast stilling • Oslo" : "Full-time • Oslo"}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {lang === "no" ? "Teknisk Testleder" : "Technical Test Lead"}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {lang === "no"
                    ? "Teknisk testledelse og automatisering for krevende fagsystemer og integrasjonsplattformer, med fokus på testarkitektur, CI/CD-kvalitetsporter og robust testdatahåndtering."
                    : "Hands-on technical test leadership for complex systems and integration platforms, architecting test automation frameworks and CI/CD quality gates."}
                </p>

                <div className="space-y-3 mb-5 text-xs text-slate-700">
                  <div>
                    <span className="font-bold text-slate-900 block mb-1">
                      {lang === "no" ? "Oppgaver & ansvar:" : "Responsibilities:"}
                    </span>
                    <ul className="space-y-1 text-slate-600 list-disc list-inside">
                      <li>{lang === "no" ? "Testautomatisering (Cypress, Playwright, Selenium, RestAssured)" : "Test automation architecture (Cypress, Playwright, etc.)"}</li>
                      <li>{lang === "no" ? "Integrasjonstesting av API-er, microservices og meldingskøer" : "Integration testing across APIs, microservices, and event brokers"}</li>
                      <li>{lang === "no" ? "Ytelsestest, sikkerhetsvalidering og testdataoppsett" : "Performance testing, security checks, and synthetic test data"}</li>
                    </ul>
                  </div>

                  <div>
                    <span className="font-bold text-slate-900 block mb-1">
                      {lang === "no" ? "Verktøy & miljø:" : "Tooling & Tech Stack:"}
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {["Azure DevOps", "Jira / Xray", "GitLab CI", "Docker", "Postman", "k6 / JMeter", "Kafka / MQ"].map((t, i) => (
                        <span key={i} className="text-[10px] font-medium bg-slate-100 px-2 py-0.5 rounded-md text-slate-700 border border-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  {lang === "no" ? "100% ISTQB-sertifisert miljø" : "100% ISTQB Certified team"}
                </span>
                <button
                  type="button"
                  onClick={() => (onOpenInquiry ? onOpenInquiry("karriere") : (window.location.href = "mailto:rh@promis.no?subject=Teknisk%20testleder"))}
                  className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>{lang === "no" ? "Meld interesse" : "Apply / Inquire"}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </button>
              </div>
            </div>

            {/* Role 2: Senior Testleder */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#009FE3] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {lang === "no" ? "Styringsgruppe & Rådgivning" : "Governance & Advisory"}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {lang === "no" ? "Fast stilling • Oslo" : "Full-time • Oslo"}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {lang === "no" ? "Senior Testleder" : "Senior Test Manager"}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {lang === "no"
                    ? "Overordnet teststyring for samfunnskritiske IT- og byggeprosjekter, med ansvar for teststrategi, risikoavlastning, leverandøroppfølging og styringsgrupperapportering."
                    : "Executive test governance for mission-critical IT and facility deliveries, orchestrating test strategy, vendor management, and steering committee reporting."}
                </p>

                <div className="space-y-3 mb-5 text-xs text-slate-700">
                  <div>
                    <span className="font-bold text-slate-900 block mb-1">
                      {lang === "no" ? "Oppgaver & ansvar:" : "Responsibilities:"}
                    </span>
                    <ul className="space-y-1 text-slate-600 list-disc list-inside">
                      <li>{lang === "no" ? "Overordnet ansvar for testplaner, bemanning og testprosesser" : "End-to-end accountability for test plans, staffing, and governance"}</li>
                      <li>{lang === "no" ? "Testdesign, akseptansetest og tverrfaglig prøvedrift" : "Test design, user acceptance, and integrated trial operation"}</li>
                      <li>{lang === "no" ? "Rapportering og risikostyring mot toppledelse og styringsgruppe" : "Risk communication and milestone signoff for executive leadership"}</li>
                    </ul>
                  </div>

                  <div>
                    <span className="font-bold text-slate-900 block mb-1">
                      {lang === "no" ? "Metodikk & sertifiseringer:" : "Methodology & Standards:"}
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {["ISTQB Advanced Test Manager", "Statens Prosjektmodell", "PS2000", "NS 6450", "Smidig / SAFe", "Kvalitetsstyring"].map((t, i) => (
                        <span key={i} className="text-[10px] font-medium bg-slate-100 px-2 py-0.5 rounded-md text-slate-700 border border-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  {lang === "no" ? "Kombineres med: Testrådgiver / Kvalitetsleder" : "Combines with: QA Advisor / Quality Lead"}
                </span>
                <button
                  type="button"
                  onClick={() => (onOpenInquiry ? onOpenInquiry("karriere") : (window.location.href = "mailto:rh@promis.no?subject=Senior%20testleder"))}
                  className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>{lang === "no" ? "Meld interesse" : "Apply / Inquire"}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Salary Simulator */}
        <div className="mb-14">
          <div className="max-w-2xl mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              {lang === "no" ? "Transparent og forutsigbar avlønning" : "Transparent Compensation Models"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === "no"
                ? "Hos Promis Qualify opererer vi med tre valgfrie lønnsmodeller, slik at du kan velge balansen mellom trygg fastlønn og provisjonsbasert oppside som passer din livssituasjon."
                : "Promis Qualify offers three transparent compensation tracks, allowing you to tailor the balance between fixed salary security and commission upside."}
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
                className={`p-7 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                  isSelected
                    ? "bg-white border-[#009FE3] shadow-md ring-2 ring-[#009FE3]"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-50 text-[#009FE3] border border-blue-200">
                      {lang === "no" ? m.tagNo : m.tagEn}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">
                      {m.baseGuaranteeG} {lang === "no" ? "G garantilønn" : "G base guarantee"}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 mb-1">
                    {lang === "no" ? m.nameNo : m.nameEn}
                  </h3>

                  <div className="my-4 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
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

        {/* Structure & Principles Box + Confidential Dialogue */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
          <div className="lg:col-span-8 p-7 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#009FE3]" />
              <span>{lang === "no" ? "Slik fungerer utbetalingene:" : "How compensation is structured:"}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 text-xs sm:text-sm text-slate-700">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <strong className="block text-slate-900">
                  {lang === "no" ? "Fast garantilønn" : "Fixed Base Guarantee"}
                </strong>
                <p className="text-slate-600 text-xs">
                  {lang === "no"
                    ? "Utbetales fast hver måned uavhengig av oppdragsstatus, basert på valgt G-nivå (6G, 7G eller fast)."
                    : "Paid monthly regardless of project billing status, anchored in your selected G-tier (6G, 7G, or fixed)."}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
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

          {/* Right: Confidential Dialogue Card */}
          <div className="lg:col-span-4 p-7 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#009FE3] uppercase tracking-wider mb-2">
                <Lock className="w-3.5 h-3.5" />
                <span>{lang === "no" ? "Konfidensiell dialog" : "Confidential Dialogue"}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {lang === "no" ? "Nysgjerrig på hva dette betyr for deg?" : "Curious what this means for you?"}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {lang === "no"
                  ? "Vi tar gjerne en uformell og konfidensiell kaffeprat om hvordan modellene vil slå ut for din senioritet og kompetanse."
                  : "We welcome an informal, confidential conversation about how our models apply to your seniority and career goals."}
              </p>
            </div>

            <div className="pt-5 border-t border-slate-800 space-y-3 text-xs text-slate-300">
              <div className="font-semibold text-white">
                {lang === "no" ? "Kontaktpersoner for rekruttering:" : "Head of Recruitment:"}
              </div>
              <div className="text-slate-200 font-medium">Heidi Raae Bønke / Remi Hansen</div>
              <div className="flex items-center gap-2 text-slate-400">
                <Phone className="w-3.5 h-3.5 text-[#009FE3]" />
                <a href="tel:91865925" className="hover:text-white underline font-semibold">
                  918 65 925
                </a>
              </div>
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
      </div>
    </div>
  );
}
