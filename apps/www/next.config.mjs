import { createContentlayerPlugin } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "out", // Changed from "public" to "out"
  swcMinify: true,
  images: {
    unoptimized: true, // Add this line for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Remove the redirects function for static export
}

const withContentlayer = (config) => {
  try {
    const { withContentlayer } = require('next-contentlayer');
    return withContentlayer(config);
  } catch (error) {
    console.warn('Warning: next-contentlayer is not installed. Skipping.');
    return config;
  }
};

export default withContentlayer(nextConfig)
