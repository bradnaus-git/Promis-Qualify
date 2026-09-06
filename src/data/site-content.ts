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
  logo?: string;
  sector: "all" | "public" | "transport" | "finance" | "health" | "building" | "agri";
  domainNo: string;
  domainEn: string;
  summaryNo: string;
  summaryEn: string;
  fullDescriptionNo?: string;
  fullDescriptionEn?: string;
  metricsNo: string[];
  metricsEn: string[];
  tags?: string[];
}

export interface IndustryMatrixItem {
  id: string;
  industryNo: string;
  industryEn: string;
  icon: string;
  taglineNo: string;
  taglineEn: string;
  solutionsNo: string[];
  solutionsEn: string[];
  clientExamples: string[];
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
      id: "case-tolletaten",
      titleNo: "Tolletatens digitaliseringsprogram & Ekspressfortolling",
      titleEn: "Norwegian Customs: Digital Transformation & Express Clearance",
      clientNo: "Tolletaten",
      clientEn: "Norwegian Customs Authority",
      logo: "/images/references/tolletaten.png",
      sector: "public",
      domainNo: "Offentlig forvaltning & Grensekontroll",
      domainEn: "Public Governance & Border Control",
      summaryNo: "Bistand med test, smidig testledelse og innføring av kontinuerlige leveranser ved utviklingen av nye IT-løsninger i Tolletatens store digitaliseringsprogram siden 2017.",
      summaryEn: "Leading test management and agile quality practices for the Norwegian Customs digital transformation program since 2017, enabling continuous deliveries.",
      fullDescriptionNo: "I fremtidens digitale tolletat brukes digitale verktøy til å samle inn og behandle informasjon om godstransport inn og ut av Norge. Promis Qualify har siden 2017 bistått Tolletaten med å utvikle nytt kunderegister, Ekspressfortolling (helautomatisert grensepasseringsløsning), pålogging via Maskinporten, og ICS2 (EUs Import Control System 2). Vi innførte et smidig testregime som kobler fagsiden, kundene og hele IT-avdelingen, samt bidro med sikkerhetsarkitekt med personvernfokus (GDPR).",
      fullDescriptionEn: "Digital tools collect and process cargo information in and out of Norway. Promis Qualify has assisted Norwegian Customs since 2017 developing their new customer registry, Express Customs Clearance (automated border crossing), Maskinporten auth, and ICS2. Established agile testing workflows and provided security architecture with GDPR focus.",
      metricsNo: ["Helautomatisert grensepassering", "Smidig testregime for kontinuerlige leveranser", "GDPR- & Maskinporten-sertifisert"],
      metricsEn: ["Automated border clearance", "Agile CI/CD test regime", "GDPR & Maskinporten compliant"],
      tags: ["Offentlig", "Toll & Logistikk", "Smidig testledelse", "GDPR"],
    },
    {
      id: "case-ruter-sis",
      titleNo: "Ruters sanntidsinformasjonssystem (SIS) & Passasjertelling",
      titleEn: "Ruter Real-Time Information (SIS) & Fleet Telemetry",
      clientNo: "Ruter As",
      clientEn: "Ruter AS (Public Transit)",
      logo: "/images/references/ruter.png",
      sector: "transport",
      domainNo: "Kollektivtransport & Sanntids-IoT",
      domainEn: "Public Transit & Real-Time IoT",
      summaryNo: "Kvalitetssikring og testledelse på kundesiden for Ruters forretningskritiske sanntidssystem, trafikklysprioritering og ny passasjertelling på Kafka og AWS.",
      summaryEn: "Quality assurance and customer-side test leadership for Ruter's mission-critical vehicle dispatch, signal priority, and next-gen Kafka/AWS passenger telemetry.",
      fullDescriptionNo: "Ruters sanntidsinformasjonssystem (SIS) styrer kjøretøy og signalprioritering på trafikklys i Oslo og Akershus, leverer sanntidsdata til Ruters Reisetjenester, og utfører automatisk passasjertelling. Promis Qualify har siden mai 2018 ledet akseptansetest, fulgt opp leverandørers systemtest, og håndtert driftshendelser og kommisjonering av nye kjøretøy. Vi leder også test av neste generasjons sensorsystem på kjøretøyene koblet mot Kafka streams, Elasticsearch og AWS.",
      fullDescriptionEn: "Ruter's SIS governs vehicle management and traffic signal priority, feeding real-time departure data and vehicle telemetry across Oslo and Akershus. Promis Qualify has led acceptance testing, vendor system test governance, and commissioning of new vehicles, alongside testing the next-gen IoT sensor pipeline built on Kafka, Elasticsearch, and AWS.",
      metricsNo: ["Sanntidsstyring av tusenvis av avganger", "Akseptansetest av Kafka & AWS IoT-backend", "Fortløpende kommisjonering av nye kjøretøy"],
      metricsEn: ["Real-time governance of thousands of departures", "Acceptance testing of Kafka & AWS IoT pipeline", "Continuous onboarding of new transit fleets"],
      tags: ["Transport", "Sanntid", "IoT", "Kafka/AWS"],
    },
    {
      id: "case-kartverket",
      titleNo: "Kartverket: E-tinglysing (Helautomatisert grunnbok)",
      titleEn: "Norwegian Mapping Authority: Automated E-Registration",
      clientNo: "Kartverket",
      clientEn: "Norwegian Mapping Authority",
      logo: "/images/references/kartverket.png",
      sector: "public",
      domainNo: "Nasjonale registre & Samfunnsøkonomi",
      domainEn: "National Registries & Public Infrastructure",
      summaryNo: "Ekstern kvalitetssikring av hele testprosessen for E-tinglysing – et nasjonalt prosjekt med 85 MNOK ramme og estimert 1,3 milliarder NOK i samfunnsgevinst.",
      summaryEn: "Independent quality assurance across the entire test process for automated property registration with estimated NOK 1.3 billion in socio-economic gains.",
      fullDescriptionNo: "Kartverket drifter det nasjonale eiendomsregisteret og tinglyser fast eiendom og andeler i borettslag. Prosjektet E-tinglysing etablerte en helautomatisert prosess der dokumenter som oppfyller lovkrav tinglyses automatisk med umiddelbar prioritet i grunnboken fra klokkeslettet de mottas. Promis Qualify utførte ekstern kvalitetssikring og revisjon av hele testprosessen i det smidige prosjektet.",
      fullDescriptionEn: "Kartverket operates Norway's national property registry. E-tinglysing introduced fully automated document validation with instant land registry priority. Promis Qualify provided third-party quality audits and verification of the end-to-end testing workflow.",
      metricsNo: ["1,3 mrd NOK estimert samfunnsgevinst", "Helautomatisert umiddelbar tinglysing", "Uavhengig revisjon av testregimet"],
      metricsEn: ["NOK 1.3B estimated socio-economic benefit", "Fully automated instant legal registration", "Independent QA audit of test regime"],
      tags: ["Offentlig", "Register", "Kvalitetsrevisjon", "Smidig"],
    },
    {
      id: "case-felleskjopet",
      titleNo: "Felleskjøpet Agri: Hovedsystem basert på Microsoft Dynamics 365",
      titleEn: "Felleskjøpet Agri: Core ERP Transformation with MS Dynamics 365",
      clientNo: "Felleskjøpet Agri",
      clientEn: "Felleskjøpet Agri",
      logo: "/images/references/felleskjopet.png",
      sector: "agri",
      domainNo: "Landbruk, ERP & Forsyningskjede",
      domainEn: "Agriculture, ERP & Supply Chain",
      summaryNo: "Testledelse og etablering av teststrategi for Felleskjøpets nye kjerne-ERP basert på Microsoft Dynamics 365, skytjenester, logistikk og datavarehus.",
      summaryEn: "Test leadership and testing strategy for Felleskjøpet's mission-critical enterprise migration to Microsoft Dynamics 365 and cloud architecture.",
      fullDescriptionNo: "Felleskjøpet Agri erstattet sitt hovedsystem med en moderne løsning basert på Microsoft Dynamics 365 og Microsofts skyteknologi, integrert mot interne og eksterne systemer. Første trinn omfattet innkjøps- og salgsordre, fakturering, økonomiprosesser, vare- og logistikkprosesser samt datavarehus. Promis Qualify dekket rollen som testleder/teamleder for test, etablerte teststrategi, ledet systemtest og akseptansetest, og koordinerte ikke-funksjonelle tester og GDPR-sikrede testdata.",
      fullDescriptionEn: "Felleskjøpet Agri replaced its enterprise core with Microsoft Dynamics 365 and Microsoft cloud solutions, handling purchasing, sales orders, financial reporting, warehousing, logistics, and data warehousing. Promis Qualify served as test lead/team lead, establishing test strategies, leading system and acceptance tests, and managing GDPR-compliant test environments.",
      metricsNo: ["Overgang til MS Dynamics 365 & Azure", "Styring av systemtest & akseptansetest", "GDPR-sikrede testdata & miljøstrategi"],
      metricsEn: ["MS Dynamics 365 & Azure cloud rollout", "System & acceptance test leadership", "GDPR test data & environment strategy"],
      tags: ["Landbruk", "ERP", "Dynamics 365", "Logistikk"],
    },
    {
      id: "case-difa",
      titleNo: "DIFA AS / Apotekforeningen: Felles e-helseløsninger for 900 apotek",
      titleEn: "DIFA / Norwegian Pharmacy Assoc.: National E-Health Infrastructure",
      clientNo: "DIFA AS (Apotekforeningen)",
      clientEn: "DIFA AS (Norwegian Pharmacy Association)",
      logo: "/images/references/difa.png",
      sector: "health",
      domainNo: "E-helse, Kjernejournal & Legemidler",
      domainEn: "E-Health, Core Medical Records & Pharmacy",
      summaryNo: "Testansvarlig på kundesiden for felles nasjonale e-helseløsninger i alle landets 900 apotek, herunder kjernejournal, e-resept og myndighetsgodkjenninger.",
      summaryEn: "Client test manager for joint national e-health systems across all 900 pharmacies in Norway, covering national summary records, e-prescriptions, and regulatory approval.",
      fullDescriptionNo: "DIFA AS, eid av Apotekforeningen, anskaffer, utvikler og forvalter felles IT-løsninger for legemiddelhåndtering i apotek. Samtlige 900 apotek i Norge samarbeider om felles e-helseløsninger, inkludert kjernejournal, e-resept, felles legemiddelliste og journalføring. Promis Qualify var testansvarlig på kundesiden for prosjektets og apotekkjedenes bidrag, med kontrollpunkttest, akseptansetest, pilotering og godkjenninger fra helsemyndighetene i et smidig rammeverk.",
      fullDescriptionEn: "DIFA AS procures, develops, and governs joint IT platforms for pharmaceutical handling across Norway's 900 pharmacies. Promis Qualify managed client-side QA, overseeing acceptance testing, pharmacy chain coordination, e-prescription integrations, and formal regulatory clearance.",
      metricsNo: ["Dekker samtlige 900 apotek i Norge", "Integrert mot kjernejournal & e-resept", "Formell godkjenning fra helsemyndigheter"],
      metricsEn: ["Covers all 900 pharmacies nationwide", "Integrated with national health records", "Formal health authority compliance"],
      tags: ["Helse", "Apotek", "E-helse", "Myndighetsgodkjenning"],
    },
    {
      id: "case-bankaxept",
      titleNo: "BankAxept AS: Ny prismodell & nasjonal faktureringsløsning",
      titleEn: "BankAxept: National Payment Infrastructure & Billing",
      clientNo: "BankAxept AS",
      clientEn: "BankAxept AS",
      logo: "/images/references/bankaxept.png",
      sector: "finance",
      domainNo: "Finansiell infrastruktur & Betalingsformidling",
      domainEn: "Financial Rails & Merchant Payments",
      summaryNo: "Testleder og funksjonell tester for etablering av ny prismodell og faktureringsløsning for alle landets brukersteder i den nasjonale betalingsinfrastrukturen.",
      summaryEn: "Test leadership and functional QA for establishing a new pricing model and billing engine for merchants across Norway's national payment network.",
      fullDescriptionNo: "BankAxept overtok i 2018 ansvaret for fakturering av alle landets brukersteder for den nasjonale betalingsinfrastrukturen. Prosjektet etablerte en ny prismodell og faktureringsløsning med en rekke ulike bidragende tjenesteleverandører. Promis Qualify ble engasjert i en kombinert rolle som testleder, funksjonell tester og prosjektlederstøtte.",
      fullDescriptionEn: "BankAxept assumed direct responsibility for billing all Norwegian merchants on the national debit card infrastructure. Promis Qualify provided a combined role as test lead, functional QA tester, and project management advisor.",
      metricsNo: ["Nasjonalt betalingsnettverk forankret", "Kompleks flerleverandør-integrasjon", "Nøyaktig finansiell avregning"],
      metricsEn: ["National payment network anchored", "Multi-vendor integration verified", "Precise financial settlement"],
      tags: ["Finans", "BankAxept", "Betalinger", "Fakturering"],
    },
    {
      id: "case-ruter-billett",
      titleNo: "RuterBillett: Norges ledende kollektiv- og billetteringsapp",
      titleEn: "RuterBillett: Norway's Leading Transit Ticketing App",
      clientNo: "Ruter As",
      clientEn: "Ruter AS",
      logo: "/images/references/ruterbillett.png",
      sector: "transport",
      domainNo: "Mobilbetaling & Storskala Billettsystem",
      domainEn: "Mobile Ticketing & High-Volume Payments",
      summaryNo: "Testledelse av akseptansetest og leverandøroppfølging for app med over 1 million nedlastinger, integrert med Vipps, ApplePay, 3D Secure og fellesfylkessamarbeid.",
      summaryEn: "Acceptance test management and vendor QA for Norway's largest ticketing app (1M+ downloads), integrating Vipps, Apple Pay, and inter-county transit agreements.",
      fullDescriptionNo: "RuterBillett er Ruters mest brukte betalingsløsning der godt over halvparten av alle billettkjøp gjennomføres, med mange tusen kjøp daglig. Promis Qualify ledet testen på kundesiden for akseptansetest og oppfølging av leverandørens systemtest. Vi ledet kvalitetssikringen da appen ble utvidet med Vipps, MobilePay, Strex, ApplePay, 3D Secure betaling på betalingskort, 'Kjøp til andre' og 365-dagersbillett, samt utrullingen i samarbeid med Kolumbus, AKT, Brakar og ØKT.",
      fullDescriptionEn: "RuterBillett handles the vast majority of all transit ticket purchases in the capital region with thousands of daily transactions. Promis Qualify directed customer-side acceptance testing, rolling out Vipps, MobilePay, Apple Pay, 3D Secure card processing, and ticket sharing across regional transit agencies.",
      metricsNo: ["1 000 000+ app-nedlastinger", "Integrert mot Vipps, ApplePay & 3D Secure", "Felles billettløsning for 5 fylker"],
      metricsEn: ["1,000,000+ app downloads", "Integrated with Vipps, Apple Pay & 3D Secure", "Unified ticketing across 5 counties"],
      tags: ["Transport", "Mobilapp", "Vipps", "ApplePay"],
    },
    {
      id: "case-nokut",
      titleNo: "NOKUT: eSam elektronisk søknadsløsning & Institusjonsportal",
      titleEn: "NOKUT: National Higher Education Accreditation Portal",
      clientNo: "NOKUT",
      clientEn: "NOKUT (Norwegian Education Directorate)",
      logo: "/images/references/nokut.png",
      sector: "public",
      domainNo: "Utdanning, Saksbehandling & Arkiv",
      domainEn: "Higher Education & Case Processing",
      summaryNo: "Testledelse på kundesiden for eSam søknadsportal, Public 360 saksbehandling og institusjonsportal for godkjenning av utenlandsk utdanning.",
      summaryEn: "Client test leadership for eSam accreditation portal, Public 360 case management integration, and institution portals for foreign degree recognition.",
      fullDescriptionNo: "NOKUT er faglig uavhengig tilsynsmyndighet for utdanninger ved norske universiteter og høyskoler (over 4000 utdanningstilbud) og behandler årlig titusenvis av søknader om godkjenning av utenlandsk utdanning. Promis Qualify var engasjert som testleder på kundesiden for den elektroniske søknadsløsningen eSam, elektronisk saksbehandling og arkiv (Public 360), samt Institusjonsportalen for fagskolene. Vi fungerte også som teknisk support og forvalter etter produksjonssetting.",
      fullDescriptionEn: "NOKUT oversees higher education accreditation and reviews thousands of international degrees annually. Promis Qualify served as client test lead for the eSam application portal, Public 360 electronic records integration, and the Vocational College portal.",
      metricsNo: ["Tusenvis av årlige søknader behandlet", "Sømløs Public 360 arkivintegrasjon", "Teknisk forvaltningsansvar etter go-live"],
      metricsEn: ["Thousands of annual applications processed", "Seamless Public 360 archive integration", "Post-launch operational support"],
      tags: ["Utdanning", "Saksbehandling", "Public 360", "Arkiv"],
    },
    {
      id: "case-cristin",
      titleNo: "CRIStin: Nasjonalt forskningsinformasjonssystem",
      titleEn: "CRIStin: National Research Information System",
      clientNo: "CRIStin / Ceres",
      clientEn: "CRIStin / Ceres",
      logo: "/images/references/cristin.png",
      sector: "public",
      domainNo: "Forskningssektor & Datahåndtering",
      domainEn: "Research Data & University Sector",
      summaryNo: "Etablering og implementering av teststrategi og prosesser for registrering og rapportering av all norsk forskningsaktivitet i helse- og universitetssektoren.",
      summaryEn: "Establishing test strategy and quality framework for Norway's central research repository across hospitals, institutes, and universities.",
      fullDescriptionNo: "CRIStin er det nasjonale forskningsinformasjonssystemet for registrering og rapportering av forskningsaktiviteter i helsesektoren, instituttsektoren samt universitets- og høyskolesektoren. Promis Qualify bisto med å etablere og implementere en helhetlig teststrategi for videreutvikling av løsningen, samt profesjonalisere testprosesser og rammeverk i samarbeid med CRIStins interne testledelse i et smidig prosjekt.",
      fullDescriptionEn: "CRIStin is Norway's national research information system, documenting research outputs across academia and medical centers. Promis Qualify established testing methodology, framework modernization, and agile quality processes.",
      metricsNo: ["Felles plattform for hele Forsknings-Norge", "Profesjonalisert smidig testmetodikk", "Kvalitetssikret forskningsrapportering"],
      metricsEn: ["Unified portal for all Norwegian research", "Professionalized agile testing methods", "Verified research reporting workflows"],
      tags: ["Forskning", "Teststrategi", "Ceres", "Smidig"],
    },
    {
      id: "case-farmapro",
      titleNo: "FarmaPro: Kvalitetsløft for kjernesystemet i 900 apotek",
      titleEn: "FarmaPro: Quality Overhaul of Core Pharmacy System",
      clientNo: "Espire / Capgemini",
      clientEn: "Espire / Capgemini",
      logo: "/images/references/farmapro.png",
      sector: "health",
      domainNo: "Apotekkjernesystem & Testautomatisering",
      domainEn: "Pharmacy Core & Test Automation",
      summaryNo: "Ledelse av kvalitetsforbedring, refaktorering og etablering av automatiserte tester for landets forretningskritiske apoteksystem.",
      summaryEn: "Directing quality improvements, refactoring, and automated testing suites for the nationwide mission-critical pharmacy core system.",
      fullDescriptionNo: "FarmaPro er det samfunns- og forretningskritiske kjernesystemet for alle ca. 900 apotek og medisinutsalg i Norge. Promis Qualify ble engasjert for å lede et omfattende kvalitetsforbedringsprosjekt som omfattet refaktorering, feilretting, dokumentasjonsforbedring og drastisk økning i testdekning for automatiserte tester for å sikre stabilitet, ytelse og raskere release-sykluser.",
      fullDescriptionEn: "FarmaPro is the mission-critical core system utilized by all 900 pharmacies in Norway. Promis Qualify led a comprehensive refactoring and quality improvement initiative, establishing automated regression test suites and stabilizing performance.",
      metricsNo: ["Dekker samtlige 900 apotek & medisinutsalg", "Drastisk økt testdekning via automasjon", "Raskere og tryggere release-sykluser"],
      metricsEn: ["Powers all 900 pharmacies nationwide", "Significantly elevated test automation coverage", "Faster and safer release cycles"],
      tags: ["Apotek", "FarmaPro", "Automasjon", "Ytelse"],
    },
    {
      id: "case-sykehus",
      titleNo: "Helse Sør-Øst: Testledelse av integrerte IKT- og byggesystemer",
      titleEn: "Helse Sør-Øst: Integrated IT & BMS Commissioning",
      clientNo: "Helse Sør-Øst / Spesialisthelsetjenesten",
      clientEn: "Helse Sør-Øst / Regional Healthcare Trust",
      logo: "/images/references/helsesorost.png",
      sector: "building",
      domainNo: "Helse, Sykehusbygg & NS 6450",
      domainEn: "Healthcare & Infrastructure (NS 6450)",
      summaryNo: "Testledelse av det komplekse samspillet mellom pasientjournaler, labautomasjon, adgangskontroll, HVAC og nødnett før offisiell pasientåpning.",
      summaryEn: "Commissioning and integration testing between medical systems, lab automation, access control, and smart building facilities prior to clinical opening.",
      fullDescriptionNo: "Nye sykehusbygg er blant Norges mest teknologisk komplekse installasjoner, der medisinteknisk utstyr, pasientjournaler, rørpost, adgangskontroll, nødstrøm og ventilasjon må fungere uavbrutt sammen. Promis Qualify anvender NS 6450 for systematisk ferdigstillelse og tverrfaglig testledelse som eliminerer forsinkelser og risiko ved pasientinnflytting.",
      fullDescriptionEn: "Modern hospital facilities are highly complex integrated ecosystems. Promis Qualify applies NS 6450 systematic commissioning discipline, orchestrating medical technology, security, and building automation into a verified delivery.",
      metricsNo: ["0 kritiske avvik ved pasientåpning", "100% NS 6450 samsvar", "40+ integrerte delsystemer"],
      metricsEn: ["0 critical defects at go-live", "100% NS 6450 compliance", "40+ integrated subsystems"],
      tags: ["Sykehus", "NS 6450", "Bygg", "IKT"],
    },
    {
      id: "case-avinor",
      titleNo: "Avinor Oslo Lufthavn: Big Testing av terminal- & bagasjehåndtering",
      titleEn: "Avinor Oslo Airport: Big Testing of Terminal & Baggage Operations",
      clientNo: "Avinor (Oslo Lufthavn)",
      clientEn: "Avinor (Oslo Airport)",
      logo: "/images/references/avinor.png",
      sector: "transport",
      domainNo: "Luftfart, Big Testing & Prøvedrift",
      domainEn: "Aviation, Big Testing & Trial Ops",
      summaryNo: "Gjennomføring av Big Testing og simulert prøvedrift med over 500 frivillige passasjerer for å teste bagasjehåndtering, skiltingssystemer og nødprosedyrer.",
      summaryEn: "Execution of Big Testing and full trial operations with 500+ volunteer passengers verifying baggage handling, visual guidance, and contingency protocols.",
      fullDescriptionNo: "Ved utvidelse og modernisering av flyplassterminaler må bagasjehåndteringssystemer, innsjekk, sikkerhetskontroll, skilting og beredskap samhandle uten feilmarginer. Promis Qualify ledet Big Testing med hundrevis av frivillige passasjerer og realistiske prøvesituasjoner før offisiell åpning, noe som avdekket flaskehalser tidlig og sikret en problemfri overlevering.",
      fullDescriptionEn: "Modern airport terminals demand flawless synchronicity between baggage automation, check-in, security screening, passenger routing, and emergency readiness. Promis Qualify executed Big Testing with hundreds of simulated passengers, detecting operational bottlenecks prior to live flight operations.",
      metricsNo: ["100% feilfri åpningsdag", "Avdekket 12 flaskehalser i prøvedrift", "Sømløs integrasjon av 6 leverandører"],
      metricsEn: ["100% defect-free opening day", "Identified 12 operational bottlenecks early", "Seamless integration across 6 vendors"],
      tags: ["Luftfart", "Avinor", "Big Testing", "Prøvedrift"],
    },
  ] as CaseStudy[],
  industryMatrix: [
    {
      id: "offentlig",
      industryNo: "Offentlig forvaltning",
      industryEn: "Public Sector & Governance",
      icon: "ShieldCheck",
      taglineNo: "Samfunnskritiske fellesregistre, saksbehandling og statlige etater.",
      taglineEn: "Mission-critical registries, case management, and government agencies.",
      solutionsNo: [
        "Kunderegister og fellestjenester",
        "GDPR, innebygd personvern og informasjonssikkerhet",
        "Testdatahåndtering og syntetiske testdata",
        "E-tinglysing og automatisert saksbehandling",
        "Innkjøpssystemer, prosjektstyring og HR-løsninger",
        "Tollbehandling og automatisert grensepassering",
        "Maskinlæring, beredskapsløsninger og driftsklarhet (Operational Readiness)"
      ],
      solutionsEn: [
        "Customer registries and shared national services",
        "GDPR, privacy by design, and cybersecurity governance",
        "Test data management and synthetic data pipelines",
        "Automated land registration and legal workflows",
        "Procurement, project portfolio management, and HR suites",
        "Automated customs clearance and border control",
        "Machine learning, contingency systems, and Operational Readiness"
      ],
      clientExamples: ["Tolletaten", "Kartverket", "Kunnskapsdepartementet"]
    },
    {
      id: "helse",
      industryNo: "Helse & Sykehus",
      industryEn: "Healthcare & Hospitals",
      icon: "Building2",
      taglineNo: "Livskritiske helseplattformer, labsystemer og sykehusbygg.",
      taglineEn: "Life-critical medical platforms, lab systems, and smart hospital buildings.",
      solutionsNo: [
        "Sykehustjenester og elektronisk pasientjournal (EPJ)",
        "Labsystemer, labautomasjon og multimedia",
        "Teknisk plattform og integrert sikkerhet",
        "Tverrfaglig IKT- og byggintegrasjon iht. NS 6450",
        "Økonomi- og ressursstyring for helseforetak"
      ],
      solutionsEn: [
        "Hospital systems and Electronic Patient Records (EHR)",
        "Laboratory automation, diagnostic suites, and medical imaging",
        "Technical platforms and integrated hospital security",
        "Interdisciplinary IT/BMS integration under NS 6450",
        "Enterprise resourcing and clinical supply chains"
      ],
      clientExamples: ["Spesialisthelsetjenesten", "Regionale helseforetak"]
    },
    {
      id: "finans",
      industryNo: "Bank, Forsikring & Finans",
      industryEn: "Banking, Insurance & Fintech",
      icon: "LineChart",
      taglineNo: "Nasjonal betalingsinfrastruktur, kjernebank og transaksjonssikkerhet.",
      taglineEn: "National payment rails, core banking, and transaction security.",
      solutionsNo: [
        "Nasjonal betalingsinfrastruktur og faktureringsløsninger",
        "Kjernebanksystemer og transaksjonsmotorer",
        "Skyløsninger for finansiell samhandling",
        "Kredittkort, nettbank og mobilbetaling (smarttelefoner)",
        "Kjerneforsikringssystemer og skadeoppgjør"
      ],
      solutionsEn: [
        "National debit payment infrastructure and merchant billing",
        "Core banking systems and high-throughput transaction engines",
        "Cloud architectures for financial institutions",
        "Credit card platforms, online banking, and mobile payments",
        "Core insurance administration and claims processing"
      ],
      clientExamples: ["BankAxept AS", "Nordiske finanskonsern"]
    },
    {
      id: "transport",
      industryNo: "Transport & Samferdsel",
      industryEn: "Transport & Mobility",
      icon: "Cpu",
      taglineNo: "Sanntidsflåtestyring, storskala billettering og logistikksystemer.",
      taglineEn: "Real-time fleet telemetry, high-volume ticketing, and transit logistics.",
      solutionsNo: [
        "Sanntidsinformasjonssystemer (SIS) og trafikklysprioritering",
        "Storskala mobil billettering (Vipps, ApplePay, 3D Secure)",
        "Reiseplanlegger-apper og sanntidsavgangstavler",
        "Automatisk passasjertelling med sensorer på kjøretøy (Kafka, Elasticsearch, AWS)",
        "Flyplassterminaler (bagasjehåndtering, boarding, sikkerhet og bakketjenester)",
        "Strømavregning for tog, ruteplanlegging og trafikkstyring"
      ],
      solutionsEn: [
        "Real-time dispatch (SIS) and traffic signal priority",
        "Mass-market mobile ticketing apps (Vipps, Apple Pay, 3D Secure)",
        "Journey planning applications and departure monitors",
        "Automated passenger counting via IoT sensors (Kafka, Elasticsearch, AWS)",
        "Airport passenger terminals (baggage handling, gate boarding, security)",
        "Railway power settlement, timetable scheduling, and traffic command"
      ],
      clientExamples: ["Ruter AS", "Bane NOR", "Avinor", "Fylkeskollektivselskap"]
    },
    {
      id: "apotek",
      industryNo: "Apotek & Farmasi",
      industryEn: "Pharmacy & Pharmaceuticals",
      icon: "ShieldCheck",
      taglineNo: "Nasjonale e-helseløsninger og kjernesystem for alle landets apotek.",
      taglineEn: "National e-health platforms and core systems for 900 pharmacies.",
      solutionsNo: [
        "Bransjekjernesystemer for apotek (FarmaPro for 900 apotek)",
        "Felles e-helseløsninger, e-resept og kjernejournal",
        "Felles legemiddelliste og farmasøytisk journalføring",
        "3. parts integrasjoner og apotekkjedenes logistikk",
        "Formelle godkjenninger fra helsemyndigheter"
      ],
      solutionsEn: [
        "Nationwide pharmacy core ERP (FarmaPro across 900 outlets)",
        "National shared e-health services, e-prescriptions, and summary records",
        "Unified pharmaceutical medication records",
        "Third-party integrations and wholesale supply chain",
        "Formal compliance approvals with health directorates"
      ],
      clientExamples: ["DIFA AS (Apotekforeningen)", "Espire / Capgemini"]
    },
    {
      id: "landbruk",
      industryNo: "Landbruk & Næringsmiddel",
      industryEn: "Agriculture & Food Production",
      icon: "Building2",
      taglineNo: "Industrielle ERP-systemer, forsyningskjeder og skytjenester.",
      taglineEn: "Industrial ERP platforms, supply chain operations, and cloud transition.",
      solutionsNo: [
        "Modernisering med Microsoft Dynamics 365 og Azure",
        "Handelssystemer, tonnsystemer og kjerneøkonomi",
        "Vare- og logistikkprosesser samt datavarehus for rapportering",
        "Digitale salgskanaler for primærnæringen",
        "MES (Manufacturing Execution Systems), labsystemer og forsyningsstyring"
      ],
      solutionsEn: [
        "Modernization via Microsoft Dynamics 365 and Azure cloud",
        "Trading systems, tonnage tracking, and core financial ledgers",
        "Warehousing, supply logistics, and business intelligence reporting",
        "B2B digital commerce channels for agriculture",
        "MES industrial shop-floor systems, labs, and procurement"
      ],
      clientExamples: ["Felleskjøpet Agri"]
    },
    {
      id: "utdanning",
      industryNo: "Utdanning & Forskning",
      industryEn: "Education & Research",
      icon: "LineChart",
      taglineNo: "Nasjonale godkjenningsportaler, saksbehandling og forskningsregistre.",
      taglineEn: "National accreditation portals, case processing, and research registers.",
      solutionsNo: [
        "Elektronisk søknadsløsning (eSam) for utenlandsk utdanning",
        "Institusjonsportaler for akkreditering av studietilbud",
        "Elektronisk saksbehandling og arkiv (Public 360)",
        "Nasjonalt forskningsinformasjonssystem (CRIStin / Ceres)",
        "Rapportering av forskningsaktiviteter for hele universitets- og helsesektoren"
      ],
      solutionsEn: [
        "Electronic accreditation portals (eSam) for foreign degrees",
        "Higher education institution accreditation portals",
        "Digital case processing and Public 360 archiving",
        "National research information system (CRIStin / Ceres)",
        "Unified reporting of academic and clinical research output"
      ],
      clientExamples: ["NOKUT", "CRIStin / Ceres", "Kunnskapsdepartementet"]
    },
    {
      id: "utilities",
      industryNo: "Utilities & Energi",
      industryEn: "Utilities & Energy",
      icon: "Cpu",
      taglineNo: "Sentralsystemer, målerdata og avregning.",
      taglineEn: "Central grid systems, meter telemetry, and automated billing.",
      solutionsNo: [
        "Sentralsystemer for strømnett og nettdrift",
        "Innsamlingssystemer for automatiske strømmålere (AMS)",
        "Kundeinformasjonssystemer (CIS) og forbrukerapper",
        "Strømavregning og faktureringsmotorer"
      ],
      solutionsEn: [
        "Central grid operations management",
        "Automated Meter Management (AMM / AMS) telemetry",
        "Customer Information Systems (CIS) and energy apps",
        "Tariff settlement and high-frequency billing engines"
      ],
      clientExamples: ["Norske energiselskaper og nettselskaper"]
    },
    {
      id: "media",
      industryNo: "Media & Telekom",
      industryEn: "Media & Telecom",
      icon: "Cpu",
      taglineNo: "Distribusjon, fibernett og kundeplattformer.",
      taglineEn: "Content distribution, fiber optic backbones, and consumer portals.",
      solutionsNo: [
        "Fiberdistribusjon og nettverksinfrastruktur",
        "Abonnements- og faktureringssystemer",
        "Kundetjenester og digitale selvbetjeningsportaler"
      ],
      solutionsEn: [
        "Fiber network deployment and distribution infrastructure",
        "Subscription provisioning and billing systems",
        "Customer service and self-service digital platforms"
      ],
      clientExamples: ["Norske tele- og medieaktører"]
    },
    {
      id: "hotell",
      industryNo: "Hotell & Reiseliv",
      industryEn: "Hospitality & Travel",
      icon: "Building2",
      taglineNo: "Bookingmotorer, gjestesystemer og digitale flater.",
      taglineEn: "Booking engines, guest service platforms, and digital interfaces.",
      solutionsNo: [
        "Webløsninger for online booking og reservasjon",
        "Integrasjon mot betalings- og lojalitetssystemer",
        "Gjesteinformasjon og digitale nøkkelløsninger"
      ],
      solutionsEn: [
        "High-availability web booking and reservation platforms",
        "Payment gateways and guest loyalty integrations",
        "Guest service workflows and digital key systems"
      ],
      clientExamples: ["Hotell- og reiselivskjeder"]
    },
    {
      id: "varehandel",
      industryNo: "Varehandel & Logistikk",
      industryEn: "Retail & Supply Chain",
      icon: "LineChart",
      taglineNo: "Logistikkløsninger, omnikanal betaling og lagerstyring.",
      taglineEn: "Supply chain logistics, omnichannel checkout, and warehouse management.",
      solutionsNo: [
        "Lagerstyring (WMS) og integrert logistikk",
        "ID- og betalingsløsninger i butikk og på nett",
        "Omnikanal vareflyt og ordrehåndtering"
      ],
      solutionsEn: [
        "Warehouse Management Systems (WMS) and fulfillment",
        "In-store and e-commerce ID and payment solutions",
        "Omnichannel inventory flow and order orchestration"
      ],
      clientExamples: ["Norske varehandelsaktører og distribusjonssentraler"]
    }
  ] as IndustryMatrixItem[],
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
