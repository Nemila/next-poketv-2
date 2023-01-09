/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s4.anilist.co",
        port: "",
        pathname: "/file/**",
      },
      {
        protocol: "https",
        hostname: "artworks.thetvdb.com",
        port: "",
        pathname: "/banners/**",
      },
    ],
  },
};

module.exports = nextConfig;
