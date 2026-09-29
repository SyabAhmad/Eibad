"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ProjectDrawing } from "@/app/portfolio-data";
import { padNumber } from "@/app/portfolio-data";

type DrawingsCarouselProps = {
  drawings: ProjectDrawing[];
  projectNumber: string;
  projectTitle: string;
};

export default function DrawingsCarousel({
  drawings,
  projectNumber,
  projectTitle,
}: DrawingsCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);

  const count = drawings.length;
  const current = drawings[index];
  const active = activeIndex === null ? null : drawings[activeIndex];

  const go = useCallback(
    (dir: 1 | -1) => {
      setDirection(dir === 1 ? "next" : "prev");
      setIndex((i) => (i + dir + count) % count);
    },
    [count],
  );

  const openAt = useCallback(
    (openIndex: number, trigger: HTMLElement | null) => {
      lastTriggerRef.current = trigger;
      setActiveIndex(openIndex);
    },
    [],
  );

  const close = useCallback(() => {
    setActiveIndex(null);
    lastTriggerRef.current?.focus();
  }, []);

  const step = useCallback(
    (dir: 1 | -1) => {
      setActiveIndex((currentIndex) =>
        currentIndex === null
          ? currentIndex
          : (currentIndex + dir + count) % count,
      );
    },
    [count],
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        step(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        step(-1);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, step]);

  if (count === 0) return null;

  return (
    <>
      <section className="case-drawings" aria-label="Technical drawings">
        <p className="eyebrow">TECHNICAL DRAWINGS</p>

        <div className="case-viewer" data-direction={direction}>
          <div className="case-viewer__info">
            <span className="case-viewer__count" aria-live="polite">
              {padNumber(index + 1)} / {padNumber(count)}
            </span>
            <div className="case-viewer__desc" key={current.src}>
              <span>{current.label}</span>
              <strong>{current.title}</strong>
              <span>{current.caption}</span>
            </div>
            <span className="case-viewer__hint" aria-hidden="true">
              SELECT IMAGE TO ENLARGE ↗
            </span>
          </div>

          <div className="case-viewer__media">
            <button
              type="button"
              className="case-viewer__stage"
              onClick={(event) => openAt(index, event.currentTarget)}
              aria-label={`Open ${current.title} in full view`}
            >
              {drawings.map((drawing, i) => (
                <span
                  key={drawing.src}
                  className={`case-viewer__frame${i === index ? " is-active" : ""}`}
                  aria-hidden={i !== index}
                >
                  <Image
                    src={drawing.src}
                    alt={i === index ? drawing.alt : ""}
                    fill
                    sizes="(max-width: 900px) 100vw, 62vw"
                  />
                </span>
              ))}
              <span className="case-viewer__badge" aria-hidden="true">
                {padNumber(index + 1)}
              </span>
            </button>

            <button
              type="button"
              className="case-viewer__arrow case-viewer__arrow--prev"
              onClick={() => go(-1)}
              aria-label="Previous drawing"
            >
              ←
            </button>
            <button
              type="button"
              className="case-viewer__arrow case-viewer__arrow--next"
              onClick={() => go(1)}
              aria-label="Next drawing"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {active && activeIndex !== null && (
        <div
          className="drawings-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} — ${projectTitle} drawing ${activeIndex + 1} of ${count}`}
          ref={dialogRef}
          tabIndex={-1}
          onClick={close}
        >
          <div className="drawings-modal__bar">
            <span>
              DRAWING {padNumber(activeIndex + 1)} / {padNumber(count)}
            </span>
            <span className="drawings-modal__project">
              {projectNumber} / {projectTitle.toUpperCase()}
            </span>
            <button
              type="button"
              className="drawings-modal__close"
              onClick={close}
              aria-label="Close drawing viewer"
              autoFocus
            >
              ✕
            </button>
          </div>

          <div
            className="drawings-modal__frame"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              preload
              quality={90}
              sizes="100vw"
            />
          </div>

          <div className="drawings-modal__foot">
            <button
              type="button"
              className="drawings-modal__arrow"
              onClick={(event) => {
                event.stopPropagation();
                step(-1);
              }}
              aria-label="Previous drawing"
            >
              ←
            </button>
            <p>
              <strong>{active.title}</strong>
              <span>{active.caption}</span>
            </p>
            <button
              type="button"
              className="drawings-modal__arrow"
              onClick={(event) => {
                event.stopPropagation();
                step(1);
              }}
              aria-label="Next drawing"
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
