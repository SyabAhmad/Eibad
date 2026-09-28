import type { MetadataRoute } from "next";
import { insightArticles } from "@/app/insights-data";
import { absoluteUrl } from "@/app/seo";
import { projects } from "@/app/portfolio-data";

/**
 * Google uses lastModified to decide how often to recrawl, so it has to be real.
 * Bump SITE_UPDATED whenever project data or a case study page changes.
 */
const SITE_UPDATED = "2026-09-28";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/insights"),
      lastModified: insightArticles.reduce(
        (latest, article) => (article.updatedAt > latest ? article.updatedAt : latest),
        insightArticles[0]?.updatedAt ?? SITE_UPDATED,
      ),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...insightArticles.map((article) => ({
      url: absoluteUrl(`/insights/${article.slug}`),
      lastModified: article.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...projects.map((project) => ({
      url: absoluteUrl(`/work/${project.slug}`),
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
