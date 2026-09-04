import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Promis Qualify AS | Testledelse, Testrådgivning & Big Testing",
  description:
    "Norges ledende uavhengige fagmiljø innen testledelse, rådgivning, Big Testing og systematisk ferdigstillelse av tekniske bygningssystemer. Basert på Rebel i Oslo.",
  keywords: [
    "Testledelse",
    "Testrådgivning",
    "Big Testing",
    "Systematisk ferdigstillelse",
    "NS 6450",
    "ISTQB",
    "Oslo",
    "Offentlig sektor",
    "Kvalitetssikring",
    "Rebel",
  ],
  authors: [{ name: "Promis Qualify AS" }],
  openGraph: {
    title: "Promis Qualify AS | Nail the Test, Rock Your Success",
    description:
      "Spisskompetent testledelse og kvalitetssikring for samfunnskritiske og forretningskritiske IT- og teknologileveranser.",
    url: "https://promis-qualify.no",
    siteName: "Promis Qualify",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className="dark scroll-smooth">
      <body className="bg-[#070E1A] text-slate-100 antialiased selection:bg-[#00D2A0] selection:text-slate-950">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
