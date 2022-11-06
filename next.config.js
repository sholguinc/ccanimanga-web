/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['drive.google.com'],
    loader: 'akamai',
    path: '/',
  },

  reactStrictMode: true,
  swcMinify: true,

  exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/talleres': { page: '/talleres' },
      '/talleres/manga': { page: '/talleres/manga' },
      '/talleres/origami': { page: '/talleres/origami' },
      '/talleres/papercraft': { page: '/talleres/papercraft' },
      '/talleres/shogi': { page: '/talleres/shogi' },
    }
  },
}

module.exports = nextConfig
