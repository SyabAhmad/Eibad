import projectData from "@/data/projects.json";

export type ProjectImage = {
  src: string;
  alt: string;
  label: string;
  caption: string;
  /** Discriminator so renders/drawings can be appended to a gallery later. */
  kind: "photo" | "render" | "drawing" | "model" | "aerial";
  /** Set when the visual is not Eibad's own work, e.g. designer-issued renders. */
  credit: string | null;
  width: number;
  height: number;
};

export type Project = {
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  client: string;
  consultant: string;
  contractor: string;
  location: string;
  site?: string;
  area: string;
  category: string;
  status: string;
  year: string;
  yearSource: "documented" | "inferred";
  role: string;
  scope: string[];
  summary: string;
  description: string;
  highlights: string[];
  spaces?: string[];
  materials?: string[];
  /** Card thumbnail. Landscape, cropped to aspect-ratio 1.55 / 1.42 / 1.28. */
  image: string;
  alt: string;
  /** Case study hero. Full-bleed and tall (~0.7), so a different, often portrait, frame. */
  heroImage: string;
  heroImageAlt: string;
  images: ProjectImage[];
  sources: string[];
};

export const projects: Project[] = projectData.projects as Project[];

export const projectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

/**
 * Drives the large hero treatment at the top of the homepage. Kept separate from
 * the grid order so the strongest image can lead the page without renumbering the
 * case studies. Falls back to the first project if the slug is ever removed.
 */
export const featuredProject: Project =
  projectBySlug("nupco-al-jouf") ?? projects[0];

export const padNumber = (value: number) => String(value).padStart(2, "0");

export const aboutImage = "/eibad-profile.jpg";
export const contactImage = "/contact-atmosphere.jpg";

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
      "Riyadh Air Training Centre (GACA)",
      "Red Sea Central Transportation Hub & QC Lab",
      "Red Sea Central Distribution Center (CDC)",
      "NUPCO Distribution Centre — Al Jouf",
      "French Fries Processing Facility — Sudair",
    ],
    current: true,
  },
];

/**
 * Reuses a real project photograph for a discipline card and pulls its alt text
 * from the same source, so the two can never drift apart.
 */
const disciplineImage = (src: string) => {
  const match = projects
    .flatMap((project) => project.images)
    .find((image) => image.src === src);

  if (!match) {
    throw new Error(`Unknown discipline image: ${src}`);
  }

  return { image: src, imageAlt: match.alt };
};

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
    ...disciplineImage(
      "/projects/riyadh-air-training-centre/02-entrance-elevation.jpg",
    ),
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
    ...disciplineImage(
      "/projects/french-fries-processing-facility/03-erection.jpg",
    ),
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
    // Interim stand-in. Swap for a Revit / V-Ray / Lumion render once available.
    ...disciplineImage("/projects/riyadh-air-training-centre/04-atrium.jpg"),
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
    ...disciplineImage(
      "/projects/red-sea-transportation-hub-qc-lab/04-reception.jpg",
    ),
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
