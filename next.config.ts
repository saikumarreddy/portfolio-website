import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',  // Explicitly set output directory
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
