"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, ExternalLink, Heart, Users } from "lucide-react";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 text-xs pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Col 1: Logo & Company */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-2.5 rounded-md inline-block">
              <div className="relative h-10 w-44">
                <Image
                  src="/logo.png"
                  alt="Promis Qualify Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {lang === "no"
                ? "Promis Qualify er et spisskompetent nisjemiljø innen test og kvalitetsforbedring av software og komplekse, integrerte leveranser."
                : "Promis Qualify is a specialized boutique consultancy focused on software testing and quality engineering for complex, mission-critical systems."}
            </p>

            <div className="text-slate-400 space-y-1 text-xs pt-1">
              <p className="font-semibold text-slate-200">Promis Qualify AS</p>
              <p>Rebel, Universitetsgata 2, 0164 Oslo</p>
              <p>Org.nr: 912 977 676 MVA</p>
              <p>
                <a href="mailto:post@promis-qualify.no" className="text-[#009FE3] hover:underline">
                  post@promis-qualify.no
                </a>
              </p>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px] mb-3">
              {lang === "no" ? "Tjenesteområder" : "Services"}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/tjenester#testledelse" className="hover:text-white transition-colors">
                  {lang === "no" ? "Testledelse" : "Test Management"}
                </Link>
              </li>
              <li>
                <Link href="/tjenester#testradgivning" className="hover:text-white transition-colors">
                  {lang === "no" ? "Testrådgivning" : "Test Advisory"}
                </Link>
              </li>
              <li>
                <Link href="/tjenester#byggeprosjekter" className="hover:text-white transition-colors">
                  {lang === "no" ? "Test i byggeprosjekter (NS 6450)" : "Commissioning (NS 6450)"}
                </Link>
              </li>
              <li>
                <Link href="/tjenester#big-testing" className="hover:text-white transition-colors">
                  Big Testing
                </Link>
              </li>
              <li>
                <Link href="/#calculator" className="hover:text-white transition-colors">
                  {lang === "no" ? "Risikovurdering" : "Risk Assessment"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: PROMIS Family */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px] mb-3">
              {lang === "no" ? "PROMIS-familien" : "The PROMIS Family"}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="https://www.promis.no"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1"
                >
                  <span>PROMIS AS</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://promis-navigate.no"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1"
                >
                  <span>PROMIS Navigate AS</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://prolog.blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1"
                >
                  <span>{lang === "no" ? "Fagblogg: ProLog" : "Tech Blog: ProLog"}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link
                  href="/promis-familien"
                  className="hover:text-[#009FE3] text-white font-medium flex items-center gap-1 pt-1"
                >
                  <Users className="w-3 h-3 text-[#009FE3]" />
                  <span>{lang === "no" ? "Medarbeidergalleri (60)" : "Consultant Directory (60)"}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Careers & Compliance */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px] mb-3">
              {lang === "no" ? "Karriere & Lovkrav" : "Careers & Compliance"}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/karriere" className="hover:text-white transition-colors">
                  {lang === "no" ? "Lønnsmodeller & Kalkulator" : "Compensation Models"}
                </Link>
              </li>
              <li>
                <Link href="/karriere" className="hover:text-white transition-colors">
                  {lang === "no" ? "Ledige stillinger" : "Open Positions"}
                </Link>
              </li>
              <li>
                <Link href="/referanser" className="hover:text-white transition-colors">
                  {lang === "no" ? "Referanser & Oppdrag" : "Client Cases"}
                </Link>
              </li>
              <li>
                <Link href="/om-oss" className="hover:text-white transition-colors">
                  {lang === "no" ? "Om Promis Qualify" : "About Us"}
                </Link>
              </li>
              <li>
                <Link href="/personvern" className="hover:text-white transition-colors">
                  {lang === "no" ? "Personvernerklæring (GDPR)" : "Privacy Policy (GDPR)"}
                </Link>
              </li>
              <li className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-[10px] border border-slate-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#009FE3]" />
                  <span>{lang === "no" ? "Universell utforming (WCAG 2.2 AA)" : "Universal Design (WCAG 2.2 AA)"}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Promis Qualify AS. {lang === "no" ? "Alle rettigheter reservert." : "All rights reserved."}</p>
          <div className="flex items-center gap-4">
            <Link href="/personvern" className="text-slate-400 hover:text-slate-200 transition-colors">
              {lang === "no" ? "Personvern" : "Privacy Policy"}
            </Link>
            <span>•</span>
            <span>Rebel, Universitetsgata 2, Oslo</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <Heart className="w-3 h-3 text-red-500 fill-red-500" /> Education for Life Nepal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
