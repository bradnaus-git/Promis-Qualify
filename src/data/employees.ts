export interface Employee {
  id: string;
  name: string;
  roleNo: string;
  roleEn: string;
  company: "Promis Qualify" | "PROMIS AS" | "PROMIS Navigate";
  experienceYears: number;
  phone?: string;
  email?: string;
  linkedIn?: string;
  imageUrl?: string;
  specializationsNo: string[];
  specializationsEn: string[];
  bioNo: string;
  bioEn: string;
  certifications: string[];
}

export const EMPLOYEES_DATA: Employee[] = [
  {
    "id": "remi-hansen",
    "name": "Remi Hansen",
    "roleNo": "Daglig leder & Senior Testrådgiver",
    "roleEn": "Managing Director & Senior Test Advisor",
    "company": "Promis Qualify",
    "experienceYears": 22,
    "phone": "918 65 925",
    "email": "rh@promis.no",
    "linkedIn": "https://www.linkedin.com/company/promis-qualify-as",
    "imageUrl": "/images/employees/remi-hansen.jpg",
    "specializationsNo": [
      "Testledelse",
      "Teststrategi",
      "Big Testing",
      "Sikkerhetstest",
      "Ledelse & Rekruttering"
    ],
    "specializationsEn": [
      "Test Management",
      "Test Strategy",
      "Big Testing",
      "Security Testing",
      "Leadership & Recruitment"
    ],
    "bioNo": "Daglig leder i Promis Qualify AS med over 20 års erfaring innen testledelse, rådgivning og kvalitetssikring i samfunnskritiske IT- og teknologileveranser.",
    "bioEn": "Managing Director of Promis Qualify AS with over 20 years of experience in test management, advisory, and quality assurance in mission-critical IT deliveries.",
    "certifications": [
      "ISTQB Advanced Test Manager",
      "Prince2 Practitioner",
      "Big Testing Specialist"
    ]
  },
  {
    "id": "heidi-raae-bonke",
    "name": "Heidi Raae Bønke",
    "roleNo": "Senior Testleder & Rekrutteringsansvarlig",
    "roleEn": "Senior Test Manager & Head of Recruitment",
    "company": "Promis Qualify",
    "experienceYears": 19,
    "phone": "476 69 300",
    "email": "hbo@promis.no",
    "linkedIn": "https://www.linkedin.com/company/promis-qualify-as",
    "imageUrl": "/images/employees/heidi-raae-bonke.jpg",
    "specializationsNo": [
      "Rekruttering",
      "Testledelse",
      "Kompetanseutvikling",
      "Kvalitetsstyring"
    ],
    "specializationsEn": [
      "Recruitment",
      "Test Management",
      "Talent Development",
      "Quality Governance"
    ],
    "bioNo": "Sentral rådgiver og kontaktperson for rekruttering og faglig utvikling i Promis Qualify. Brenner for det sterke fagmiljøet og balansen mellom oppdrag og privatliv.",
    "bioEn": "Key advisor and point of contact for recruitment and professional development at Promis Qualify. Passionate about consultant craftsmanship and work-life harmony.",
    "certifications": [
      "ISTQB Certified Tester",
      "Prince2 Foundation"
    ]
  },
  {
    "id": "bradley-naus",
    "name": "Bradley Naus",
    "roleNo": "Senior Testleder & Teknisk Spesialist",
    "roleEn": "Senior Test Lead & Technical Specialist",
    "company": "Promis Qualify",
    "experienceYears": 18,
    "email": "post@promis-qualify.no",
    "linkedIn": "https://www.linkedin.com/company/promis-qualify-as",
    "imageUrl": "/images/employees/bradley-naus.png",
    "specializationsNo": [
      "Teknisk testledelse",
      "Testautomatisering",
      "Systemintegrasjon",
      "Kvalitetssikring",
      "Arkitekturvalidering"
    ],
    "specializationsEn": [
      "Technical Test Management",
      "Test Automation",
      "System Integration",
      "QA Architecture",
      "Performance Validation"
    ],
    "bioNo": "Erfaren senior testleder med sterk teknisk kompetanse innen integrasjon, testarkitektur og etablering av automatiserte testløsninger i komplekse virksomheter.",
    "bioEn": "Experienced senior test leader with strong technical expertise in integration, test architecture, and establishing automated test environments in complex enterprises.",
    "certifications": [
      "ISTQB Advanced Technical Test Analyst",
      "ISTQB Test Manager",
      "Agile Tester"
    ]
  },
  {
    "id": "camilla-andres",
    "name": "Camilla Andres",
    "roleNo": "HR-ansvarlig og Senior Testleder",
    "roleEn": "Head of HR & Senior Test Manager",
    "company": "Promis Qualify",
    "experienceYears": 17,
    "email": "post@promis-qualify.no",
    "linkedIn": "https://www.linkedin.com/company/promis-qualify-as",
    "imageUrl": "/images/employees/camilla-andres.png",
    "specializationsNo": [
      "HR & Medarbeiderutvikling",
      "Testledelse",
      "Kvalitetsledelse",
      "Endringsledelse"
    ],
    "specializationsEn": [
      "HR & People Development",
      "Test Management",
      "Quality Leadership",
      "Change Management"
    ],
    "bioNo": "HR-ansvarlig og erfaren senior testleder i Promis Qualify. Kombinerer strategisk personalledelse med operativ test- og kvalitetssikringserfaring.",
    "bioEn": "Head of HR and experienced senior test manager at Promis Qualify, combining people leadership with hands-on QA expertise in critical systems.",
    "certifications": [
      "ISTQB Certified Tester",
      "Prince2 Practitioner"
    ]
  },
  {
    "id": "espen-schaatun",
    "name": "Espen Schaatun",
    "roleNo": "Salgsansvarlig og Senior Testleder",
    "roleEn": "Head of Sales & Senior Test Manager",
    "company": "Promis Qualify",
    "experienceYears": 20,
    "email": "post@promis-qualify.no",
    "linkedIn": "https://www.linkedin.com/company/promis-qualify-as",
    "imageUrl": "/images/employees/espen-schaatun.jpg",
    "specializationsNo": [
      "Kunderådgivning",
      "Anskaffelser",
      "Testledelse",
      "Teststrategi",
      "Rammeavtaler"
    ],
    "specializationsEn": [
      "Client Advisory",
      "Tender Processes",
      "Test Management",
      "Test Strategy",
      "Framework Agreements"
    ],
    "bioNo": "Salgsansvarlig og senior testleder med lang erfaring fra kundeoppfølging, strategiske tilbud og ledelse av testarbeid i store offentlige og private organisasjoner.",
    "bioEn": "Head of Sales and senior test manager with extensive experience handling strategic accounts, tenders, and QA delivery across public and private sectors.",
    "certifications": [
      "ISTQB Advanced Test Manager",
      "Prince2"
    ]
  },
  {
    "id": "kristina-l-tangen",
    "name": "Kristina L. Tangen",
    "roleNo": "Leveranse- og kvalitetsansvarlig",
    "roleEn": "Delivery & Quality Assurance Manager",
    "company": "Promis Qualify",
    "experienceYears": 18,
    "email": "post@promis-qualify.no",
    "linkedIn": "https://www.linkedin.com/company/promis-qualify-as",
    "imageUrl": "/images/employees/kristina-l-tangen.jpg",
    "specializationsNo": [
      "Leveransestyring",
      "Kvalitetssikring",
      "Metodikk",
      "Prosessforbedring",
      "Testledelse"
    ],
    "specializationsEn": [
      "Delivery Management",
      "Quality Assurance",
      "Methodology",
      "Process Improvement",
      "Test Management"
    ],
    "bioNo": "Ansvarlig for leveranser og kvalitetsmetodikk i Promis Qualify. Sikrer at konsulentene leverer i tråd med markedets høyeste standarder for uavhengig kvalitetssikring.",
    "bioEn": "Responsible for delivery standards and QA governance at Promis Qualify, ensuring continuous methodological excellence across all consultant engagements.",
    "certifications": [
      "ISTQB Advanced Test Manager",
      "Lean Six Sigma",
      "Prince2"
    ]
  },
  {
    "id": "bjorn-andersen",
    "name": "Bjørn Andersen",
    "roleNo": "Senior Testleder",
    "roleEn": "Senior Test Manager",
    "company": "Promis Qualify",
    "experienceYears": 23,
    "email": "post@promis-qualify.no",
    "imageUrl": "/images/employees/bjorn-andersen.jpg",
    "specializationsNo": [
      "Testledelse",
      "Systemintegrasjon",
      "Funksjonell test",
      "Akseptansetest"
    ],
    "specializationsEn": [
      "Test Management",
      "System Integration",
      "Functional Testing",
      "User Acceptance"
    ],
    "bioNo": "Meget erfaren testleder med solid fartstid fra store moderniseringsprogrammer innen offentlig og privat forvaltning.",
    "bioEn": "Highly experienced test manager with a proven track record across major public sector modernization programs.",
    "certifications": [
      "ISTQB Full Certified",
      "Prince2"
    ]
  },
  {
    "id": "brit-hovik-jorgensen",
    "name": "Brit Høvik Jørgensen",
    "roleNo": "Senior Testleder",
    "roleEn": "Senior Test Manager",
    "company": "Promis Qualify",
    "experienceYears": 21,
    "email": "post@promis-qualify.no",
    "imageUrl": "/images/employees/brit-hovik-jorgensen.jpg",
    "specializationsNo": [
      "Testledelse",
      "Forretningsprosesser",
      "Endringsstøtte",
      "Kvalitetskontroll"
    ],
    "specializationsEn": [
      "Test Management",
      "Business Processes",
      "Change Support",
      "Quality Control"
    ],
    "bioNo": "Senior rådgiver og testleder med spesiell ekspertise på forretningsmessig forankring og test av komplekse samhandlingsløsninger.",
    "bioEn": "Senior advisor and QA manager specializing in business alignment and multi-party solution verification.",
    "certifications": [
      "ISTQB Advanced Test Manager"
    ]
  },
  {
    "id": "katja-glinskaja",
    "name": "Katja Glinskaja",
    "roleNo": "Senior Testleder",
    "roleEn": "Senior Test Manager",
    "company": "Promis Qualify",
    "experienceYears": 16,
    "email": "post@promis-qualify.no",
    "imageUrl": "/images/employees/katja-glinskaja.jpg",
    "specializationsNo": [
      "Testledelse",
      "Agile Testing",
      "Regresjonstest",
      "API-testing"
    ],
    "specializationsEn": [
      "Test Management",
      "Agile Testing",
      "Regression Suites",
      "API Testing"
    ],
    "bioNo": "Spesialist innen smidig testledelse og innføring av helhetlige testregimer i moderne tverrfaglige utviklingsteam.",
    "bioEn": "Specialist in agile test management and establishing comprehensive QA frameworks for multidisciplinary development squads.",
    "certifications": [
      "ISTQB Agile Tester",
      "ISTQB Advanced Test Manager"
    ]
  },
  {
    "id": "kristoffer-dagstad",
    "name": "Kristoffer Dagstad",
    "roleNo": "Senior Testleder",
    "roleEn": "Senior Test Manager",
    "company": "Promis Qualify",
    "experienceYears": 15,
    "email": "post@promis-qualify.no",
    "imageUrl": "/images/employees/kristoffer-dagstad.jpg",
    "specializationsNo": [
      "Testledelse",
      "Teknisk test",
      "Skyløsninger",
      "CI/CD Gates"
    ],
    "specializationsEn": [
      "Test Management",
      "Technical QA",
      "Cloud Platforms",
      "CI/CD Gates"
    ],
    "bioNo": "Teknisk sterk testleder med spisskompetanse på skyinfrastruktur, automatiserte kvalitetsporter og smidig leveranse.",
    "bioEn": "Technically adept test lead specializing in cloud platforms, automated quality gates, and agile delivery.",
    "certifications": [
      "ISTQB Certified Tester",
      "Cloud QA Specialist"
    ]
  },
  {
    "id": "lena-jonhaugen",
    "name": "Lena Jonhaugen",
    "roleNo": "Senior Testleder",
    "roleEn": "Senior Test Manager",
    "company": "Promis Qualify",
    "experienceYears": 19,
    "email": "post@promis-qualify.no",
    "imageUrl": "/images/employees/lena-jonhaugen.jpg",
    "specializationsNo": [
      "Testledelse",
      "Brukeropplevelse",
      "Akseptansetest",
      "Helse-IKT"
    ],
    "specializationsEn": [
      "Test Management",
      "User Experience",
      "User Acceptance",
      "Healthcare IT"
    ],
    "bioNo": "Erfaren rådgiver innen mottakskontroll, sluttbrukertesting og testledelse i helsesektoren og offentlige fagsystemer.",
    "bioEn": "Experienced QA manager focused on operational verification, acceptance testing, and public healthcare IT systems.",
    "certifications": [
      "ISTQB Advanced Test Manager"
    ]
  },
  {
    "id": "martin-berg",
    "name": "Martin Berg",
    "roleNo": "Senior Testleder",
    "roleEn": "Senior Test Manager",
    "company": "Promis Qualify",
    "experienceYears": 20,
    "email": "post@promis-qualify.no",
    "imageUrl": "/images/employees/martin-berg.jpg",
    "specializationsNo": [
      "Testledelse",
      "Systemarkitektur",
      "Ytelsestest",
      "Sikkerhet"
    ],
    "specializationsEn": [
      "Test Management",
      "System Architecture",
      "Performance Testing",
      "Security"
    ],
    "bioNo": "Bred teknisk og funksjonell erfaring fra testing av samfunnskritiske transportsystemer og datainfrastruktur.",
    "bioEn": "Broad technical and functional testing background across transport hubs, signaling systems, and data pipelines.",
    "certifications": [
      "ISTQB Advanced Level",
      "Prince2"
    ]
  },
  {
    "id": "nina-uteng",
    "name": "Nina Uteng",
    "roleNo": "Senior Testleder",
    "roleEn": "Senior Test Manager",
    "company": "Promis Qualify",
    "experienceYears": 22,
    "email": "post@promis-qualify.no",
    "imageUrl": "/images/employees/nina-uteng.jpg",
    "specializationsNo": [
      "Testledelse",
      "Kvalitetsstyring",
      "Statlige prosjekter",
      "Tverrfaglige team"
    ],
    "specializationsEn": [
      "Test Management",
      "Quality Governance",
      "Government Programs",
      "Cross-Functional Teams"
    ],
    "bioNo": "Senior testrådgiver med erfaring fra ledelse av store testprosjekter i statlige etater og departementale fellesløsninger.",
    "bioEn": "Senior test manager guiding high-visibility quality programs across ministry agencies and national infrastructure.",
    "certifications": [
      "ISTQB Advanced Test Manager",
      "Prince2"
    ]
  },
  {
    "id": "odd-fidje",
    "name": "Odd Fidje",
    "roleNo": "Senior Testleder & Partner",
    "roleEn": "Senior Test Manager & Partner",
    "company": "Promis Qualify",
    "experienceYears": 27,
    "email": "post@promis-qualify.no",
    "imageUrl": "/images/employees/odd-fidje.jpg",
    "specializationsNo": [
      "Systematisk ferdigstillelse",
      "NS 6450",
      "Big Testing",
      "ITB",
      "Byggeprosjekter"
    ],
    "specializationsEn": [
      "Commissioning",
      "NS 6450",
      "Big Testing",
      "Building Automation",
      "Capital Projects"
    ],
    "bioNo": "Pionér innen systematisk ferdigstillelse (NS 6450) og tverrfaglig testledelse i store samferdsels- og byggeprosjekter.",
    "bioEn": "Pioneer in systematic commissioning (NS 6450) and cyber-physical QA across major civil construction programs.",
    "certifications": [
      "NS 6450 Systematisk Ferdigstillelse",
      "ISTQB Advanced Test Manager"
    ]
  },
  {
    "id": "pal-berg",
    "name": "Pål Berg",
    "roleNo": "Senior Testleder",
    "roleEn": "Senior Test Manager",
    "company": "Promis Qualify",
    "experienceYears": 24,
    "email": "post@promis-qualify.no",
    "imageUrl": "/images/employees/pal-berg.jpg",
    "specializationsNo": [
      "Testledelse",
      "Integrasjonstest",
      "Infrastruktur",
      "Offentlig sektor"
    ],
    "specializationsEn": [
      "Test Management",
      "Integration Testing",
      "Infrastructure",
      "Public Sector"
    ],
    "bioNo": "Senior testleder med dybdekunnskap om integrasjonstesting i distribuerte systemmiljøer og offentlige portaler.",
    "bioEn": "Senior test leader with deep knowledge in distributed systems verification, integration, and portal security.",
    "certifications": [
      "ISTQB Advanced Level",
      "Prince2"
    ]
  },
  {
    "id": "richard-rostad",
    "name": "Richard Rostad",
    "roleNo": "Senior Testleder",
    "roleEn": "Senior Test Manager",
    "company": "Promis Qualify",
    "experienceYears": 20,
    "email": "post@promis-qualify.no",
    "imageUrl": "/images/employees/richard-rostad.jpg",
    "specializationsNo": [
      "Testledelse",
      "Testmetodikk",
      "Kravhåndtering",
      "Kvalitetssikring"
    ],
    "specializationsEn": [
      "Test Management",
      "QA Methodology",
      "Requirements Validation",
      "Quality Assurance"
    ],
    "bioNo": "Rådgiver og testleder med sterk kompetanse på strukturert testgjennomføring og forankring i ledelsen.",
    "bioEn": "Quality advisor and test manager with proven strength in structured execution and executive steering.",
    "certifications": [
      "ISTQB Advanced Test Manager"
    ]
  },
  {
    "id": "sana-rafat",
    "name": "Sana Rafat",
    "roleNo": "Senior Testleder",
    "roleEn": "Senior Test Manager",
    "company": "Promis Qualify",
    "experienceYears": 16,
    "email": "post@promis-qualify.no",
    "imageUrl": "/images/employees/sana-rafat.jpg",
    "specializationsNo": [
      "Testledelse",
      "Kvalitetsstyring",
      "Smidige team",
      "Finans & Forsikring"
    ],
    "specializationsEn": [
      "Test Management",
      "Quality Governance",
      "Agile Squads",
      "Banking & Insurance"
    ],
    "bioNo": "Erfaren testleder med spesialisering på kvalitetssikring og smidig utvikling i bank, finans og forsikring.",
    "bioEn": "Experienced QA leader specializing in agile testing, quality governance, and financial services systems.",
    "certifications": [
      "ISTQB Certified Tester",
      "Agile Foundation"
    ]
  },
  {
    "id": "sidsel-wang-skudal",
    "name": "Sidsel Wang Skudal",
    "roleNo": "Senior Testleder",
    "roleEn": "Senior Test Manager",
    "company": "Promis Qualify",
    "experienceYears": 23,
    "email": "post@promis-qualify.no",
    "imageUrl": "/images/employees/sidsel-wang-skudal.jpg",
    "specializationsNo": [
      "Testledelse",
      "Offentlig forvaltning",
      "Systemtest",
      "Brukertesting"
    ],
    "specializationsEn": [
      "Test Management",
      "Public Administration",
      "System Testing",
      "User Acceptance"
    ],
    "bioNo": "Lang erfaring som testleder for krevende IKT-satsninger i offentlige etater og utdanningssektoren.",
    "bioEn": "Decades of experience directing test programs for education and municipal digital infrastructure.",
    "certifications": [
      "ISTQB Advanced Test Manager",
      "Prince2"
    ]
  },
  {
    "id": "trond-eivind-glomsrod",
    "name": "Trond Eivind Glomsrød",
    "roleNo": "Senior Testleder & Teknisk Rådgiver",
    "roleEn": "Senior Test Lead & Technical Advisor",
    "company": "Promis Qualify",
    "experienceYears": 25,
    "email": "post@promis-qualify.no",
    "imageUrl": "/images/employees/trond-eivind-glomsrod.jpeg",
    "specializationsNo": [
      "Teknisk testledelse",
      "Linux / Open Source",
      "Sikkerhetstest",
      "Infrastruktur"
    ],
    "specializationsEn": [
      "Technical Test Management",
      "Linux / Open Source",
      "Security Testing",
      "Core Infrastructure"
    ],
    "bioNo": "Tung teknisk bakgrunn fra open source, systemarkitektur og testing av sikre, høytilgjengelige servermiljøer.",
    "bioEn": "Deep technical background in open source systems, enterprise Linux, and high-availability architecture testing.",
    "certifications": [
      "ISTQB Advanced Technical Test Analyst",
      "Red Hat Certified Architect"
    ]
  },
  {
    "id": "oyvind-woll",
    "name": "Øyvind Woll",
    "roleNo": "Senior Testleder",
    "roleEn": "Senior Test Manager",
    "company": "Promis Qualify",
    "experienceYears": 22,
    "email": "post@promis-qualify.no",
    "imageUrl": "/images/employees/oyvind-woll.jpeg",
    "specializationsNo": [
      "Testledelse",
      "Systemintegrasjon",
      "Kravsporing",
      "Prøvedrift"
    ],
    "specializationsEn": [
      "Test Management",
      "System Integration",
      "Traceability",
      "Operational Trials"
    ],
    "bioNo": "Senior testleder med fokus på tverrfaglig koordinering, teststrategi og trygg overgang til ordinær drift.",
    "bioEn": "Senior test manager specialized in multi-system integration, traceability matrices, and seamless operational handover.",
    "certifications": [
      "ISTQB Advanced Test Manager"
    ]
  },
  {
    "id": "erlend-tarnes",
    "name": "Erlend Tårnes",
    "roleNo": "Daglig leder & Partner, PROMIS Navigate",
    "roleEn": "Managing Director & Partner, PROMIS Navigate",
    "company": "PROMIS Navigate",
    "experienceYears": 24,
    "email": "erlend@promis.no",
    "phone": "917 23 348",
    "linkedIn": "https://www.linkedin.com/in/erlendtarnes/",
    "imageUrl": "/images/employees/erlend-tarnes.jpg",
    "specializationsNo": [
      "Virksomhetsarkitektur",
      "Digital transformasjon",
      "Strategisk rådgivning",
      "Teknologiledelse"
    ],
    "specializationsEn": [
      "Enterprise Architecture",
      "Digital Transformation",
      "Strategic Advisory",
      "Technology Leadership"
    ],
    "bioNo": "Daglig leder i PROMIS Navigate AS med over 20 års erfaring som virksomhetsarkitekt og rådgiver for toppledelsen i store offentlige og private virksomheter.",
    "bioEn": "Managing Director at PROMIS Navigate AS with 20+ years of experience advising executive management on enterprise architecture and digital transformation.",
    "certifications": [
      "TOGAF 9 Certified",
      "ITIL Expert",
      "CITA-D"
    ]
  },
  {
    "id": "rita-sivertsen",
    "name": "Rita Sivertsen",
    "roleNo": "Partner & Senior Virksomhetsarkitekt",
    "roleEn": "Partner & Senior Enterprise Architect",
    "company": "PROMIS Navigate",
    "experienceYears": 21,
    "email": "rita@promis.no",
    "phone": "992 32 718",
    "linkedIn": "https://www.linkedin.com/in/ritasivertsen/",
    "imageUrl": "/images/employees/rita-sivertsen.png",
    "specializationsNo": [
      "Informasjonsarkitektur",
      "Datastyring (Data Governance)",
      "Master Data",
      "DAMA-DMBOK"
    ],
    "specializationsEn": [
      "Information Architecture",
      "Data Governance",
      "Master Data Management",
      "DAMA-DMBOK"
    ],
    "bioNo": "Senior arkitekt med spisskompetanse innen informasjonsforvaltning, datadrevne virksomhetsmodeller og etablering av helhetlige data governance-strukturer.",
    "bioEn": "Senior architect specializing in information management, data governance frameworks, and data-driven operating models in regulated environments.",
    "certifications": [
      "TOGAF Certified",
      "CDMP (Certified Data Management Professional)"
    ]
  },
  {
    "id": "david-skogan",
    "name": "David Skogan",
    "roleNo": "Partner & Senior Løsningsarkitekt",
    "roleEn": "Partner & Senior Solution Architect",
    "company": "PROMIS Navigate",
    "experienceYears": 25,
    "email": "david@promis.no",
    "linkedIn": "https://www.linkedin.com/in/davidskogan/",
    "imageUrl": "/images/employees/david-skogan.jpg",
    "specializationsNo": [
      "Løsningsarkitektur",
      "Systemutvikling",
      "Felles Datakatalog",
      "Altinn 3.0",
      "DevOps"
    ],
    "specializationsEn": [
      "Solution Architecture",
      "Systems Engineering",
      "Felles Datakatalog",
      "Altinn 3.0",
      "DevOps"
    ],
    "bioNo": "Erfaren løsningsarkitekt med mer enn 25 års erfaring fra Skatteetaten, Brønnøysundregistrene/Altinn, SSB, DIFI og NAV.",
    "bioEn": "Senior solution architect with 25+ years experience from Norwegian tax, business register, Altinn, and statistics agencies.",
    "certifications": [
      "TOGAF Certified",
      "Cloud Solution Architect"
    ]
  },
  {
    "id": "kristin-halvorsen",
    "name": "Kristin Halvorsen",
    "roleNo": "Administrerende direktør & Senior Arkitekt",
    "roleEn": "Chief Executive & Senior Enterprise Architect",
    "company": "PROMIS Navigate",
    "experienceYears": 25,
    "email": "kristin@promis.no",
    "linkedIn": "https://www.linkedin.com/in/kristinhalvorsen/",
    "imageUrl": "/images/employees/kristin-halvorsen.jpg",
    "specializationsNo": [
      "Verdistrømsanalyse",
      "Virksomhetsarkitektur",
      "Digital forretningsutvikling",
      "Prosessledelse"
    ],
    "specializationsEn": [
      "Value Stream Mapping",
      "Business Architecture",
      "Digital Strategy",
      "Process Leadership"
    ],
    "bioNo": "Sivilingeniør fra NTNU med over 25 års erfaring som konsulent og leder i skjæringspunktet mellom ledelse, forretning, teknologi og mennesker.",
    "bioEn": "M.Sc. from NTNU with 25+ years in management consulting, business architecture, and enterprise digital strategy.",
    "certifications": [
      "TOGAF Certified",
      "Lean Six Sigma"
    ]
  },
  {
    "id": "jonathan-huw-howells",
    "name": "Jonathan Huw Howells",
    "roleNo": "Partner & Senior Sky- og Sikkerhetsarkitekt",
    "roleEn": "Partner & Senior Cloud and Security Architect",
    "company": "PROMIS Navigate",
    "experienceYears": 22,
    "email": "jonathan@promis.no",
    "linkedIn": "https://www.linkedin.com/in/jonathanhuwhowells/",
    "imageUrl": "/images/employees/jonathan-huw-howells.jpg",
    "specializationsNo": [
      "Skyarkitektur (Azure/AWS/GCP)",
      "Sikkerhetsarkitektur",
      "Sovereign Cloud",
      "Integrasjonsmønstre"
    ],
    "specializationsEn": [
      "Cloud Architecture (Azure/AWS/GCP)",
      "Security Architecture",
      "Sovereign Cloud",
      "Integration Patterns"
    ],
    "bioNo": "Spesialist på sikre skyløsninger for offentlig sektor, nasjonale felleskomponenter og hybride skyløsninger i tråd med Digdir-krav og NSMs grunnprinsipper.",
    "bioEn": "Cloud and security architecture specialist focused on regulated public sector workloads and hybrid cloud governance adhering to NSM and Digdir standards.",
    "certifications": [
      "TOGAF Certified",
      "CISSP",
      "Azure Solutions Architect Expert"
    ]
  },
  {
    "id": "jon-rustand",
    "name": "Jon Rustand",
    "roleNo": "Partner & Senior Løsnings- og Informasjonsarkitekt",
    "roleEn": "Partner & Senior Solution & Information Architect",
    "company": "PROMIS Navigate",
    "experienceYears": 30,
    "email": "jon.rustand@promis.no",
    "linkedIn": "https://www.linkedin.com/in/jonrustand/",
    "imageUrl": "/images/employees/jon-rustand.jpg",
    "specializationsNo": [
      "Informasjonsmodellering",
      "Datakvalitet",
      "Løsningsarkitektur",
      "Systemutvikling"
    ],
    "specializationsEn": [
      "Information Modeling",
      "Data Quality",
      "Solution Architecture",
      "Systems Engineering"
    ],
    "bioNo": "Utdannet ingeniør med over 30 års erfaring som arkitekt og utvikler. Ekspert på datakvalitet, informasjonsmodeller og forankring i organisasjonen.",
    "bioEn": "Engineer with 30+ years of software and information architecture experience, specializing in data governance and quality frameworks.",
    "certifications": [
      "TOGAF 9 Certified",
      "PRINCE2",
      "Certified Java Programmer"
    ]
  },
  {
    "id": "rolf-kenneth-rolfsen",
    "name": "Rolf Kenneth Rolfsen",
    "roleNo": "Partner & Senior Virksomhetsarkitekt",
    "roleEn": "Partner & Senior Enterprise Architect",
    "company": "PROMIS Navigate",
    "experienceYears": 26,
    "email": "rolf@promis.no",
    "imageUrl": "/images/employees/rolf-kenneth-rolfsen.jpg",
    "specializationsNo": [
      "Virksomhetsarkitektur",
      "Strategisk rådgivning",
      "Offentlig sektor",
      "Målbildearkitektur"
    ],
    "specializationsEn": [
      "Enterprise Architecture",
      "Strategic Advisory",
      "Public Sector",
      "Target Architecture"
    ],
    "bioNo": "Senior rådgiver og virksomhetsarkitekt med bred erfaring fra komplekse transformasjonsprosjekter og IT-strategi.",
    "bioEn": "Senior enterprise architect with extensive background directing large-scale technology transformations in public agencies.",
    "certifications": [
      "TOGAF Certified",
      "ITIL"
    ]
  },
  {
    "id": "arnfinn-flo",
    "name": "Arnfinn Flo",
    "roleNo": "Senior Prosjektleder & Partner",
    "roleEn": "Senior Project Manager & Partner",
    "company": "PROMIS AS",
    "experienceYears": 25,
    "phone": "934 96 747",
    "email": "af@promis.no",
    "linkedIn": "https://www.linkedin.com/in/arnfinn-flo-98b3501b/",
    "imageUrl": "/images/employees/arnfinn-flo.jpg",
    "specializationsNo": [
      "Prosjektledelse",
      "Offentlige IT-anskaffelser",
      "Smidig styring",
      "Kvalitetssikring"
    ],
    "specializationsEn": [
      "Project Management",
      "Public IT Procurement",
      "Agile Governance",
      "Quality Assurance"
    ],
    "bioNo": "Senior prosjektleder med lang erfaring fra store IKT-satsninger i offentlig sektor. Ledende ekspert på anskaffelsesprosesser og kontraktsoppfølging.",
    "bioEn": "Senior project leader with decades of experience guiding major public digital programs, complex tenders, and vendor governance.",
    "certifications": [
      "Prince2 Practitioner",
      "ITPP (IT Project Professional)",
      "PS2000"
    ]
  },
  {
    "id": "christian-goulignac",
    "name": "Christian Goulignac",
    "roleNo": "Senior Prosjektleder & Partner",
    "roleEn": "Senior Project Manager & Partner",
    "company": "PROMIS AS",
    "experienceYears": 24,
    "phone": "932 81 816",
    "email": "cg@promis.no",
    "linkedIn": "https://www.linkedin.com/in/christian-goulignac-a536681/",
    "imageUrl": "/images/employees/christian-goulignac.jpg",
    "specializationsNo": [
      "Programledelse",
      "Usikkerhetsanalyse",
      "Porteføljestyring",
      "Statens prosjektmodell (KS1/KS2)"
    ],
    "specializationsEn": [
      "Program Leadership",
      "Uncertainty Analysis",
      "Portfolio Governance",
      "State Quality Assurance Frameworks"
    ],
    "bioNo": "Spesialist på usikkerhetsanalyser, porteføljestyring og programledelse for noen av Norges mest krevende digitaliseringsinitiativer.",
    "bioEn": "Specialist in uncertainty quantification, multi-project portfolios, and major government project gates (KS1/KS2).",
    "certifications": [
      "Prince2 Practitioner",
      "Usikkerhetsanalyse-sertifisert",
      "ITPP"
    ]
  },
  {
    "id": "dagfinn-bjorlo",
    "name": "Dagfinn Bjørlo",
    "roleNo": "Partner & Senior Rådgiver",
    "roleEn": "Partner & Senior Advisor",
    "company": "PROMIS AS",
    "experienceYears": 28,
    "phone": "900 33 111",
    "email": "db@promis.no",
    "linkedIn": "https://www.linkedin.com/in/dagfinnbjorlo/",
    "imageUrl": "/images/employees/dagfinn-bjorlo.jpg",
    "specializationsNo": [
      "Smidig prosjektstyring",
      "ACE-rammeverket",
      "Kontrakter & Anskaffelser",
      "IT-styring"
    ],
    "specializationsEn": [
      "Agile Project Governance",
      "ACE Framework",
      "Contracts & Tenders",
      "IT Governance"
    ],
    "bioNo": "Sentral bidragsyter til utviklingen av smidige kontraktsstandarder (PS2000) og det smidige prosjektrammeverket ACE i regi av Dataforeningen og PROMIS.",
    "bioEn": "Pivotal contributor to agile contractual frameworks (PS2000) and the ACE delivery methodology through the Norwegian Computer Society.",
    "certifications": [
      "ITPP",
      "Prince2",
      "PS2000 Fagansvarlig"
    ]
  },
  {
    "id": "siri-sundby",
    "name": "Siri Sundby",
    "roleNo": "Partner & Senior Prosjektleder",
    "roleEn": "Partner & Senior Project Manager",
    "company": "PROMIS AS",
    "experienceYears": 22,
    "phone": "951 02 982",
    "email": "siri@promis.no",
    "linkedIn": "https://www.linkedin.com/in/siri-sundby-4a05bb2/",
    "imageUrl": "/images/employees/siri-sundby.jpg",
    "specializationsNo": [
      "Helse-IKT",
      "Klinisk samhandling",
      "Gjennomføringsledelse",
      "Endringsledelse"
    ],
    "specializationsEn": [
      "Healthcare IT",
      "Clinical Collaboration",
      "Delivery Leadership",
      "Change Management"
    ],
    "bioNo": "Tung erfaring med store helsefaglige digitaliseringsløft, innføring av nasjonale e-helseløsninger og tverretatlig koordinering.",
    "bioEn": "Extensive background guiding complex e-health modernization programs, multi-stakeholder hospitals, and clinical adoption.",
    "certifications": [
      "Prince2 Practitioner",
      "ITPP",
      "MSP (Managing Successful Programmes)"
    ]
  },
  {
    "id": "tor-murvold",
    "name": "Tor Murvold",
    "roleNo": "Partner & Senior Anskaffelsesrådgiver",
    "roleEn": "Partner & Senior Procurement Advisor",
    "company": "PROMIS AS",
    "experienceYears": 27,
    "phone": "900 99 642",
    "email": "tm@promis.no",
    "linkedIn": "https://www.linkedin.com/in/tormurvold/",
    "imageUrl": "/images/employees/tor-murvold.jpg",
    "specializationsNo": [
      "PS2000",
      "Kontraktsforhandlinger",
      "Offentlige anskaffelser",
      "Tvisteløsning"
    ],
    "specializationsEn": [
      "PS2000",
      "Contract Negotiations",
      "Public Procurement",
      "Dispute Resolution"
    ],
    "bioNo": "Nasjonalt anerkjent ekspert på kontraktsstandarder, forhandlinger og anskaffelse av komplekse IT- og systemløsninger for offentlig og privat sektor.",
    "bioEn": "Nationally acclaimed expert on IT procurement standards, high-stakes contract negotiations, and dispute mediation.",
    "certifications": [
      "ITPP Senior",
      "PS2000 Akkreditert",
      "Prince2"
    ]
  },
  {
    "id": "jorgen-petersen",
    "name": "Jørgen Petersen",
    "roleNo": "Senior Prosjektleder & Partner",
    "roleEn": "Senior Project Manager & Partner",
    "company": "PROMIS AS",
    "experienceYears": 23,
    "phone": "920 13 636",
    "email": "jp@promis.no",
    "linkedIn": "https://www.linkedin.com/in/jpetersen2/",
    "imageUrl": "/images/employees/jens-petersen.jpg",
    "specializationsNo": [
      "Statlige IKT-prosjekter",
      "Gjennomføringsstrategi",
      "Smidig transformasjon",
      "Styring"
    ],
    "specializationsEn": [
      "Government IT Projects",
      "Delivery Strategy",
      "Agile Transformation",
      "Governance"
    ],
    "bioNo": "Bred erfaring med prosjekt- og programledelse i statlige etater, med vekt på forutsigbar framdrift, gevinstrealisering og god styring.",
    "bioEn": "Experienced project director guiding central government digital initiatives with emphasis on predictable cadence and value realization.",
    "certifications": [
      "Prince2 Practitioner",
      "ITPP",
      "Scrum Master"
    ]
  },
  {
    "id": "stein-tore-rasmussen",
    "name": "Stein-Tore Rasmussen",
    "roleNo": "Partner & Senior Prosjektleder",
    "roleEn": "Partner & Senior Project Manager",
    "company": "PROMIS AS",
    "experienceYears": 24,
    "phone": "913 41 555",
    "email": "str@promis.no",
    "linkedIn": "https://www.linkedin.com/in/stein-tore-rasmussen-a0970b13/",
    "imageUrl": "/images/employees/stein-tore-rasmussen.jpg",
    "specializationsNo": [
      "Kvalitetssikring",
      "Prosjektgjennomgang",
      "Usikkerhetsstyring",
      "IKT-anskaffelser"
    ],
    "specializationsEn": [
      "Quality Assurance",
      "Project Peer Reviews",
      "Uncertainty Governance",
      "IT Procurement"
    ],
    "bioNo": "Senior rådgiver og prosjektleder med spesielt fokus på uavhengig kvalitetssikring, evaluering av prosjektmodenhet og bistand ved krevende anskaffelser.",
    "bioEn": "Senior advisor providing independent project reviews, uncertainty assessments, and tender advisory for strategic IT programs.",
    "certifications": [
      "Prince2 Practitioner",
      "ITPP",
      "Usikkerhetsanalyse"
    ]
  },
  {
    "id": "gunnar-olving",
    "name": "Gunnar Olving",
    "roleNo": "Senior Rådgiver & Partner",
    "roleEn": "Senior Advisor & Partner",
    "company": "PROMIS AS",
    "experienceYears": 26,
    "phone": "900 12 345",
    "email": "go@promis.no",
    "imageUrl": "/images/employees/gunnar-olving.jpg",
    "specializationsNo": [
      "Prosjektledelse",
      "Kvalitetsstyring",
      "IKT-strategi",
      "Gjennomføring"
    ],
    "specializationsEn": [
      "Project Management",
      "Quality Governance",
      "IT Strategy",
      "Execution"
    ],
    "bioNo": "Senior rådgiver med omfattende erfaring fra prosjekt- og programledelse av store omstillings- og digitaliseringsprosjekter.",
    "bioEn": "Senior advisor with extensive experience directing complex organizational transformation and IT initiatives.",
    "certifications": [
      "Prince2 Practitioner",
      "ITPP"
    ]
  },
  {
    "id": "elise-angen",
    "name": "Elise Angen",
    "roleNo": "Prosjektleder & Rådgiver",
    "roleEn": "Project Manager & Advisor",
    "company": "PROMIS AS",
    "experienceYears": 14,
    "phone": "950 00 000",
    "email": "elise@promis.no",
    "imageUrl": "/images/employees/elise-angen.jpg",
    "specializationsNo": [
      "Prosjektledelse",
      "Prosessforbedring",
      "Smidig metodikk",
      "Offentlig sektor"
    ],
    "specializationsEn": [
      "Project Management",
      "Process Optimization",
      "Agile Methodology",
      "Public Sector"
    ],
    "bioNo": "Engasjert prosjektleder og rådgiver med fokus på smidig samhandling, strukturert oppfølging og resultatoppnåelse.",
    "bioEn": "Dedicated project manager and advisor driving agile collaboration, clear deliverables, and goal realization.",
    "certifications": [
      "Prince2 Practitioner",
      "Scrum Master"
    ]
  }
];
