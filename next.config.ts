import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // OMDb images
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      // TMDB images
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
  },

  // Fix Turbopack root detection issue (optional but recommended)
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
