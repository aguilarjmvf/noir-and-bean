import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats; the browser picks the smallest it supports.
    formats: ["image/avif", "image/webp"],
    // Cache optimized remote images for a week (Unsplash assets are stable).
    minimumCacheTTL: 60 * 60 * 24 * 7,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
  poweredByHeader: false,
  compress: true,
  // Tree-shake barrel imports so only the icons/motion primitives actually
  // used are bundled, trimming client JS.
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
};

export default nextConfig;
