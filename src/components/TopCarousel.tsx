"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Award, Users, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface SlideData {
  id: number;
  image: string;
  badgeNo: string;
  badgeEn: string;
  titleNo: string;
  titleEn: string;
  subNo: string;
  subEn: string;
  tagNo: string;
  tagEn: string;
  ctaTextNo: string;
  ctaTextEn: string;
  ctaHref: string;
  altText: string;
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    image: "/images/carousel/slide-1.jpg",
    badgeNo: "Senior Testledelse • Rebel Oslo",
    badgeEn: "Senior Test Advisory • Rebel Oslo",
    titleNo: "Kvalitetssikring forankret i dyp seniorkompetanse",
    titleEn: "Quality Assurance Anchored in Decades of Practice",
    subNo:
      "Våre rådgivere har i gjennomsnitt over 15–20 års erfaring med operativ og strategisk testledelse for Norges mest krevende IT- og byggeprosjekter.",
    subEn:
      "Our advisors average over 15–20+ years of deep domain experience in operational and strategic test management for mission-critical systems.",
    tagNo: "100% ISTQB-sertifisert • 50+ snittalder",
    tagEn: "100% ISTQB Certified • Senior Domain Experts",
    ctaTextNo: "Møt våre rådgivere",
    ctaTextEn: "Meet Our Advisors",
    ctaHref: "/promis-familien",
    altText: "Senior consultants collaborating in modern Oslo architectural boardroom with architecture metrics",
  },
  {
    id: 2,
    image: "/images/carousel/slide-2.jpg",
    badgeNo: "Teknisk Testledelse • Automasjon & Sky",
    badgeEn: "Technical Test Leadership • Automation & Cloud",
    titleNo: "Uavhengig validering av komplekse systemintegrasjoner",
    titleEn: "Independent Validation of Complex Integrations",
    subNo:
      "Fra kjernebanksystemer og helse-IKT til sanntidsintegrasjoner: Vi etablerer robuste automatiserte testrigger og forhindrer kritiske feil i produksjon.",
    subEn:
      "From core banking and healthcare IT to real-time pipelines: We establish automated quality gates and mitigate production defects.",
    tagNo: "API & Ytelsestest • CI/CD Quality Gates",
    tagEn: "API & Performance Testing • Continuous Delivery Gates",
    ctaTextNo: "Våre tjenester og metoder",
    ctaTextEn: "Our Services & Methods",
    ctaHref: "#services",
    altText: "Senior IT consultants reviewing automated QA test pipelines on dual monitors overlooking Oslo",
  },
  {
    id: 3,
    image: "/images/carousel/slide-3.jpg",
    badgeNo: "Styringsgruppe • NS 6450 & Big Testing",
    badgeEn: "Executive Governance • NS 6450 & Big Testing",
    titleNo: "Forutsigbarhet for styringsgruppen og toppledelsen",
    titleEn: "Executive Governance & Predictable Delivery Cadence",
    subNo:
      "Spesialister på tverrfaglig prøvedrift, risikoavlastning og systematisk ferdigstillelse for sykehus, flyplasser og samfunnskritisk infrastruktur.",
    subEn:
      "Specialists in systematic commissioning (NS 6450), risk mitigation, and integrated operational trials for mission-critical infrastructure.",
    tagNo: "Statens prosjektmodell • NS 6450 Spesialister",
    tagEn: "Commissioning NS 6450 • Cyber-Physical QA",
    ctaTextNo: "Kontakt en senior testrådgiver",
    ctaTextEn: "Speak With a Senior Advisor",
    ctaHref: "#contact",
    altText: "Senior Norwegian consultants discussing strategy and project risk in a fjord-view boardroom",
  },
];

export default function TopCarousel() {
  const { lang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch swipe handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-slate-200 shadow-lg bg-slate-900 mb-10 group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label={lang === "no" ? "Promis Qualify rådgivere i arbeid" : "Promis Qualify consultants at work"}
    >
      {/* Slides Container */}
      <div className="relative w-full h-[460px] sm:h-[500px] lg:h-[540px]">
        {SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
              aria-hidden={!isActive}
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.altText}
                className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-[7000ms] ease-out motion-safe:group-hover:scale-105"
                loading={index === 0 ? "eager" : "lazy"}
              />

              {/* Gradient Overlays for Clean Scandinavian Legibility */}
              {/* Left darkened gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/60 to-transparent w-full md:w-3/4" />
              {/* Subtle bottom shadow to ground controls */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
              {/* Subtle top shadow */}
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-950/40 to-transparent" />

              {/* Slide Content Box */}
              <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 sm:p-10 lg:p-12 max-w-3xl">
                {/* Top Badge */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-white/40 shadow-sm text-xs font-bold text-[#009FE3]">
                    <span className="w-2 h-2 rounded-full bg-[#009FE3] animate-pulse" />
                    <span>{lang === "no" ? slide.badgeNo : slide.badgeEn}</span>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/70 backdrop-blur-md border border-white/20 text-[11px] font-medium text-slate-200">
                    <Award className="w-3 h-3 text-[#009FE3]" />
                    <span>{lang === "no" ? slide.tagNo : slide.tagEn}</span>
                  </span>
                </div>

                {/* Main Text Content */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-md">
                    {lang === "no" ? slide.titleNo : slide.titleEn}
                  </h2>

                  <p className="text-xs sm:text-base text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow">
                    {lang === "no" ? slide.subNo : slide.subEn}
                  </p>

                  {/* Call to Action Button */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={slide.ctaHref}
                      className="px-5 py-2.5 rounded-lg bg-[#009FE3] hover:bg-[#0088C5] text-white text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                    >
                      <span>{lang === "no" ? slide.ctaTextNo : slide.ctaTextEn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <a
                      href="#contact"
                      className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 text-xs sm:text-sm font-medium transition-all"
                    >
                      {lang === "no" ? "Forespør oppdrag" : "Request Consultation"}
                    </a>
                  </div>
                </div>

                {/* Bottom spacer to make room for pagination bar */}
                <div className="h-6" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Carousel Navigation Bar (Bottom Controls) */}
      <div className="absolute bottom-4 sm:bottom-6 left-6 sm:left-10 right-6 sm:right-10 z-30 flex items-center justify-between pointer-events-none">
        {/* Slide Indicators / Dots */}
        <div className="flex items-center gap-2 pointer-events-auto bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          {SLIDES.map((slide, idx) => {
            const isCurrent = idx === currentSlide;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full h-2 ${
                  isCurrent ? "w-7 bg-[#009FE3]" : "w-2 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Gå til bilde ${idx + 1}`}
                aria-current={isCurrent}
              />
            );
          })}
        </div>

        {/* Counter and Arrows */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Slide index counter */}
          <div className="hidden sm:block text-xs font-semibold text-white/80 bg-slate-900/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
            0{currentSlide + 1} / 0{SLIDES.length}
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="p-2 sm:p-2.5 rounded-full bg-white/90 hover:bg-[#009FE3] text-slate-800 hover:text-white transition-all shadow-md border border-white/20"
            aria-label={lang === "no" ? "Forrige bilde" : "Previous slide"}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="p-2 sm:p-2.5 rounded-full bg-white/90 hover:bg-[#009FE3] text-slate-800 hover:text-white transition-all shadow-md border border-white/20"
            aria-label={lang === "no" ? "Neste bilde" : "Next slide"}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
