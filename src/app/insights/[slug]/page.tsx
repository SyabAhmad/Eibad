import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getInsightArticle,
  getRelatedArticles,
  insightArticles,
} from "@/app/insights-data";
import { InsightsHeader } from "@/app/insights/insights-header";
import { projects } from "@/app/portfolio-data";
import {
  absoluteUrl,
  breadcrumbSchema,
  JsonLd,
  siteName,
} from "@/app/seo";

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: {
      canonical: `/insights/${article.slug}`,
    },
    openGraph: {
      type: "article",
      url: `/insights/${article.slug}`,
      title: article.title,
      description: article.description,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [siteName],
      tags: article.keywords,
      // No images set on purpose. Setting them here would override the
      // per-article opengraph-image.tsx file convention, which generates a
      // 1200x630 card with the article's own title instead of a shared portrait.
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      // Left unset so Twitter/X falls back to the generated opengraph-image.
    },
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsightArticle(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article);
  const articleUrl = absoluteUrl(`/insights/${article.slug}`);
  const project = article.projectSlug
    ? projects.find((item) => item.slug === article.projectSlug)
    : undefined;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: articleUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Person",
      "@id": absoluteUrl("/#person"),
      name: siteName,
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Person",
      "@id": absoluteUrl("/#person"),
      name: siteName,
      url: absoluteUrl("/"),
    },
    image: absoluteUrl("/eibad-avatar.jpg"),
    keywords: article.keywords.join(", "),
    isPartOf: {
      "@type": "Blog",
      name: "Insights",
      url: absoluteUrl("/insights"),
    },
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Portfolio", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: article.category, path: "/insights" },
  ]);

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbs} />
      <InsightsHeader compact />
      <main className="article-page">
        <nav className="article-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">PORTFOLIO</Link>
          <span aria-hidden="true">/</span>
          <Link href="/insights">INSIGHTS</Link>
          <span aria-hidden="true">/</span>
          <span>{article.category}</span>
        </nav>

        <article>
          <header className="article-hero">
            <p className="eyebrow">
              {article.category} / {article.readingTime}
            </p>
            <h1>{article.title}</h1>
            <p className="article-hero__intro">{article.intro}</p>
            <div className="article-hero__meta">
              <time dateTime={article.publishedAt}>
                PUBLISHED {article.publishedAt}
              </time>
              <time dateTime={article.updatedAt}>
                UPDATED {article.updatedAt}
              </time>
              <span>BY EIBAD HASSAN SHAH</span>
            </div>
            {article.sourceNote && (
              <p className="article-hero__source">{article.sourceNote}</p>
            )}
            {project && (
              <Link className="article-hero__project" href={`/work/${project.slug}`}>
                <span>PROJECT {project.number}</span>
                <strong>{project.title}</strong>
                <span aria-hidden="true">↗</span>
              </Link>
            )}
          </header>

          <div className="article-layout">
            <div className="article-body">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <aside className="article-aside">
              <div className="article-aside__author">
                <Image
                  src="/eibad-avatar.jpg"
                  alt="Eibad Hassan Shah"
                  width={56}
                  height={56}
                />
                <div>
                  <strong>EIBAD HASSAN SHAH</strong>
                  <span>ARCHITECTURAL ENGINEER</span>
                </div>
              </div>
              <p>
                Notes on architecture, construction coordination, technical
                documentation, and the work behind a completed project.
              </p>
              <Link className="article-aside__link" href="/#contact">
                DISCUSS A PROJECT <span aria-hidden="true">↗</span>
              </Link>
            </aside>
          </div>
        </article>

        <section className="article-related" aria-labelledby="related-title">
          <div className="article-related__heading">
            <p className="eyebrow">KEEP READING</p>
            <h2 id="related-title">Related insights.</h2>
          </div>
          <div className="article-related__grid">
            {relatedArticles.map((relatedArticle) => (
              <Link
                className="related-card"
                href={`/insights/${relatedArticle.slug}`}
                key={relatedArticle.slug}
              >
                <span>{relatedArticle.category}</span>
                <h3>{relatedArticle.title}</h3>
                <span className="related-card__link">
                  READ NEXT <b aria-hidden="true">↗</b>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <nav className="article-footer-nav" aria-label="Article navigation">
          <Link href="/insights">← ALL INSIGHTS</Link>
          <Link href="/#contact">START A CONVERSATION ↗</Link>
        </nav>
      </main>
    </>
  );
}
