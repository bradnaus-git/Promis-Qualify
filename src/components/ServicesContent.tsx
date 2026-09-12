"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONTENT } from "@/data/site-content";
import {
  ShieldCheck,
  LineChart,
  Building2,
  Cpu,
  Check,
  ArrowRight,
  BookOpen,
  ExternalLink,
  ChevronRight,
  Award,
  CheckCircle2,
} from "lucide-react";

interface ServicesContentProps {
  onOpenInquiry?: (serviceId: string) => void;
}

export default function ServicesContent({ onOpenInquiry }: ServicesContentProps = {}) {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("testledelse");

  const icons: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#009FE3]" />,
    LineChart: <LineChart className="w-5 h-5 text-[#009FE3]" />,
    Building2: <Building2 className="w-5 h-5 text-[#009FE3]" />,
    Cpu: <Cpu className="w-5 h-5 text-[#009FE3]" />,
  };

  useEffect(() => {
    const validServices = ["testledelse", "testradgivning", "byggeprosjekter", "big-testing"];

    const selectService = (id: string, shouldScroll: boolean = false) => {
      if (validServices.includes(id)) {
        setActiveTab(id);
        if (shouldScroll) {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      selectService(hash, false);
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);

    return () => {
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  const activeService = SITE_CONTENT.services.find((s) => s.id === activeTab) || SITE_CONTENT.services[0];

  return (
    <div className="py-10 sm:py-16 bg-white min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Brødsmuler" className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            {lang === "no" ? "Hjem" : "Home"}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">{lang === "no" ? "Tjenester" : "Services"}</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#009FE3] mb-2">
            <span>01 / FAGOMRÅDER & TJENESTER</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            {lang === "no"
              ? "Uavhengig testledelse og testrådgivning"
              : "Independent Test Management & QA Advisory"}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {lang === "no"
              ? "Promis Qualify er et spisskompetent konsulentmiljø som utelukkende fokuserer på test, testledelse og kvalitetssikring. Våre rådgivere har i snitt 15–20+ års erfaring og er 100% ISTQB-sertifiserte."
              : "Promis Qualify is a specialized consultancy dedicated exclusively to quality governance, test leadership, and commissioning. Our advisors average 15–20+ years of experience and hold full ISTQB certifications."}
          </p>
        </div>

        {/* 4 Service Selectors / Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {SITE_CONTENT.services.map((service) => {
            const isSelected = service.id === activeTab;
            return (
              <button
                key={service.id}
                id={service.id}
                onClick={() => {
                  setActiveTab(service.id);
                  if (typeof window !== "undefined") {
                    window.history.replaceState(null, "", `#${service.id}`);
                  }
                }}
                className={`p-5 rounded-xl text-left transition-all border flex flex-col justify-between ${
                  isSelected
                    ? "bg-white border-[#009FE3] shadow-md ring-2 ring-[#009FE3]"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/70 shadow-2xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-lg bg-blue-50/80 border border-blue-100">
                      {icons[service.icon]}
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#009FE3]" />
                    )}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5 leading-snug">
                    {lang === "no" ? service.titleNo : service.titleEn}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {lang === "no" ? service.descriptionNo : service.descriptionEn}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? "text-[#009FE3]" : "text-slate-500"}>
                    {isSelected ? (lang === "no" ? "Aktiv visning" : "Active view") : (lang === "no" ? "Velg tjeneste" : "Select service")}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "text-[#009FE3] translate-x-0.5" : "text-slate-400"}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Tab Deep Dive Details */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: In-depth Description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200">
                  {icons[activeService.icon]}
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#009FE3]">
                    {lang === "no" ? "Spesialistområde" : "Specialist Area"}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {lang === "no" ? activeService.titleNo : activeService.titleEn}
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {lang === "no" ? activeService.descriptionNo : activeService.descriptionEn}
              </p>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#009FE3]" />
                  <span>{lang === "no" ? "Faglig forankring & rammeverk" : "Standards & Frameworks"}</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeTab === "byggeprosjekter"
                    ? lang === "no"
                      ? "Arbeidet følger NS 6450 (Systematisk ferdigstillelse) med tverrfaglig koordinering av VVS, elektro, automasjon/SD-anlegg og IKT-infrastruktur."
                      : "Aligned with NS 6450 (Systematic Commissioning), bridging HVAC, electrical, building management (BMS), and core IT infrastructure."
                    : activeTab === "big-testing"
                    ? lang === "no"
                      ? "Forankret i Promis Qualifys metodikk for Big Testing: helhetlig prøvedrift, stresstesting av forretningsprosesser og driftsklarhet."
                      : "Grounded in Promis Qualify's Big Testing methodology: integrated operational trial runs, business process stress-testing, and operational readiness."
                    : lang === "no"
                    ? "Forankret i ISTQB (flertallet på Advanced-nivå), PS2000, Statens prosjektmodell og smidig metodikk (Scrum / SAFe)."
                    : "Anchored in ISTQB (majority at Advanced level), agile squads, public governance standards, and structured risk analysis."}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                {onOpenInquiry ? (
                  <button
                    type="button"
                    onClick={() => onOpenInquiry(activeTab)}
                    className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wide transition-all shadow-xs flex items-center gap-2"
                  >
                    <span>
                      {activeTab === "testledelse"
                        ? lang === "no"
                          ? "Forespør erfaren testleder"
                          : "Request Senior Test Manager"
                        : activeTab === "testradgivning"
                        ? lang === "no"
                          ? "Bestill modenhetsvurdering / rådgivning"
                          : "Book QA Assessment / Advisory"
                        : activeTab === "byggeprosjekter"
                        ? lang === "no"
                          ? "Forespør NS 6450-gjennomgang"
                          : "Request NS 6450 Commissioning Review"
                        : lang === "no"
                        ? "Diskuter Big Testing & Prøvedrift"
                        : "Discuss Big Testing & Operational Trials"}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                ) : (
                  <Link
                    href="/#contact"
                    className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wide transition-all shadow-xs flex items-center gap-2"
                  >
                    <span>{lang === "no" ? "Forespør rådgiver" : "Inquire Advisor"}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </Link>
                )}
                <Link
                  href="/#calculator"
                  className="px-6 py-3 rounded-lg bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-medium text-xs transition-all flex items-center gap-2 shadow-2xs"
                >
                  <span>{lang === "no" ? "Vurder prosjektrisiko" : "Assess Project Risk"}</span>
                </Link>
              </div>
            </div>

            {/* Right: Key Deliverables Table / Box */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 p-6 sm:p-7 rounded-xl space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 pb-2 border-b border-slate-200">
                {lang === "no" ? "Våre leveranser og fokusområder" : "Key Deliverables & Responsibilities"}
              </h4>

              <ul className="space-y-3.5">
                {(lang === "no" ? activeService.bulletsNo : activeService.bulletsEn).map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-md bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#009FE3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 leading-snug">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#009FE3] shrink-0" />
                <span>
                  {lang === "no"
                    ? "Uavhengig rådgivning forankret i ISTQB og NS 6450 standarder."
                    : "Independent governance aligned with ISTQB and NS 6450 standards."}
                </span>
              </div>

              {activeService.publication && (
                <div className="mt-4 p-4 rounded-lg bg-blue-50/80 border border-blue-200 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#009FE3]">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{lang === "no" ? "Fagartikkel & Publikasjon" : "Technical Paper & Publication"}</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-900 leading-snug">
                    {lang === "no" ? activeService.publication.titleNo : activeService.publication.titleEn}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {activeService.publication.author}
                  </p>
                  <a
                    href={activeService.publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#009FE3] hover:underline font-semibold pt-1"
                  >
                    <span>{lang === "no" ? "Les hele fagartikkelen her" : "Read the full technical paper"}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Banner: Need advisory? */}
        <div className="mt-12 p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">
              {lang === "no" ? "Usikker på hvilken kompetanse prosjektet ditt trenger?" : "Not sure which competency your project requires?"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              {lang === "no"
                ? "Vi tar gjerne en uforpliktende sparring om prosjektets risikobilde, tidsplan og testbehov."
                : "We welcome an informal discussion about your delivery risk profile, timeline, and QA staffing needs."}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:91865925"
              className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-semibold transition-colors"
            >
              {lang === "no" ? "Ring Remi: 918 65 925" : "Call Remi: 918 65 925"}
            </a>
            <Link
              href="/#contact"
              className="px-5 py-2.5 rounded-lg bg-[#009FE3] hover:bg-[#0088C5] text-white text-xs font-semibold transition-all shadow-sm"
            >
              {lang === "no" ? "Ta kontakt" : "Contact Us"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
