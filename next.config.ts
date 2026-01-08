import type { NextConfig } from "next";

// ✅ Aapki repo ka naam yahan hona chahiye
const repoName = "/Resume-Nextjs"; 
const basePath = process.env.NODE_ENV === "production" ? repoName : "";

const nextConfig: NextConfig = {
  output: "export", // GitHub Pages ke liye zaruri hai
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;