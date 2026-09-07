import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PromisFamilienContent from "@/components/PromisFamilienContent";

export const metadata: Metadata = {
  title: "PROMIS-familien & Medarbeidere | Promis Qualify",
  description:
    "Møt våre senior testledere, arkitekter og prosjektledere i PROMIS-familien (Promis Qualify, PROMIS AS og PROMIS Navigate).",
};

export default function PromisFamilienPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar />
      <PromisFamilienContent />
      <Footer />
    </main>
  );
}
