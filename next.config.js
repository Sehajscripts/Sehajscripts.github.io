/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'picsum.photos'],
  },
  // GitHub Pages compatibility
  basePath: process.env.NODE_ENV === 'production' ? '/sakhi-vellore-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sakhi-vellore-website' : '',
  // Ensure static export works properly
  distDir: 'out',
}

module.exports = nextConfig
