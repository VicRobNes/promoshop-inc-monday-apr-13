/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        pathname: '/**',
      },
      {
        // Raw assets committed to VicRobNes/mainmemory (Promoshop logo,
        // slideshow photos, storefront image). Used by lib/cms/home.ts and
        // lib/cms/about.ts until the admin dashboard uploads replace them.
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/VicRobNes/mainmemory/**',
      },
      {
        // GitHub user-attachment images (brand logos, team photos uploaded
        // via issue/PR comments or the CMS upload flow).
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/user-attachments/**',
      },
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
