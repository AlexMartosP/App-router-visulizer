/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo**",
      },
    ],
    loader: "custom",
    loaderFile: "./src/lib/loader.ts",
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
