"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Globe, ExternalLink, ArrowRight, ChevronDown } from "lucide-react";

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navigateToService = (serviceId: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("promis-select-service", { detail: serviceId }));
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all" ref={navRef}>
      {/* Top micro-bar */}
      <div className="bg-slate-50 border-b border-slate-100 py-1.5 px-4 sm:px-8 text-[11px] text-slate-500 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="font-medium text-slate-700">Rebel, Universitetsgata 2, Oslo</span>
          <span className="hidden md:inline text-slate-300">|</span>
          <span className="hidden md:inline font-medium">
            {lang === "no" ? "100% ISTQB-sertifiserte testledere" : "100% ISTQB-certified test managers"}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://prolog.blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#009FE3] flex items-center gap-1 font-semibold transition-colors"
          >
            <span>{lang === "no" ? "Fagblogg (ProLog)" : "Tech Blog (ProLog)"}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-slate-300">|</span>
          <a href="mailto:post@promis-qualify.no" className="hover:text-[#009FE3] transition-colors">
            post@promis-qualify.no
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center focus:outline-none" aria-label="Promis Qualify Hjem">
          <div className="relative w-48 sm:w-56 h-12">
            <Image
              src="/logo.png"
              alt="Promis Qualify Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation with Dropdowns */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-700" aria-label="Hovedmeny">
          {/* Dropdown: Tjenester */}
          <div className="relative">
            <button
              onClick={() => handleDropdown("services")}
              className={`px-3 py-2 rounded-md transition-colors flex items-center gap-1 whitespace-nowrap ${
                activeDropdown === "services" ? "text-[#009FE3] bg-slate-50" : "hover:text-[#009FE3]"
              }`}
            >
              <span>{lang === "no" ? "Tjenester" : "Services"}</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
            {activeDropdown === "services" && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-slate-200 rounded-lg shadow-lg py-2 z-50">
                <Link
                  href="/tjenester"
                  onClick={() => setActiveDropdown(null)}
                  className="block px-4 py-2 hover:bg-slate-50 text-xs font-bold text-[#009FE3] border-b border-slate-100 flex items-center justify-between"
                >
                  <span>{lang === "no" ? "Se alle tjenester & metoder" : "All Services & Methods"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/tjenester#testledelse"
                  onClick={() => setActiveDropdown(null)}
                  className="block px-4 py-2 hover:bg-slate-50 hover:text-[#009FE3] text-xs font-semibold text-slate-800"
                >
                  {lang === "no" ? "Testledelse" : "Test Management"}
                  <span className="block text-[11px] font-normal text-slate-500">
                    {lang === "no" ? "Operativ og strategisk teststyring" : "Operational & strategic test governance"}
                  </span>
                </Link>
                <Link
                  href="/tjenester#testradgivning"
                  onClick={() => setActiveDropdown(null)}
                  className="block px-4 py-2 hover:bg-slate-50 hover:text-[#009FE3] text-xs font-semibold text-slate-800"
                >
                  {lang === "no" ? "Testrådgivning & Strategi" : "Test Advisory & Strategy"}
                  <span className="block text-[11px] font-normal text-slate-500">
                    {lang === "no" ? "Modenhetsanalyse & verktøyvalg" : "Maturity assessment & tooling"}
                  </span>
                </Link>
                <div className="my-1 border-t border-slate-100" />
                <Link
                  href="/tjenester#byggeprosjekter"
                  onClick={() => setActiveDropdown(null)}
                  className="block px-4 py-2 hover:bg-slate-50 hover:text-[#009FE3] text-xs font-semibold text-slate-800"
                >
                  {lang === "no" ? "Testledelse i byggeprosjekter" : "Commissioning in Construction"}
                  <span className="block text-[11px] font-normal text-slate-500">
                    {lang === "no" ? "Systematisk ferdigstillelse (NS 6450)" : "Systematic Commissioning (NS 6450)"}
                  </span>
                </Link>
                <Link
                  href="/tjenester#big-testing"
                  onClick={() => setActiveDropdown(null)}
                  className="block px-4 py-2 hover:bg-slate-50 hover:text-[#009FE3] text-xs font-semibold text-slate-800"
                >
                  Big Testing
                  <span className="block text-[11px] font-normal text-slate-500">
                    {lang === "no" ? "360° risikovurdering & prøvedrift" : "360° risk analysis & trial operation"}
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* Direct Link: Referanser */}
          <Link
            href="/referanser"
            className="px-3 py-2 rounded-md hover:text-[#009FE3] transition-colors whitespace-nowrap"
          >
            {lang === "no" ? "Referanser" : "References"}
          </Link>

          {/* Dropdown: Om oss */}
          <div className="relative">
            <button
              onClick={() => handleDropdown("about")}
              className={`px-3 py-2 rounded-md transition-colors flex items-center gap-1 whitespace-nowrap ${
                activeDropdown === "about" ? "text-[#009FE3] bg-slate-50" : "hover:text-[#009FE3]"
              }`}
            >
              <span>{lang === "no" ? "Om oss" : "About"}</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
            {activeDropdown === "about" && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-slate-200 rounded-lg shadow-lg py-2 z-50">
                <Link
                  href="/om-oss"
                  onClick={() => setActiveDropdown(null)}
                  className="block px-4 py-2 hover:bg-slate-50 text-xs font-bold text-[#009FE3] border-b border-slate-100 flex items-center justify-between"
                >
                  <span>{lang === "no" ? "Om Promis Qualify" : "About Promis Qualify"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/om-oss#culture"
                  onClick={() => setActiveDropdown(null)}
                  className="block px-4 py-2 hover:bg-slate-50 hover:text-[#009FE3] text-xs font-semibold text-slate-800"
                >
                  {lang === "no" ? "Kultur & Verdier" : "Culture & Values"}
                  <span className="block text-[11px] font-normal text-slate-500">
                    {lang === "no" ? "Balanse, Inkludering, Engasjement" : "Balance, Inclusion, Dedication"}
                  </span>
                </Link>
                <Link
                  href="/om-oss#rebel"
                  onClick={() => setActiveDropdown(null)}
                  className="block px-4 py-2 hover:bg-slate-50 hover:text-[#009FE3] text-xs font-semibold text-slate-800"
                >
                  {lang === "no" ? "Rebel Oslo & Samfunnsansvar" : "Rebel Oslo & Social Impact"}
                  <span className="block text-[11px] font-normal text-slate-500">
                    {lang === "no" ? "10+ år med Education for Life Nepal" : "10+ years with Education for Life Nepal"}
                  </span>
                </Link>
                <div className="my-1 border-t border-slate-100" />
                <Link
                  href="/promis-familien"
                  onClick={() => setActiveDropdown(null)}
                  className="block px-4 py-2 hover:bg-slate-50 hover:text-[#009FE3] text-xs font-semibold text-slate-800"
                >
                  <div className="flex items-center justify-between">
                    <span>{lang === "no" ? "PROMIS-familien" : "The PROMIS Family"}</span>
                  </div>
                  <span className="block text-[11px] font-normal text-slate-500">
                    {lang === "no" ? "Medarbeidere i Qualify, PROMIS & Navigate" : "Consultant Directory & Ecosystem"}
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* Direct Link: Karriere & Lønn */}
          <Link
            href="/karriere"
            className="px-3 py-2 rounded-md hover:text-[#009FE3] transition-colors whitespace-nowrap"
          >
            {lang === "no" ? "Karriere & Lønn" : "Careers & Salary"}
          </Link>

          {/* Direct Link: Risikovurdering */}
          <Link
            href="/#calculator"
            className="px-3 py-2 rounded-md text-slate-700 hover:text-[#009FE3] transition-colors whitespace-nowrap"
          >
            <span>{lang === "no" ? "Risikovurdering" : "Risk Assessment"}</span>
          </Link>
        </nav>

        {/* Right CTA and Language Switcher */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          {/* Compact Language Toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:border-slate-300 hover:text-slate-900 transition-all whitespace-nowrap shadow-2xs"
            aria-label={lang === "no" ? "Switch language" : "Bytt språk"}
          >
            <Globe className="w-3.5 h-3.5 text-slate-500" />
            <span>{lang === "no" ? "EN" : "NO"}</span>
          </button>

          {/* Primary CTA */}
          <Link
            href="/#contact"
            className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs whitespace-nowrap flex items-center gap-2"
          >
            <span>{lang === "no" ? "Kontakt oss" : "Contact Us"}</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleLang}
            className="px-2 py-1 text-xs font-bold text-slate-700 border border-slate-300 rounded"
          >
            {lang === "no" ? "EN" : "NO"}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded text-slate-700 border border-slate-200"
            aria-label="Meny"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 pt-1">
            {lang === "no" ? "Tjenester" : "Services"}
          </div>
          <Link
            href="/tjenester"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#009FE3] py-1.5 pl-2"
          >
            {lang === "no" ? "Oversikt over alle tjenester →" : "All Services Overview →"}
          </Link>
          <Link
            href="/tjenester#testledelse"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-800 hover:text-[#009FE3] py-1 pl-2"
          >
            {lang === "no" ? "Testledelse" : "Test Management"}
          </Link>
          <Link
            href="/tjenester#testradgivning"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-800 hover:text-[#009FE3] py-1 pl-2"
          >
            {lang === "no" ? "Testrådgivning & Strategi" : "Test Advisory & Strategy"}
          </Link>
          <Link
            href="/tjenester#byggeprosjekter"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-800 hover:text-[#009FE3] py-1 pl-2"
          >
            {lang === "no" ? "Testledelse i byggeprosjekter (NS 6450)" : "Commissioning & Construction (NS 6450)"}
          </Link>
          <Link
            href="/tjenester#big-testing"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-800 hover:text-[#009FE3] py-1 pl-2 pb-2 border-b border-slate-100"
          >
            {lang === "no" ? "Big Testing (360° risiko & prøvedrift)" : "Big Testing (360° risk & trial run)"}
          </Link>

          <Link
            href="/referanser"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-800 hover:text-[#009FE3] py-2 border-b border-slate-100"
          >
            {lang === "no" ? "Bransjer & Referanser" : "Industries & References"}
          </Link>

          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 pt-1">
            {lang === "no" ? "Om Promis Qualify" : "About Promis Qualify"}
          </div>
          <Link
            href="/om-oss"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#009FE3] py-1.5 pl-2"
          >
            {lang === "no" ? "Om oss & Verdier →" : "About Us & Values →"}
          </Link>
          <Link
            href="/om-oss#rebel"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-800 hover:text-[#009FE3] py-1 pl-2"
          >
            {lang === "no" ? "Rebel Oslo & Samfunnsansvar" : "Rebel Oslo & Social Impact"}
          </Link>
          <Link
            href="/promis-familien"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-800 hover:text-[#009FE3] py-2 border-b border-slate-100"
          >
            {lang === "no" ? "PROMIS-familien (Medarbeidere)" : "The PROMIS Family (Consultants)"}
          </Link>

          <Link
            href="/#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-800 hover:text-[#009FE3] py-2 border-b border-slate-100"
          >
            {lang === "no" ? "Risikovurdering" : "Risk Assessment"}
          </Link>
          <Link
            href="/karriere"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-800 hover:text-[#009FE3] py-2 border-b border-slate-100"
          >
            {lang === "no" ? "Karriere & Lønnsmodeller" : "Careers & Compensation"}
          </Link>
          <div className="pt-2">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 rounded-lg bg-slate-900 text-white font-semibold text-xs"
            >
              {lang === "no" ? "Kontakt oss" : "Contact Us"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
