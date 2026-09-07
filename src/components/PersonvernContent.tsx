"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  ShieldCheck,
  ArrowLeft,
  Lock,
  Eye,
  Trash2,
  FileText,
  Mail,
  Building,
  CheckCircle2,
  Cookie,
  UserCheck,
} from "lucide-react";

export default function PersonvernContent() {
  const { lang } = useLanguage();

  return (
    <div className="flex-1">
      {/* Header & Breadcrumbs */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            className="mb-6 flex items-center gap-2 text-xs text-slate-500 font-medium"
            aria-label="Brødsmulesti"
          >
            <Link href="/" className="hover:text-[#009FE3] flex items-center gap-1 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{lang === "no" ? "Forsiden" : "Home"}</span>
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-800 font-semibold">
              {lang === "no" ? "Personvernerklæring" : "Privacy Policy"}
            </span>
          </nav>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-semibold text-[#009FE3]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{lang === "no" ? "GDPR & Personvern" : "GDPR & Privacy Compliance"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              {lang === "no"
                ? "Personvernerklæring for Promis Qualify"
                : "Privacy Policy for Promis Qualify"}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
              {lang === "no"
                ? "I Promis Qualify tar vi personvern på alvor. Det handler om vår respekt for deg som kunde, samarbeidspartner og medarbeider, samt din tillit til oss som selskap."
                : "At Promis Qualify, we take privacy seriously. It is founded on our deep respect for you as a client, partner, and colleague, and your trust in us as a specialized consultancy."}
            </p>

            <p className="text-xs text-slate-400">
              {lang === "no"
                ? "Sist oppdatert: 27. september 2024"
                : "Last updated: September 27, 2024"}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* 1. Core Principles */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
              <Lock className="w-5 h-5 text-[#009FE3]" />
              <span>{lang === "no" ? "Våre grunnprinsipper for personvern" : "Our Core Privacy Principles"}</span>
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              {lang === "no"
                ? "I ditt samarbeid med Promis Qualify AS skal vi alltid sørge for at dine personopplysninger behandles i samsvar med EUs personvernforordning (GDPR) og gjeldende norsk lovgivning:"
                : "In your relationship with Promis Qualify AS, we strictly ensure that all personal data is processed in compliance with the EU General Data Protection Regulation (GDPR) and Norwegian law:"}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  titleNo: "Lovlig, rettferdig og åpen",
                  titleEn: "Lawful, Fair & Transparent",
                  descNo: "Vi behandler personopplysninger på en lovlig, rettferdig og transparent måte.",
                  descEn: "We process personal data lawfully, fairly, and with total transparency.",
                },
                {
                  titleNo: "Relevans og formålsbegrensning",
                  titleEn: "Relevance & Purpose Limitation",
                  descNo: "Vi henter kun inn personopplysninger som er relevante for vårt forretningsmessige samarbeid.",
                  descEn: "We only collect data relevant to our specific business engagement.",
                },
                {
                  titleNo: "Dataminimering",
                  titleEn: "Data Minimization",
                  descNo: "Vi henter aldri inn mer personopplysninger enn det som er strengt nødvendig.",
                  descEn: "We never collect more personal data than strictly necessary.",
                },
                {
                  titleNo: "Oppdaterte og korrekte data",
                  titleEn: "Data Accuracy",
                  descNo: "Opplysninger vi har lagret skal være korrekte og oppdaterte.",
                  descEn: "Stored records are maintained accurately and kept up to date.",
                },
                {
                  titleNo: "Lagringsbegrensning",
                  titleEn: "Storage Limitation",
                  descNo: "Personopplysninger slettes automatisk når det ikke lenger foreligger formål eller behov.",
                  descEn: "Data is deleted when the processing purpose is fulfilled or expired.",
                },
                {
                  titleNo: "Konfidensialitet og sikkerhet",
                  titleEn: "Confidentiality & Security",
                  descNo: "Alle opplysninger behandles konfidensielt og sikres med høye tekniske barrierer.",
                  descEn: "Data is treated confidentially and protected with strong technical controls.",
                },
                {
                  titleNo: "Aldri salg til tredjeparter",
                  titleEn: "No Data Brokering",
                  descNo: "Vi selger aldri personopplysninger til tredjeparter under noen omstendigheter.",
                  descEn: "We never sell personal information to third parties under any circumstances.",
                },
                {
                  titleNo: "Rett til innsyn og sletting",
                  titleEn: "Right of Access & Erasure",
                  descNo: "Kunder og medarbeidere har full rett til innsyn, retting og sletting på forespørsel.",
                  descEn: "Individuals have full rights to inspect, rectify, and delete their stored data.",
                },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#009FE3] shrink-0" />
                    <h3 className="text-xs font-bold text-slate-800">
                      {lang === "no" ? item.titleNo : item.titleEn}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {lang === "no" ? item.descNo : item.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Web visitors & Cookies */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-5">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
              <Cookie className="w-5 h-5 text-[#009FE3]" />
              <span>{lang === "no" ? "Besøkende på nettsiden og informasjonskapsler" : "Website Visitors & Cookies"}</span>
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              {lang === "no"
                ? "Promis Qualify benytter analyseverktøy (Google Analytics) for å forstå bruksmønstre på nettstedet vårt. Dette hjelper oss å forbedre innhold og brukervennlighet."
                : "Promis Qualify uses analytics tools (Google Analytics) to understand website usage patterns and continuously improve usability."}
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-[#009FE3] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800">
                    {lang === "no" ? "Ingen kobling til enkeltpersoner: " : "No individual identification: "}
                  </strong>
                  {lang === "no"
                    ? "Informasjonskapslene registrerer anonymisert teknisk informasjon som IP-adresse, nettleser, varighet og besøkte sider. Ingen av informasjonskapslene gjør at vi kan knytte informasjon om din bruk av nettstedet til deg som enkeltperson."
                    : "Cookies record anonymized technical data like IP, browser type, duration, and visited pages. None of these cookies allow us to link browsing patterns directly to you as a identifiable person."}
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                <Trash2 className="w-4 h-4 text-[#009FE3] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800">
                    {lang === "no" ? "Automatisk sletting: " : "Automatic retention period: "}
                  </strong>
                  {lang === "no"
                    ? "Data knyttet til informasjonskapsler slettes automatisk 14 måneder etter registrering. Du kan når som helst administrere eller blokkere informasjonskapsler i innstillingene i din nettleser."
                    : "Cookie data is automatically erased 14 months after registration. You can manage or disable cookies at any time via your browser preferences."}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Clients, Partners & Employees */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-5">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
              <UserCheck className="w-5 h-5 text-[#009FE3]" />
              <span>
                {lang === "no"
                  ? "Kunder, samarbeidspartnere og medarbeidere"
                  : "Clients, Partners & Staff"}
              </span>
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <div>
                <h3 className="font-bold text-slate-800 mb-1">
                  {lang === "no" ? "Forretningsmessig samarbeid:" : "Commercial Collaborations:"}
                </h3>
                <p>
                  {lang === "no"
                    ? "Promis Qualify lagrer kontaktinformasjon (navn, e-post, telefon og stillingstittel) om personer i selskaper vi har eller vurderer forretningsmessig samarbeid med, basert på berettiget interesse."
                    : "Promis Qualify retains contact details (name, email, phone number, role) of corporate contacts for prospective and active engagements under legitimate interest."}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-800 mb-1">
                  {lang === "no" ? "Medarbeidere og jobbsøkere:" : "Employees & Job Applicants:"}
                </h3>
                <p>
                  {lang === "no"
                    ? "Personopplysninger om medarbeidere lagres i interne administrasjonssystemer. De fleste personopplysninger slettes innen 6 måneder etter avsluttet ansettelsesforhold, med unntak av opplysninger vi er pålagt å oppbevare statisk etter formelle lovkrav (bl.a. bokføringsloven)."
                    : "Staff data is stored in administrative systems. Most employee data is purged within 6 months after termination, except for records required by statutory retention laws (such as accounting and taxation compliance)."}
                </p>
              </div>
            </div>
          </div>

          {/* 4. Rights and Contact */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-5">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
              <Eye className="w-5 h-5 text-[#009FE3]" />
              <span>{lang === "no" ? "Dine rettigheter og personvernombud" : "Your Rights & Privacy Contact"}</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === "no"
                ? "Du har rett til innsyn i hvilke personopplysninger vi har om deg, rett til å få korrigert feilaktige data, og rett til å be om at opplysninger slettes. Du kan også be om begrenset behandling eller protestere mot behandlingen."
                : "You have the right to request access to the personal data we hold about you, request corrections of inaccuracies, or request erasure. You also have the right to restrict processing or object to specific uses under GDPR."}
            </p>

            <div className="p-5 rounded-lg bg-blue-50/60 border border-blue-200 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                {lang === "no" ? "Kontaktinformasjon & Henvendelser" : "Contact Information & Inquiries"}
              </h3>

              <div className="text-xs text-slate-700 space-y-1.5">
                <p>
                  <strong>{lang === "no" ? "Selskap: " : "Company: "}</strong> Promis Qualify AS (Org.nr: 912 977 676 MVA)
                </p>
                <p>
                  <strong>{lang === "no" ? "Adresse: " : "Address: "}</strong> Rebel, Universitetsgata 2, 0164 Oslo
                </p>
                <p>
                  <strong>{lang === "no" ? "Personvernombud: " : "Data Protection Officer: "}</strong> Dagfinn Fidje Bjørlo
                </p>
                <p>
                  <strong>{lang === "no" ? "E-post: " : "Email: "}</strong>{" "}
                  <a href="mailto:post@promis-qualify.no" className="text-[#009FE3] hover:underline font-medium">
                    post@promis-qualify.no
                  </a>
                </p>
                <p>
                  <strong>{lang === "no" ? "Telefon daglig leder: " : "Managing Director Tel: "}</strong> +47 918 65 925
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-500">
              {lang === "no"
                ? "Dersom du mener at vår behandling av personopplysninger er i strid med personvernlovgivningen, har du også rett til å klage til Datatilsynet (www.datatilsynet.no)."
                : "If you believe our processing of personal data violates data protection legislation, you also have the right to lodge a complaint with the Norwegian Data Protection Authority (Datatilsynet - www.datatilsynet.no)."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
