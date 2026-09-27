/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/oklch-color-picker',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig