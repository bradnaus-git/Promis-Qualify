"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Globe, ExternalLink, ArrowRight } from "lucide-react";

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", labelNo: "Tjenester", labelEn: "Services" },
    { href: "#specialties", labelNo: "Big Testing & Bygg", labelEn: "Big Testing & Buildings" },
    { href: "#cases", labelNo: "Bransjer & Referanser", labelEn: "Sectors & References" },
    { href: "#calculator", labelNo: "Risikovurdering", labelEn: "Risk Assessment" },
    { href: "#careers", labelNo: "Karriere & Lønn", labelEn: "Careers & Salary" },
    { href: "#family", labelNo: "PROMIS-familien", labelEn: "PROMIS Family" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm transition-all">
      {/* Top micro-bar for senior affiliations */}
      <div className="bg-slate-50 border-b border-slate-100 py-1 px-4 sm:px-8 text-[11px] text-slate-500 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span>Rebel, Universitetsgata 2, Oslo</span>
          <span className="hidden md:inline text-slate-300">|</span>
          <span className="hidden md:inline">ISTQB Advanced-sertifiserte testledere</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://prolog.blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#009FE3] flex items-center gap-1 font-medium transition-colors"
          >
            <span>Fagblogg: ProLog</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-slate-300">|</span>
          <a href="mailto:post@promis-qualify.no" className="hover:text-[#009FE3] transition-colors">
            post@promis-qualify.no
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Actual Promis Qualify Official Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none" aria-label="Promis Qualify Hjem">
          <div className="relative h-12 w-48 sm:h-14 sm:w-56">
            <Image
              src="/logo.png"
              alt="Promis Qualify Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Hovednavigasjon">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-[#009FE3] transition-colors"
            >
              {lang === "no" ? link.labelNo : link.labelEn}
            </a>
          ))}
        </nav>

        {/* Right Actions: Language Switcher & Contact Button */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-300 bg-slate-50 text-xs font-semibold text-slate-700 hover:border-[#009FE3] hover:text-[#009FE3] transition-all"
            aria-label={lang === "no" ? "Switch language to English" : "Bytt språk til Norsk"}
          >
            <Globe className="w-3.5 h-3.5 text-[#009FE3]" />
            <span>{lang === "no" ? "English" : "Norsk"}</span>
          </button>

          {/* Primary Action Button */}
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2 rounded-md bg-[#009FE3] hover:bg-[#0088C5] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
          >
            <span>{lang === "no" ? "Kontakt oss" : "Contact Us"}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleLang}
            className="px-2 py-1 text-xs font-bold text-slate-700 border border-slate-300 rounded"
          >
            {lang === "no" ? "EN" : "NO"}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded text-slate-700 hover:text-slate-900 border border-slate-200"
            aria-label="Åpne meny"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-800 hover:text-[#009FE3] py-2 border-b border-slate-100"
            >
              {lang === "no" ? link.labelNo : link.labelEn}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://prolog.blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-xs text-slate-600 py-1.5"
            >
              <span>Fagblogg: ProLog</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-md bg-[#009FE3] text-white font-semibold text-xs mt-2"
            >
              {lang === "no" ? "Kontakt oss" : "Contact Us"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
