export type Project = {
  slug: string;
  number: string;
  title: string;
  location: string;
  year: string;
  category: string;
  image: string;
  alt: string;
  role: string;
  scope: string[];
  summary: string;
};

export const projectImages = [
  "https://images.openai.com/static-rsc-4/HfsmPH8YyJ0gkxqHZ_L_ZGlid6WLbl6B-kwSPXefAIjvLNjMxHfjQqi2-6-hmdOSffi1M1PveGly5aex4yfepHp6XjRCvPFbg45-QeIxvGej1iw_L8QPsX-wTmx0DzFiykjWVM3DtlFR3gnYUdagigcNm2dgpSRYLWhXAqIXy090OTzDSb-cuQ3H6UFClRfb?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/dlotvLaEfZP4uFtt0LDE_w9xGl5VLYXDyc-JdMWlwFLWRkOe3VMX1IuVhLROhjJhUUtrl2uX-f2sSIMSaLe6FGfF3F4JGNtv_1oqZWVUqqQP3lHl0pdUBLa8b69Mw8iN5UBCiIpPlAHIYiSxrojIo6n7TYxyNG_lJ3g7zWEoDdzP3DLizR2FqGXQ3sKFW9aW?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/m7Pgv7izkqm-9SMnU3ZKajYM_egFsQ2crxcohMePcOU9M8gF-xkLxIOU6th5JVCAJZSuRLnLf5xrmkCXxi6QiauOS8M_Kj_R-e19qV4cdzzkM_S6Dk_bmkoyVYL9NciyYnaGvw8GeLzaAsEzpJDZ_ZOCJg3uVX25CGOxEV4Zj5XCZQwdpn-fo4momfgpWaav?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/wGFdbSF3wTE_iYs7SfD5AwpKsZVReKW9I3rmoGoqt43GNJ_tHTSw76WbsZlXODz3B0ZlvSUBkpB0n55B3BV_Mnq2DyPD0zPea51KKT20e22Z4ChvlMfjXstqFaJIFRRCuzlJnhzyG7Z2Eek8Ut_2_YotRTDxwed7Ta8TfviExBCGfBQt3f3KeqHVvfio1vu5?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/LGA7nglVYE2kmERSc_IL7wlRq8pe9SktY99eSorNLX8xCUlbdNXT1OQ4SMZ97b-D4iFqc3CeOc-Tvo_6f-adDM2mmPHKHaHyVKffLTNe75zRxguZCkVN2XX8Yj32gpaGaqbaO75fQX6YTa0cLjz2Agod_KFFku5Hv3W5ngMOva12mfCO28FpEMfumyi5hEjf?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/WnG_gXBtxW6s4lBDxLyBsJTW2pXBk92rvytdLg3RaIn_cD-xhhQvNoZxJgo767JQoCUoJ-aU7izEcg2GYsrE0RNazgkl9HDvSS1iuizVFrV4N0ah1yLPimGT5CaytgKk9giDejOSs0mNAzrFufFCBKgxZUfj6yMQW2tm753quopU7ig2rvbIO5UpulejypnV?purpose=fullsize",
];

export const aboutImage = "/eibad-profile.jpg";
export const contactImage = "/contact-atmosphere.jpg";

export const projects: Project[] = [
  {
    slug: "central-transportation-hub",
    number: "01",
    title: "Central Transportation Hub",
    location: "Red Sea, Saudi Arabia",
    year: "2024 — 2025",
    category: "Architecture / Construction",
    image: projectImages[0],
    alt: "Architectural rendering of the Central Transportation Hub",
    role: "Architectural Engineer",
    scope: [
      "Architecture",
      "Construction",
      "Project coordination",
      "3D visualization",
    ],
    summary:
      "A coordinated regional point of connection shaped through architecture, technical clarity, and delivery-focused coordination.",
  },
  {
    slug: "residential-commercial-project",
    number: "02",
    title: "Residential / Commercial Project",
    location: "Peshawar, Pakistan",
    year: "Selected work",
    category: "Design / 3D Visualization",
    image: projectImages[1],
    alt: "Architectural visualization for a residential and commercial project",
    role: "Design & Visualization",
    scope: ["Design", "3D visualization", "Presentation"],
    summary:
      "A spatial study that turns a mixed-use brief into a clear, atmospheric, and buildable visual language.",
  },
  {
    slug: "interior-project",
    number: "03",
    title: "Interior Project",
    location: "Saudi Arabia",
    year: "Selected work",
    category: "Interior / Spatial Identity",
    image: projectImages[2],
    alt: "Interior architecture visualization with layered natural light",
    role: "Spatial Designer",
    scope: ["Interior architecture", "Materials", "Visual identity"],
    summary:
      "An interior-focused study exploring proportion, material, and light as a quiet architectural experience.",
  },
];

export const caseStudyImages = [
  {
    image: projectImages[3],
    label: "Technical study / 01",
    alt: "Technical architectural study for the project",
  },
  {
    image: projectImages[4],
    label: "Spatial study / 02",
    alt: "Architectural spatial study for the project",
  },
  {
    image: projectImages[5],
    label: "Project image / 03",
    alt: "Project visualization for the transportation hub",
  },
];

export type ExperienceRole = {
  id: string;
  startYear: string;
  endYear: string;
  period: string;
  title: string;
  company: string;
  location: string;
  responsibilities: string[];
  projects: string[];
  current?: boolean;
};

