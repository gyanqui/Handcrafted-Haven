import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
  /* config options here */
  ignoreDuringBuilds: true,
  },
  images: {
    domains: ["picsum.photos"], // Add the hostname here
  },
};

export default nextConfig;
