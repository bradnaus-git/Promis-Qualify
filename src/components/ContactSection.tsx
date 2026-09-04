"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, MapPin, Building, Send, CheckCircle2 } from "lucide-react";

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
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Corporate Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#009FE3] mb-2">
              <span>07 / KONTAKT OSS</span>
            </div>
            <div>
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

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 border border-slate-200">
                <MapPin className="w-5 h-5 text-[#009FE3] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-0.5">
                    Besøksadresse
                  </h4>
                  <p className="text-sm text-slate-800">Rebel, Universitetsgata 2, 0164 Oslo</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 border border-slate-200">
                <Mail className="w-5 h-5 text-[#009FE3] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-0.5">
                    E-post
                  </h4>
                  <a href="mailto:post@promis-qualify.no" className="text-sm text-[#009FE3] font-medium hover:underline">
                    post@promis-qualify.no
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 border border-slate-200">
                <Building className="w-5 h-5 text-[#009FE3] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-0.5">
                    Foretaksdata
                  </h4>
                  <p className="text-xs text-slate-600">Promis Qualify AS • Org.nr: 913 862 822 MVA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-8 sm:p-10 rounded-xl shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {lang === "no" ? "Send oss en henvendelse" : "Send us an Inquiry"}
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  {lang === "no"
                    ? "Vi svarer normalt innen én virkedag."
                    : "We typically respond within one business day."}
                </p>

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
                    className="w-full py-3 rounded-md bg-[#009FE3] hover:bg-[#0088C5] text-white font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2"
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
                  className="mt-4 px-4 py-2 rounded border border-slate-300 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50"
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
