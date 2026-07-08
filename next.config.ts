import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Allow Prisma to work on Vercel serverless
  serverExternalPackages: ["@prisma/client"],
};

export default nextConfig;
