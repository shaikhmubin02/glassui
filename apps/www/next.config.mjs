import { createContentlayerPlugin } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "public",
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com/random/*",
      },
    ],
  },
  redirects() {
    return [
      {
        source: "/components",
        destination: "/docs/components/slide-button",
        permanent: true,
      },
      {
        source: "/docs/components",
        destination: "/docs/components/slide-button",
        permanent: true,
      },
    ]
  },
}

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
})

export default withContentlayer(nextConfig)
