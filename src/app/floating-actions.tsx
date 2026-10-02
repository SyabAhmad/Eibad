"use client";

import { useCallback, useEffect, useState } from "react";
import { contact } from "@/app/portfolio-data";

/** Above this the page has enough behind it for a jump back to be worth offering. */
const SCROLL_THRESHOLD_PX = 640;

/**
 * The floating CTA appears somewhere in this window rather than at a fixed
 * moment, so it does not become a predictable part of the page rhythm or get
 * dismissed on sight. Set once per page load, never re-randomised, because a
 * button that re-rolls its own timer would reappear after being closed.
 */
const CTA_MIN_DELAY_MS = 14_000;
const CTA_MAX_DELAY_MS = 32_000;

/**
 * The contact section occupies the bottom-right of the viewport, which is where
 * these controls live, and its submit button opens WhatsApp with a prefilled
 * message already. So the floating stack stands down once the reader reaches
 * that section rather than sitting on top of the form or duplicating its action.
 *
 * Driven off the same scroll listener as the back-to-top threshold rather than
 * an IntersectionObserver: the section is the last one on the page, so a plain
 * offset comparison is both simpler and deterministic, where an observer would
 * depend on a callback that may not have been delivered when state is read.
 */
const CONTACT_SECTION_SELECTOR = ".contact-section";

const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  [
    "Hello Eibad,",
    "",
    "I found your portfolio website and would like to discuss a project with you.",
    "",
    "Thank you.",
  ].join("\n"),
)}`;

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.42 5.82c0 4.54-3.7 8.24-8.25 8.24a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24Zm-3.2 4.29c-.15 0-.39.06-.6.28-.2.22-.78.76-.78 1.86 0 1.1.8 2.16.91 2.31.11.15 1.56 2.48 3.86 3.38 1.91.75 2.3.6 2.72.56.42-.04 1.34-.55 1.53-1.08.19-.53.19-.98.13-1.08-.06-.09-.2-.15-.42-.26-.22-.11-1.34-.66-1.55-.74-.2-.07-.36-.11-.51.12-.15.22-.58.73-.71.88-.13.15-.26.17-.48.06-.22-.11-.94-.35-1.79-1.11-.66-.59-1.11-1.32-1.24-1.54-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.4.11-.13.15-.22.22-.37.08-.15.04-.28-.02-.4-.06-.11-.5-1.23-.7-1.68-.18-.44-.37-.38-.5-.39h-.43Z"
      />
    </svg>
  );
}

function ArrowGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
        d="M12 19V5m0 0-6 6m6-6 6 6"
      />
    </svg>
  );
}

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [pastContact, setPastContact] = useState(false);

  // Scroll listener is passive and only flips state when a threshold is
  // crossed, so scrolling does not re-render on every frame. All geometry is
  // read inside the handler rather than during render, because the server has no
  // window and reading it mid-render would break hydration on a deep link.
  useEffect(() => {
    const contactSection = document.querySelector<HTMLElement>(
      CONTACT_SECTION_SELECTOR,
    );

    const onScroll = () => {
      // Measured live rather than cached in an offsetTop read at mount, because
      // a deep link to #contact scrolls while the page is still short and the
      // browser clamps scrollY; the page then grows as images decode and a
      // stored offset goes stale. Reading the rect on each evaluation cannot drift.
      //
      // The threshold is half the viewport, not 0: the anchor lands the section
      // top just below the viewport edge, and the section is a full 100svh tall,
      // so by the time its top passes the halfway mark the form and its submit
      // button are squarely in view and the floating stack would sit on top.
      const reachedContact = contactSection
        ? contactSection.getBoundingClientRect().top <= window.innerHeight * 0.5
        : false;
      setPastContact(reachedContact);
      setShowTop(window.scrollY > SCROLL_THRESHOLD_PX && !reachedContact);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Images decoding, webfonts and the carousels all change page height after
    // mount without firing a scroll event, so re-evaluate whenever the document
    // grows. This is what keeps a refresh at #contact correct.
    let lastHeight = document.body.scrollHeight;
    const onResize = () => {
      const height = document.body.scrollHeight;
      if (height === lastHeight) return;
      lastHeight = height;
      onScroll();
    };

    window.addEventListener("resize", onResize);
    const observer = new ResizeObserver(onResize);
    observer.observe(document.body);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const delay =
      CTA_MIN_DELAY_MS +
      Math.floor(Math.random() * (CTA_MAX_DELAY_MS - CTA_MIN_DELAY_MS));
    const id = window.setTimeout(() => setShowContact(true), delay);
    return () => window.clearTimeout(id);
  }, []);

  const scrollToTop = useCallback(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }, []);

  // The contact section owns this corner of the screen once it is reached.
  const topVisible = showTop;
  const contactVisible = showContact && !pastContact;

  return (
    <div className="floating-actions">
      {/* aria-hidden and tabIndex are omitted entirely once visible rather than
          set to false/undefined, so a revealed control leaves no stale
          attributes for assistive tech to read. */}
      <a
        className={`floating-actions__btn floating-actions__btn--contact${contactVisible ? " is-visible" : ""}`}
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-hidden={contactVisible ? undefined : true}
        tabIndex={contactVisible ? undefined : -1}
      >
        <WhatsAppGlyph />
        <span>WHATSAPP</span>
      </a>

      <button
        type="button"
        className={`floating-actions__btn floating-actions__btn--top${topVisible ? " is-visible" : ""}`}
        onClick={scrollToTop}
        aria-hidden={topVisible ? undefined : true}
        tabIndex={topVisible ? undefined : -1}
        aria-label="Back to top"
      >
        <ArrowGlyph />
      </button>
    </div>
  );
}
