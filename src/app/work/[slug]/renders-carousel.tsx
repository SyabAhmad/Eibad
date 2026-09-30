"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { ProjectRender } from "@/app/portfolio-data";
import { padNumber } from "@/app/portfolio-data";

const AUTO_ADVANCE_MS = 2000;

export default function RendersCarousel({
  renders,
  projectNumber,
  projectTitle,
}: {
  renders: ProjectRender[];
  projectNumber: string;
  projectTitle: string;
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [paused, setPaused] = useState(false);
  const count = renders.length;
  const current = renders[index];

  const go = useCallback(
    (dir: 1 | -1) => {
      setDirection(dir === 1 ? "next" : "prev");
      setIndex((i) => (i + dir + count) % count);
    },
    [count],
  );

  // Autoplay. Pauses on hover/focus so a reader inspecting a render is not
  // yanked away mid-view, and never runs for someone who asked for less motion.
  useEffect(() => {
    if (count < 2 || paused) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setDirection("next");
      setIndex((i) => (i + 1) % count);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(id);
  }, [count, paused]);

  if (count === 0) return null;

  return (
    <section
      className="case-renders"
      aria-label="Design renders"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="case-renders__head">
        <p className="eyebrow">DESIGN RENDERS</p>
        <span className="case-renders__count" aria-live="polite">
          {padNumber(index + 1)} / {padNumber(count)}
        </span>
      </div>

      <div className="case-viewer case-renders__viewer" data-direction={direction}>
        <div className="case-viewer__media case-renders__media">
          {renders.map((render, i) => (
            <div
              key={render.src}
              className={`case-viewer__frame${i === index ? " is-active" : ""}`}
              aria-hidden={i !== index}
            >
              <Image
                src={render.src}
                alt={i === index ? render.alt : ""}
                fill
                priority={i === 0}
                sizes="(max-width: 900px) 100vw, 62vw"
              />
            </div>
          ))}

          <span className="case-viewer__badge" aria-hidden="true">
            {padNumber(index + 1)}
          </span>
          {current.credit && (
            <span className="case-renders__credit" aria-hidden="true">
              RENDER / {current.credit.toUpperCase()}
            </span>
          )}

          <button
            type="button"
            className="case-viewer__arrow case-viewer__arrow--prev"
            onClick={() => go(-1)}
            aria-label="Previous render"
          >
            ←
          </button>
          <button
            type="button"
            className="case-viewer__arrow case-viewer__arrow--next"
            onClick={() => go(1)}
            aria-label="Next render"
          >
            →
          </button>
        </div>

        <div className="case-renders__caption" key={current.src}>
          <span>{current.label}</span>
          <strong>
            {projectNumber} / {projectTitle}
          </strong>
          <span>{current.caption}</span>
        </div>
      </div>
    </section>
  );
}
