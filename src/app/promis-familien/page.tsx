import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmployeeGallery from "@/components/EmployeeGallery";
import { Users, Building2, ShieldCheck, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PROMIS-familien & Medarbeidere | Promis Qualify",
  description:
    "Møt våre senior testledere, arkitekter og prosjektledere i PROMIS-familien (Promis Qualify, PROMIS AS og PROMIS Navigate).",
};

export default function PromisFamilienPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar />

      <div className="flex-1">
        {/* Breadcrumb & Hero */}
        <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 text-xs text-slate-500 font-medium" aria-label="Brødsmulesti">
              <Link href="/" className="hover:text-[#009FE3] flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Forsiden</span>
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-800 font-semibold">PROMIS-familien & Medarbeidere</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-semibold text-[#009FE3] mb-3">
                <Users className="w-3.5 h-3.5" />
                <span>Folkene bak resultatene</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                PROMIS-familien: Medarbeidere & Kompetanse
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Promis Qualify AS, PROMIS AS og PROMIS Navigate AS utgjør et unikt uavhengig kompetansemiljø i Norge.
                Med over 15–20+ års snitterfaring per konsulent leverer vi faglig tyngde og uavhengig rådgivning innen testledelse,
                virksomhetsarkitektur, prosjektledelse og anskaffelser.
              </p>
            </div>

            {/* 3 Companies Summary Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-100">
              <div className="p-4 rounded-lg bg-blue-50/40 border border-blue-100">
                <div className="text-xs font-bold uppercase tracking-wider text-[#009FE3] mb-1">
                  Promis Qualify AS
                </div>
                <div className="text-xs text-slate-700 leading-snug">
                  Spisskompetent testledelse, testrådgivning, NS 6450 byggeprosjekter og Big Testing.
                </div>
              </div>

              <div className="p-4 rounded-lg bg-emerald-50/40 border border-emerald-100 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1 flex items-center justify-between">
                    <span>PROMIS Navigate AS</span>
                    <a
                      href="https://promis-navigate.no/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-900"
                      aria-label="Besøk PROMIS Navigate"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="text-xs text-slate-700 leading-snug">
                    Virksomhetsarkitektur, informasjonsforvaltning, målbilder og digital transformasjon.
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-slate-100/70 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1 flex items-center justify-between">
                    <span>PROMIS AS</span>
                    <a
                      href="https://www.promis.no/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-900"
                      aria-label="Besøk PROMIS AS"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="text-xs text-slate-700 leading-snug">
                    Prosjektledelse, programstyring, usikkerhetsanalyser, PS2000 og store IT-anskaffelser.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <EmployeeGallery />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
