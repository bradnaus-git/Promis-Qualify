import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONTENT } from "@/data/site-content";
import { EMPLOYEES_DATA } from "@/data/employees";
import { ExternalLink, CheckCircle2, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import EmployeeGalleryModal from "./EmployeeGalleryModal";

export default function PromisFamilySection() {
  const { lang } = useLanguage();
  const [galleryOpen, setGalleryOpen] = useState<boolean>(false);

  // Promis Qualify employees count & avatars (strictly PQ only)
  const pqEmployees = EMPLOYEES_DATA.filter((e) => e.company === "Promis Qualify");
  const pqCount = pqEmployees.length;
  const previewEmployees = pqEmployees.filter((e) => e.imageUrl).slice(0, 5);
  const remainingCount = pqCount - previewEmployees.length;

  return (
    <section id="family" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#009FE3] mb-2">
          <span>{lang === "no" ? "06 / PROMIS-FAMILIEN" : "06 / THE PROMIS FAMILY"}</span>
        </div>
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-semibold text-[#009FE3] mb-3">
            <span>{lang === "no" ? "Strategisk partnerskap" : "Strategic Partnership"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {lang === "no" ? "PROMIS-familien: Helhetlig rådgivning" : "The PROMIS Family: Integrated Advisory"}
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
                      ? (lang === "no" ? "Testledelse, testrådgivning & Big Testing" : "Test management, test advisory & Big Testing")
                      : (lang === "no" ? "Sømløs strategisk samhandling" : "Seamless strategic collaboration")}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery CTA Banner */}
        <div className="mt-10 p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* PQ Consultant Avatar Pile (strictly Promis Qualify) */}
            <div
              onClick={() => setGalleryOpen(true)}
              className="flex items-center -space-x-2.5 overflow-hidden shrink-0 cursor-pointer group py-1"
              title={
                lang === "no"
                  ? `Se alle ${pqCount} testledere i Promis Qualify`
                  : `View all ${pqCount} test leads in Promis Qualify`
              }
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setGalleryOpen(true);
                }
              }}
              aria-label={
                lang === "no"
                  ? `Åpne galleri for ${pqCount} Promis Qualify konsulenter`
                  : `Open gallery for ${pqCount} Promis Qualify consultants`
              }
            >
              {previewEmployees.map((emp) => (
                <div
                  key={emp.id}
                  className="relative w-11 h-11 rounded-full ring-2 ring-white overflow-hidden shadow-xs bg-slate-100 group-hover:ring-blue-200 transition-all"
                >
                  <Image
                    src={emp.imageUrl!}
                    alt={emp.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="relative w-11 h-11 rounded-full ring-2 ring-white bg-[#009FE3] text-white font-bold text-xs flex items-center justify-center shadow-xs z-10 group-hover:bg-[#0088c5] transition-colors">
                +{remainingCount}
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#009FE3] uppercase tracking-wider mb-0.5">
                <span>Promis Qualify</span>
                <span className="text-slate-300">•</span>
                <span>{pqCount} {lang === "no" ? "konsulenter" : "consultants"}</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                {lang === "no"
                  ? `Møt våre ${pqCount} senior testledere i Promis Qualify`
                  : `Meet our ${pqCount} senior test leads at Promis Qualify`}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {lang === "no"
                  ? "Se alle våre spesialister innen testledelse og kvalitetssikring, eller utforsk resten av PROMIS-familien."
                  : "Explore our test management and QA specialists, or browse advisors across the wider PROMIS family."}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
            <button
              onClick={() => setGalleryOpen(true)}
              className="px-4 py-2.5 rounded-md bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-semibold transition-all shadow-xs flex-1 sm:flex-none text-center"
            >
              {lang === "no" ? "Hurtigvisning" : "Quick View"}
            </button>
            <Link
              href="/promis-familien"
              className="px-4 py-2.5 rounded-md bg-[#009FE3] hover:bg-[#0088C5] text-white text-xs font-semibold transition-all shadow-xs flex items-center justify-center gap-1.5 flex-1 sm:flex-none"
            >
              <span>{lang === "no" ? "Se medarbeidere" : "Full Gallery"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Modal */}
        <EmployeeGalleryModal
          isOpen={galleryOpen}
          onClose={() => setGalleryOpen(false)}
          initialCompany="Promis Qualify"
        />
      </div>
    </section>
  );
}
