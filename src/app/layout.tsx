import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { defaultDescription, JsonLd, personSchema, siteName, siteUrl } from "@/app/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Architectural Engineer`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: `${siteName} Portfolio`,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  keywords: [
    "Architectural Engineer Saudi Arabia",
    "Architectural Engineer Riyadh",
    "architectural design Saudi Arabia",
    "construction coordination",
    "3D architectural visualization",
    "architectural rendering",
    "Revit architectural design",
    "architectural documentation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: `${siteName} — Architectural Engineer`,
    title: `${siteName} — Architectural Engineer`,
    description: defaultDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteName}, Architectural Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Architectural Engineer`,
    description: defaultDescription,
    images: ["/eibad-profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <JsonLd data={personSchema()} />
        {children}
      </body>
    </html>
  );
}
