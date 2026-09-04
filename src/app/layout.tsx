import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Promis Qualify AS | Testledelse og Testrådgivning",
  description:
    "Promis Qualify er et spisskompetent konsulentmiljø innen testledelse, testrådgivning, Big Testing og systematisk ferdigstillelse av store IT- og byggeprosjekter. Basert på Rebel i Oslo.",
  keywords: [
    "Promis Qualify",
    "Testledelse",
    "Testrådgivning",
    "Big Testing",
    "Systematisk ferdigstillelse",
    "NS 6450",
    "ISTQB Advanced",
    "Oslo",
    "Rebel",
    "Offentlig sektor",
    "Kvalitetssikring",
  ],
  authors: [{ name: "Promis Qualify AS" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Promis Qualify AS | Testledelse av store og små IT-prosjekter",
    description:
      "Spisskompetent testledelse, rådgivning og kvalitetssikring for samfunnskritiske og forretningskritiske leveranser.",
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
    <html lang="no" className="scroll-smooth">
      <body className="bg-white text-slate-800 antialiased selection:bg-[#009FE3] selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
