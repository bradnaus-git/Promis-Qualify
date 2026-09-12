import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReferencesContent from "@/components/ReferencesContent";

export const metadata: Metadata = {
  title: "Referanser & Oppdrag | Promis Qualify",
  description:
    "Se våre referanseprosjekter og bransjeerfaring fra Tolletaten, Ruter, Kartverket, Felleskjøpet og andre samfunnskritiske aktører.",
  keywords: [
    "Promis Qualify referanser",
    "Tolletaten testledelse",
    "Ruter kvalitetssikring",
    "Kartverket testledelse",
    "Felleskjøpet",
    "NS 6450 referanser",
  ],
};

export default function ReferencesPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar />
      <ReferencesContent />
      <Footer />
    </main>
  );
}
