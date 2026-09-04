import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONTENT } from "@/data/site-content";
import { ExternalLink, CheckCircle2, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import EmployeeGalleryModal from "./EmployeeGalleryModal";

export default function PromisFamilySection() {
  const { lang } = useLanguage();
  const [galleryOpen, setGalleryOpen] = useState<boolean>(false);

  return (
    <section id="family" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#009FE3] mb-2">
          <span>04 / PROMIS-FAMILIEN</span>
        </div>
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-semibold text-[#009FE3] mb-3">
            <span>{lang === "no" ? "Strategisk partnerskap" : "Strategic Partnership"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            PROMIS-familien: Helhetlig rådgivning
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {lang === "no"
              ? "Promis Qualify samarbeider tett med PROMIS AS og PROMIS Navigate AS. Sammen utgjør vi et av Norges tyngste uavhengige fagmiljøer innen prosjektledelse, anskaffelser, arkitektur og test."
              : "Promis Qualify collaborates with PROMIS AS and PROMIS Navigate AS, offering comprehensive governance across project leadership, procurement, architecture, and testing."}
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SITE_CONTENT.promisFamily.companies.map((comp, idx) => {
            const isSelf = comp.name === "Promis Qualify AS";

            return (
              <div
                key={idx}
                className={`p-7 rounded-lg border flex flex-col justify-between transition-all ${
                  isSelf
                    ? "bg-white border-[#009FE3] shadow-md ring-1 ring-[#009FE3]"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${
                        isSelf
                          ? "bg-blue-50 text-[#009FE3] border border-blue-200"
                          : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {lang === "no" ? comp.roleNo : comp.roleEn}
                    </span>
                    {comp.url && !isSelf && (
                      <a
                        href={comp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-slate-700"
                        aria-label={`Besøk ${comp.name}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {comp.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {lang === "no" ? comp.descNo : comp.descEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 text-xs text-slate-600 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#009FE3]" />
                  <span>
                    {isSelf
                      ? "Testledelse, testrådgivning & Big Testing"
                      : "Sømløs strategisk samhandling"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery CTA Banner */}
        <div className="mt-10 p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-[#009FE3]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                {lang === "no" ? "Møt våre rådgivere og spesialister" : "Meet our advisors & specialists"}
              </h3>
              <p className="text-xs text-slate-500">
                {lang === "no"
                  ? "Utforsk hele medarbeidergalleriet for Promis Qualify, PROMIS AS og PROMIS Navigate."
                  : "Explore the full consultant directory for Promis Qualify, PROMIS AS, and PROMIS Navigate."}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setGalleryOpen(true)}
              className="px-4 py-2.5 rounded-md bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-semibold transition-all shadow-sm flex-1 sm:flex-none text-center"
            >
              {lang === "no" ? "Hurtigvisning (Modal)" : "Quick View (Modal)"}
            </button>
            <Link
              href="/promis-familien"
              className="px-4 py-2.5 rounded-md bg-[#009FE3] hover:bg-[#0088C5] text-white text-xs font-semibold transition-all shadow-sm flex items-center justify-center gap-1.5 flex-1 sm:flex-none"
            >
              <span>{lang === "no" ? "Se alle medarbeidere" : "Full Employee Gallery"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Modal */}
        <EmployeeGalleryModal isOpen={galleryOpen} onClose={() => setGalleryOpen(false)} />
      </div>
    </section>
  );
}
