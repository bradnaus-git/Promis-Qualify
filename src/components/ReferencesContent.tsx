"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import CaseStudies from "@/components/CaseStudies";
import { ChevronRight } from "lucide-react";

export default function ReferencesContent() {
  const { lang } = useLanguage();

  return (
    <div className="bg-white min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {/* Breadcrumbs */}
        <nav aria-label="Brødsmuler" className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            {lang === "no" ? "Hjem" : "Home"}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">
            {lang === "no" ? "Referanser & Erfaring" : "References & Experience"}
          </span>
        </nav>
      </div>

      <CaseStudies />
    </div>
  );
}
