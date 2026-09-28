import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Every project photograph is served from /public/projects, so no remote
    // patterns are needed. Re-add a remotePatterns entry if external images
    // (renders on a CDN, for example) are introduced later.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
