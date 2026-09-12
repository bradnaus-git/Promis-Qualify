import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareerContent from "@/components/CareerContent";

export const metadata: Metadata = {
  title: "Karriere & Lønnsmodeller | Promis Qualify",
  description:
    "Bli en del av Norges ledende fagmiljø innen testledelse. Se ledige stillinger som teknisk testleder og senior testleder, samt våre tre transparente lønnsmodeller.",
  keywords: [
    "Testleder jobb Oslo",
    "Senior testleder karriere",
    "Teknisk testleder",
    "Promis Qualify lønn",
    "Lønnsmodell testledelse",
  ],
};

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar />
      <CareerContent />
      <Footer />
    </main>
  );
}
