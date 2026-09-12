import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesContent from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "Tjenester innen Testledelse & Kvalitetssikring | Promis Qualify",
  description:
    "Uavhengig testledelse, testrådgivning, Big Testing og systematisk ferdigstillelse (NS 6450) for krevende offentlige og private virksomheter i Norge.",
  keywords: [
    "Testledelse",
    "Testledelse Oslo",
    "Testrådgivning",
    "NS 6450",
    "Big Testing",
    "Systematisk ferdigstillelse",
    "Kvalitetssikring",
    "ISTQB Advanced",
  ],
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar />
      <ServicesContent />
      <Footer />
    </main>
  );
}
