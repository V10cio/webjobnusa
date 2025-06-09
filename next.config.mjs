/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // This ensures all paths work correctly with the static export
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : undefined,
  trailingSlash: true,
};

export default nextConfig;