export const experience: ExperienceRole[] = [
  {
    id: "castle-shepherd-gilmour",
    startYear: "2019",
    endYear: "2021",
    period: "DEC 2019 — SEP 2021",
    title: "ARCHITECT",
    company: "Castle Shepherd Gilmour",
    location: "Bahria Town-7, Rawalpindi, Pakistan",
    responsibilities: [
      "Architectural concepts and design proposals",
      "Technical and MEP drawing packages",
      "3D modeling and design presentations",
      "Site visits and architectural supervision",
    ],
    projects: [
      "Commercial projects",
      "High-rise residential projects",
      "Residential projects",
    ],
  },
  {
    id: "paradigm-builders",
    startYear: "2021",
    endYear: "2022",
    period: "SEP 2021 — MAY 2022",
    title: "SENIOR ARCHITECT",
    company: "Paradigm Builders & Developers",
    location: "Rawalpindi, Pakistan",
    responsibilities: [
      "Architectural design development and 3D modeling",
      "Complete architectural and working drawing packages",
      "Client requirement gathering and design translation",
      "Project graphics, presentation materials, and renders",
    ],
    projects: [
      "Commercial and office projects",
      "Mid-rise and high-rise developments",
      "Urban planning projects",
    ],
  },
  {
    id: "moderino-design-build",
    startYear: "2022",
    endYear: "2023",
    period: "MAY 2022 — SEP 2023",
    title: "PROJECT ARCHITECT",
    company: "Moderino Design & Build",
    location: "Bahria Town-8, Rawalpindi, Pakistan",
    responsibilities: [
      "Architectural design and documentation management",
      "Interior elevations, axonometric views, and schedules",
      "Regulatory review and design quality control",
      "Client, vendor, and project team coordination",
    ],
    projects: [
      "4-kanal residential block, Gulberg Greens, Islamabad",
      "The EVA commercial project, Morgah Road, Rawalpindi",
    ],
  },
  {
    id: "youssef-marroun-contracting",
    startYear: "2024",
    endYear: "PRESENT",
    period: "JAN 2024 — PRESENT",
    title: "BIM ARCHITECTURAL ENGINEER",
    company: "Youssef Marroun Contracting Co.",
    location: "Riyadh, Saudi Arabia",
    responsibilities: [
      "Architectural shop drawings and technical documentation",
      "Architectural and MEP BIM coordination",
      "Saudi Building Code and site compliance review",
      "Site coordination, quality control, and project handovers",
      "Client, consultant, and subcontractor coordination",
    ],
    projects: [
      "Riyadh Air Training Center (GACA)",
      "Red Sea projects — CTH, CDC, and QC-LAB",
    ],
    current: true,
  },
];

export const expertise = [
  {
    id: "architectural-design",
    number: "01",
    title: "ARCHITECTURAL DESIGN",
    description:
      "From the first spatial idea to a coordinated architectural direction.",
    services: [
      "Concept development",
      "Space planning",
      "Design development",
      "Technical documentation",
    ],
    image: projectImages[0],
    imageAlt: "Architectural design visualization",
  },
  {
    id: "construction-coordination",
    number: "02",
    title: "CONSTRUCTION & COORDINATION",
    description:
      "Connecting design intent with the realities of delivery, sequencing, and site.",
    services: [
      "Site coordination",
      "Technical coordination",
      "Project documentation",
      "Execution support",
    ],
    image: projectImages[1],
    imageAlt: "Construction and coordination project visualization",
  },
  {
    id: "3d-visualization",
    number: "03",
    title: "3D VISUALIZATION",
    description:
      "Building atmospheric images that make a project understandable before it exists.",
    services: [
      "3D modeling",
      "Architectural rendering",
      "Interior visualization",
      "Presentation imagery",
    ],
    image: projectImages[2],
    imageAlt: "3D architectural visualization study",
  },
  {
    id: "interior-design",
    number: "04",
    title: "INTERIOR DESIGN",
    description:
      "Developing interiors where proportion, material, and atmosphere work together.",
    services: [
      "Space planning",
      "Material development",
      "Interior concepts",
      "Visualization",
    ],
    image: projectImages[3],
    imageAlt: "Interior architecture visualization",
  },
];

export const tools = [
  "AUTODESK REVIT",
  "NAVISWORKS",
  "AUTOCAD",
  "SKETCHUP",
  "V-RAY",
  "LUMION",
  "ENSCAPE",
  "ADOBE PHOTOSHOP",
];

export const education = {
  degree: "BACHELOR OF ARCHITECTURE (B.ARCH.)",
  school: "University of Engineering and Technology (UET)",
  location: "Abbottabad, KPK, Pakistan",
  period: "2015 — 2019",
  detail: "CGPA 3.12 / 4.00",
};

export const registrations = [
  {
    code: "PCATP",
    title: "Pakistan Council of Architects & Town Planners",
    detail: "Certified",
  },
  {
    code: "SCE",
    title: "Saudi Council of Engineers",
    detail: "Registered",
  },
];

export const workshops = [
  {
    year: "2016",
    title: "High Performance Buildings & Integrated Design Process",
  },
  {
    year: "2016",
    title: "Building Materials: Its Applications in Architecture",
  },
  {
    year: "2015",
    title: "Modes of Interpretation: Analyze, Translate and Transform",
  },
];

export const professionalFocus = [
  "ARCHITECTURE",
  "CONSTRUCTION",
  "PROJECT COORDINATION",
  "3D VISUALIZATION",
  "INTERIOR DESIGN",
];

export const contact = {
  whatsappNumber: "966550547843",
  location: "Riyadh, Saudi Arabia",
};
