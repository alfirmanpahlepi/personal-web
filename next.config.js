/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["koran-online.vercel.app"],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/robots.txt",
  //       destination: "/api/robots",
  //     },
  //   ];
  // },
};
