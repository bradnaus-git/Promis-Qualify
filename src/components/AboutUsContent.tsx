"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONTENT } from "@/data/site-content";
import {
  Heart,
  MapPin,
  Scale,
  HeartHandshake,
  Sparkles,
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Library,
  ChevronRight,
  ShieldCheck,
  Users,
  Award,
} from "lucide-react";

export default function AboutUsContent() {
  const { lang } = useLanguage();

  return (
    <div className="py-10 sm:py-16 bg-white min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Brødsmuler" className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            {lang === "no" ? "Hjem" : "Home"}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">{lang === "no" ? "Om oss & Kultur" : "About Us & Culture"}</span>
        </nav>

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#009FE3] mb-2">
            <span>05 / OM PROMIS QUALIFY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            {lang === "no"
              ? "Senior kompetanse, uavhengighet og ekte samfunnsengasjement"
              : "Senior Expertise, Independence & Genuine Social Impact"}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {lang === "no"
              ? "Promis Qualify ble etablert i 2014 for å tilby Norges tyngste spissmiljø innen testledelse og kvalitetssikring. Vi er partnereid, faglig uavhengige og holder til på Rebel i Oslo sentrum."
              : "Established in 2014, Promis Qualify offers Norway's premier domain authority in test leadership and quality governance. Partner-owned, vendor-independent, and based at Rebel in central Oslo."}
          </p>
        </div>

        {/* 3 Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {SITE_CONTENT.culture.values.map((v, idx) => {
            const icons = [
              <Scale key="0" className="w-5 h-5 text-[#009FE3]" />,
              <HeartHandshake key="1" className="w-5 h-5 text-indigo-600" />,
              <Sparkles key="2" className="w-5 h-5 text-amber-500" />,
            ];
            const badgeBg = [
              "bg-blue-50 border-blue-100 text-[#009FE3]",
              "bg-indigo-50 border-indigo-100 text-indigo-600",
              "bg-amber-50 border-amber-100 text-amber-600",
            ];
            const topBarColors = [
              "from-[#009FE3] to-sky-400",
              "from-indigo-500 to-indigo-400",
              "from-amber-500 to-amber-400",
            ];

            return (
              <div
                key={v.titleNo}
                className="relative bg-white border border-slate-200 rounded-2xl p-7 shadow-xs hover:shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between overflow-hidden"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${topBarColors[idx]}`}
                />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center ${badgeBg[idx]}`}
                    >
                      {icons[idx]}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {lang === "no" ? v.titleNo : v.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {lang === "no" ? v.descNo : v.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2 Feature Cards: Rebel Oslo & Education for Life Nepal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Rebel Oslo */}
          <div id="rebel" className="scroll-mt-24 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden group">
                <Image
                  src="/images/culture/rebel-oslo-sign.jpg"
                  alt={lang === "no" ? "Rebel Oslo med fasadeskilt ved Universitetsgata 2, Tullinkvartalet" : "Rebel Oslo with facade sign at Universitetsgata 2, Tullinkvartalet"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-[left_center] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[11px] font-semibold text-slate-800 shadow-xs flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#009FE3]" />
                    Rebel Oslo • Universitetsgata 2
                  </span>
                </div>
                <div className="absolute top-3.5 right-3.5">
                  <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[10px] font-medium text-white/80">
                    Ill: Mad arkitekter / Entra
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-8 space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">
                  {lang === "no" ? "Rebel — Norges råeste teknologihub" : "Rebel — Norway's Premier Tech Hub"}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {lang === "no"
                    ? "Vårt hovedkontor ligger i hjertet av Oslo på Rebel i Universitetsgata 2. Her sitter vi tett på Norges mest dynamiske tech-miljø med faglige meetups, faggrupper og kunnskapsdeling på tvers av bransjer."
                    : "Headquartered at Rebel in central Oslo (Universitetsgata 2), we are embedded in Norway's most vibrant technology center, surrounded by top tech talent, industry conferences, and shared innovation."}
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-600 font-medium">
                  <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200">
                    Tullinkvartalet
                  </span>
                  <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200">
                    Universitetsgata 2
                  </span>
                  <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200">
                    150+ Tech-selskaper
                  </span>
                </div>
              </div>
            </div>

            <div className="p-7 sm:p-8 pt-0">
              <a
                href="https://rebel.no"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#009FE3] hover:underline"
              >
                <span>{lang === "no" ? "Utforsk Rebel Oslo" : "Explore Rebel Oslo"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Education for Life Nepal */}
          <div id="nepal" className="scroll-mt-24 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden group">
                <Image
                  src="/images/culture/nepal-education.jpg"
                  alt={lang === "no" ? "Skolebarn med bøker i Nepal" : "School children reading books in Nepal"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[11px] font-semibold text-red-600 shadow-xs flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                    {lang === "no" ? "Samfunnsengasjement (10+ år)" : "Social Impact (10+ years)"}
                  </span>
                </div>
                <div className="absolute top-3.5 right-3.5">
                  <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[10px] font-medium text-white/80">
                    Pokhara & Horten
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-8 space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">
                  {lang === "no" ? "Education for Life Nepal" : "Education for Life Nepal"}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {lang === "no"
                    ? "Gjennom over 10 år har Promis Qualify vært fast støttespiller for Education for Life Nepal. Vi bidrar direkte til etablering av barnebiblioteker, skolegang og læremateriell for vanskeligstilte barn i Nepal."
                    : "For more than a decade, Promis Qualify has served as a primary sponsor for Education for Life Nepal, establishing community libraries, school supplies, and literacy programs in rural Nepal."}
                </p>

                {/* 3 Authentic Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <Library className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                    <span className="text-lg font-bold text-slate-900 block">155</span>
                    <span className="text-[10px] text-slate-500 font-medium">Biblioteker</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <GraduationCap className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                    <span className="text-lg font-bold text-slate-900 block">50k+</span>
                    <span className="text-[10px] text-slate-500 font-medium">Elever nådd</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <BookOpen className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                    <span className="text-lg font-bold text-slate-900 block">100k+</span>
                    <span className="text-[10px] text-slate-500 font-medium">Bøker levert</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-7 sm:p-8 pt-0">
              <a
                href="https://educationforlife.no"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#009FE3] hover:underline"
              >
                <span>{lang === "no" ? "Les mer om prosjektet" : "Read about Education for Life"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* PROMIS Family Teaser Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-xs font-medium text-slate-300">
              <Users className="w-3.5 h-3.5 text-[#009FE3]" />
              <span>{lang === "no" ? "En del av PROMIS-familien" : "Part of the PROMIS Family"}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              {lang === "no"
                ? "60 spesialister på tvers av test, prosjektledelse og rådgivning"
                : "60 Specialists Across QA, Project Management & Architecture"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lang === "no"
                ? "Gjennom PROMIS-familien (Promis Qualify, PROMIS AS og PROMIS Navigate) samarbeider vi med Norges mest erfarne prosjektledere og virksomhetsarkitekter for å levere helhetlig prosjektsuksess."
                : "Through the PROMIS family ecosystem, we collaborate with senior project managers and enterprise architects to ensure end-to-end delivery success."}
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/promis-familien"
              className="px-6 py-3 rounded-lg bg-white hover:bg-slate-100 text-slate-900 text-xs font-semibold transition-all shadow-sm"
            >
              {lang === "no" ? "Se medarbeidergalleri (60)" : "View Consultant Directory (60)"}
            </Link>
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-lg bg-[#009FE3] hover:bg-[#0088C5] text-white text-xs font-semibold transition-all shadow-sm"
            >
              {lang === "no" ? "Kontakt ledelsen" : "Contact Leadership"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
