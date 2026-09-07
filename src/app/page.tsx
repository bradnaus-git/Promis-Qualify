"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import TestRiskCalculator from "@/components/TestRiskCalculator";
import CaseStudies from "@/components/CaseStudies";
import SalaryCalculator from "@/components/SalaryCalculator";
import QualifyAICopilot from "@/components/QualifyAICopilot";
import CompanyCulture from "@/components/CompanyCulture";
import PromisFamilySection from "@/components/PromisFamilySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import QuickInquiryModal from "@/components/QuickInquiryModal";
import FloatingActionDock from "@/components/FloatingActionDock";
import QualifyAIChatDrawer from "@/components/QualifyAIChatDrawer";

export default function Home() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryService, setInquiryService] = useState("testledelse");
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Prevent browser from restoring a previous scroll position on refresh
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      // If user navigated to base URL without an anchor hash, scroll to top
      if (!window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    }
  }, []);

  const handleOpenInquiry = (serviceId: string = "testledelse") => {
    setInquiryService(serviceId);
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-[#009FE3] selection:text-white font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* Services & Core Differentiators */}
        <ServicesGrid onOpenInquiry={handleOpenInquiry} />

        {/* Interactive Test Maturity & Project Risk Calculator */}
        <TestRiskCalculator />

        {/* Selected References & Case Studies */}
        <CaseStudies />

        {/* Interactive Salary Simulator & Career Model */}
        <SalaryCalculator />

        {/* On-Site QualifyAI Copilot */}
        <QualifyAICopilot />

        {/* Culture, Rebel Oslo & Social Engagement */}
        <CompanyCulture />

        {/* PROMIS Family Synergies */}
        <PromisFamilySection />

        {/* Contact & RFQ Section */}
        <ContactSection />
      </main>

      {/* Floating Action Dock with AI Copilot Trigger */}
      <FloatingActionDock
        onOpenInquiry={handleOpenInquiry}
        onToggleChat={() => setIsChatOpen(!isChatOpen)}
        isChatOpen={isChatOpen}
      />

      {/* Persistent Floating QualifyAI Chat Drawer */}
      <QualifyAIChatDrawer
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />

      {/* Quick Inquiry / RFQ Modal */}
      <QuickInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialService={inquiryService}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
