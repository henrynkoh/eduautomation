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
};

export default nextConfig; 