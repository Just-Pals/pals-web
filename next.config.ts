/** @type {import('next').NextConfig} */
const nextConfig = {
  // Avoid build failures due to ESLint on Netlify
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Required for Next.js Image to work correctly on Netlify
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "api.pals.money", pathname: "/api/media/**" },
      { protocol: "https", hostname: "storage.googleapis.com", pathname: "/**" },
    ],
  },

  // Netlify handles routing via @netlify/plugin-nextjs
  // Do NOT add basePath or assetPrefix
};

module.exports = nextConfig;
