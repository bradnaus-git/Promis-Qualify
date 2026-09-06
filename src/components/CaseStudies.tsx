"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONTENT, CaseStudy, IndustryMatrixItem } from "@/data/site-content";
import {
  Briefcase,
  CheckCircle2,
  Building2,
  ShieldCheck,
  LineChart,
  Cpu,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Layers,
  Sparkles,
} from "lucide-react";

export default function CaseStudies() {
  const { lang } = useLanguage();
  const [viewMode, setViewMode] = useState<"cases" | "matrix">("cases");
  const [sectorFilter, setSectorFilter] = useState<string>("all");
  const [expandedCaseId, setExpandedCaseId] = useState<string | null>(null);
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>("offentlig");

  const toggleExpandCase = (id: string) => {
    setExpandedCaseId(expandedCaseId === id ? null : id);
  };

  const clientLogos = [
    { name: "Tolletaten", logo: "/images/references/tolletaten.png" },
    { name: "Ruter", logo: "/images/references/ruter.png" },
    { name: "Kartverket", logo: "/images/references/kartverket.png" },
    { name: "Felleskjøpet", logo: "/images/references/felleskjopet.png" },
    { name: "BankAxept", logo: "/images/references/bankaxept.png" },
    { name: "DIFA / Apotekforeningen", logo: "/images/references/difa.png" },
    { name: "NOKUT", logo: "/images/references/nokut.png" },
    { name: "CRIStin / Ceres", logo: "/images/references/cristin.png" },
    { name: "FarmaPro", logo: "/images/references/farmapro.png" },
    { name: "RuterBillett", logo: "/images/references/ruterbillett.png" },
    { name: "RuterReise", logo: "/images/references/ruterreise.png" },
  ];

  const filteredCases = SITE_CONTENT.caseStudies.filter((c) => {
    if (sectorFilter === "all") return true;
    return c.sector === sectorFilter;
  });

  const activeIndustry =
    SITE_CONTENT.industryMatrix.find((m) => m.id === selectedIndustryId) ||
    SITE_CONTENT.industryMatrix[0];

  const industryIcons: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#009FE3]" />,
    Building2: <Building2 className="w-5 h-5 text-[#009FE3]" />,
    LineChart: <LineChart className="w-5 h-5 text-[#009FE3]" />,
    Cpu: <Cpu className="w-5 h-5 text-[#009FE3]" />,
  };

  return (
    <section id="cases" className="scroll-mt-20 py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#009FE3] mb-2">
          <span>02 / BRANSJER & REFERANSER</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-semibold text-[#009FE3] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === "no" ? "Dokumentert erfaring siden 2014" : "Proven Track Record Since 2014"}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              {lang === "no"
                ? "Bransjer og utvalgte referanseoppdrag"
                : "Industries & Selected Client Track Record"}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {lang === "no"
                ? "Siden 2014 har Promis Qualify levert uavhengig test, testledelse og kvalitetssikring for over et dusin samfunns- og forretningskritiske kjernevirksomheter i Norge."
                : "Since 2014, Promis Qualify has delivered independent test leadership and QA for mission-critical Norwegian public and private organizations."}
            </p>
          </div>

          {/* Primary View Switcher: Cases vs Matrix */}
          <div className="inline-flex p-1 rounded-lg bg-slate-100 border border-slate-200 self-start lg:self-auto shrink-0">
            <button
              onClick={() => setViewMode("cases")}
              className={`px-4 py-2 rounded-md text-xs font-bold transition-all flex items-center gap-2 ${
                viewMode === "cases"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-[#009FE3]" />
              <span>{lang === "no" ? "Utvalgte referanser" : "Client Cases"}</span>
              <span className="px-1.5 py-0.2 text-[10px] rounded-full bg-blue-50 text-[#009FE3] font-bold">
                {SITE_CONTENT.caseStudies.length}
              </span>
            </button>
            <button
              onClick={() => setViewMode("matrix")}
              className={`px-4 py-2 rounded-md text-xs font-bold transition-all flex items-center gap-2 ${
                viewMode === "matrix"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#009FE3]" />
              <span>{lang === "no" ? "Bransje- & systemmatrise" : "Industry Matrix"}</span>
              <span className="px-1.5 py-0.2 text-[10px] rounded-full bg-slate-200 text-slate-700 font-bold">
                {SITE_CONTENT.industryMatrix.length}
              </span>
            </button>
          </div>
        </div>

        {/* Client Logos Ribbon / Trust Strip */}
        <div className="mb-12 p-6 rounded-xl bg-slate-50 border border-slate-200">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4 text-center sm:text-left">
            {lang === "no"
              ? "Et utvalg av oppdragsgivere og løsninger vi har kvalitetssikret:"
              : "A selection of clients and core solutions we have quality assured:"}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 items-center">
            {clientLogos.map((item, idx) => (
              <div
                key={idx}
                className="h-14 bg-white rounded-lg border border-slate-200/80 p-2 flex items-center justify-center hover:border-[#009FE3] hover:shadow-sm transition-all group"
                title={item.name}
              >
                <div className="relative w-full h-9 flex items-center justify-center">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={140}
                    height={36}
                    className="max-h-8 w-auto object-contain transition-all group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VIEW 1: CASE STUDIES */}
        {viewMode === "cases" && (
          <div>
            {/* Sector Filters */}
            <div className="flex mb-8 overflow-x-auto pb-2">
              <div className="inline-flex p-1 rounded-lg bg-slate-100 border border-slate-200 flex-nowrap gap-1">
                {[
                  { id: "all", labelNo: "Alle oppdrag", labelEn: "All Deliveries" },
                  { id: "public", labelNo: "Offentlig sektor", labelEn: "Public Sector" },
                  { id: "transport", labelNo: "Transport & Mobilitet", labelEn: "Transport & Mobility" },
                  { id: "health", labelNo: "Helse & Apotek", labelEn: "Health & Pharma" },
                  { id: "finance", labelNo: "Bank & Finans", labelEn: "Banking & Finance" },
                  { id: "agri", labelNo: "Landbruk & Forsyning", labelEn: "Agriculture & Supply" },
                  { id: "building", labelNo: "Bygg & NS 6450", labelEn: "Buildings & Infrastructure" },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSectorFilter(f.id)}
                    className={`px-3.5 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
                      sectorFilter === f.id
                        ? "bg-white text-slate-900 shadow-sm border border-slate-200/80 font-bold text-[#009FE3]"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {lang === "no" ? f.labelNo : f.labelEn}
                  </button>
                ))}
              </div>
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCases.map((c) => {
                const isExpanded = expandedCaseId === c.id;

                return (
                  <div
                    key={c.id}
                    className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Bar: Logo & Client Tag */}
                      <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-100">
                        {c.logo ? (
                          <div className="h-8 max-w-[130px] flex items-center">
                            <Image
                              src={c.logo}
                              alt={c.clientNo}
                              width={120}
                              height={32}
                              className="max-h-7 w-auto object-contain"
                            />
                          </div>
                        ) : (
                          <span className="text-xs font-bold text-slate-700">
                            {lang === "no" ? c.clientNo : c.clientEn}
                          </span>
                        )}

                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
                          {lang === "no" ? c.domainNo : c.domainEn}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                        {lang === "no" ? c.titleNo : c.titleEn}
                      </h3>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {lang === "no" ? c.summaryNo : c.summaryEn}
                      </p>

                      {/* Expandable Deep-Dive Details */}
                      {c.fullDescriptionNo && (
                        <div className="mb-4">
                          <button
                            type="button"
                            onClick={() => toggleExpandCase(c.id)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#009FE3] hover:text-[#0088C5] transition-colors focus:outline-none"
                          >
                            <span>
                              {isExpanded
                                ? lang === "no"
                                  ? "Skjul oppdragsbeskrivelse"
                                  : "Hide details"
                                : lang === "no"
                                ? "Les hele oppdragsbeskrivelsen"
                                : "Read full case description"}
                            </span>
                            {isExpanded ? (
                              <ChevronUp className="w-3.5 h-3.5" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5" />
                            )}
                          </button>

                          {isExpanded && (
                            <div className="mt-3 p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-2 animate-fade-in">
                              <p>{lang === "no" ? c.fullDescriptionNo : c.fullDescriptionEn}</p>
                              <div className="pt-2 text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                                <ShieldCheck className="w-3.5 h-3.5 text-[#009FE3]" />
                                <span>
                                  {lang === "no"
                                    ? `Oppdragsgiver: ${c.clientNo}`
                                    : `Client: ${c.clientEn}`}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Metrics Footer */}
                    <div className="pt-4 border-t border-slate-100">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                        {lang === "no" ? "Nøkkelleveranser & verdi:" : "Key Deliverables & Value:"}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {(lang === "no" ? c.metricsNo : c.metricsEn).map((m, i) => (
                          <div
                            key={i}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-800"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#009FE3] shrink-0" />
                            <span>{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW 2: INDUSTRY & SOLUTION MATRIX */}
        {viewMode === "matrix" && (
          <div className="space-y-6">
            <div className="p-4 rounded-lg bg-blue-50/70 border border-blue-200 text-xs text-slate-700">
              <span className="font-bold text-[#009FE3] mr-1">
                {lang === "no" ? "Omfattende domeneerfaring:" : "Comprehensive Domain Breadth:"}
              </span>
              {lang === "no"
                ? "Nedenfor kan du utforske de 11 bransjene Promis Qualify har levert testledelse innen, samt eksempler på konkrete software- og kjernesystemer vi har testet og kvalitetssikret."
                : "Explore the 11 industries where Promis Qualify has verified mission-critical software systems and architectures."}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: 11 Industry Selector Cards */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                {SITE_CONTENT.industryMatrix.map((item) => {
                  const isSelected = item.id === selectedIndustryId;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedIndustryId(item.id)}
                      className={`p-4 rounded-lg text-left transition-all border flex items-center justify-between ${
                        isSelected
                          ? "bg-white border-[#009FE3] shadow-md ring-1 ring-[#009FE3]"
                          : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/80"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded ${
                            isSelected ? "bg-blue-50" : "bg-slate-100"
                          }`}
                        >
                          {industryIcons[item.icon] || <ShieldCheck className="w-5 h-5 text-[#009FE3]" />}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 leading-snug">
                            {lang === "no" ? item.industryNo : item.industryEn}
                          </h4>
                          <p className="text-[11px] text-slate-500 line-clamp-1">
                            {lang === "no" ? item.taglineNo : item.taglineEn}
                          </p>
                        </div>
                      </div>

                      <ArrowRight
                        className={`w-4 h-4 transition-transform shrink-0 ml-2 ${
                          isSelected ? "translate-x-1 text-[#009FE3]" : "text-slate-300"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Detailed Solutions & Verified Systems for Active Industry */}
              <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-7 sm:p-8 rounded-xl shadow-sm sticky top-28 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-50 border border-blue-200 text-xs font-bold text-[#009FE3] mb-3">
                    {lang === "no" ? "Bransjespesifikk ekspertise" : "Industry Practice Area"}
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 leading-tight mb-2">
                    {lang === "no" ? activeIndustry.industryNo : activeIndustry.industryEn}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {lang === "no" ? activeIndustry.taglineNo : activeIndustry.taglineEn}
                  </p>
                </div>

                {/* Verified Systems & Deliverables */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 pb-2 border-b border-slate-200">
                    {lang === "no"
                      ? "Løsninger og systemer vi har testet i denne bransjen:"
                      : "Solutions & Architectures Verified in this Sector:"}
                  </h4>

                  <ul className="space-y-2.5">
                    {(lang === "no" ? activeIndustry.solutionsNo : activeIndustry.solutionsEn).map(
                      (sol, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#009FE3]" />
                          </div>
                          <span className="text-xs sm:text-sm text-slate-700 leading-snug font-medium">
                            {sol}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Example Clients / References */}
                {activeIndustry.clientExamples && activeIndustry.clientExamples.length > 0 && (
                  <div className="pt-4 border-t border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                      {lang === "no" ? "Eksempler på oppdragsgivere:" : "Representative Clients:"}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeIndustry.clientExamples.map((ex, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#009FE3] hover:bg-[#0088C5] text-white text-xs font-bold transition-all shadow-sm"
                  >
                    <span>
                      {lang === "no"
                        ? `Diskuter testledelse innen ${activeIndustry.industryNo.toLowerCase()}`
                        : `Discuss QA for ${activeIndustry.industryEn.toLowerCase()}`}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
