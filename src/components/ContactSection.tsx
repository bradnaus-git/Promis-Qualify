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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Corporate Information & Interactive Map */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#009FE3] mb-2">
                <span>07 / KONTAKT OSS</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-semibold text-[#009FE3] mb-3">
                <Mail className="w-3.5 h-3.5" />
                <span>{lang === "no" ? "Ta kontakt" : "Get in Touch"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                {lang === "no" ? "Kontakt Promis Qualify" : "Contact Promis Qualify"}
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                {lang === "no"
                  ? "Ønsker du en uforpliktende samtale om et oppdrag, en anbudskonkurranse, eller vil du drøfte karrieremuligheter hos oss? Våre partnere og seniorrådgivere er tilgjengelige for en fagprat."
                  : "Would you like an informal discussion about an assignment, a public tender, or career opportunities? Our senior partners are at your disposal."}
              </p>
            </div>

            <div className="space-y-3.5">
              {/* Clickable Address Card */}
              <a
                href="https://maps.google.com/?q=Rebel,+Universitetsgata+2,+0164+Oslo"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between p-4 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-[#009FE3] transition-all shadow-2xs cursor-pointer block"
                title={lang === "no" ? "Åpne i Google Maps" : "Open in Google Maps"}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#009FE3] shrink-0 mt-0.5 group-hover:bg-[#009FE3] group-hover:text-white transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-0.5 group-hover:text-[#009FE3] transition-colors">
                      {lang === "no" ? "Besøksadresse" : "Visiting Address"}
                    </h4>
                    <p className="text-sm font-medium text-slate-900">Rebel, Universitetsgata 2, 0164 Oslo</p>
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#009FE3] font-semibold mt-1">
                      <span>{lang === "no" ? "Åpne i Google Maps" : "Open in Google Maps"}</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </a>

              {/* Direct Phone & Email Contacts */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#009FE3] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-0.5">
                      {lang === "no" ? "E-post & Sentralbord" : "Email & Switchboard"}
                    </h4>
                    <a href="mailto:post@promis-qualify.no" className="text-sm font-medium text-[#009FE3] hover:underline block">
                      post@promis-qualify.no
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[11px]">
                      {lang === "no" ? "Daglig leder (Remi Hansen):" : "Managing Director (Remi Hansen):"}
                    </span>
                    <a href="tel:+4791865925" className="font-semibold text-slate-800 hover:text-[#009FE3] inline-flex items-center gap-1 mt-0.5">
                      <Phone className="w-3 h-3 text-[#009FE3]" />
                      <span>918 65 925</span>
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">
                      {lang === "no" ? "Rekruttering & HR (Heidi Bønke):" : "Careers & HR (Heidi Bønke):"}
                    </span>
                    <a href="tel:+4747669300" className="font-semibold text-slate-800 hover:text-[#009FE3] inline-flex items-center gap-1 mt-0.5">
                      <Phone className="w-3 h-3 text-[#009FE3]" />
                      <span>476 69 300</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Embedded Google Maps Card */}
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-2xs">
                <div className="relative w-full h-[210px] bg-slate-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15999.118511855198!2d10.740118!3d59.917376!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416fa1a00d42d7%3A0x5a7753c748888352!2sRebel!5e0!3m2!1sno!2sno!4v1682064786281!5m2!1sno!2sno"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Promis Qualify Rebel Oslo Kart"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-3.5 bg-slate-50 border-t border-slate-200">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-800 mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <Navigation className="w-3.5 h-3.5 text-[#009FE3]" />
                      <span>Rebel Teknohub, Oslo</span>
                    </span>
                    <a
                      href="https://maps.google.com/?q=Rebel,+Universitetsgata+2,+0164+Oslo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-[#009FE3] hover:underline inline-flex items-center gap-0.5"
                    >
                      <span>Veibeskrivelse</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1 text-[11px] text-slate-500 pt-1.5 border-t border-slate-200/60">
                    <span>🚇 {lang === "no" ? "Nationaltheatret: 2 min gange (T-bane, tog, Flytog)" : "Nationaltheatret: 2 min walk (Metro, train)"}</span>
                    <span>🚋 {lang === "no" ? "Tullinløkka: 1 min gange (Trikk)" : "Tullinløkka: 1 min walk (Tram)"}</span>
                  </div>
                </div>
              </div>

              {/* Foretaksdata */}
              <div className="flex items-center gap-2 text-xs text-slate-500 px-1">
                <Building className="w-3.5 h-3.5 text-[#009FE3] shrink-0" />
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
