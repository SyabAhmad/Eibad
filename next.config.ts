import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Every project photograph is served from /public/projects, so no remote
    // patterns are needed. Re-add a remotePatterns entry if external images
    // (renders on a CDN, for example) are introduced later.
    formats: ["image/avif", "image/webp"],
  },
  // Slugs that have been renamed since first deploy. The old URLs are already in
  // Google's index and in the sitemap history, so each one gets a permanent
  // redirect rather than a 404. Keep this list append-only: never repoint an
  // entry, because that breaks whatever links the retired slug had collected.
  async redirects() {
    return [
      {
        source: "/work/riyadh-air-training-centre",
        destination: "/work/riyadh-air-academy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
