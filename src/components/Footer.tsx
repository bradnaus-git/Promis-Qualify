"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, ExternalLink, Heart } from "lucide-react";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="bg-[#040810] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D2A0] to-[#2563EB] flex items-center justify-center text-slate-950 font-bold">
                <ShieldCheck className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                PROMIS <span className="text-[#00D2A0]">QUALIFY</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              {lang === "no"
                ? "Norges ledende uavhengige fagmiljø innen testledelse, rådgivning, Big Testing og systematisk ferdigstillelse av tekniske bygningsinstallasjoner."
                : "Norway's leading independent authority in test leadership, advisory, Big Testing, and commissioning of integrated facilities."}
            </p>
            <div className="pt-2 text-slate-400 space-y-1">
              <p>Rebel, Universitetsgata 2, 0164 Oslo</p>
              <p>Org.nr: 913 862 822 MVA</p>
              <p>post@promis-qualify.no</p>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px] mb-3">
              {lang === "no" ? "Tjenester" : "Services"}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-[#00D2A0] transition-colors">
                  {lang === "no" ? "Testledelse" : "Test Management"}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00D2A0] transition-colors">
                  {lang === "no" ? "Testrådgivning" : "Test Advisory"}
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-[#00D2A0] transition-colors">
                  {lang === "no" ? "Test i byggeprosjekter" : "Smart Buildings & Commissioning"}
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-[#00D2A0] transition-colors">
                  Big Testing
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#00D2A0] transition-colors">
                  {lang === "no" ? "Risikovurdering" : "Risk Evaluator"}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: PROMIS Family */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px] mb-3">
              PROMIS-familien
            </h4>
            <ul className="space-y-2">
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
                  <span>ProLog Fagblogg</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Careers & Compliance */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px] mb-3">
              {lang === "no" ? "Kultur & Lovkrav" : "Culture & Compliance"}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#careers" className="hover:text-[#00D2A0] transition-colors">
                  {lang === "no" ? "Lønnsmodeller (6G / 7G)" : "Compensation (6G/7G)"}
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-[#00D2A0] transition-colors">
                  {lang === "no" ? "Bli en av oss" : "Join the Team"}
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-[#00D2A0] transition-colors">
                  {lang === "no" ? "Referanseoppdrag" : "Client References"}
                </a>
              </li>
              <li className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] text-[#00D2A0]">
                  <ShieldCheck className="w-3 h-3" />
                  <span>WCAG 2.2 AA Verified</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} Promis Qualify AS. All rights reserved. Org.nr 913 862 822.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Universitetsgata 2 (Rebel), Oslo</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#00D2A0]">
              <Heart className="w-3 h-3 text-red-500 fill-red-500" /> Education for Life Nepal (10+ år)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
