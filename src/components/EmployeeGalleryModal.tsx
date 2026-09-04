"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import EmployeeGallery from "./EmployeeGallery";
import { X, Users, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface EmployeeGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCompany?: string;
}

export default function EmployeeGalleryModal({
  isOpen,
  onClose,
  initialCompany = "all",
}: EmployeeGalleryModalProps) {
  const { lang } = useLanguage();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-modal-heading"
    >
      <div className="bg-slate-50 border border-slate-200 rounded-2xl max-w-6xl w-full p-4 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-50 border border-blue-200 text-xs font-bold text-[#009FE3] mb-2">
              <Users className="w-3.5 h-3.5" />
              <span>{lang === "no" ? "PROMIS-familien" : "The PROMIS Family"}</span>
            </div>
            <h2 id="gallery-modal-heading" className="text-xl sm:text-3xl font-extrabold text-slate-900">
              {lang === "no" ? "Medarbeidere & Konsulenter" : "Consultants & Senior Leads"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {lang === "no"
                ? "Utforsk seniorrådgivere på tvers av Promis Qualify, PROMIS AS og PROMIS Navigate."
                : "Explore senior advisors across Promis Qualify, PROMIS AS, and PROMIS Navigate."}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/promis-familien"
              onClick={onClose}
              className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700"
            >
              <span>{lang === "no" ? "Åpne helside" : "Open full page"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60"
              aria-label="Lukk galleri"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Gallery Content */}
        <div className="flex-1">
          <EmployeeGallery initialCompanyFilter={initialCompany} isModalMode onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
