import type { MetadataRoute } from "next";
import { insightArticles } from "@/app/insights-data";
import { absoluteUrl } from "@/app/seo";
import { projects } from "@/app/portfolio-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = "2026-09-24";

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/insights"),
      lastModified,
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
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
