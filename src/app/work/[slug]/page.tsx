import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudyImages, projects } from "@/app/portfolio-data";

export const metadata: Metadata = {
  title: "Project Case Study — Eibad Hassan Shah",
  description:
    "A visual case study exploring architecture, coordination, construction, and spatial communication.",
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="case-study">
      <header className="case-study__bar">
        <Link href="/#top">← EIBAD HASSAN SHAH</Link>
        <span>CASE STUDY / {project.number}</span>
        <Link href="/#contact">CONTACT ↗</Link>
      </header>

      <section className="case-hero">
        <div className="case-hero__heading">
          <p className="eyebrow">PROJECT / {project.number}</p>
          <h1>
            {project.title}
            <span>{project.location}</span>
          </h1>
        </div>

        <div className="case-hero__meta">
          <div>
            <span>YEAR</span>
            <strong>{project.year}</strong>
          </div>
          <div>
            <span>ROLE</span>
            <strong>{project.role}</strong>
          </div>
          <div>
            <span>DISCIPLINE</span>
            <strong>{project.category}</strong>
          </div>
        </div>

        <div className="case-hero__image">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            preload
            sizes="100vw"
          />
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
          <p>{project.summary}</p>
        </div>
        <div className="case-overview__scope">
          <span>SCOPE</span>
          {project.scope.map((item) => (
            <strong key={item}>{item}</strong>
          ))}
        </div>
      </section>

      <section className="case-sequence" aria-label="Project sequence">
        {caseStudyImages.map((item, index) => (
          <figure className="case-sequence__item" key={item.label}>
            <div className="case-sequence__image">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 900px) calc(100vw - 2.5rem), 78vw"
              />
              <span>0{index + 1}</span>
            </div>
            <figcaption>
              <span>{item.label}</span>
              <span>PROJECT DOCUMENTATION</span>
            </figcaption>
          </figure>
        ))}
      </section>

      <nav className="case-next" aria-label="Case study navigation">
        <Link href="/#work">← BACK TO SELECTED WORK</Link>
        <Link href="/#contact">START A CONVERSATION ↗</Link>
      </nav>
    </main>
  );
}
