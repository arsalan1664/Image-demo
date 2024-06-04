/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagewebsite.eduresearchers.com",
        port: "",
        pathname: "/public/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/public/uploads/**",
      },
    ],
  },
};

export default nextConfig;
