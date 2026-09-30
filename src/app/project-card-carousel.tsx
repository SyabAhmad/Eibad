"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Project } from "@/app/portfolio-data";

const AUTO_ADVANCE_MS = 4000;

type Slide = { src: string; alt: string; kind: "photo" | "render" };

/**
 * Card thumbnail for a project. When the project has design renders, the card
 * cycles through them and then the site photograph, so the grid shows the design
 * intent without hiding the built reality. Renders are labelled, because an
 * unlabelled render sitting next to a site photo is indistinguishable at
 * thumbnail size.
 *
 * The slide list is derived from project data, so adding renders to any project
 * turns the carousel on for it with no change here.
 */
export default function ProjectCardCarousel({
  project,
  sizes,
  priority = false,
}: {
  project: Project;
  sizes: string;
  priority?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const slides: Slide[] = [
    ...(project.renders ?? []).map((render) => ({
      src: render.src,
      alt: render.alt,
      kind: "render" as const,
    })),
    { src: project.image, alt: project.alt, kind: "photo" as const },
  ];

  const count = slides.length;
  const current = slides[Math.min(index, count - 1)];

  useEffect(() => {
    if (count < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(id);
  }, [count, paused]);

  const multi = count > 1;

  return (
    <div
      className="project-card"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <Link
        className="project-spread__visual"
        href={`/work/${project.slug}`}
        aria-label={`View the ${project.title} case study`}
      >
        {slides.map((slide, i) => (
          <span
            key={slide.src}
            className={`project-card__frame${i === index ? " is-active" : ""}`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.src}
              alt={i === index ? slide.alt : ""}
              fill
              preload={priority || i === 0}
              sizes={sizes}
            />
          </span>
        ))}

        <span className="project-spread__image-label">
          PROJECT / {project.number}
        </span>
        {current.kind === "render" && (
          <span className="project-card__badge">RENDER</span>
        )}
        <span className="project-spread__view">
          VIEW
          <span aria-hidden="true">↗</span>
        </span>

        {multi && (
          <span className="project-card__dots" aria-hidden="true">
            {slides.map((slide, i) => (
              <span
                key={slide.src}
                className={i === index ? "is-active" : undefined}
              />
            ))}
          </span>
        )}
      </Link>
    </div>
  );
}
