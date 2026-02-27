import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for optimized Docker builds
  // This creates a self-contained build that doesn't need node_modules
  output: "standalone",
};

export default nextConfig;
