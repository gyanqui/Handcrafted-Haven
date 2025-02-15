import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
  /* config options here */
  ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/300/300',
      }
    ]
  },
};

export default nextConfig;
