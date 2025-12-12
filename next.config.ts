import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'sites.socsci.uci.edu',
      },
      {
        protocol: 'https',
        hostname: 'nickbostrom.com',
      },
      {
        protocol: 'https',
        hostname: 'physics.mit.edu',
      },
      {
        protocol: 'https',
        hostname: 'webapp4.asu.edu',
      },
      {
        protocol: 'https',
        hostname: 'consc.net',
      },
      {
        protocol: 'https',
        hostname: 'www.essentiafoundation.org',
      },
      {
        protocol: 'https',
        hostname: 'robertlanza.com',
      },
      {
        protocol: 'https',
        hostname: 'eckharttolle.com',
      },
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
      },
    ],
  },
};

export default nextConfig;
