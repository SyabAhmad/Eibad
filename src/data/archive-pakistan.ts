/**
 * Earlier concept work from Pakistan, 2019-2023, predating the Saudi practice.
 *
 * Every image here is a 3D visualisation, not a photograph of built work. That
 * distinction is load-bearing: the rest of the site is documentary photography
 * and issued drawings of buildings that exist, so these cards carry an explicit
 * CONCEPT RENDER badge and the section states the location and years. Do not add
 * a photograph to this list without removing the badge from the card renderer.
 *
 * Sources: "Grey Modern Professional Business Project Presentation.pdf", 81
 * pages. Images are centre-cropped from the source sheets to a uniform 3:2 at
 * 720px wide, because a marquee card never needs more than that.
 *
 * Deliberately not a case study and deliberately not linked. There are no
 * detail pages behind these, so the cards are display-only.
 */

export type ArchiveProject = {
  slug: string;
  title: string;
  year: string;
  category: string;
  location: string;
  /** 3:2, 720px wide. Baked at build time from the source sheet. */
  src: string;
  width: number;
  height: number;
};

export const archiveHeading = {
  eyebrow: "CONCEPT DESIGN / ISLAMABAD & RAWALPINDI / 2019—2023",
  title: "Earlier work",
  lead: "Concept and visualisation work completed in Pakistan before moving to Saudi Arabia. Not built projects — design studies, rendered at the time of drawing.",
};

export const archiveProjects: ArchiveProject[] = [
  {
    slug: "golfer-sky-garden",
    title: "Golfer Sky Garden",
    year: "2021",
    category: "Residential Tower",
    location: "Garden City, Phase 7, Islamabad",
    src: "/archive-pakistan/golfer-sky-garden.jpg",
    width: 720,
    height: 480,
  },
  {
    slug: "4k-mall",
    title: "4K Mall",
    year: "2022",
    category: "Mixed Use & Mall",
    location: "Bahria Paradise, Islamabad",
    src: "/archive-pakistan/4k-mall.jpg",
    width: 720,
    height: 480,
  },
  {
    slug: "palladium-tower",
    title: "Palladium Tower",
    year: "2020",
    category: "Office & Apartment",
    location: "CBD Phase 8, Bahria Town",
    src: "/archive-pakistan/palladium-tower.jpg",
    width: 720,
    height: 480,
  },
  {
    slug: "orakzai-heights",
    title: "Orakzai Heights",
    year: "2020",
    category: "Mixed Use Residential",
    location: "Oriental Garden City, Bahria Town",
    src: "/archive-pakistan/orakzai-heights.jpg",
    width: 720,
    height: 480,
  },
  {
    slug: "farm-house",
    title: "Farm House",
    year: "2023",
    category: "Residential",
    location: "Block A, Gulberg Green",
    src: "/archive-pakistan/farm-house.jpg",
    width: 720,
    height: 480,
  },
  {
    slug: "1-kanal-house",
    title: "1 Kanal House",
    year: "2023",
    category: "Residential / Classical",
    location: "Phase 8, Bahria Town",
    src: "/archive-pakistan/1-kanal-house.jpg",
    width: 720,
    height: 480,
  },
  {
    slug: "bahria-heights",
    title: "Bahria Heights",
    year: "2023",
    category: "Apartment Interior",
    location: "Phase 8, Bahria Town",
    src: "/archive-pakistan/bahria-heights.jpg",
    width: 720,
    height: 480,
  },
  {
    slug: "dental-clinic",
    title: "Dental Clinic",
    year: "2023",
    category: "Clinic Interior",
    location: "G8, Islamabad",
    src: "/archive-pakistan/dental-clinic.jpg",
    width: 720,
    height: 480,
  },
];
