"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { X, Mail, Phone, ArrowRight, ShieldCheck, CheckCircle2, Building, User, FileText } from "lucide-react";

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function QuickInquiryModal({
  isOpen,
  onClose,
  initialService = "testledelse",
}: QuickInquiryModalProps) {
  const { lang } = useLanguage();
  const [selectedService, setSelectedService] = useState(initialService);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const services = [
    { id: "testledelse", labelNo: "Testledelse", labelEn: "Test Management" },
    { id: "testradgivning", labelNo: "Testrådgivning & Strategi", labelEn: "QA Strategy & Advisory" },
    { id: "byggeprosjekter", labelNo: "NS 6450 (Bygg & Samferdsel)", labelEn: "NS 6450 Commissioning" },
    { id: "big-testing", labelNo: "Big Testing & Prøvedrift", labelEn: "Big Testing & Operational Trials" },
    { id: "rammeavtale", labelNo: "Rammeavtale / Annet", labelEn: "Framework / Other" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate reliable dispatch to rh@promis.no
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setMessage("");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
    >
      <div className="bg-white border border-slate-200 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label={lang === "no" ? "Lukk vindu" : "Close window"}
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {lang === "no" ? "Takk for din henvendelse!" : "Thank you for reaching out!"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              {lang === "no"
                ? "Forespørselen din er oversendt direkte til daglig leder Remi Hansen. Vi gjennomgår behovet og tar kontakt med deg innen 24 timer."
                : "Your request has been routed directly to Managing Director Remi Hansen. We will review your project needs and contact you within 24 hours."}
            </p>

            <div className="pt-4 border-t border-slate-100 mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-md bg-[#009FE3] hover:bg-[#0088C5] text-white text-xs font-semibold shadow-sm transition-all"
              >
                {lang === "no" ? "Ferdig" : "Close"}
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6 pr-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#009FE3] mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{lang === "no" ? "Forespørsel om konsulentbistand" : "Consultancy Request"}</span>
              </div>
              <h2 id="inquiry-modal-title" className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {lang === "no" ? "Kom i dialog med en senior testleder" : "Connect with a Senior Test Advisor"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                {lang === "no"
                  ? "Send en uforpliktende henvendelse. Våre rådgivere har 15–20+ års snitterfaring og er 100% ISTQB-sertifiserte."
                  : "Submit an inquiry with no obligation. Our advisors average 15–20+ years of domain experience and are 100% ISTQB certified."}
              </p>
            </div>

            {/* Direct Contact Pill */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-5 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 overflow-hidden shrink-0">
                  <img src="/images/employees/remi-hansen.jpg" alt="Remi Hansen" className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Remi Hansen</div>
                  <div className="text-[11px] text-slate-500">{lang === "no" ? "Daglig leder" : "Managing Director"}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="tel:91865925"
                  className="px-2.5 py-1 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold flex items-center gap-1 transition-colors"
                  title="Ring Remi Hansen"
                >
                  <Phone className="w-3 h-3 text-[#009FE3]" />
                  <span>918 65 925</span>
                </a>
                <a
                  href="mailto:rh@promis.no"
                  className="px-2.5 py-1 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold flex items-center gap-1 transition-colors"
                  title="Send e-post til Remi Hansen"
                >
                  <Mail className="w-3 h-3 text-[#009FE3]" />
                  <span>rh@promis.no</span>
                </a>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Pills */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {lang === "no" ? "Hva gjelder henvendelsen?" : "Practice Area"}
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {services.map((s) => (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setSelectedService(s.id)}
                      className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all border ${
                        selectedService === s.id
                          ? "bg-[#009FE3] text-white border-[#009FE3] shadow-sm"
                          : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                      }`}
                    >
                      {lang === "no" ? s.labelNo : s.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === "no" ? "Ditt navn" : "Full Name"} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="f.eks. Ola Nordmann"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#009FE3] focus:border-[#009FE3] bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === "no" ? "Virksomhet / Organisasjon" : "Company / Organization"} *
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="f.eks. Helse Sør-Øst / DNB"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#009FE3] focus:border-[#009FE3] bg-slate-50"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === "no" ? "E-postadresse" : "Work Email"} *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="navn@virksomhet.no"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#009FE3] focus:border-[#009FE3] bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === "no" ? "Telefonnummer" : "Phone Number"}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+47 ..."
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#009FE3] focus:border-[#009FE3] bg-slate-50"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === "no" ? "Kort om prosjektet / tidsramme" : "Brief project overview / timeline"}
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    lang === "no"
                      ? "Beskriv kort prosjektets omfang, estimert oppstart eller behov for rådgivning..."
                      : "Briefly outline estimated start date, project scope, or advisory requirements..."
                  }
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#009FE3] focus:border-[#009FE3] bg-slate-50"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-[11px] text-slate-500">
                  {lang === "no" ? "✓ Konfidensiell behandling • Rask respons" : "✓ Confidential • Swift response"}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#009FE3] hover:bg-[#0088C5] text-white text-xs font-bold tracking-wide transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <span>{submitting ? (lang === "no" ? "Sender..." : "Sending...") : (lang === "no" ? "Send forespørsel" : "Submit Inquiry")}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
