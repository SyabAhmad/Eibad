import type { ReactNode } from "react";

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const siteUrl = configuredSiteUrl.replace(/\/$/, "");
export const siteName = "Eibad Hassan Shah";
export const defaultDescription =
  "Architectural engineering, construction coordination, technical documentation, and 3D visualization by Eibad Hassan Shah.";

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteName,
    url: absoluteUrl("/"),
    jobTitle: "Architectural Engineer",
    description: defaultDescription,
    knowsAbout: [
      "Architectural design",
      "Architectural engineering",
      "Construction coordination",
      "Architectural documentation",
      "3D architectural visualization",
      "Revit architectural design",
    ],
    areaServed: ["Saudi Arabia", "Pakistan"],
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }): ReactNode {
  const serialized = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialized }}
    />
  );
}
