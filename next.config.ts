import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // output: "export", // This ensures it's exported as static files
  trailingSlash: true,
};

export default nextConfig;
