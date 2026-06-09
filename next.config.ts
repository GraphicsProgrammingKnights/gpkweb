import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for optimized Docker builds
  // This creates a self-contained build that avoids needing the full app node_modules at runtime
  // (Next.js bundles a minimal node_modules inside the standalone output)
  output: "standalone",
  // Because we're using Next.js, this is needed to prevent untranspiled addons in the three.js ecosystem
  // A transpiled package is converted from specialized syntax (Ex. TypeScript) into standard javascript
  // This makes it compatible with most/older browser environments and skips extra build steps
  transpilePackages: ["three"],
};

export default nextConfig;
