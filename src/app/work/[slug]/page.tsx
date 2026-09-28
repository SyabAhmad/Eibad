import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Project } from "@/app/portfolio-data";
import { padNumber, projectBySlug, projects } from "@/app/portfolio-data";
import {
  absoluteUrl,
  breadcrumbSchema,
  JsonLd,
  siteName,
} from "@/app/seo";

const caseMeta = (project: Project) => [
  { label: "YEAR", value: project.year },
  { label: "STATUS", value: project.status },
  { label: "AREA", value: project.area },
  { label: "CLIENT", value: project.client },
  { label: "ROLE", value: project.role },
  { label: "DISCIPLINE", value: project.category },
];

const caseFacts = (project: Project) =>
  [
    { label: "CLIENT", value: project.client },
    { label: "CONSULTANT", value: project.consultant },
    { label: "CONTRACTOR", value: project.contractor },
    { label: "LOCATION", value: project.location },
    { label: "AREA", value: project.area },
    { label: "CATEGORY", value: project.category },
    { label: "STATUS", value: project.status },
    { label: "ROLE", value: project.role },
    project.site
      ? { label: "SITE", value: project.site }
      : null,
    ...(project.spaces ?? []).map((space, index) => ({
      label: `SPACE ${padNumber(index + 1)}`,
      value: space,
    })),
    ...(project.materials ?? []).map((material, index) => ({
      label: `MATERIAL ${padNumber(index + 1)}`,
      value: material,
    })),
  ].filter((fact): fact is { label: string; value: string } => fact !== null);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} — Project Case Study`,
    description: project.summary,
    keywords: [
      project.title,
      project.category,
      project.client,
      project.location,
      "architectural project case study",
      "architectural documentation",
    ],
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      type: "article",
      url: `/work/${project.slug}`,
      title: `${project.title} — Project Case Study`,
      description: project.summary,
      images: [
        {
          url: project.image,
          alt: project.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Project Case Study`,
      description: project.summary,
    },
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectBySlug(slug);

  if (!project) {
    notFound();
  }

  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description || project.summary,
    url: absoluteUrl(`/work/${project.slug}`),
    creator: {
      "@type": "Person",
      name: siteName,
      url: absoluteUrl("/"),
    },
    about: project.scope,
    image: project.images.map((image) => absoluteUrl(image.src)),
    spatialCoverage: project.location,
    publisher: {
      "@type": "Organization",
      name: project.contractor,
    },
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Portfolio", path: "/" },
    { name: "Selected Work", path: "/#work" },
    { name: project.shortTitle, path: `/work/${project.slug}` },
  ]);

  return (
    <>
      <JsonLd data={projectSchema} />
      <JsonLd data={breadcrumbs} />
      <main className="case-study">
        <header className="case-study__bar">
          <Link href="/#top">← EIBAD HASSAN SHAH</Link>
          <span>
            CASE STUDY / {project.number} OF {padNumber(projects.length)}
          </span>
          <Link href="/#contact">CONTACT ↗</Link>
        </header>

        <section className="case-hero">
          <div className="case-hero__heading">
            <p className="eyebrow">PROJECT / {project.number}</p>
            <h1>
              {project.shortTitle}
              <span>{project.location}</span>
            </h1>
          </div>

          <div className="case-hero__meta">
            {caseMeta(project).map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>

          <div className="case-hero__image">
            {project.heroImage ? (
              <Image
                src={project.heroImage}
                alt={project.heroImageAlt}
                fill
                preload
                sizes="100vw"
              />
            ) : (
              <span className="case-hero__placeholder">
                {project.number} / {project.shortTitle}
              </span>
            )}
            <span>FEATURED IMAGE / {project.number}</span>
          </div>
        </section>

        <section className="case-overview">
          <p className="eyebrow">PROJECT OVERVIEW</p>
          <div className="case-overview__copy">
            <h2>
              From spatial idea
              <span>to built clarity.</span>
            </h2>
            <p>{project.description || project.summary}</p>
          </div>
          <div className="case-overview__scope">
            <span>SCOPE</span>
            {project.scope.map((item) => (
              <strong key={item}>{item}</strong>
            ))}
          </div>
        </section>

        <section className="case-facts">
          <p className="eyebrow">PROJECT DATA</p>
          <dl className="case-facts__list">
            {caseFacts(project).map((fact) => (
              <div key={`${fact.label}-${fact.value}`}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          {project.highlights.length > 0 && (
            <div className="case-facts__highlights">
              <span>HIGHLIGHTS</span>
              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <section className="case-sequence" aria-label="Project gallery">
          {project.images.map((item, imageIndex) => (
            <figure className="case-sequence__item" key={item.src}>
              <div className="case-sequence__image">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 900px) calc(100vw - 2.5rem), 78vw"
                />
                <span>{padNumber(imageIndex + 1)}</span>
              </div>
              <figcaption>
                <span>{item.label}</span>
                <span>
                  {item.kind === "photo" ? "PROJECT DOCUMENTATION" : item.kind}
                  {item.credit ? ` — ${item.credit}` : ""}
                </span>
              </figcaption>
            </figure>
          ))}
        </section>

        <nav className="case-next" aria-label="Case study navigation">
          <Link href={`/work/${previous.slug}`}>
            ← {previous.shortTitle}
          </Link>
          <Link href="/#work">ALL PROJECTS</Link>
          <Link href={`/work/${next.slug}`}>
            {next.shortTitle} →
          </Link>
        </nav>
      </main>
    </>
  );
}
