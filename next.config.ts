import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '45.145.229.20',
        port: '2656',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/wp/:path*',
        destination: 'http://45.145.229.20:2656/:path*'
      }
    ]
  }
};

export default nextConfig;
