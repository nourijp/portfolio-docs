import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'cdn.sanity.io',

    ],
    unoptimized: true,
  },
};

export default nextConfig;
