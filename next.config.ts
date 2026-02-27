import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for optimized Docker builds
  // This creates a self-contained build that avoids needing the full app node_modules at runtime
  // (Next.js bundles a minimal node_modules inside the standalone output)
  output: "standalone",
};

export default nextConfig;
