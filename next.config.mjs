/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "http",
  //       hostname: "localhost",
  //       port: "8000",
  //       pathname: "/storage/**", // allow images from /storage
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "yourdomain.com", // when deployed
  //     },
  //   ],
  // },
  images: {
    remotePatterns: [new URL('http://localhost:8000/storage/**')],
  },
};

export default nextConfig;
