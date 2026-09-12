"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Heart, ArrowRight, Users, Scale, HeartHandshake, Sparkles } from "lucide-react";

export default function CultureTeaser() {
  const { lang } = useLanguage();

  return (
    <section id="culture" className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#009FE3] mb-2">
              <span>04 / KULTUR, SAMFUNN & FOLK</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {lang === "no"
                ? "Balanse, inkludering og ekte engasjement"
                : "Balance, Inclusion & Genuine Engagement"}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              {lang === "no"
                ? "Vi holder til på Rebel i Oslo, støtter skolebarn i Nepal gjennom over et tiår, og er partnereide med et felles mål om faglig kvalitet og bærekraftig balanse."
                : "Headquartered at Rebel in Oslo, supporting school children in Nepal for 10+ years, and partner-owned with a focus on craft excellence and balance."}
            </p>
          </div>

          <Link
            href="/om-oss"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all shadow-xs shrink-0 self-start md:self-auto"
          >
            <span>{lang === "no" ? "Bli kjent med Promis Qualify" : "About Promis Qualify"}</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          </Link>
        </div>

        {/* 2 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Card 1: Rebel Oslo */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div className="relative h-48 sm:h-56 w-full bg-slate-900 overflow-hidden group">
                <Image
                  src="/images/culture/rebel-oslo-sign.jpg"
                  alt="Rebel Oslo"
                  fill
                  className="object-cover object-[left_center] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[11px] font-semibold text-slate-800 shadow-xs flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#009FE3]" />
                    Rebel Oslo • Universitetsgata 2
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-lg font-bold text-slate-900">
                  {lang === "no" ? "Hovedkontor på Rebel Oslo" : "Headquarters at Rebel Oslo"}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === "no"
                    ? "Tett på Norges mest dynamiske tech-miljø i Tullinkvartalet, med over 150 teknologiselskaper under samme tak."
                    : "Embedded in Norway's most vibrant tech center at Tullinkvartalet, with 150+ technology firms under one roof."}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Link
                href="/om-oss#rebel"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#009FE3] hover:underline"
              >
                <span>{lang === "no" ? "Les om vårt miljø på Rebel" : "Read about our hub at Rebel"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Nepal CSR */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div className="relative h-48 sm:h-56 w-full bg-slate-900 overflow-hidden group">
                <Image
                  src="/images/culture/nepal-education.jpg"
                  alt="Education for Life Nepal"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[11px] font-semibold text-red-600 shadow-xs flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                    {lang === "no" ? "Samfunnsansvar (10+ år)" : "Social Impact (10+ years)"}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-lg font-bold text-slate-900">
                  {lang === "no" ? "Education for Life Nepal" : "Education for Life Nepal"}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === "no"
                    ? "Gjennom over 10 år har vi bidratt til å bygge 155 skolebiblioteker og gi mer enn 50 000 barn tilgang til bøker og læring."
                    : "For 10+ years we have funded 155 school libraries, giving over 50,000 children access to quality learning materials."}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Link
                href="/om-oss#nepal"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#009FE3] hover:underline"
              >
                <span>{lang === "no" ? "Se vårt engasjement i Nepal" : "Read about our Nepal engagement"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* PROMIS Family Teaser Strip */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#009FE3] shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                {lang === "no" ? "PROMIS-familien: 60 seniorrådgivere" : "The PROMIS Family: 60 Senior Advisors"}
              </h4>
              <p className="text-xs text-slate-500">
                {lang === "no"
                  ? "Tverrfaglig synergi mellom Promis Qualify, PROMIS AS og PROMIS Navigate."
                  : "Collaborative synergy between Promis Qualify, PROMIS AS, and PROMIS Navigate."}
              </p>
            </div>
          </div>

          <Link
            href="/promis-familien"
            className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-semibold text-slate-800 transition-colors shrink-0"
          >
            {lang === "no" ? "Se medarbeidere (60)" : "View Consultants (60)"}
          </Link>
        </div>
      </div>
    </section>
  );
}
