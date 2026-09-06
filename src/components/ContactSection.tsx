"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, MapPin, Building, Send, CheckCircle2, ExternalLink, Phone, Navigation } from "lucide-react";

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
    <section id="contact" className="py-16 lg:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Corporate Information & Integrated Location Card */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#009FE3] mb-2">
                <span>07 / KONTAKT OSS</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-semibold text-[#009FE3] mb-3">
                <Mail className="w-3.5 h-3.5" />
                <span>{lang === "no" ? "Ta kontakt" : "Get in Touch"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-2.5">
                {lang === "no" ? "Kontakt Promis Qualify" : "Contact Promis Qualify"}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {lang === "no"
                  ? "Ønsker du en uforpliktende samtale om et oppdrag, en anbudskonkurranse, eller vil du drøfte karrieremuligheter hos oss? Våre partnere og seniorrådgivere er tilgjengelige for en fagprat."
                  : "Would you like an informal discussion about an assignment, a public tender, or career opportunities? Our senior partners are at your disposal."}
              </p>
            </div>

            <div className="space-y-4">
              {/* Card 1: Direct Contact & Phone Lines */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#009FE3] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        {lang === "no" ? "Sentral E-post" : "Direct Email"}
                      </span>
                      <a href="mailto:post@promis-qualify.no" className="text-sm font-semibold text-[#009FE3] hover:underline">
                        post@promis-qualify.no
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-0.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                      <Phone className="w-3.5 h-3.5 text-[#009FE3]" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 font-medium leading-tight">
                        Remi Hansen <span className="text-[10px] text-slate-400">({lang === "no" ? "Daglig leder" : "MD"})</span>
                      </div>
                      <a href="tel:+4791865925" className="text-xs font-bold text-slate-900 hover:text-[#009FE3]">
                        918 65 925
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                      <Phone className="w-3.5 h-3.5 text-[#009FE3]" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 font-medium leading-tight">
                        Heidi Bønke <span className="text-[10px] text-slate-400">({lang === "no" ? "HR / Rekruttering" : "HR"})</span>
                      </div>
                      <a href="tel:+4747669300" className="text-xs font-bold text-slate-900 hover:text-[#009FE3]">
                        476 69 300
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Unified Location & Compact Map */}
              <div className="rounded-xl overflow-hidden bg-slate-50 border border-slate-200 shadow-2xs">
                <div className="p-3.5 sm:p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#009FE3] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        {lang === "no" ? "Besøksadresse" : "Visiting Address"}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900">
                        Rebel, Universitetsgata 2, 0164 Oslo
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Rebel,+Universitetsgata+2,+0164+Oslo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#009FE3] bg-white border border-blue-200 hover:bg-blue-50 transition-colors shadow-2xs shrink-0"
                    title={lang === "no" ? "Åpne i Google Maps" : "Open in Google Maps"}
                  >
                    <span>{lang === "no" ? "Åpne i Maps" : "Open Maps"}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="relative w-full h-[155px] bg-slate-200 border-y border-slate-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15999.118511855198!2d10.740118!3d59.917376!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416fa1a00d42d7%3A0x5a7753c748888352!2sRebel!5e0!3m2!1sno!2sno!4v1682064786281!5m2!1sno!2sno"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Promis Qualify Rebel Oslo kart"
                    className="w-full h-full"
                  />
                </div>

                <div className="px-4 py-2.5 bg-white/70 flex items-center justify-between text-[11px] text-slate-600">
                  <div className="flex items-center gap-1">
                    <Navigation className="w-3 h-3 text-[#009FE3] shrink-0" />
                    <span>🚇 {lang === "no" ? "Nationaltheatret: 2 min gange" : "Nationaltheatret: 2 min walk"}</span>
                    <span className="text-slate-300 mx-1">•</span>
                    <span>🚋 {lang === "no" ? "Tullinløkka: 1 min" : "Tullinløkka: 1 min"}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 hidden sm:inline">Sentrum / Tullin</span>
                </div>
              </div>

              {/* Foretaksdata single line */}
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 px-1 pt-0.5">
                <Building className="w-3 h-3 text-slate-400 shrink-0" />
                <span>Promis Qualify AS • Org.nr: 912 977 676 MVA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-7 sm:p-9 rounded-xl shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {lang === "no" ? "Send oss en henvendelse" : "Send us an Inquiry"}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {lang === "no"
                      ? "Vi svarer normalt innen én virkedag."
                      : "We typically respond within one business day."}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === "no" ? "Navn *" : "Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-md px-3.5 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#009FE3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === "no" ? "Virksomhet / Etat *" : "Organization / Agency *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-md px-3.5 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#009FE3]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === "no" ? "E-postadresse *" : "Email Address *"}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-md px-3.5 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#009FE3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === "no" ? "Telefonnummer" : "Phone Number"}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-md px-3.5 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#009FE3]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === "no" ? "Tema for henvendelsen" : "Subject Area"}
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-md px-3.5 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#009FE3]"
                  >
                    <option value="testledelse">{lang === "no" ? "Testledelse for IT-prosjekt" : "Test Management for IT Delivery"}</option>
                    <option value="testradgivning">{lang === "no" ? "Testrådgivning & Strategi" : "Test Advisory & Strategy"}</option>
                    <option value="byggeprosjekter">{lang === "no" ? "Testledelse i byggeprosjekter / NS 6450" : "Commissioning & Smart Buildings (NS 6450)"}</option>
                    <option value="big-testing">{lang === "no" ? "Big Testing & Prøvedrift" : "Big Testing & Trial Operations"}</option>
                    <option value="anbud">{lang === "no" ? "Anbudsbistand / Offentlig anskaffelse" : "Tender Governance / Public Procurement"}</option>
                    <option value="karriere">{lang === "no" ? "Karriere / Søke stilling som testleder" : "Careers / Senior Test Manager Application"}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === "no" ? "Beskriv kort behovet eller spørsmålet *" : "Brief overview of requirements *"}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      lang === "no"
                        ? "Fortell kort om leveransen, tidsplan eller hva du ønsker sparring på..."
                        : "Describe the delivery, timeline or topics you wish to discuss..."
                    }
                    className="w-full bg-white border border-slate-300 rounded-md px-3.5 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#009FE3]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#009FE3] hover:bg-[#0088C5] text-white font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>{lang === "no" ? "Send henvendelse" : "Submit Inquiry"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto text-[#009FE3]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  {lang === "no" ? "Takk for henvendelsen!" : "Thank You for Reaching Out!"}
                </h4>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  {lang === "no"
                    ? "Vi har mottatt din melding. En av våre seniorpartnere vil ta kontakt innen kort tid."
                    : "Your inquiry has been received. A senior partner will get in touch shortly."}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-lg border border-slate-300 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Send ny melding
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
