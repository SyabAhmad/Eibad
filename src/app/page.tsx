"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type FormEvent, type PointerEvent } from "react";
import {
  aboutImage,
  contact,
  contactImage,
  education,
  expertise,
  experience,
  featuredProject,
  padNumber,
  professionalFocus,
  projects,
  registrations,
  tools,
  workshops,
} from "@/app/portfolio-data";
import ProjectCardCarousel from "@/app/project-card-carousel";
import ArchiveMarquee from "@/app/archive-marquee";
import FloatingActions from "@/app/floating-actions";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },
];

/** Repeating rhythm for the project spread grid, so any number of projects still alternates. */
const spreadVariants = ["wide", "offset", "narrow", "offset", "wide"] as const;

const disciplines = ["ARCHITECTURE", "CONSTRUCTION", "3D VISUALIZATION"];
const careerPath = [
  {
    stage: "DESIGN",
    detail:
      "Concept development, space planning and design development from the first spatial idea.",
  },
  {
    stage: "DOCUMENTATION",
    detail:
      "Shop drawings, technical packages and BIM models that carry the design into the field.",
  },
  {
    stage: "COORDINATION",
    detail:
      "Resolving the interface between architecture, structure and MEP before anything is built.",
  },
  {
    stage: "CONSTRUCTION",
    detail:
      "Site coordination, quality control and Saudi Building Code compliance on live projects.",
  },
  {
    stage: "PROJECT DELIVERY",
    detail:
      "Client, consultant and subcontractor coordination through to handover.",
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedRole, setExpandedRole] = useState<string | null>(null);
  const [activeExpertise, setActiveExpertise] = useState<string | null>(null);
  const [isWhatsAppOpening, setIsWhatsAppOpening] = useState(false);

  useEffect(() => {
    const updateNavigation = () => setIsScrolled(window.scrollY > 24);

    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });

    return () => window.removeEventListener("scroll", updateNavigation);
  }, []);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

    event.currentTarget.style.setProperty(
      "--pointer-x",
      `${pointerX * 6}px`,
    );
    event.currentTarget.style.setProperty(
      "--pointer-y",
      `${pointerY * 6}px`,
    );
  };

  const handlePointerLeave = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--pointer-x", "0px");
    event.currentTarget.style.setProperty("--pointer-y", "0px");
  };

  const closeMenu = () => setIsMenuOpen(false);
  const toggleRole = (id: string) => {
    setExpandedRole((current) => (current === id ? null : id));
  };
  const toggleExpertise = (id: string) => {
    setActiveExpertise((current) => (current === id ? null : id));
  };
  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const whatsappMessage = [
      "Hello Eibad,",
      "",
      `My name is ${name || "there"}.`,
      "",
      `Email: ${email}`,
      "",
      message,
      "",
      "I found your portfolio website and would like to discuss the project with you.",
      "",
      "Thank you.",
    ].join("\n");
    const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    setIsWhatsAppOpening(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    window.setTimeout(() => setIsWhatsAppOpening(false), 2400);
  };

  return (
    <div className="site-shell">
      <header className={`site-nav ${isScrolled ? "site-nav--scrolled" : ""}`}>
        <div className="site-nav__inner">
          <Link className="brand" href="#top" onClick={closeMenu}>
            <span className="brand__name">EIBAD HASSAN SHAH</span>
            <span className="brand__role">ARCHITECTURAL ENGINEER</span>
          </Link>

          <nav className="site-nav__links" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link className="nav-link" href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            className="nav-cv"
            href="/Eibad_Hassan_Shah_CV.pdf"
            download
          >
            CV <span aria-hidden="true">↗</span>
          </a>

          <button
            className={`menu-toggle ${isMenuOpen ? "menu-toggle--open" : ""}`}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span />
            <span />
          </button>
        </div>

        {isMenuOpen && (
          <nav
            className="mobile-menu"
            id="mobile-navigation"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link href={item.href} key={item.label} onClick={closeMenu}>
                <span>{item.label}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
            <a
              href="/Eibad_Hassan_Shah_CV.pdf"
              download
              onClick={closeMenu}
            >
              <span>Download CV</span>
              <span aria-hidden="true">↗</span>
            </a>
          </nav>
        )}
      </header>

      <main>
        <section
          className="hero"
          id="top"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__side-note" aria-hidden="true">
            SELECTED WORKS / 2025
          </div>

          <div className="hero__layout">
            <div className="hero__copy">
              <p className="eyebrow hero__eyebrow reveal reveal--one">
                ARCHITECTURE / DESIGN / BUILD
              </p>

              <h1 className="hero__title">
                <span className="reveal reveal--two">ARCHITECTURAL</span>
                <span className="hero__title--offset reveal reveal--three">
                  ENGINEER
                </span>
              </h1>

              <p className="hero__intro reveal reveal--four">
                Designing, coordinating, and delivering architectural spaces
                from concept to construction.
              </p>

              <div className="hero__copy-index reveal reveal--five">
                <span>01</span>
                <span>/ 06</span>
              </div>
            </div>

            <Link
              className="featured-project"
              href={`/work/${featuredProject.slug}`}
              aria-label={`View the ${featuredProject.title} project`}
            >
              <div className="featured-project__visual">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.alt}
                  fill
                  preload
                  sizes="(max-width: 900px) calc(100vw - 2.5rem), 42vw"
                />
                <div className="featured-project__overlay" />
                <span className="featured-project__label">FEATURED PROJECT</span>
                <span className="featured-project__number">
                  {featuredProject.number} / {padNumber(projects.length)}
                </span>
                <span className="featured-project__view">
                  VIEW PROJECT <span aria-hidden="true">↗</span>
                </span>
              </div>

              <div className="featured-project__details">
                <div>
                  <p className="eyebrow">{featuredProject.title}</p>
                  <h2>{featuredProject.location}</h2>
                </div>
                <div className="featured-project__tags">
                  {featuredProject.scope.slice(0, 3).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>

          <div className="hero__footer">
            <div className="hero__disciplines">
              {disciplines.map((discipline) => (
                <span key={discipline}>{discipline}</span>
              ))}
            </div>
            <span className="hero__location">BASED IN SAUDI ARABIA</span>
            <Link className="hero__scroll" href="#work">
              SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </section>

        <section className="selected-work" id="work">
          <div className="selected-work__inner">
            <div className="selected-work__masthead">
              <div>
                <p className="eyebrow">01 / SELECTED WORK</p>
                <h2>
                  A selection of
                  <span>projects.</span>
                </h2>
              </div>
              <div className="selected-work__facts">
                <div>
                  <strong>{padNumber(projects.length)}</strong>
                  <span>FEATURED PROJECTS</span>
                </div>
                <div>
                  <strong>{padNumber(expertise.length)}</strong>
                  <span>DISCIPLINES</span>
                </div>
                <p>Architecture, construction, technical documentation, and interior experiences.</p>
              </div>
            </div>

            <div className="project-spreads">
              {projects.map((project, index) => (
                <article
                  className={`project-spread project-spread--${spreadVariants[index % spreadVariants.length]}`}
                  key={project.slug}
                >
                  <div className="project-spread__number">{project.number}</div>

                  <ProjectCardCarousel
                    project={project}
                    sizes="(max-width: 900px) calc(100vw - 2.5rem), 78vw"
                  />

                  <div className="project-spread__info">
                    <div>
                      <p className="eyebrow">{project.category}</p>
                      <h3>{project.title}</h3>
                    </div>
                    <div className="project-spread__meta">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                    <div className="project-spread__role">
                      <span>ROLE</span>
                      <strong>{project.role}</strong>
                    </div>
                    <Link
                      className="text-link"
                      href={`/work/${project.slug}`}
                    >
                      VIEW CASE STUDY <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="selected-work__closing">
              <div>
                <p className="eyebrow">MORE WORK</p>
                <h3>
                  Explore the
                  <span>project archive.</span>
                </h3>
              </div>
              <Link className="archive-link" href="#contact">
                <span>
                  {padNumber(projects.length)} / {padNumber(projects.length)}
                </span>
                VIEW ALL PROJECTS <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-section__inner">
            <div className="about-section__heading">
              <p className="eyebrow">03 / ABOUT</p>
              <h2>
                <span>FROM CONCEPT</span>
                <span>TO CONSTRUCTION.</span>
              </h2>
            </div>

            <div className="about-section__profile">
              <figure className="about-section__portrait">
                <Image
                  src={aboutImage}
                  alt="Eibad Hassan Shah in an architectural environment"
                  fill
                  sizes="(max-width: 900px) calc(100vw - 2.5rem), 46vw"
                />
                <div className="about-section__portrait-overlay" />
                <figcaption>PORTRAIT / PROFESSIONAL IDENTITY</figcaption>
              </figure>

              <div className="about-section__bio">
                <p className="eyebrow">THE PRACTICE</p>
                <p className="about-section__lead">
                  Eibad Hassan Shah is a BIM Architectural Engineer with 7
                  years of experience across Saudi Arabia and Pakistan.
                </p>
                <p>
                  His work spans architectural design, BIM coordination,
                  technical documentation, construction documentation, and 3D
                  visualization—from early concepts and shop drawings through
                  site coordination and project handover.
                </p>
                <p>
                  He approaches every project with an emphasis on functionality,
                  precision, and practical delivery, connecting technical
                  development with visual thinking.
                </p>
                <div className="about-section__signature">
                  <span>EIBAD HASSAN SHAH</span>
                  <span>BIM ARCHITECTURAL ENGINEER</span>
                </div>
              </div>
            </div>

            <div className="about-section__principles">
              <div className="about-section__principles-heading">
                <p className="eyebrow">HOW HE THINKS</p>
                <p>Three principles guide the work from first line to final handover.</p>
              </div>
              <div className="about-section__principles-list">
                <article>
                  <span>01</span>
                  <h3>FUNCTION</h3>
                  <p>Spaces should serve the people who use them.</p>
                </article>
                <article>
                  <span>02</span>
                  <h3>DETAIL</h3>
                  <p>Good architecture is built through precision.</p>
                </article>
                <article>
                  <span>03</span>
                  <h3>EXECUTION</h3>
                  <p>A successful concept must work beyond the drawing board.</p>
                </article>
              </div>
            </div>

            <div className="about-section__stats">
              <div>
                <strong>07+</strong>
                <span>YEARS EXPERIENCE</span>
              </div>
              <div>
                <strong>KSA + PK</strong>
                <span>CROSS-BORDER EXPERIENCE</span>
              </div>
              <div>
                <strong>SCE + PCATP</strong>
                <span>REGISTRATION / CERTIFICATION</span>
              </div>
            </div>

            <div className="about-section__reality">
              <div className="about-section__reality-heading">
                <p className="eyebrow">FROM DRAWING TO REALITY</p>
                <h3>
                  Technical intent
                  <span>becomes built space.</span>
                </h3>
              </div>

              <div
                className="about-section__reality-visual"
                aria-label="Technical drawing transitioning into built space"
              >
                <div className="about-section__blueprint">
                  <span>TECHNICAL DRAWING</span>
                  <div className="about-section__blueprint-sheet">
                    <Image
                      src="/about/counter-drawing-40492.jpg"
                      alt="Issued counter detail layout drawing for the Riyadh Air Training Centre, showing counter sizes, setting out dimensions and sections"
                      fill
                      sizes="(max-width: 900px) 100vw, 34vw"
                    />
                  </div>
                  <strong>DRAWING / SWD-40492</strong>
                </div>
                <div className="about-section__reality-arrow" aria-hidden="true">
                  →
                </div>
                <div className="about-section__built">
                  <span>BUILT SPACE</span>
                  <div className="about-section__built-photo">
                    <Image
                      src="/projects/riyadh-air-training-centre/16-counter-fitout.jpg"
                      alt="Terrazzo counters being fitted out in the Riyadh Air Training Centre reception hall, with exposed ductwork and MEP services overhead"
                      fill
                      sizes="(max-width: 900px) 100vw, 34vw"
                    />
                  </div>
                  <strong>COUNTERS / FIT OUT</strong>
                </div>
              </div>

              <p className="about-section__reality-caption">
                The measure of the work is not only how it is imagined, but how
                clearly it can be coordinated, built, and handed over.
              </p>
            </div>

            <div className="about-section__positioning">
              <div>
                <p className="eyebrow">PROFESSIONAL POSITIONING</p>
                <h3>
                  DESIGN
                  <span>COORDINATION</span>
                  CONSTRUCTION
                  <span>VISUALIZATION</span>
                </h3>
              </div>
              <div className="about-section__positioning-copy">
                <p>
                  An architectural engineer working across the complete project
                  lifecycle.
                </p>
                <Link className="text-link" href="#experience">
                  EXPLORE EXPERIENCE <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="experience-section__inner">
            <div className="experience-section__intro">
              <p className="eyebrow">04 / EXPERIENCE</p>
              <h2>
                A career built
                <span>through projects.</span>
              </h2>
              <p>
                Professional experience across architecture, construction,
                project coordination, and visualization.
              </p>
            </div>

            <div className="experience-timeline">
              {experience.map((role) => {
                const isExpanded = expandedRole === role.id;

                return (
                  <article
                    className={`experience-entry ${
                      isExpanded ? "experience-entry--expanded" : ""
                      }`}
                    key={role.id}
                  >
                    <div className="experience-entry__year" aria-hidden="true">
                      <span>{role.startYear}</span>
                      <i />
                    </div>

                    <div className="experience-entry__content">
                      <button
                        className="experience-entry__trigger"
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={`role-${role.id}`}
                        onClick={() => toggleRole(role.id)}
                      >
                        <div className="experience-entry__summary">
                          <p className="eyebrow">{role.period}</p>
                          <h3>{role.title}</h3>
                          <p className="experience-entry__company">
                            {role.company}
                          </p>
                          <p className="experience-entry__location">
                            {role.location}
                          </p>
                        </div>
                        <span className="experience-entry__action">
                          <span>{isExpanded ? "CLOSE ROLE" : "VIEW ROLE"}</span>
                          <b aria-hidden="true">{isExpanded ? "−" : "+"}</b>
                        </span>
                      </button>

                      {isExpanded && (
                        <div
                          className="experience-entry__details"
                          id={`role-${role.id}`}
                        >
                          <div>
                            <span>RESPONSIBILITIES</span>
                            <ul>
                              {role.responsibilities.map((responsibility) => (
                                <li key={responsibility}>{responsibility}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <span>PROJECTS</span>
                            <ul>
                              {role.projects.map((project) => (
                                <li key={project}>{project}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="career-path">
              <div className="career-path__heading">
                <p className="eyebrow">CAREER PATH</p>
                <h3>
                  From drawing boards
                  <span>to construction sites.</span>
                </h3>
              </div>
              <ol className="career-path__steps">
                {careerPath.map((step, index) => (
                  <li className="career-path__step" key={step.stage}>
                    <span className="career-path__num">
                      0{index + 1}
                    </span>
                    <strong className="career-path__stage">
                      {step.stage}
                    </strong>
                    <p className="career-path__detail">{step.detail}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="experience-cta">
              <p>Want the complete professional profile?</p>
              <a
                className="text-link"
                href="/Eibad_Hassan_Shah_CV.pdf"
                download
              >
                DOWNLOAD CV <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="expertise-section" id="expertise">
          <div className="expertise-section__blueprint" aria-hidden="true" />
          <div className="expertise-section__inner">
            <div className="expertise-section__intro">
              <p className="eyebrow">05 / EXPERTISE</p>
              <h2>
                <span>DESIGNING.</span>
                <span>DEVELOPING.</span>
                <span>DELIVERING.</span>
              </h2>
              <p>
                From architectural concepts and technical drawings to
                visualization and project execution.
              </p>
            </div>

            <div className="expertise-capabilities">
              {expertise.map((item) => {
                const isActive = activeExpertise === item.id;

                return (
                  <article
                    className={`expertise-card ${
                      isActive ? "expertise-card--active" : ""
                      }`}
                    key={item.id}
                    onMouseEnter={() => setActiveExpertise(item.id)}
                    onMouseLeave={() => setActiveExpertise(null)}
                  >
                    <div className="expertise-card__visual" aria-hidden="true">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="(max-width: 900px) 100vw, 78vw"
                      />
                      <div className="expertise-card__visual-overlay" />
                    </div>

                    <button
                      className="expertise-card__trigger"
                      type="button"
                      aria-pressed={isActive}
                      aria-label={`${isActive ? "Hide" : "Show"} ${item.title.toLowerCase()} visual`}
                      onClick={() => toggleExpertise(item.id)}
                      onFocus={() => setActiveExpertise(item.id)}
                      onBlur={() => setActiveExpertise(null)}
                    >
                      <span className="expertise-card__number">
                        {item.number}
                      </span>
                      <span className="expertise-card__copy">
                        <strong>{item.title}</strong>
                        <span className="expertise-card__services">
                          {item.services.map((service) => (
                            <span key={service}>{service}</span>
                          ))}
                        </span>
                      </span>
                      <span className="expertise-card__action">
                        {isActive ? "HIDE" : "VIEW"}
                        <b aria-hidden="true">↗</b>
                      </span>
                    </button>
                  </article>
                );
              })}
            </div>

            <div className="expertise-tools">
              <div className="expertise-tools__heading">
                <p className="eyebrow">TOOLS &amp; TECHNOLOGIES</p>
                <p>
                  The tools support the process; the intent stays consistent.
                </p>
              </div>
              <div className="expertise-tools__list">
                {tools.map((tool, index) => (
                  <div className="expertise-tool" key={tool}>
                    <span>0{index + 1}</span>
                    <strong>{tool}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="expertise-statement">
              <p className="eyebrow">CAPABILITY STATEMENT</p>
              <h2>
                Architecture is more than designing a space —{" "}
                <span>it&apos;s understanding how that space will be built.</span>
              </h2>
              <div className="expertise-equation" aria-label="Design plus visualization plus construction equals project delivery">
                <span>DESIGN</span>
                <b>+</b>
                <span>VISUALIZATION</span>
                <b>+</b>
                <span>CONSTRUCTION</span>
                <b>=</b>
                <strong>PROJECT DELIVERY</strong>
              </div>
            </div>

            <div className="expertise-cta">
              <p>HAVE A PROJECT IN MIND?</p>
              <Link className="text-link" href="#credentials">
                LET&apos;S TALK <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="credentials-section" id="credentials">
          <div className="credentials-section__document" aria-hidden="true">
            <span>PROFESSIONAL RECORD</span>
            <span>NAME / EIBAD HASSAN SHAH</span>
            <span>FIELD / ARCHITECTURE</span>
            <span>EDUCATION / B.ARCH</span>
            <span>REGISTRY / PCATP · SCE</span>
          </div>

          <div className="credentials-section__inner">
            <div className="credentials-section__intro">
              <p className="eyebrow">06 / CREDENTIALS</p>
              <h2>
                <span>EDUCATION.</span>
                <span>REGISTRATION.</span>
                <span>PROFESSIONAL FOUNDATION.</span>
              </h2>
              <p>
                Academic and professional credentials supporting his practice
                across architecture and construction.
              </p>
            </div>

            <div className="credentials-education">
              <div className="credentials-education__year">
                <span>01</span>
                <strong>{education.period}</strong>
              </div>
              <div className="credentials-education__copy">
                <p className="eyebrow">EDUCATION</p>
                <h3>{education.degree}</h3>
                <p className="credentials-education__school">{education.school}</p>
                <p className="credentials-education__location">{education.location}</p>
                <span className="credentials-education__detail">{education.detail}</span>
              </div>
            </div>

            <div className="credentials-registration">
              <div className="credentials-registration__heading">
                <p className="eyebrow">PROFESSIONAL REGISTRATION</p>
                <p>
                  Professional frameworks supporting practice across Pakistan
                  and Saudi Arabia.
                </p>
              </div>
              <div className="credentials-registration__grid">
                {registrations.map((registration) => (
                  <div className="registration-card" key={registration.code}>
                    <span className="registration-card__code">{registration.code}</span>
                    <h3>{registration.title}</h3>
                    <p>{registration.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="credentials-workshops">
              <div className="credentials-workshops__heading">
                <p className="eyebrow">PROFESSIONAL DEVELOPMENT</p>
                <p>Selected workshops attended.</p>
              </div>
              <div className="credentials-workshops__list">
                {workshops.map((workshop) => (
                  <div className="workshop-row" key={workshop.title}>
                    <span>{workshop.year}</span>
                    <strong>{workshop.title}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="credentials-focus">
              <p className="eyebrow">PROFESSIONAL FOCUS</p>
              <div className="credentials-focus__list">
                {professionalFocus.map((focus) => (
                  <span key={focus}>{focus}</span>
                ))}
              </div>
            </div>

            <div className="credentials-download">
              <div>
                <p className="eyebrow">COMPLETE PROFESSIONAL PROFILE</p>
                <p>
                  Download the complete CV for qualifications, experience, and
                  project history.
                </p>
              </div>
              <a
                className="text-link"
                href="/Eibad_Hassan_Shah_CV.pdf"
                download
              >
                DOWNLOAD CV <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="credentials-closing">
              <p className="eyebrow">READY TO BUILD</p>
              <h2>
                SOMETHING
                <span>MEANINGFUL?</span>
              </h2>
              <Link className="text-link" href="#contact">
                LET&apos;S TALK <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>

        <ArchiveMarquee />

        <section className="contact-section" id="contact">
          <div className="contact-section__backdrop" aria-hidden="true">
            <Image
              src={contactImage}
              alt=""
              fill
              unoptimized
              sizes="100vw"
            />
            <div className="contact-section__backdrop-overlay" />
          </div>

          <div className="contact-section__inner">
            <div className="contact-section__opening">
              <p className="eyebrow">07 / CONTACT</p>
              <h2>
                HAVE A PROJECT
                <span>IN MIND?</span>
              </h2>
              <h3>
                LET&apos;S
                <span>TALK.</span>
              </h3>
            </div>

            <div className="contact-section__content">
              <p className="contact-section__prompt">
                Have an architectural project, collaboration, or opportunity in
                mind? <strong>Let&apos;s discuss it.</strong>
              </p>

              <div className="contact-details">
                <p className="eyebrow">GET IN TOUCH</p>
                <div>
                  <span>DIRECT</span>
                  <p>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </p>
                </div>
                <div>
                  <span>PHONE</span>
                  <p>
                    <a href={`tel:+${contact.whatsappNumber}`}>
                      {contact.phoneDisplay}
                    </a>
                  </p>
                </div>
                <div>
                  <span>WHATSAPP</span>
                  <p>Direct conversation</p>
                </div>
                <div>
                  <span>LOCATION</span>
                  <p>{contact.location}</p>
                </div>
              </div>

              <form className="contact-form" onSubmit={handleContactSubmit}>
                <label>
                  <span>YOUR NAME</span>
                  <input name="name" type="text" autoComplete="name" required />
                </label>
                <label>
                  <span>YOUR EMAIL</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </label>
                <label>
                  <span>TELL ME ABOUT YOUR PROJECT</span>
                  <textarea name="message" rows={4} required />
                </label>
                <button type="submit" aria-busy={isWhatsAppOpening}>
                  {isWhatsAppOpening
                    ? "OPENING WHATSAPP…"
                    : "START A CONVERSATION"}
                  <span aria-hidden="true">↗</span>
                </button>
                {isWhatsAppOpening && (
                  <p className="contact-form__status" aria-live="polite">
                    Your message is ready in WhatsApp.
                  </p>
                )}
              </form>
            </div>
          </div>

          <footer className="contact-footer">
            <div>
              <span>EIBAD HASSAN SHAH</span>
              <span>ARCHITECTURAL ENGINEER</span>
            </div>
            <div className="contact-footer__centre">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <span>© 2026 EIBAD HASSAN SHAH</span>
            </div>
            <div>
              <span>RIYADH / SAUDI ARABIA</span>
              <Link href="/insights">INSIGHTS ↗</Link>
              <Link href="#top">BACK TO TOP ↑</Link>
            </div>
          </footer>
        </section>
      </main>

      <FloatingActions />
    </div>
  );
}
