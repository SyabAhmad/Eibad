import Image from "next/image";
import {
  archiveHeading,
  archiveProjects,
  type ArchiveProject,
} from "@/data/archive-pakistan";

/**
 * Infinite horizontal loop. Pure CSS on purpose: the track holds two identical
 * halves and translates by exactly -50%, so the seam is invisible and there is
 * no JS timer to keep in sync. Duplicating the DOM costs nothing on the wire
 * because the browser caches by URL, so eight cards stay eight image requests.
 *
 * The second half is aria-hidden so assistive tech reads eight cards, not
 * sixteen. Pause-on-hover and prefers-reduced-motion are handled in CSS.
 */
function ArchiveCard({ project }: { project: ArchiveProject }) {
  return (
    <article className="archive-card">
      <div className="archive-card__media">
        <Image
          src={project.src}
          alt={`Concept render of ${project.title}, a ${project.category.toLowerCase()} in ${project.location}`}
          fill
          sizes="(max-width: 700px) 74vw, 360px"
        />
        <span className="archive-card__badge">CONCEPT RENDER</span>
      </div>
      <div className="archive-card__body">
        <h3>{project.title}</h3>
        <p>{project.category}</p>
        <span>
          {project.location} / {project.year}
        </span>
      </div>
    </article>
  );
}

export default function ArchiveMarquee() {
  return (
    <section className="archive" aria-labelledby="archive-title">
      <div className="archive__head">
        <p className="eyebrow">{archiveHeading.eyebrow}</p>
        <h2 id="archive-title">{archiveHeading.title}</h2>
        <p className="archive__lead">{archiveHeading.lead}</p>
      </div>

      <div className="archive__marquee">
        <ul className="archive__track">
          {archiveProjects.map((project) => (
            <li className="archive__item" key={project.slug}>
              <ArchiveCard project={project} />
            </li>
          ))}
          {archiveProjects.map((project) => (
            <li
              className="archive__item"
              key={`${project.slug}-loop`}
              aria-hidden="true"
            >
              <ArchiveCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
