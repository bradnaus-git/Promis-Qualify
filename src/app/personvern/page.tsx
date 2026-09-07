import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PersonvernContent from "@/components/PersonvernContent";

export const metadata: Metadata = {
  title: "Personvernerklæring (GDPR) | Promis Qualify",
  description:
    "Promis Qualify tar personvern på alvor. Les vår personvernerklæring om behandling av personopplysninger, informasjonskapsler og dine rettigheter etter GDPR.",
};

export default function PersonvernPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar />
      <PersonvernContent />
      <Footer />
    </main>
  );
}
