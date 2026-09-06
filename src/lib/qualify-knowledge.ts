import { SITE_CONTENT } from "@/data/site-content";
import { EMPLOYEES_DATA } from "@/data/employees";

export interface ActionChip {
  labelNo: string;
  labelEn: string;
  actionType: "link" | "scroll" | "inquiry";
  target: string;
}

export const QUALIFY_SYSTEM_PROMPT = `
Du er QualifyAI – Promis Qualifys intelligente faglige rådgiverassistent.
Promis Qualify AS er et ledende, uavhengig norsk seniormiljø innen testledelse, kvalitetssikring, Big Testing og systematisk ferdigstillelse (NS 6450).

KJERNEVERDIER & PROFIL:
- Lokasjon: Rebel, Universitetsgata 2, 0164 Oslo.
- Snitterfaring: 15–20+ år for våre konsulenter. 100% ISTQB-sertifiserte (hovedvekt på ISTQB Advanced).
- 100% uavhengige: Ingen bindinger til bestemte verktøyleverandører eller systemhus.
- Motto: "Nail the Test, Rock Your Success!"

NØKKELTJENESTER:
1. Testledelse: Strategisk og operativt ansvar i smidige, hybride og tradisjonelle IT-prosjekter. Risikobasert testing, styring av tverrfaglige team, rapportering til styringsgrupper.
2. Big Testing: Spesialmetodikk for komplekse leveranser der programvare integreres med tung maskinvare, fysiske anlegg, operatører og reelle driftsprosesser. Strukturert prøvedrift (trial operations) for å sikre Operational Readiness før produksjonssetting.
3. Systematisk ferdigstillelse iht. NS 6450: Testledelse i sykehus, flyplasser og komplekse bygg. Tidlig tverrfaglig testing av elektro, VVS, SD-anlegg, brann, adgangskontroll og IKT før komponenter bygges inn.
4. Testrådgivning & Strategi: Modenhetsanalyse (TMMi), teststrategi, etablering av rammeverk for kontinuerlig kvalitet.
5. Kvalitetssikring & Universell utforming (WCAG 2.2): Etterlevelse av forskrift om universell utforming av IKT, Digdirs retningslinjer og krav i offentlige anbud.

UTVALGTE KUNDER OG REFERANSEOPPDRAG:
- Avinor: Ny bagasjehåndtering og flyplassoperasjon. Big Testing og operativ prøvedrift.
- Bane NOR: ERTMS og digitale signalsystemer for jernbane. Sikkerhetskritiske systemer.
- Ruter SIS: Sanntids trafikkinformasjon på tvers av buss, trikk, båt og T-bane.
- Ruter Billettering: Nasjonal skybasert takstmotor og mobilbillettering.
- Tolletaten: Digitalisering av grensepassering og digitale tolldeklarasjoner.
- Helse Sør-Øst: Kliniske IKT-løsninger, elektronisk pasientjournal og integrasjon mot nye sykehusbygg.
- Kartverket: Modernisering av Norges matrikkel og nasjonale geodatabaser i sky.
- BankAxept: Nasjonal betalingsinfrastruktur, sanntidstransaksjoner og PCI-DSS.
- Felleskjøpet Agri: Modernisering med Dynamics 365, ERP og B2B-netthandel.
- DIFA: Felles digitaliseringsløsninger for apoteksektoren.
- NOKUT: Nasjonal portal for godkjenning av utenlandsk utdanning.
- CRIStin / Ceres: Nasjonalt forskningsinformasjonssystem.
- FarmaPro: Kjerneplattform for apoteker og e-resepthåndtering.

TRANSPARENTE LØNNSMODELLER FOR SENIORKONSULENTER:
- Standard: 6G garantilønn i bunn (ca. kr 744 000,- med G=124 028) + 55% provisjon av fakturert timepris. Gir høyest oppside ved god oppdragsdekning.
- Trygghet: 7G garantilønn i bunn (ca. kr 868 000,-) + 48% provisjon. Høyere fast sikkerhet.
- Fastlønn: Klassisk forutsigbar fastlønn.
- Konsulentene velger modell fritt for ett kalenderår av gangen. Fullt innsyn i økonomien, pensjon, helseforsikring.

SENTRALE PERSONER:
- Remi Hansen: Daglig leder & Senior testrådgiver (rh@promis.no)
- Espen Schaatun: Salgsleder & Senior testleder (primærkontakt for oppdrag, anbud og rammeavtaler)
- Camilla Andres: HR-sjef & Senior testleder
- Bradley Naus: Senior testleder & teknisk spesialist (sky, automatisering, CI/CD)
- Heidi Raae Bønke: Rekrutteringsansvarlig & Senior rådgiver (kontakt for søkere)
- Odd Fidje: Partner & pioner innen NS 6450 og systematisk ferdigstillelse

RETNINGSLINJER FOR SVAR:
- Svar presist, faglig tillitsvekkende og vennlig på norsk (eller engelsk hvis brukeren skriver engelsk).
- Hold svarene fokuserte, informative og profesjonelle (rundt 2-4 avsnitt, unngå unødvendig fyllord).
- Henvis til relevante referanser eller personer når det passer naturlig.
- Hvis brukeren er interessert i et samarbeid, rådgivning eller et konkret oppdrag, inviter dem til å kontakte Espen Schaatun eller Remi Hansen, eller benytte kontaktskjemaet på siden.
`;

