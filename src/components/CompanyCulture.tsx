"use client";

import React from "react";
import Image from "next/image";
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
  CheckCircle2,
} from "lucide-react";

export default function CompanyCulture() {
  const { lang } = useLanguage();

  return (
    <section id="culture" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#009FE3] mb-2">
          <span>{lang === "no" ? "05 / KULTUR & SAMFUNNSANSVAR" : "05 / CULTURE & IMPACT"}</span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-semibold text-[#009FE3] mb-3">
            <span>{lang === "no" ? "Våre verdier" : "Our Cultural Values"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {lang === "no" ? "Balanse • Inkludering • Engasjement" : "Balance • Inclusion • Dedication"}
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {lang === "no"
              ? "Promis Qualify er bygget på langsiktighet, tillit og faglig stolthet. Vi vet at de beste leveransene skapes når konsulentene opplever balanse mellom krevende oppdrag og privatliv."
              : "Promis Qualify is founded on sustainable careers, mutual trust, and craft excellence. We believe top quality stems from work-life balance."}
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
              "from-amber-500 to-orange-400",
            ];

            return (
              <div
                key={idx}
                className="relative p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all text-left overflow-hidden group"
              >
                {/* Accent top stripe */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${topBarColors[idx]}`} />

                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${badgeBg[idx]}`}>
                    {icons[idx]}
                  </div>
                  <span className="text-xs font-bold text-slate-400">0{idx + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {lang === "no" ? v.titleNo : v.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {lang === "no" ? v.descNo : v.descEn}
                </p>
              </div>
            );
          })}
        </div>

        {/* Rebel Oslo & Nepal */}
        <div id="rebel-samfunn" className="scroll-mt-28 pt-8 border-t border-slate-200">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#009FE3] mb-6">
            <span>{lang === "no" ? "LOKASJON & SAMFUNNSANSVAR" : "LOCATION & SOCIAL IMPACT"}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Rebel Oslo Card */}
            <div className="rounded-2xl bg-white border border-slate-200 shadow-xs overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="relative h-60 sm:h-72 w-full bg-slate-900 overflow-hidden group">
                  <Image
                    src="/images/culture/rebel-oslo-sign.jpg"
                    alt={lang === "no" ? "Rebel Oslo med fasadeskilt ved Universitetsgata 2, Tullinkvartalet" : "Rebel Oslo with facade sign at Universitetsgata 2, Tullinkvartalet"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-[left_center] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-slate-800 shadow-xs flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#009FE3]" />
                      Rebel Oslo • Universitetsgata 2
                    </span>
                  </div>
                  {/* Source Credit Tag */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[10px] font-medium text-white/80" title="Kilde / Illustrasjon: Mad arkitekter / Entra">
                      Ill: Mad arkitekter / Entra
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#009FE3] mb-1">
                    {lang === "no" ? "Teknologihub & Fagmiljø" : "Tech Hub & Community"}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight mb-3">
                    {lang === "no" ? "Hovedkontor i hjertet av Oslo" : "Headquarters in the Heart of Oslo"}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {lang === "no"
                      ? "Vi holder til på Rebel i Universitetsgata 2 – Oslos fremste samlingspunkt for teknologimiljøer og kunnskapsdeling. Her møtes vi jevnlig til faglige samlinger, kurs og sosiale aktiviteter."
                      : "We are located at Rebel in Universitetsgata 2 – Oslo's premier hub for tech communities and knowledge sharing. Here we gather regularly for workshops, courses, and social events."}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 py-3 border-t border-slate-100 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#009FE3] shrink-0" />
                      <span>{lang === "no" ? "Faglige samlinger & meetups" : "Workshops & tech meetups"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#009FE3] shrink-0" />
                      <span>{lang === "no" ? "Auditorium & Rebel Cafe" : "Auditorium & Rebel Cafe"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#009FE3] shrink-0" />
                      <span>{lang === "no" ? "3 min fra Nationaltheatret" : "3 min from central transit"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#009FE3] shrink-0" />
                      <span>{lang === "no" ? "Nordens råeste teknologihub" : "Premier Nordic tech hub"}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">
                  {lang === "no" ? "0164 Oslo, Norge" : "0164 Oslo, Norway"}
                </span>
                <a
                  href="https://maps.google.com/?q=Rebel,+Universitetsgata+2,+0164+Oslo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors"
                >
                  <span>{lang === "no" ? "Åpne i Google Maps" : "Open in Maps"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Education for Life Nepal Card */}
            <div className="rounded-2xl bg-white border border-slate-200 shadow-xs overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="relative h-60 sm:h-72 w-full bg-slate-900 overflow-hidden group">
                  <Image
                    src="/images/culture/nepal-education.jpg"
                    alt={lang === "no" ? "Skolebarn med bøker i Nepal" : "School children reading books in Nepal"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-red-600 shadow-xs flex items-center gap-1.5">
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

                <div className="p-6 sm:p-7">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-amber-600 mb-1">
                    Education for Life Nepal
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight mb-3">
                    {lang === "no" ? "Bøker og biblioteker til tusenvis av barn" : "Libraries & Books for Thousands of Children"}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {lang === "no"
                      ? "Gjennom et mer enn 10 år langt forankret samarbeid med stiftelsen Education for Life Nepal har Promis Qualify bidratt direkte til barns skolegang, trygghet og utvikling i noen av Nepals mest ressursfattige områder."
                      : "Through a dedicated partnership spanning over a decade with Education for Life Nepal, Promis Qualify has directly supported children's education, safety, and health in Nepal's most under-resourced regions."}
                  </p>

                  {/* 3 Concrete Impact Metrics from Old Website */}
                  <div className="grid grid-cols-3 gap-2.5 py-3 px-3 bg-blue-50/60 rounded-xl border border-blue-100 mb-2 text-center">
                    <div>
                      <div className="flex items-center justify-center mb-1 text-[#009FE3]">
                        <Library className="w-4 h-4" />
                      </div>
                      <div className="text-base sm:text-lg font-extrabold text-slate-900">155</div>
                      <div className="text-[10px] text-slate-600 font-medium">
                        {lang === "no" ? "Biblioteker" : "Libraries"}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mb-1 text-[#009FE3]">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div className="text-base sm:text-lg font-extrabold text-slate-900">50 000+</div>
                      <div className="text-[10px] text-slate-600 font-medium">
                        {lang === "no" ? "Elever nådd" : "Students"}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mb-1 text-[#009FE3]">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div className="text-base sm:text-lg font-extrabold text-slate-900">100 000+</div>
                      <div className="text-[10px] text-slate-600 font-medium">
                        {lang === "no" ? "Bøker levert" : "Books Funded"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 text-xs text-slate-500 flex items-center justify-between border-t border-slate-100 pt-3">
                <span className="font-medium">
                  {lang === "no" ? "«Namaste Promis Qualify» – Pokhara & Horten" : "«Namaste Promis Qualify» – Pokhara & Horten"}
                </span>
                <span className="text-[11px] font-bold text-[#009FE3]">10+ {lang === "no" ? "år" : "yrs"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
