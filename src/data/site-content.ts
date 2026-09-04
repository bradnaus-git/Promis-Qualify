export interface ServiceItem {
  id: string;
  titleNo: string;
  titleEn: string;
  taglineNo: string;
  taglineEn: string;
  descriptionNo: string;
  descriptionEn: string;
  bulletsNo: string[];
  bulletsEn: string[];
  icon: string;
  badgeNo?: string;
  badgeEn?: string;
  isSpecialty?: boolean;
}

export interface CaseStudy {
  id: string;
  titleNo: string;
  titleEn: string;
  clientNo: string;
  clientEn: string;
  sector: "public" | "private" | "building";
  domainNo: string;
  domainEn: string;
  summaryNo: string;
  summaryEn: string;
  metricsNo: string[];
  metricsEn: string[];
}

export const SITE_CONTENT = {
  brand: {
    name: "Promis Qualify AS",
    taglineNo: "Nail the Test, Rock Your Success!",
    taglineEn: "Nail the Test, Rock Your Success!",
    subheadingNo: "Spisskompetent testledelse, rådgivning og kvalitetssikring for samfunnskritiske og forretningskritiske IT- og teknologileveranser.",
    subheadingEn: "Premier test management, advisory, and quality assurance for mission-critical IT and integrated cyber-physical deliveries.",
    address: "Rebel, Universitetsgata 2, 0164 Oslo",
    email: "post@promis-qualify.no",
    recruitmentContact: "Remi Hansen (rh@promis.no)",
    recruitmentEmail: "rh@promis.no",
    orgNumber: "912 977 676",
  },
  metrics: [
    { labelNo: "Snitterfaring", labelEn: "Avg. Experience", value: "15–20+ år", subNo: "Senior testledere og rådgivere", subEn: "Senior leads & advisors" },
    { labelNo: "ISTQB-sertifisering", labelEn: "ISTQB Certified", value: "100%", subNo: "Flertallet på Advanced-nivå", subEn: "Majority Advanced level" },
    { labelNo: "Fullførte oppdrag", labelEn: "Completed Deliveries", value: "120+", subNo: "Offentlig og privat sektor", subEn: "Public & private sector" },
    { labelNo: "Uavhengighet", labelEn: "Vendor Independence", value: "100%", subNo: "Uten teknologibindinger", subEn: "Free of vendor lock-in" },
  ],
  services: [
    {
      id: "testledelse",
      titleNo: "Testledelse",
      titleEn: "Test Management",
      taglineNo: "Gjennomføringskraft med full kontroll over risiko og kvalitet fra start til mål.",
      taglineEn: "Execution power with complete control over risk and quality from launch to landing.",
      descriptionNo: "Vi tar operativt og strategisk gjennomføringsansvar for all test og kvalitetssikring i komplekse prosjekter, enten du arbeider smidig, tradisjonelt eller i hybride modeller. Våre testledere har tung forretningsforståelse og bygger bro mellom ledelse, utviklere, arkitekter og sluttbrukere.",
      descriptionEn: "We take operational and strategic delivery responsibility for all testing and QA in complex projects, whether agile, traditional, or hybrid. Our test managers combine deep business acumen to bridge stakeholders, developers, and architects.",
      bulletsNo: [
        "Strategisk testplanlegging og forankret risikostyring",
        "Etablering og ledelse av tverrfaglige testteam",
        "Kvalitetsrapportering direkte til prosjekt- og toppledelse",
        "ISTQB Advanced-sertifiserte testledere med bred bransjeerfaring"
      ],
      bulletsEn: [
        "Strategic test planning and risk governance",
        "Building and leading cross-functional test teams",
        "Objective quality reporting to executive leadership",
        "ISTQB Advanced-certified managers with cross-industry expertise"
      ],
      icon: "ShieldCheck",
      badgeNo: "Kjernekompetanse",
      badgeEn: "Core Practice",
    },
    {
      id: "testradgivning",
      titleNo: "Testrådgivning & Strategi",
      titleEn: "Test Advisory & Strategy",
      taglineNo: "Få maksimal verdi ut av testbudsjettet med målrettet modenhetsløft.",
      taglineEn: "Maximize the value of your testing budget with targeted QA maturity uplifts.",
      descriptionNo: "Vi hjelper virksomheter med å evaluere eksisterende testpraksis, velge riktige verktøy, automatisere hensiktsmessig og etablere robuste rammeverk for kontinuerlig kvalitet. Promis Qualify er 100% leverandøruavhengige, noe som garanterer objektive råd.",
      descriptionEn: "We help enterprises evaluate current testing practices, select optimal toolchains, automate where it yields highest ROI, and establish robust continuous QA frameworks. Completely vendor-independent.",
      bulletsNo: [
        "Modenhetsanalyse og testprosessforbedring (TMMi / ISO 29119)",
        "Strategi for hensiktsmessig testautomatisering og CI/CD",
        "Uavhengig verktøyevaluering og bistand ved anskaffelser",
        "Kvalitetssikring av anbud og leverandøroppfølging"
      ],
      bulletsEn: [
        "QA Maturity Assessments (TMMi / ISO 29119)",
        "Test automation and CI/CD quality strategies",
        "Vendor-independent tool benchmarking & procurement support",
        "Tender QA and vendor governance"
      ],
      icon: "LineChart",
      badgeNo: "Strategisk rådgivning",
      badgeEn: "Strategic Advisory",
    },
    {
      id: "byggeprosjekter",
      titleNo: "Testledelse i byggeprosjekter",
      titleEn: "Commissioning & Smart Buildings",
      taglineNo: "Systematisk ferdigstillelse og utprøving av avanserte bygg og infrastruktur.",
      taglineEn: "Systematic commissioning and testing of smart facilities and complex infrastructure.",
      descriptionNo: "Nye bygg og anlegg inneholder avanserte tekniske systemer (SD-anlegg, adgangskontroll, HVAC, nødnett, IoT, pasientsignaler) som må samvirke feilfritt. Vi overfører software-verdenens strenge testmetodikk til byggebransjen for å eliminere kostbare forsinkelser og reklamasjoner ved overtakelse.",
      descriptionEn: "Modern buildings and facilities rely on complex integrated technical systems (BMS, access control, HVAC, IoT, emergency networks). We apply rigorous software testing discipline to construction and infrastructure projects, preventing costly launch delays.",
      bulletsNo: [
        "Systematisk ferdigstillelse iht. NS 6450 / BREEAM",
        "Tidlig tverrfaglig integrasjonstest før komponenter forsegles",
        "Gjennomprøving av samspill mellom elektro, VVS, IKT og sikkerhet",
        "Dokumentert erfaring fra sykehus, flyplasser og samferdsel"
      ],
      bulletsEn: [
        "Systematic commissioning in accordance with NS 6450 / BREEAM",
        "Early cross-discipline integration testing before components are sealed",
        "Verifying complex interactions across HVAC, electrical, IT and security",
        "Track record with hospitals, airports, and transport terminals"
      ],
      icon: "Building2",
      badgeNo: "Nisjespesialitet",
      badgeEn: "Niche Specialty",
      isSpecialty: true,
    },
    {
      id: "big-testing",
      titleNo: "Big Testing",
      titleEn: "Big Testing",
      taglineNo: "360-graders risikovurdering og realistisk prøvedrift av integrerte leveranser.",
      taglineEn: "360-degree risk assessment and realistic trial operations for integrated deliveries.",
      descriptionNo: "Når programvare smelter sammen med fysisk utstyr, operasjonelle rutiner og tusenvis av mennesker, kreves mer enn tradisjonell systemtest. Big Testing tester hele samspillet gjennom realistisk prøvedrift i produksjonsnære miljøer for å sikre reell driftsklarhet.",
      descriptionEn: "When software merges with complex hardware, operational workflows, and human behavior, conventional testing is insufficient. Big Testing tests the holistic operational ecosystem through realistic trial operations (prøvedrift) before go-live.",
      bulletsNo: [
        "Evaluering av reell operasjonell driftsklarhet (Operational Readiness)",
        "Stresstesting av arbeidsprosesser og beredskapsrutiner",
        "Redusert forretningsrisiko ved store nasjonale overleveringer",
        "Helhetlig samspillstest mellom menneske, teknologi og organisasjon"
      ],
      bulletsEn: [
        "Evaluating true Operational Readiness before launch",
        "Stress-testing incident response and human workflows",
        "Mitigating enterprise and public sector business risk",
        "Holistic interaction testing across human, technology, and organization"
      ],
      icon: "Cpu",
      badgeNo: "Flaggskip-metode",
      badgeEn: "Signature Method",
      isSpecialty: true,
    },
  ] as ServiceItem[],
  caseStudies: [
    {
      id: "case-sykehus",
      titleNo: "Nytt storsykehus: Testledelse av integrerte IKT- og byggsystemer",
      titleEn: "Major Regional Hospital: Integrated IT & Building Systems QA",
      clientNo: "Spesialisthelsetjenesten / Helseforetak",
      clientEn: "Regional Healthcare Trust",
      sector: "public",
      domainNo: "Helse & Sykehusbygg",
      domainEn: "Healthcare & Infrastructure",
      summaryNo: "Testledelse av det komplekse samspillet mellom pasientjournalsystemer, labautomasjon, adgangskontroll og tekniske bygningsinstallasjoner før offisiell pasientåpning.",
      summaryEn: "End-to-end test management of integrated electronic health records, lab automation, access control, and BMS facilities prior to critical patient launch.",
      metricsNo: ["0 kritiske avvik ved pasientåpning", "100% NS 6450 samsvar", "40+ integrerte delsystemer"],
      metricsEn: ["0 critical defects at patient go-live", "100% NS 6450 compliance", "40+ integrated subsystems"],
    },
    {
      id: "case-skatt",
      titleNo: "Modernisering av nasjonale kjerneforvaltningssystemer",
      titleEn: "Modernization of Core National Public Administration Systems",
      clientNo: "Statlig etat",
      clientEn: "National Government Agency",
      sector: "public",
      domainNo: "Offentlig forvaltning",
      domainEn: "Public Governance",
      summaryNo: "Etablering av teststrategi og ledelse av akseptansetest for store nasjonale register- og forvaltningsløsninger med strenge krav til personvern (GDPR) og tilgjengelighet (WCAG).",
      summaryEn: "Establishing test strategy and leading user acceptance testing for national registries with stringent privacy (GDPR) and accessibility (WCAG) mandates.",
      metricsNo: ["Over 2 millioner brukere sikret", "Automatiserte regresjonssuiter", "Full overensstemmelse med Digdir"],
      metricsEn: ["2M+ citizens protected", "Automated regression suites", "Full Digdir compliance"],
    },
    {
      id: "case-bank",
      titleNo: "Kjernebank & digital betalingsplattform",
      titleEn: "Core Banking & Real-Time Digital Payments",
      clientNo: "Nordisk Finanskonsern",
      clientEn: "Nordic Financial Group",
      sector: "private",
      domainNo: "Finans & Bank",
      domainEn: "Banking & Fintech",
      summaryNo: "Teknisk testledelse og testautomatisering i forbindelse med utskifting av kjernebanksystem og innføring av sanntidsbetalinger med strenge oppetidskrav (99.999%).",
      summaryEn: "Technical test management and continuous test automation for replacing legacy core banking systems and introducing real-time payment rails.",
      metricsNo: ["99.999% oppetid validert", "80% reduksjon i manuell testtid", "Stresstestet mot transaksjonstopp"],
      metricsEn: ["99.999% availability validated", "80% reduction in manual regression", "Peak load stress-tested"],
    },
    {
      id: "case-transport",
      titleNo: "Big Testing av flyplass- og samferdselsterminal",
      titleEn: "Big Testing of Airport & Transport Logistics",
      clientNo: "Nasjonal samferdselsaktør",
      clientEn: "National Transport Authority",
      sector: "building",
      domainNo: "Samferdsel & Logistikk",
      domainEn: "Transport & Logistics",
      summaryNo: "Gjennomføring av Big Testing og simulert prøvedrift med over 500 frivillige passasjerer for å teste bagasjehåndtering, skiltingssystemer og nødprosedyrer.",
      summaryEn: "Execution of Big Testing and full trial operations with 500+ volunteer passengers verifying baggage handling, visual guidance, and contingency protocols.",
      metricsNo: ["100% feilfri åpningsdag", "Avdekket 12 flaskehalser i prøvedrift", "Sømløs integrasjon av 6 leverandører"],
      metricsEn: ["100% defect-free opening day", "Identified 12 operational bottlenecks early", "Seamless integration across 6 vendors"],
    },
  ] as CaseStudy[],
  culture: {
    values: [
      {
        titleNo: "Balanse",
        titleEn: "Balance",
        descNo: "Hos oss er livet mer enn bare jobb. Vi legger til rette for overskudd, familieliv og faglig ro i hverdagen.",
        descEn: "Work is just one part of a fulfilling life. We prioritize family balance, autonomy, and sustainable pacing.",
      },
      {
        titleNo: "Inkludering",
        titleEn: "Inclusion",
        descNo: "Et raus og åpent fellesskap hvor alles perspektiver verdsettes, med flat struktur og stor takhøyde.",
        descEn: "A generous, welcoming community where diverse perspectives are genuinely respected and celebrated.",
      },
      {
        titleNo: "Engasjement",
        titleEn: "Dedication",
        descNo: "Ekte lidenskap for faget. Vi deler kunnskap gjennom ProLog, faglige samlinger og konferanser.",
        descEn: "True passion for QA craft. We share knowledge actively via ProLog blog, international conferences, and mentorship.",
      },
    ],
    communityNo: "I mer enn 10 år har Promis Qualify støttet stiftelsen Education for Life Nepal, som gir skolegang og trygghet til underprivilegerte barn i Katmandudalen.",
    communityEn: "For more than 10 years, Promis Qualify has supported Education for Life Nepal, providing schooling and security for underprivileged children in Kathmandu.",
  },
  salaryModel: {
    titleNo: "Lønnsmodeller i Promis Qualify",
    titleEn: "Compensation Models at Promis Qualify",
    descNo: "Hos oss kan du fritt velge mellom tre ulike lønnsmodeller for ett kalenderår av gangen, tilpasset din personlige livssituasjon og preferanse for trygghet kontra oppside.",
    descEn: "Choose freely between three transparent compensation models for one calendar year at a time, aligned with your personal preferences.",
    grunnbelopG: 124028, // Folketrygdens grunnbeløp G
    payoutStructureNo: "Total lønn = Fast garantilønn (utbetales månedlig) + Variabelt honorar/bonus (utbetales kvartalsvis).",
    payoutStructureEn: "Total compensation = Fixed base guarantee (paid monthly) + Variable performance bonus (paid quarterly).",
    models: [
      {
        id: "standard",
        nameNo: "Standard",
        nameEn: "Standard",
        tagNo: "Maksimal oppside",
        tagEn: "Maximum Upside",
        baseGuaranteeG: 6,
        bonusGrad: "70%",
        descNo: "6 G garantilønn i bunn (ca. kr 744 000,-) med 70 % bonusgrad. Ved normal oppdragsdekning vil dette gi den høyeste samlede årsinntekten.",
        descEn: "6 G base guarantee (~NOK 744k) with 70% bonus share. Delivers highest aggregate compensation during steady assignment coverage.",
      },
      {
        id: "sikring",
        nameNo: "Sikring",
        nameEn: "Sikring",
        tagNo: "Balansert trygghet",
        tagEn: "Balanced Security",
        baseGuaranteeG: 7,
        bonusGrad: "60%",
        descNo: "7 G garantilønn i bunn (ca. kr 868 000,-) med 60 % bonusgrad. Gir økt forutsigbarhet i hverdagen og lavere svingninger mellom oppdrag.",
        descEn: "7 G base guarantee (~NOK 868k) with 60% bonus share. Provides higher baseline stability with predictable quarterly distributions.",
      },
      {
        id: "bankers",
        nameNo: "Bankers",
        nameEn: "Bankers",
        tagNo: "Maksimal forutsigbarhet",
        tagEn: "Maximum Predictability",
        baseGuaranteeG: 8,
        bonusGrad: "50%",
        descNo: "8 G garantilønn i bunn (ca. kr 992 000,-) med 50 % bonusgrad. Skreddersydd for deg som prioriterer en svært høy og jevn fast utbetaling.",
        descEn: "8 G base guarantee (~NOK 992k) with 50% bonus share. Tailored for consultants prioritizing maximal monthly predictability.",
      },
    ],
  },
  promisFamily: {
    titleNo: "PROMIS-familien: Tverrfaglig kraft",
    titleEn: "The PROMIS Family: Cross-Disciplinary Strength",
    descNo: "Promis Qualify inngår i et strategisk partnerskap med PROMIS AS og PROMIS Navigate AS. Sammen utgjør vi et av Norges fremste fagmiljøer innen prosjektledelse, anskaffelser, arkitektur og kvalitetssikring.",
    descEn: "Promis Qualify collaborates closely with PROMIS AS and PROMIS Navigate AS. Together we offer unparalleled end-to-end expertise across project governance, public procurement, IT architecture, and QA.",
    companies: [
      {
        name: "PROMIS AS",
        roleNo: "Prosjektledelse & Anskaffelser",
        roleEn: "Project Governance & Procurement",
        descNo: "Eksperter på prosjektledelse, styring av store IKT-anskaffelser og kvalitetssikring for offentlig og privat sektor.",
        descEn: "Leaders in IT project governance, major public tender acquisitions, and independent quality audits.",
        url: "https://www.promis.no",
      },
      {
        name: "PROMIS Navigate AS",
        roleNo: "Virksomhets- & IT-arkitektur",
        roleEn: "Enterprise & IT Architecture",
        descNo: "Rådgivere innen strategisk IT-arkitektur, virksomhetsutvikling og digital transformasjon.",
        descEn: "Advisors in strategic enterprise architecture, digital transformation roadmaps, and systems design.",
        url: "https://promis-navigate.no",
      },
      {
        name: "Promis Qualify AS",
        roleNo: "Testledelse & Kvalitetssikring",
        roleEn: "Test Management & Quality Assurance",
        descNo: "Spesialister på testledelse, testrådgivning, Big Testing og teknisk ferdigstillelse av komplekse systemer og bygg.",
        descEn: "Specialists in test leadership, QA advisory, Big Testing, and commissioning of complex cyber-physical environments.",
        url: "https://promis-qualify.no",
      },
    ],
  },
};
