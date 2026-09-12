"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONTENT } from "@/data/site-content";
import { ShieldCheck, Award, Building, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import TopCarousel from "./TopCarousel";

interface HeroProps {
  onOpenInquiry?: (serviceId?: string) => void;
}

export default function Hero({ onOpenInquiry }: HeroProps) {
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
            <span>{lang === "no" ? "Oslo, Norge" : "Oslo, Norway"}</span>
            <span>•</span>
            <span className="hidden sm:inline">
              {lang === "no" ? "Del av PROMIS-familien" : "Part of the PROMIS Family"}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-600 font-medium">
              {lang === "no" ? "Balanse • Inkludering • Engasjement" : "Balance • Inclusion • Dedication"}
            </span>
          </div>
        </div>

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
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
                onClick={(e) => {
                  if (onOpenInquiry) {
                    e.preventDefault();
                    onOpenInquiry(selectedSector === "public" ? "byggeprosjekter" : "testledelse");
                  }
                }}
                className="px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2 border border-slate-900"
              >
                <span>{lang === "no" ? "Kontakt en senior rådgiver" : "Speak with a Senior Advisor"}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="#services"
                className="px-6 py-3.5 rounded-lg bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-2xs"
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
                  <strong>{lang === "no" ? "100% ISTQB-sertifisert" : "100% ISTQB Certified"}</strong> —{" "}
                  {lang === "no" ? "flertallet på Advanced-nivå" : "majority at Advanced level"}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#009FE3] shrink-0 mt-0.5" />
                <span>
                  <strong>{lang === "no" ? "Uavhengig rådgivning" : "Independent Advisory"}</strong>{" "}
                  {lang === "no" ? "uten leverandørbindinger" : "free of vendor lock-in"}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#009FE3] shrink-0 mt-0.5" />
                <span>
                  <strong>{lang === "no" ? "Nisjespesialitet" : "Niche Specialization"}</strong>{" "}
                  {lang === "no" ? "innen store bygg, sykehus & Big Testing" : "in smart facilities, hospitals & Big Testing"}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#009FE3] shrink-0 mt-0.5" />
                <span>
                  <strong>{lang === "no" ? "PROMIS-synergi" : "PROMIS Synergies"}</strong>{" "}
                  {lang === "no" ? "med anskaffelse og IT-arkitektur" : "with procurement and architecture"}
                </span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Universitetsgata 2 (Rebel)</span>
              <span className="font-semibold text-slate-700">{lang === "no" ? "Oslo, Norge" : "Oslo, Norway"}</span>
            </div>
          </div>
        </div>

        {/* Visual Carousel: Professional Consultants in Action */}
        <div className="mb-14">
          <TopCarousel onOpenInquiry={onOpenInquiry} />
        </div>

        {/* 4 Pillars Summary Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-lg bg-white border border-slate-200">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
              {lang === "no" ? "15-20+ år" : "15-20+ yrs"}
            </div>
            <div className="text-xs font-semibold text-slate-700 mb-0.5">
              {lang === "no" ? "Snitterfaring" : "Avg. Experience"}
            </div>
            <div className="text-[11px] text-slate-500">
              {lang === "no" ? "Senior testledere og rådgivere" : "Senior test leads & advisors"}
            </div>
          </div>

          <div className="p-5 rounded-lg bg-white border border-slate-200">
            <div className="text-2xl sm:text-3xl font-bold text-[#009FE3] mb-1">100%</div>
            <div className="text-xs font-semibold text-slate-700 mb-0.5">
              {lang === "no" ? "ISTQB-sertifisert" : "ISTQB Certified"}
            </div>
            <div className="text-[11px] text-slate-500">
              {lang === "no" ? "De fleste på Advanced-nivå" : "Majority at Advanced level"}
            </div>
          </div>

          <div className="p-5 rounded-lg bg-white border border-slate-200">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">120+</div>
            <div className="text-xs font-semibold text-slate-700 mb-0.5">
              {lang === "no" ? "Fullførte oppdrag" : "Completed Deliveries"}
            </div>
            <div className="text-[11px] text-slate-500">
              {lang === "no" ? "Offentlig forvaltning & næringsliv" : "Public & private sector"}
            </div>
          </div>

          <div className="p-5 rounded-lg bg-white border border-slate-200">
            <div className="text-2xl sm:text-3xl font-bold text-[#009FE3] mb-1">NS 6450</div>
            <div className="text-xs font-semibold text-slate-700 mb-0.5">
              {lang === "no" ? "Systematisk ferdigstillelse" : "Systematic Commissioning"}
            </div>
            <div className="text-[11px] text-slate-500">
              {lang === "no" ? "Sykehus, flyplasser & store bygg" : "Hospitals, airports & smart buildings"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
