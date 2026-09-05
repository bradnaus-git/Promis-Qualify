"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONTENT } from "@/data/site-content";
import { ShieldCheck, Award, Building, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import TopCarousel from "./TopCarousel";

export default function Hero() {
  const { lang } = useLanguage();
  const [selectedSector, setSelectedSector] = useState<"all" | "public" | "private">("all");

  const sectorContent = {
    all: {
      headlineNo: "Test og testledelse av store og komplekse IT-prosjekter",
      headlineEn: "Test Management and Quality Assurance for Complex IT Deliveries",
      subNo:
        "Promis Qualify er et spisskompetent, uavhengig rådgivningsmiljø i Oslo. Våre rådgivere har i gjennomsnitt over 15–20 års erfaring innen operativ og strategisk testledelse for samfunnskritiske og forretningskritiske systemer.",
      subEn:
        "Promis Qualify is a specialized, independent consultancy based at Rebel in Oslo. Our advisors average 15–20+ years of deep domain experience in operational and strategic test management for mission-critical systems.",
    },
    public: {
      headlineNo: "Spesialister på samfunnskritiske offentlige IT-anskaffelser",
      headlineEn: "Specialists in Mission-Critical Public Sector Deliveries",
      subNo:
        "Bred erfaring fra statlige etater, helseforetak og samferdsel. Vi sikrer uavhengig kvalitetskontroll, oppfyllelse av Digdirs krav, universell utforming (WCAG 2.2) og forankring i styringsgruppen.",
      subEn:
        "Extensive experience with government agencies, regional healthcare trusts, and transportation authorities. Independent quality governance, Digdir alignment, and WCAG 2.2 compliance.",
    },
    private: {
      headlineNo: "Strategisk testledelse og risikoavlastning for næringslivet",
      headlineEn: "Strategic Test Management & Risk Mitigation for Enterprises",
      subNo:
        "Fra kjernebank og sanntidsbetalinger til integrerte enterprise-systemer. Vi reduserer feillekkasje til produksjon og optimaliserer avkastningen på testbudsjettet.",
      subEn:
        "From core banking systems to integrated enterprise software. We prevent costly defect leakage to production and maximize ROI on testing budgets.",
    },
  };

  return (
    <section className="bg-white border-b border-slate-200 py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Top Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-8 border-b border-slate-100 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#009FE3]" />
            <span className="font-semibold text-slate-700">Promis Qualify AS</span>
            <span>•</span>
            <span>Oslo, Norge</span>
            <span>•</span>
            <span className="hidden sm:inline">Del av PROMIS-familien</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-600 font-medium">Balanse • Inkludering • Engasjement</span>
          </div>
        </div>

        {/* Top Visual Carousel featuring Professional Consultants */}
        <TopCarousel />

        {/* Sector Tabs */}
        <div className="flex mb-8">
          <div className="inline-flex p-1 rounded-lg bg-slate-100 border border-slate-200">
            <button
              onClick={() => setSelectedSector("all")}
              className={`px-4 py-2 rounded-md text-xs font-semibold transition-all ${
                selectedSector === "all"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/60"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {lang === "no" ? "Oversikt" : "Overview"}
            </button>
            <button
              onClick={() => setSelectedSector("public")}
              className={`px-4 py-2 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedSector === "public"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/60"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Building className="w-3.5 h-3.5 text-[#009FE3]" />
              {lang === "no" ? "Offentlig sektor" : "Public Sector"}
            </button>
            <button
              onClick={() => setSelectedSector("private")}
              className={`px-4 py-2 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedSector === "private"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/60"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Building2 className="w-3.5 h-3.5 text-[#009FE3]" />
              {lang === "no" ? "Bank, Finans & Næringsliv" : "Banking & Enterprise"}
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {sectorContent[selectedSector][lang === "no" ? "headlineNo" : "headlineEn"]}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl">
              {sectorContent[selectedSector][lang === "no" ? "subNo" : "subEn"]}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#contact"
                className="px-6 py-3 rounded-md bg-[#009FE3] hover:bg-[#0088C5] text-white font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>{lang === "no" ? "Kontakt en senior rådgiver" : "Speak with a Senior Advisor"}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="px-6 py-3 rounded-md bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>{lang === "no" ? "Våre tjenester og metoder" : "Our Services & Methods"}</span>
              </a>
            </div>
          </div>

          {/* Right Highlight Box (Consultancy Trust Box) */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-7 space-y-5">
            <div className="flex items-center gap-2 text-[#009FE3] font-bold text-xs uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>{lang === "no" ? "Solid seniorkompetanse" : "Senior Domain Authority"}</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 leading-snug">
              {lang === "no"
                ? "Faglig tyngde forankret i lang erfaring"
                : "Deep expertise anchored in decades of practice"}
            </h3>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#009FE3] shrink-0 mt-0.5" />
                <span>
                  <strong>100% ISTQB-sertifisert</strong> — flertallet på Advanced-nivå
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#009FE3] shrink-0 mt-0.5" />
                <span>
                  <strong>Uavhengig rådgivning</strong> uten leverandørbindinger
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#009FE3] shrink-0 mt-0.5" />
                <span>
                  <strong>Nisjespesialitet</strong> innen store bygg, sykehus & Big Testing
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#009FE3] shrink-0 mt-0.5" />
                <span>
                  <strong>PROMIS-synergi</strong> med anskaffelse og IT-arkitektur
                </span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Universitetsgata 2 (Rebel)</span>
              <span className="font-semibold text-slate-700">Oslo, Norge</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Summary Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-lg bg-white border border-slate-200">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">15-20+ år</div>
            <div className="text-xs font-semibold text-slate-700 mb-0.5">Snitterfaring</div>
            <div className="text-[11px] text-slate-500">Senior testledere og rådgivere</div>
          </div>

          <div className="p-5 rounded-lg bg-white border border-slate-200">
            <div className="text-2xl sm:text-3xl font-bold text-[#009FE3] mb-1">100%</div>
            <div className="text-xs font-semibold text-slate-700 mb-0.5">ISTQB-sertifisert</div>
            <div className="text-[11px] text-slate-500">De fleste på Advanced-nivå</div>
          </div>

          <div className="p-5 rounded-lg bg-white border border-slate-200">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">120+</div>
            <div className="text-xs font-semibold text-slate-700 mb-0.5">Fullførte oppdrag</div>
            <div className="text-[11px] text-slate-500">Offentlig forvaltning & næringsliv</div>
          </div>

          <div className="p-5 rounded-lg bg-white border border-slate-200">
            <div className="text-2xl sm:text-3xl font-bold text-[#009FE3] mb-1">NS 6450</div>
            <div className="text-xs font-semibold text-slate-700 mb-0.5">Systematisk ferdigstillelse</div>
            <div className="text-[11px] text-slate-500">Sykehus, flyplasser & store bygg</div>
          </div>
        </div>
      </div>
    </section>
  );
}
