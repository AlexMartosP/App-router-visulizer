/** @type {import('next').NextConfig} */
module.exports = {
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
