/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.api-sports.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media-2.api-sports.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.f1fantasytracker.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
