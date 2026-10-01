import type { ReactNode } from "react";
import {
  areasServed,
  contactDetails,
  credentials,
  education,
  employers,
  person,
  sameAs,
  services,
} from "@/data/identity";

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const siteUrl = configuredSiteUrl.replace(/\/$/, "");
export const siteName = person.name;
export const defaultDescription = person.summary;

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/#person"),
    name: siteName,
    url: absoluteUrl("/"),
    jobTitle: person.jobTitle,
    description: defaultDescription,
    knowsAbout: [...services],
    areaServed: [...areasServed],
    email: contactDetails.email,
    telephone: contactDetails.phone,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Professional enquiries",
        email: contactDetails.email,
        telephone: contactDetails.phone,
        areaServed: "SA",
        availableLanguage: ["English", "Urdu", "Pashto"],
      },
    ],
    worksFor: employers.slice(0, 1).map((employer) => ({
      "@type": "Organization",
      name: employer.name,
    })),
    alumniOf: education.map((entry) => ({
      "@type": "EducationalOrganization",
      name: entry.school,
    })),
    hasCredential: credentials.map((credential) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "professional licence",
      name: credential.name,
      ...(credential.url ? { url: credential.url } : {}),
    })),
    // Only emit sameAs when the URLs are real. An empty array is worse than
    // omitting it, because it tells crawlers the identity was checked and found empty.
    ...(sameAs.length > 0 ? { sameAs: [...sameAs] } : {}),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
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
