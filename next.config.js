/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
      {
        protocol: 'https',
        hostname: 'media.formula1.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