export interface KnowledgeResponse {
  reply: string;
  chips: ActionChip[];
}

export function resolveLocalKnowledge(query: string, lang: "no" | "en"): KnowledgeResponse {
  const q = query.toLowerCase();

  // 1. Big Testing / Prøvedrift
  if (q.includes("big testing") || q.includes("prøvedrift") || q.includes("operativ") || q.includes("readiness")) {
    return {
      reply:
        lang === "no"
          ? "Big Testing er Promis Qualifys spesialmetodikk for komplekse leveranser der software samvirker med tungt teknisk utstyr, mennesker og fysiske driftsprosesser. Vi gjennomfører strukturert prøvedrift i produksjonsnære miljøer for å verifisere reell driftsklarhet (Operational Readiness) før lansering. Dette har vi blant annet utført med stor suksess for Avinor og Tolletaten."
          : "Big Testing is Promis Qualify's specialized methodology for large-scale systems where software interfaces with heavy technical machinery, human operators, and physical workflows. We conduct structured trial operations (prøvedrift) in production-grade environments to verify true Operational Readiness before go-live, as proven with Avinor and the Norwegian Customs Authority.",
      chips: [
        { labelNo: "Se Avinor-oppdraget", labelEn: "View Avinor Case", actionType: "scroll", target: "#cases" },
        { labelNo: "Les om Big Testing", labelEn: "Explore Big Testing", actionType: "scroll", target: "#services" },
        { labelNo: "Kontakt Espen Schaatun", labelEn: "Contact Sales Lead", actionType: "scroll", target: "#contact" },
      ],
    };
  }

  // 2. NS 6450 / Bygg / Sykehus / Ferdigstillelse
  if (q.includes("6450") || q.includes("bygg") || q.includes("ferdigstillelse") || q.includes("sykehus") || q.includes("hospital")) {
    return {
      reply:
        lang === "no"
          ? "Testledelse i byggeprosjekter baserer seg på systematisk ferdigstillelse iht. standarden NS 6450. Vår partner Odd Fidje og våre seniorrådgivere sikrer at samspillet mellom tekniske fag (elektro, VVS, SD-anlegg, brann/sikkerhet og IKT) testes tidlig og helhetlig, før overflater lukkes. Dette forhindrer kostbare forsinkelser og sikrer feilfri overtakelse av sykehus, flyplasser og næringsbygg."
          : "Commissioning in complex facilities is governed by NS 6450 for systematic completion. Our partner Odd Fidje and senior advisors ensure cross-discipline integration across HVAC, electrical systems, BMS, and IT is rigorously verified early, preventing expensive rework and handover delays in hospitals and critical buildings.",
      chips: [
        { labelNo: "Se Helse Sør-Øst referanse", labelEn: "View Healthcare Case", actionType: "scroll", target: "#cases" },
        { labelNo: "Møt Odd Fidje & teamet", labelEn: "Meet Our Team", actionType: "scroll", target: "#team" },
        { labelNo: "Kontakt oss om NS 6450", labelEn: "Inquire about NS 6450", actionType: "scroll", target: "#contact" },
      ],
    };
  }

  // 3. Offentlig sektor, WCAG, Standarder, Digdir
  if (q.includes("offentlig") || q.includes("wcag") || q.includes("digdir") || q.includes("anbud") || q.includes("standard") || q.includes("istqb")) {
    return {
      reply:
        lang === "no"
          ? "Offentlige IT-anskaffelser krever dokumentert uavhengig kvalitetssikring, etterlevelse av Digdirs veiledere og lovpålagt universell utforming iht. WCAG 2.1/2.2 AA (Forskrift om universell utforming av IKT). 100% av våre konsulenter er ISTQB-sertifiserte, med tyngdepunkt på Advanced-nivå. Promis Qualify bistår jevnlig statlige etater og helseforetak med strategisk testledelse og anbudsforankring."
          : "Norwegian public sector procurements require certified independent quality governance, compliance with Digdir standards, and statutory digital accessibility under WCAG 2.1/2.2 AA. 100% of our consultants are ISTQB-certified (mostly Advanced level). We regularly support government agencies and healthcare trusts.",
      chips: [
        { labelNo: "Se Kartverket & Tolletaten", labelEn: "View Public Sector Cases", actionType: "scroll", target: "#cases" },
        { labelNo: "Kvalitetsrådgivning", labelEn: "Quality Advisory", actionType: "scroll", target: "#services" },
        { labelNo: "Avtal et møte", labelEn: "Schedule a Meeting", actionType: "scroll", target: "#contact" },
      ],
    };
  }

  // 4. Lønn, Rekruttering, 6G / 7G modeller
  if (q.includes("lønn") || q.includes("salary") || q.includes("6g") || q.includes("7g") || q.includes("modell") || q.includes("jobb") || q.includes("karriere") || q.includes("rekruttering")) {
    return {
      reply:
        lang === "no"
          ? "Promis Qualify tilbyr et unikt, transparent lønnssystem med tre modeller: 'Standard' (6G garantilønn på ca. kr 744 000 + 55% provisjon), 'Trygghet' (7G garantilønn på ca. kr 868 000 + 48% provisjon), og Fastlønn. Du velger modell fritt for ett kalenderår av gangen. I tillegg har vi gode pensjonsordninger, helseforsikring og et sterkt fagmiljø på Rebel i Oslo."
          : "Promis Qualify offers a transparent compensation structure with three annual choices: 'Standard' (6G base guarantee ~NOK 744k + 55% commission share), 'Security' (7G base guarantee ~NOK 868k + 48% commission share), and Fixed Salary. Selected yearly with comprehensive pension, health coverage, and our hub at Rebel Oslo.",
      chips: [
        { labelNo: "Prøv Lønnskalkulatoren", labelEn: "Launch Salary Calculator", actionType: "scroll", target: "#salary-calculator" },
        { labelNo: "Kontakt Heidi Bønke (HR)", labelEn: "Contact HR & Recruitment", actionType: "scroll", target: "#contact" },
      ],
    };
  }

  // 5. Kunder: Avinor, Bane NOR, Ruter, Helse Sør-Øst, Tolletaten, Kartverket, etc.
  if (q.includes("avinor") || q.includes("bane nor") || q.includes("ruter") || q.includes("helse") || q.includes("toll") || q.includes("kartverk") || q.includes("felleskjøpet") || q.includes("bankaxept")) {
    return {
      reply:
        lang === "no"
          ? "Promis Qualify har levert testledelse og kvalitetssikring til over 120 store samfunnskritiske prosjekter. Blant våre fremste oppdrag finner du Avinor (ny bagasjehåndtering og flyplassoperasjon), Bane NOR (ERTMS signalering), Ruter (sanntidssystemer og skybasert billettering), Tolletaten (digitale tolldeklarasjoner) og Kartverket (skybasert matrikkel)."
          : "Promis Qualify has governed QA for more than 120 mission-critical projects. Key client engagements include Avinor (airport baggage handling & operations), Bane NOR (railway signaling ERTMS), Ruter (real-time transport SIS and ticketing), the Norwegian Customs, and the Norwegian Mapping Authority (Kartverket).",
      chips: [
        { labelNo: "Bla i referanseoppdragene", labelEn: "Browse All Cases", actionType: "scroll", target: "#cases" },
        { labelNo: "Snakk med Espen Schaatun", labelEn: "Contact Sales Lead", actionType: "scroll", target: "#contact" },
      ],
    };
  }

  // 6. Personer: Remi, Espen, Camilla, Bradley, Heidi, Odd
  if (q.includes("remi") || q.includes("espen") || q.includes("bradley") || q.includes("heidi") || q.includes("odd") || q.includes("camilla") || q.includes("hvem jobber")) {
    return {
      reply:
        lang === "no"
          ? "Vårt seniormiljø ledes av Remi Hansen (daglig leder) og Espen Schaatun (salgsleder og senior testleder). For henvendelser om nye prosjekter og rammeavtaler er Espen Schaatun rett kontaktperson. For rekruttering kan du kontakte Heidi Raae Bønke, og for teknisk automatisering og sky rådgir Bradley Naus."
          : "Our senior advisory team is led by Remi Hansen (Managing Director) and Espen Schaatun (Head of Sales & Senior Test Manager). For project inquiries and framework agreements, reach out to Espen Schaatun. For recruitment contact Heidi Raae Bønke, and for automated testing & cloud governance speak with Bradley Naus.",
      chips: [
        { labelNo: "Se hele konsulentgalleriet", labelEn: "View Consultant Gallery", actionType: "scroll", target: "#team" },
        { labelNo: "Send henvendelse til Espen", labelEn: "Send Inquiry to Sales", actionType: "scroll", target: "#contact" },
      ],
    };
  }

  // 7. Pris / Leie / Bestille konsulent / Prosjekthjelp
  if (q.includes("pris") || q.includes("kost") || q.includes("timepris") || q.includes("leie") || q.includes("bistand") || q.includes("tilbud") || q.includes("kontrakt")) {
    return {
      reply:
        lang === "no"
          ? "Promis Qualify tilbyr senior testledere og rådgivere på timebasis, rammeavtaler eller som strategiske rådgivere i prosjektperioder. Våre konsulenter har i snitt 15–20+ års erfaring og går direkte inn og leverer verdi fra dag én. Ta kontakt med vår salgsleder Espen Schaatun for et uforpliktende pristilbud eller gjennomgang av oppdraget."
          : "Promis Qualify provides senior test managers and advisors on hourly consulting rates, framework contracts, or dedicated project terms. With an average of 15–20+ years of domain experience, our consultants deliver immediate impact. Reach out to our Head of Sales, Espen Schaatun, for an exploratory conversation and proposal.",
      chips: [
        { labelNo: "Send en rask henvendelse", labelEn: "Send Quick Inquiry", actionType: "scroll", target: "#contact" },
        { labelNo: "Se våre referanser", labelEn: "Review Client References", actionType: "scroll", target: "#cases" },
      ],
    };
  }

  // Default Fallback
  return {
    reply:
      lang === "no"
        ? "Promis Qualify er et uavhengig seniormiljø lokalisert på Rebel i Oslo, med spisskompetanse på testledelse, Big Testing, NS 6450 og kvalitetssikring i samfunnskritiske prosjekter. Hva kan jeg hjelpe deg med – ønsker du informasjon om våre referanseoppdrag, metodikk, konsulenter eller transparente lønnsmodeller?"
        : "Promis Qualify is an independent senior consultancy based at Rebel in Oslo, specializing in test management, Big Testing, facility commissioning (NS 6450), and QA for mission-critical IT deliveries. How can I assist you – would you like details on our client cases, methodology, consultants, or compensation models?",
    chips: [
      { labelNo: "Hva er Big Testing?", labelEn: "What is Big Testing?", actionType: "scroll", target: "#services" },
      { labelNo: "Se 12 utvalgte referanser", labelEn: "View 12 Client Cases", actionType: "scroll", target: "#cases" },
      { labelNo: "Lønnsmodeller (6G / 7G)", labelEn: "Transparent Salaries", actionType: "scroll", target: "#salary-calculator" },
      { labelNo: "Ta kontakt med oss", labelEn: "Contact Us", actionType: "scroll", target: "#contact" },
    ],
  };
}
