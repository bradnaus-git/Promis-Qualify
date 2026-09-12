import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutUsContent from "@/components/AboutUsContent";

export const metadata: Metadata = {
  title: "Om Promis Qualify | Kultur, Rebel Oslo & Samfunnsansvar",
  description:
    "Bli kjent med Promis Qualify: Våre verdier, vårt hovedkvarter på Rebel i Oslo, vårt 10-årige engasjement for skolebarn i Nepal og PROMIS-familien.",
  keywords: [
    "Promis Qualify",
    "Om Promis Qualify",
    "Rebel Oslo",
    "Tullinkvartalet",
    "Education for Life Nepal",
    "PROMIS familien",
  ],
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar />
      <AboutUsContent />
      <Footer />
    </main>
  );
}
