"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Menu, X, Globe, ExternalLink, ArrowRight } from "lucide-react";

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", labelNo: "Tjenester", labelEn: "Services" },
    { href: "#specialties", labelNo: "Big Testing & Bygg", labelEn: "Big Testing & Buildings" },
    { href: "#calculator", labelNo: "Risikovurdering", labelEn: "Risk Assessment" },
    { href: "#cases", labelNo: "Referanser", labelEn: "Case Studies" },
    { href: "#careers", labelNo: "Karriere & Lønn", labelEn: "Careers & Salary" },
    { href: "#family", labelNo: "PROMIS-familien", labelEn: "PROMIS Family" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#070e1a]/95 backdrop-blur-md border-b border-slate-800 shadow-xl py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none" aria-label="Promis Qualify Hjem">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D2A0] to-[#2563EB] flex items-center justify-center text-slate-950 font-bold shadow-lg group-hover:scale-105 transition-transform">
            <ShieldCheck className="w-6 h-6 text-slate-950" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
              PROMIS <span className="text-[#00D2A0]">QUALIFY</span>
            </span>
            <span className="text-[10px] tracking-widest uppercase text-slate-400 font-semibold">
              {lang === "no" ? "Testledelse & Rådgivning" : "Test Management & QA"}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Hovednavigasjon">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-[#00D2A0] transition-colors"
            >
              {lang === "no" ? link.labelNo : link.labelEn}
            </a>
          ))}

          {/* ProLog Blog External */}
          <a
            href="https://prolog.blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700 hover:border-slate-500 transition-all"
            title="Les Promis Qualifys fagblogg ProLog"
          >
            ProLog Blog <ExternalLink className="w-3 h-3" />
          </a>
        </nav>

        {/* Right side actions: Language Toggle & Contact CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900/60 text-xs font-semibold text-slate-300 hover:border-[#00D2A0] hover:text-[#00D2A0] transition-all"
            aria-label={lang === "no" ? "Switch language to English" : "Bytt språk til Norsk"}
          >
            <Globe className="w-3.5 h-3.5 text-[#00D2A0]" />
            <span>{lang === "no" ? "EN" : "NO"}</span>
          </button>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00D2A0] hover:bg-[#00B88C] text-slate-950 text-sm font-semibold transition-all shadow-md shadow-[#00D2A0]/20 hover:scale-[1.02]"
          >
            <span>{lang === "no" ? "Ta kontakt" : "Get in Touch"}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu hamburger button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleLang}
            className="p-2 text-xs font-bold text-slate-300 border border-slate-700 rounded-lg"
            aria-label="Toggle language"
          >
            {lang === "no" ? "EN" : "NO"}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white border border-slate-800"
            aria-label="Åpne meny"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070e1a] border-b border-slate-800 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-200 hover:text-[#00D2A0] py-2 border-b border-slate-900"
            >
              {lang === "no" ? link.labelNo : link.labelEn}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://prolog.blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-sm text-slate-300 py-2 border-b border-slate-900"
            >
              <span>ProLog Fagblogg</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg bg-[#00D2A0] text-slate-950 font-semibold text-sm mt-2"
            >
              {lang === "no" ? "Ta kontakt" : "Get in Touch"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
