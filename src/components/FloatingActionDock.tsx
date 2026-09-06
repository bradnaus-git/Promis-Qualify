"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, ArrowRight, MessageSquare, X } from "lucide-react";

interface FloatingActionDockProps {
  onOpenInquiry: (serviceId?: string) => void;
}

export default function FloatingActionDock({ onOpenInquiry }: FloatingActionDockProps) {
  const { lang } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal dock once scrolled past 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <aside
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 animate-fade-in-up"
      aria-label={lang === "no" ? "Hurtighandlinger for kontakt" : "Quick contact actions"}
    >
      <div className="flex items-center gap-2 p-1.5 sm:p-2 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-full shadow-xl hover:shadow-2xl transition-all">
        {/* Desktop Eyebrow Indicator */}
        <div className="hidden md:flex items-center gap-2 pl-3 pr-2 py-1 text-xs font-semibold text-slate-700">
          <span className="w-2 h-2 rounded-full bg-[#009FE3] animate-pulse" />
          <span>{lang === "no" ? "Trenger du testledelse?" : "Need test leadership?"}</span>
        </div>

        {/* Quick Call Button to Remi Hansen */}
        <a
          href="tel:91865925"
          className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-1.5 transition-colors"
          title={lang === "no" ? "Ring daglig leder Remi Hansen (918 65 925)" : "Call Managing Director Remi Hansen"}
          aria-label="Ring 918 65 925"
        >
          <Phone className="w-3.5 h-3.5 text-[#009FE3]" />
          <span className="hidden sm:inline">918 65 925</span>
        </a>

        {/* Primary CTA Button */}
        <button
          onClick={() => onOpenInquiry()}
          className="px-4 py-2 rounded-full bg-[#009FE3] hover:bg-[#0088C5] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 hover:gap-2"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>{lang === "no" ? "Forespør rådgiver" : "Inquire Advisor"}</span>
          <ArrowRight className="w-3 h-3" />
        </button>

        {/* Dismiss Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label={lang === "no" ? "Skjul handlingslinje" : "Dismiss action bar"}
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
