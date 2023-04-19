/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
  },
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: 'http://localhost:3001/images/:psth*',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/car/2',
        destination: '/car/3',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig;
