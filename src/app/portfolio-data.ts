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

export type ProjectRender = {
  src: string;
  alt: string;
  label: string;
  title: string;
  caption: string;
  /** Set when the render is not Eibad's own work, e.g. consultant-issued imagery. */
  credit: string | null;
  width: number;
  height: number;
};

export type ProjectDrawing = {
  src: string;
  alt: string;
  label: string;
  title: string;
  caption: string;
  kind: "drawing" | "model" | "photo";
  /** True while this entry points at a shared /public/drawings/placeholder. */
  placeholder: boolean;
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
  /** Auto-advancing design-render carousel at the top of the case study. */
  renders?: ProjectRender[];
  /** Card thumbnail. Landscape, cropped to aspect-ratio 1.55 / 1.42 / 1.28. */
  image: string;
  alt: string;
  /** Case study hero. Full-bleed and tall (~0.7), so a different, often portrait, frame. */
  heroImage: string;
  heroImageAlt: string;
  images: ProjectImage[];
  /** Technical drawings carousel at the bottom of the case study. */
  drawings: ProjectDrawing[];
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
      "Developed architectural concepts and design proposals for commercial, high-rise residential, and residential projects",
      "Produced sketches and 3D models using SketchUp to develop and communicate design concepts",
      "Prepared complete architectural, working, and MEP drawings in accordance with applicable codes and regulatory requirements",
      "Met with clients to understand project requirements and translated them into documented design solutions",
      "Delivered design presentations and supported client discussions throughout the design process",
      "Conducted site visits and provided architectural supervision on assigned projects",
    ],
    projects: [
      "Commercial projects",
      "High-rise residential projects",
      "Residential projects",
    ],
  },
  {
    id: "moderino-design-build",
    startYear: "2021",
    endYear: "2022",
    period: "SEP 2021 — AUG 2022",
    title: "SENIOR ARCHITECT",
    company: "Moderino Design & Build",
    location: "Bahria Town-8, Rawalpindi, Pakistan",
    responsibilities: [
      "Led architectural design development for apartment, office, retail, healthcare, and interior-focused projects",
      "Managed teams responsible for complete architectural, working, and MEP drawing packages",
      "Reviewed project drawings for compliance with relevant regulatory authorities, codes, and standards",
      "Presented design proposals to clients and translated project requirements into practical design solutions",
      "Coordinated with clients, vendors, and project teams throughout the design and documentation process",
      "Contributed to completed projects including a 4-kanal residential block in Gulberg Greens, Islamabad and The EVA commercial project on Morgah Road, Rawalpindi",
    ],
    projects: [
      "4-kanal residential block, Gulberg Greens, Islamabad",
      "The EVA commercial project, Morgah Road, Rawalpindi",
    ],
  },
  {
    id: "al-fouzan-trading-general-contracting",
    startYear: "2022",
    endYear: "2023",
    period: "OCT 2022 — SEP 2023",
    title: "ARCHITECTURAL ENGINEER",
    company: "Al Fouzan Trading & General Contracting Co.",
    location: "Al Jouf, Saudi Arabia",
    responsibilities: [
      "Developed architectural shop drawings and detailed technical documentation using AutoCAD for construction and project delivery",
      "Coordinated with consultants, subcontractors, and engineers to maintain drawing quality, resolve technical issues, and support project schedules",
      "Identified design discrepancies, clashes, and missing information and initiated RFIs and technical queries as required",
      "Completed and handed over technical drawings",
      "Contributed to the Al Jouf Airport Development Project at Sakaka",
    ],
    projects: ["Al Jouf Airport Development Project at Sakaka"],
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
      "Develop architectural shop drawings and detailed technical documentation using Autodesk Revit for construction and project delivery",
      "Coordinate architectural designs with MEP services through BIM, identifying and resolving clashes before they affect site execution",
      "Coordinate with consultants, subcontractors, and project teams to maintain drawing quality, resolve technical issues, and support project schedules",
      "Ensure architectural drawings and site execution comply with applicable Saudi regulations and project requirements, including the Saudi Building Code",
      "Conduct regular site visits to review architectural works, coordinate technical requirements, and support quality compliance",
      "Identify design discrepancies, clashes, and missing information and initiate RFIs and technical queries as required",
      "Contribute to securing required project approvals and permits from relevant Saudi authorities and local municipalities",
      "Propose practical material alternatives and value-engineering solutions while maintaining required quality and design intent",
      "Complete and hand over technical drawings within or ahead of project deadlines, supporting timely project delivery",
      "Support project handovers with minimal defects and snagging during final client inspections",
    ],
    projects: [
      "Riyadh Air Academy (GACA)",
      "Red Sea projects — CTH, CDC and QC-LAB",
      "NUPCO Distribution Centre — Al Jouf",
      "Mawten Block 02 and 30",
      "Farm Frites Warehouses",
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
      "/projects/french-fries-processing-facility/02-formwork-scaffold.jpg",
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
      "/projects/red-sea-transportation-hub-qc-lab/10-reception.jpg",
    ),
  },
];

export const tools = [
    "AUTODESK REVIT",
    "NAVISWORKS",
    "AUTODESK CONSTRUCTION CLOUD",
    "AUTOCAD",
    "SKETCHUP",
    "V-RAY",
    "LUMION",
    "ENSCAPE",
    "ADOBE PHOTOSHOP",
    "MICROSOFT OFFICE",
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
      year: "2016",
      title:
        "Design Discovery Pakistan: Faculty Pavilion for Future Leisure Spaces",
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
  "TECHNICAL DOCUMENTATION",
  "INTERIOR DESIGN",
];

export const contact = {
  whatsappNumber: "966550547843",
  email: "ar.eibadshah@gmail.com",
  phoneDisplay: "+966 55 054 7843",
  location: "Riyadh, Saudi Arabia",
};
