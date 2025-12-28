import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio-website',
  assetPrefix: '/portfolio-website',
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
