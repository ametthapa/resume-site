/** @type {import('next').NextConfig} */

const isProd = true;
const repoName = 'resume-site';

const nextConfig = {
  output: !isProd ? 'export' : undefined,
  trailingSlash: true,
  basePath: !isProd ? `/${repoName}` : '',
  assetPrefix: !isProd ? `/${repoName}` : '',
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
