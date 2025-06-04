/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.macstation.com.ar",
      },
    ],
  },
};

module.exports = nextConfig;
