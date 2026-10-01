/**
 * Single source of truth for the person/entity data that has to agree across
 * every part of the site: JSON-LD schema, footer, and the off-site profiles.
 *
 * Adding a profile URL here is what lets Google connect this site to your
 * LinkedIn, SCE and PCATP records as one entity rather than five separate
 * unlinked things. Keep it accurate - a wrong URL is worse than a missing one.
 */

export const person = {
  name: "Eibad Hassan Shah",
  jobTitle: "BIM Architectural Engineer",
  /** Short line used in meta descriptions and structured data. */
  summary:
    "Architectural engineer and BIM architectural engineer working on large-scale transport, logistics, training and industrial projects across Saudi Arabia.",
  basedIn: "Riyadh, Saudi Arabia",
} as const;

export const employers = [
  {
    name: "Youssef Marroun Contracting Co.",
    title: "BIM Architectural Engineer",
    from: "2024",
    to: "Present",
    location: "Riyadh, Saudi Arabia",
  },
  {
    name: "Al Fouzan Trading & General Contracting Co.",
    title: "Architectural Engineer",
    from: "2022",
    to: "2023",
    location: "Al Jouf, Saudi Arabia",
  },
  {
    name: "Moderino Design & Build",
    title: "Senior Architect",
    from: "2021",
    to: "2022",
    location: "Rawalpindi, Pakistan",
  },
  {
    name: "Castle Shepherd Gilmour",
    title: "Architect",
    from: "2019",
    to: "2021",
    location: "Rawalpindi, Pakistan",
  },
] as const;

export const education = [
  {
    degree: "Bachelor of Architecture (B.Arch)",
    school: "University of Engineering and Technology (UET)",
    location: "Abbottabad, Khyber Pakhtunkhwa, Pakistan",
    from: "2015",
    to: "2019",
  },
] as const;

/**
 * Professional registrations. These are corroborating entities - a search for
 * your name should surface these, and they should link back to the site.
 */
export const credentials = [
  {
    name: "Saudi Council of Engineers",
    shortName: "SCE",
    status: "Registered",
    url: "", // TODO: add the public register lookup URL if one exists
  },
  {
    name: "Pakistan Council of Architects & Town Planners",
    shortName: "PCATP",
    status: "Certified",
    url: "", // TODO
  },
] as const;

/** Cities and regions he has actually worked in. Used for areaServed. */
export const areasServed = [
  "Riyadh, Saudi Arabia",
  "Al Jouf, Saudi Arabia",
  "Red Sea, Saudi Arabia",
  "Al Kharj, Saudi Arabia",
  "Sudair, Riyadh, Saudi Arabia",
  "Rawalpindi, Pakistan",
  "Islamabad, Pakistan",
  "Saudi Arabia",
  "Pakistan",
] as const;

export const services = [
  "Architectural engineering",
  "BIM coordination",
  "Architectural shop drawings",
  "Construction coordination",
  "Technical documentation",
  "3D architectural visualization",
  "Saudi Building Code compliance",
] as const;

/** Public contact details. Keep in sync with the CV and the contact section. */
export const contactDetails = {
  email: "ar.eibadshah@gmail.com",
  phone: "+966550547843",
  phoneDisplay: "+966 55 054 7843",
  whatsapp: "https://wa.me/966550547843",
  location: "Riyadh, Saudi Arabia",
} as const;

/**
 * Off-site profiles that should be linked back to this site.
 *
 * This is the highest-leverage SEO task on the site: an empty sameAs array
 * means Google has no verified link between this domain and your professional
 * identity, which weakens every entity-based search and every AI answer that
 * cites you.
 *
 * For sameAs to do its job the link has to exist in BOTH directions. Adding the
 * URL here is only half of it — your LinkedIn profile's Website field and a
 * Featured link back to the site are the other half.
 */
export const sameAs: string[] = ["https://www.linkedin.com/in/eibad"];

/**
 * Google Business Profile data. Name / Address / Phone must match what you
 * enter in the Google Business Profile dashboard exactly, or the listing gets
 * suspended. Copy these values verbatim.
 */
export const googleBusinessProfile = {
  businessName: "Eibad Hassan Shah",
  categoryPrimary: "Architect",
  categoryAdditional: ["Building Contractor", "BIM Consultant"],
  streetAddress: "", // TODO: add a real, staffed service address
  addressLocality: "Riyadh",
  addressRegion: "Riyadh Province",
  addressCountry: "SA",
  postalCode: "", // TODO
  phone: "", // TODO: use a number you actually answer
  website: "", // set to the live production domain once deployed
  hours: "", // TODO: e.g. "Sun - Thu, 09:00 - 18:00"
  /** GBP forbids service-area businesses from showing an address. */
  serviceAreaBusiness: true,
} as const;
