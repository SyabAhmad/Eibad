import Image from "next/image";
import Link from "next/link";

export function InsightsHeader({ compact = false }: { compact?: boolean }) {
  return (
    <header className={`insights-header ${compact ? "insights-header--compact" : ""}`}>
      <Link className="insights-header__brand" href="/">
        <Image
          src="/eibad-avatar.jpg"
          alt="Eibad Hassan Shah"
          width={44}
          height={44}
        />
        <span>
          <strong>EIBAD HASSAN SHAH</strong>
          <small>ARCHITECTURAL ENGINEER</small>
        </span>
      </Link>
      <nav className="insights-header__nav" aria-label="Insights navigation">
        <Link href="/#work">Portfolio</Link>
        <Link href="/insights">All insights</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
    </header>
  );
}
