/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable docker support
  output: 'standalone',
  // Custom config for n8n and MCP integration
  experimental: {
    serverComponentsExternalPackages: ['n8n-workflow'],
  },
  // Configure allowed image sources
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig; 