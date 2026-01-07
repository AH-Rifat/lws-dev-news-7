/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/images/**",
      },
      {
        protocol: "http",
        hostname: "lws-news-dev.netlify.app",
        pathname: "/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
