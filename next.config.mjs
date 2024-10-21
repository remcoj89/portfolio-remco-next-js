/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "via.placeholder.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
