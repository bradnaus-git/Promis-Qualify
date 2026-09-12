"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageSquare, X, Bot } from "lucide-react";

interface FloatingActionDockProps {
  onOpenInquiry: (serviceId?: string) => void;
  onToggleChat?: () => void;
  isChatOpen?: boolean;
}

export default function FloatingActionDock({
  onOpenInquiry,
  onToggleChat,
  isChatOpen = false,
}: FloatingActionDockProps) {
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
      <div className="flex items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
        {/* Human Anchor: Remi Hansen */}
        <div className="flex items-center gap-2.5 pl-1 pr-1.5 py-0.5">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-slate-200 shrink-0 shadow-2xs">
            <Image
              src="/images/employees/remi-hansen.jpg"
              alt="Remi Hansen"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="hidden lg:block text-left leading-tight pr-1">
            <p className="text-xs font-bold text-slate-900">Remi Hansen</p>
            <p className="text-[11px] text-slate-500 font-medium">
              {lang === "no" ? "Daglig leder" : "Managing Director"}
            </p>
          </div>
        </div>

        <div className="h-6 w-px bg-slate-200 hidden sm:block" />

        {/* Call Remi Button */}
        <a
          href="tel:91865925"
          className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200/80 border border-slate-200/80 text-xs font-semibold text-slate-800 flex items-center gap-2 transition-colors"
          title={lang === "no" ? "Ring daglig leder Remi Hansen (918 65 925)" : "Call Managing Director Remi Hansen"}
          aria-label="Ring 918 65 925"
        >
          <Phone className="w-3.5 h-3.5 text-[#009FE3]" />
          <span className="hidden sm:inline">918 65 925</span>
        </a>

        {/* Primary Contact CTA */}
        <button
          onClick={() => onOpenInquiry()}
          className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all shadow-xs flex items-center gap-2"
        >
          <MessageSquare className="w-3.5 h-3.5 text-slate-300" />
          <span>{lang === "no" ? "Forespør rådgiver" : "Inquire Advisor"}</span>
        </button>

        {/* QualifyAI Secondary Trigger */}
        {onToggleChat && (
          <button
            onClick={onToggleChat}
            className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
              isChatOpen
                ? "bg-[#009FE3] text-white shadow-xs"
                : "bg-white hover:bg-slate-100 text-slate-600 border border-slate-200"
            }`}
            title={lang === "no" ? "Still et spørsmål til QualifyAI" : "Ask QualifyAI a question"}
            aria-label={lang === "no" ? "Åpne QualifyAI chat" : "Open QualifyAI chat"}
          >
            <Bot className="w-4 h-4 text-[#009FE3]" />
            <span className="sr-only">QualifyAI</span>
          </button>
        )}

        {/* Dismiss Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label={lang === "no" ? "Skjul handlingslinje" : "Dismiss action bar"}
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
