"use client";

import React from "react";
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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#070E1A] text-slate-100 selection:bg-[#00D2A0] selection:text-slate-950 font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Services & Core Differentiators */}
        <ServicesGrid />

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

      {/* Footer */}
      <Footer />
    </div>
  );
}
