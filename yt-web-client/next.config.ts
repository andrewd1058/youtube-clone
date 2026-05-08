import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/andrewd1058-yt-processed-videos/**',
      }
    ]
  }
};

export default nextConfig;
