import type { Metadata } from "next";
import Link from "next/link";
import { insightArticles } from "@/app/insights-data";
import { InsightsHeader } from "@/app/insights/insights-header";
import { absoluteUrl, JsonLd, siteName } from "@/app/seo";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical notes on architectural design, construction coordination, documentation, and 3D visualization by Eibad Hassan Shah.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    type: "website",
    url: "/insights",
    title: "Insights | Eibad Hassan Shah",
    description:
      "Practical notes on architecture, construction coordination, documentation, and visualization.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights | Eibad Hassan Shah",
    description:
      "Practical notes on architecture, construction coordination, documentation, and visualization.",
  },
};

export default function InsightsPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Insights | Eibad Hassan Shah",
    description:
      "Practical notes on architectural design, construction coordination, documentation, and 3D visualization.",
    url: absoluteUrl("/insights"),
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: absoluteUrl("/"),
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: insightArticles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/insights/${article.slug}`),
        name: article.title,
      })),
    },
  };

  return (
    <>
      <JsonLd data={collectionSchema} />
      <main className="insights-page">
        <InsightsHeader />
        <section className="insights-hero">
          <p className="eyebrow">FIELD NOTES / ARCHITECTURE + DELIVERY</p>
          <h1>
            INSIGHTS
            <span>FOR THE BUILT WORLD.</span>
          </h1>
          <p>
            Clear, practical thinking on design, documentation, coordination,
            and the work of turning an idea into a building.
          </p>
        </section>

        <section className="insights-list" aria-labelledby="insights-list-title">
          <div className="insights-list__heading">
            <p className="eyebrow">08 / ARTICLES</p>
            <h2 id="insights-list-title">Useful context for better decisions.</h2>
          </div>
          <div className="insights-grid">
            {insightArticles.map((article, index) => (
              <article className="insight-card" key={article.slug}>
                <div className="insight-card__meta">
                  <span>0{index + 1}</span>
                  <span>{article.category}</span>
                  <span>{article.readingTime}</span>
                </div>
                <h3>
                  <Link href={`/insights/${article.slug}`}>{article.title}</Link>
                </h3>
                <p>{article.description}</p>
                <Link className="insight-card__link" href={`/insights/${article.slug}`}>
                  READ ARTICLE <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <footer className="insights-footer">
          <span>EIBAD HASSAN SHAH / INSIGHTS</span>
          <Link href="/#contact">START A CONVERSATION ↗</Link>
        </footer>
      </main>
    </>
  );
}
