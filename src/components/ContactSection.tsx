"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, MapPin, Phone, Send, CheckCircle2, Building, ShieldCheck } from "lucide-react";

export default function ContactSection() {
  const { lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    serviceType: "testledelse",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-[#00D2A0] mb-3">
                <Mail className="w-3.5 h-3.5" />
                <span>{lang === "no" ? "Ta kontakt" : "Contact Us"}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                {lang === "no" ? "La oss diskutere ditt neste prosjekt" : "Let's Discuss Your Upcoming Delivery"}
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                {lang === "no"
                  ? "Enten du forbereder en offentlig anskaffelse, skal teste et nytt sykehus/bygg, eller trenger en erfaren testleder – vi er klare til å bistå med uavhengig spisskompetanse."
                  : "Whether preparing a public procurement tender, commissioning a smart facility, or scaling automated test pipelines – we are here to provide independent authority."}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <MapPin className="w-5 h-5 text-[#00D2A0] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    {lang === "no" ? "Besøksadresse" : "Visiting Address"}
                  </h4>
                  <p className="text-sm text-slate-300">Rebel, Universitetsgata 2, 0164 Oslo</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <Mail className="w-5 h-5 text-[#00D2A0] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    {lang === "no" ? "E-post" : "Email"}
                  </h4>
                  <a href="mailto:post@promis-qualify.no" className="text-sm text-[#00D2A0] hover:underline">
                    post@promis-qualify.no
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <Building className="w-5 h-5 text-[#00D2A0] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    {lang === "no" ? "Selskapsinformasjon" : "Company Registration"}
                  </h4>
                  <p className="text-xs text-slate-400">Promis Qualify AS • Org.nr: 913 862 822 MVA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  {lang === "no" ? "Send en uforpliktende henvendelse" : "Send an Inquiry"}
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  {lang === "no"
                    ? "Vi svarer normalt innen 1 virkedag."
                    : "We typically respond within 1 business day."}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {lang === "no" ? "Ditt navn *" : "Your Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00D2A0]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {lang === "no" ? "Virksomhet / Etat *" : "Organization / Agency *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00D2A0]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {lang === "no" ? "E-postadresse *" : "Email Address *"}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00D2A0]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {lang === "no" ? "Telefonnummer" : "Phone Number"}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00D2A0]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {lang === "no" ? "Tjenesteområde" : "Service of Interest"}
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00D2A0]"
                  >
                    <option value="testledelse">{lang === "no" ? "Testledelse" : "Test Management"}</option>
                    <option value="testradgivning">{lang === "no" ? "Testrådgivning & Strategi" : "Test Advisory & Strategy"}</option>
                    <option value="byggeprosjekter">{lang === "no" ? "Testledelse i byggeprosjekter / NS 6450" : "Commissioning & Smart Buildings"}</option>
                    <option value="big-testing">{lang === "no" ? "Big Testing & Prøvedrift" : "Big Testing & Trial Operations"}</option>
                    <option value="anbud">{lang === "no" ? "Anbudsbistand / Offentlig anskaffelse" : "Public Tender / Procurement QA"}</option>
                    <option value="karriere">{lang === "no" ? "Karriere / Bli konsulent" : "Careers / Join Team"}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {lang === "no" ? "Kort om behovet eller oppdraget *" : "Brief overview of your requirements *"}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      lang === "no"
                        ? "Beskriv kort prosjektets omfang, tidslinje eller hva du ønsker sparring på..."
                        : "Describe project scope, timeline, or key objectives..."
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00D2A0]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#00D2A0] hover:bg-[#00B88C] text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>{lang === "no" ? "Send henvendelse" : "Submit Inquiry"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#00D2A0]/20 border border-[#00D2A0]/40 flex items-center justify-center mx-auto text-[#00D2A0]">
                  <CheckCircle2 className="w-8 h-8 text-[#00D2A0]" />
                </div>
                <h4 className="text-2xl font-bold text-white">
                  {lang === "no" ? "Takk for henvendelsen!" : "Thank you for reaching out!"}
                </h4>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  {lang === "no"
                    ? "En av våre seniorpartnere vil gjennomgå dine opplysninger og ta kontakt innen 1 virkedag."
                    : "One of our senior partners will review your inquiry and follow up within 1 business day."}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-xl bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white"
                >
                  {lang === "no" ? "Send en ny melding" : "Send another message"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
