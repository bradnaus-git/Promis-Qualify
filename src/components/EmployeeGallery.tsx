"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { EMPLOYEES_DATA, Employee } from "@/data/employees";
import { Search, Mail, Phone, ExternalLink, Award, Briefcase, Filter, X, ChevronRight, UserCheck } from "lucide-react";

interface EmployeeGalleryProps {
  initialCompanyFilter?: string;
  isModalMode?: boolean;
  onClose?: () => void;
}

export default function EmployeeGallery({
  initialCompanyFilter = "all",
  isModalMode = false,
  onClose,
}: EmployeeGalleryProps) {
  const { lang } = useLanguage();
  const [activeCompany, setActiveCompany] = useState<string>(initialCompanyFilter);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const companies = [
    { id: "all", labelNo: "Alle selskaper", labelEn: "All Companies", count: EMPLOYEES_DATA.length },
    {
      id: "Promis Qualify",
      labelNo: "Promis Qualify",
      labelEn: "Promis Qualify",
      count: EMPLOYEES_DATA.filter((e) => e.company === "Promis Qualify").length,
    },
    {
      id: "PROMIS Navigate",
      labelNo: "PROMIS Navigate",
      labelEn: "PROMIS Navigate",
      count: EMPLOYEES_DATA.filter((e) => e.company === "PROMIS Navigate").length,
    },
    {
      id: "PROMIS AS",
      labelNo: "PROMIS AS",
      labelEn: "PROMIS AS",
      count: EMPLOYEES_DATA.filter((e) => e.company === "PROMIS AS").length,
    },
  ];

  const filteredEmployees = useMemo(() => {
    return EMPLOYEES_DATA.filter((emp) => {
      // Company filter
      if (activeCompany !== "all" && emp.company !== activeCompany) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = emp.name.toLowerCase().includes(query);
        const matchesRole = (lang === "no" ? emp.roleNo : emp.roleEn).toLowerCase().includes(query);
        const matchesCerts = emp.certifications.some((c) => c.toLowerCase().includes(query));
        const matchesSpecs = (lang === "no" ? emp.specializationsNo : emp.specializationsEn).some((s) =>
          s.toLowerCase().includes(query)
        );
        return matchesName || matchesRole || matchesCerts || matchesSpecs;
      }

      return true;
    });
  }, [activeCompany, searchQuery, lang]);

  return (
    <div className="w-full">
      {/* Top Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 mb-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Company Pills */}
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Velg selskap">
            {companies.map((c) => {
              const isSelected = activeCompany === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveCompany(c.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-[#009FE3] text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                  }`}
                  role="tab"
                  aria-selected={isSelected}
                >
                  <span>{lang === "no" ? c.labelNo : c.labelEn}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? "bg-white/20 text-white" : "bg-white text-slate-600 border border-slate-200"
                    }`}
                  >
                    {c.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === "no"
                  ? "Søk etter navn, fag, ISTQB..."
                  : "Search name, skill, ISTQB..."
              }
              className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#009FE3] focus:border-[#009FE3] bg-slate-50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label="Tøm søk"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Results summary */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div>
            {lang === "no" ? "Viser" : "Showing"}{" "}
            <span className="font-bold text-slate-800">{filteredEmployees.length}</span>{" "}
            {lang === "no" ? "seniorrådgivere & spesialister" : "senior advisors & specialists"}
          </div>
          <div className="hidden sm:block text-[11px] text-slate-400">
            {lang === "no" ? "Gjennomsnittlig erfaring: 15–25+ år" : "Average experience: 15–25+ years"}
          </div>
        </div>
      </div>

      {/* Employees Grid */}
      {filteredEmployees.length === 0 ? (
        <div className="text-center py-16 bg-white border border-slate-200 rounded-xl p-8">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3 text-slate-400">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-800 mb-1">
            {lang === "no" ? "Ingen medarbeidere funnet" : "No consultants found"}
          </h3>
          <p className="text-xs text-slate-500 mb-4">
            {lang === "no"
              ? "Prøv et annet søkeord eller velg 'Alle selskaper'."
              : "Try another search keyword or select 'All Companies'."}
          </p>
          <button
            onClick={() => {
              setActiveCompany("all");
              setSearchQuery("");
            }}
            className="px-4 py-2 rounded bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700"
          >
            {lang === "no" ? "Tilbakestill filter" : "Reset filter"}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEmployees.map((emp) => {
            const isQualify = emp.company === "Promis Qualify";
            const isNavigate = emp.company === "PROMIS Navigate";
            const isPromis = emp.company === "PROMIS AS";

            const companyBadgeClass = isQualify
              ? "bg-blue-50 text-[#009FE3] border-blue-200"
              : isNavigate
              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
              : "bg-slate-100 text-slate-700 border-slate-200";

            return (
              <div
                key={emp.id}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-[#009FE3]/60 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Company */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${companyBadgeClass}`}>
                      {emp.company}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                      {emp.experienceYears}+ {lang === "no" ? "år erfaring" : "yrs experience"}
                    </span>
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-lg font-bold text-slate-900 mb-1 leading-snug">
                    {emp.name}
                  </h3>
                  <div className="text-xs font-medium text-[#009FE3] mb-3">
                    {lang === "no" ? emp.roleNo : emp.roleEn}
                  </div>

                  {/* Bio snippet */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                    {lang === "no" ? emp.bioNo : emp.bioEn}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {(lang === "no" ? emp.specializationsNo : emp.specializationsEn).slice(0, 3).map((spec, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-200 font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {emp.email && (
                      <a
                        href={`mailto:${emp.email}`}
                        className="p-1.5 rounded text-slate-400 hover:text-[#009FE3] hover:bg-slate-50 transition-colors"
                        title={emp.email}
                        aria-label={`Send e-post til ${emp.name}`}
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {emp.phone && (
                      <a
                        href={`tel:${emp.phone.replace(/\s+/g, "")}`}
                        className="p-1.5 rounded text-slate-400 hover:text-[#009FE3] hover:bg-slate-50 transition-colors"
                        title={emp.phone}
                        aria-label={`Ring ${emp.name}`}
                      >
                        <Phone className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {emp.linkedIn && (
                      <a
                        href={emp.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded text-slate-400 hover:text-[#009FE3] hover:bg-slate-50 transition-colors"
                        title="LinkedIn profil"
                        aria-label={`LinkedIn profil for ${emp.name}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedEmployee(emp)}
                    className="text-xs font-semibold text-slate-700 hover:text-[#009FE3] flex items-center gap-1 transition-colors"
                  >
                    <span>{lang === "no" ? "Se profil" : "View profile"}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Employee Detail Modal */}
      {selectedEmployee && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="employee-modal-title"
        >
          <div className="bg-white border border-slate-200 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedEmployee(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              aria-label="Lukk"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-50 text-[#009FE3] border border-blue-200">
                  {selectedEmployee.company}
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  {selectedEmployee.experienceYears}+ {lang === "no" ? "års erfaring" : "years experience"}
                </span>
              </div>
              <h2 id="employee-modal-title" className="text-2xl font-extrabold text-slate-900">
                {selectedEmployee.name}
              </h2>
              <div className="text-sm font-semibold text-[#009FE3]">
                {lang === "no" ? selectedEmployee.roleNo : selectedEmployee.roleEn}
              </div>
            </div>

            {/* Modal Bio */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
              <p>{lang === "no" ? selectedEmployee.bioNo : selectedEmployee.bioEn}</p>
            </div>

            {/* Certifications */}
            <div className="mb-6 bg-slate-50 border border-slate-200 rounded-lg p-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                <Award className="w-4 h-4 text-[#009FE3]" />
                <span>{lang === "no" ? "Sertifiseringer & Standarder" : "Certifications & Standards"}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedEmployee.certifications.map((cert, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-white text-slate-700 px-2.5 py-1 rounded border border-slate-200 font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Specializations */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                <Briefcase className="w-4 h-4 text-[#009FE3]" />
                <span>{lang === "no" ? "Spesialområder & Erfaring" : "Specializations & Focus"}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {(lang === "no" ? selectedEmployee.specializationsNo : selectedEmployee.specializationsEn).map(
                  (spec, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-50/60 text-[#009FE3] px-2.5 py-1 rounded border border-blue-100 font-medium"
                    >
                      {spec}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Modal Direct Contact */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {selectedEmployee.email && (
                  <a
                    href={`mailto:${selectedEmployee.email}`}
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#009FE3]"
                  >
                    <Mail className="w-4 h-4 text-[#009FE3]" />
                    <span>{selectedEmployee.email}</span>
                  </a>
                )}
                {selectedEmployee.phone && (
                  <a
                    href={`tel:${selectedEmployee.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#009FE3]"
                  >
                    <Phone className="w-4 h-4 text-[#009FE3]" />
                    <span>{selectedEmployee.phone}</span>
                  </a>
                )}
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedEmployee(null)}
                className="px-4 py-2 rounded-md bg-[#009FE3] hover:bg-[#0088C5] text-white text-xs font-semibold text-center transition-all shadow-sm"
              >
                {lang === "no" ? "Forespør oppdrag" : "Request Consultant"}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
