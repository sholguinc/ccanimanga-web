/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['drive.google.com'],
    loader: 'akamai',
    path: '/',
  },

  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
