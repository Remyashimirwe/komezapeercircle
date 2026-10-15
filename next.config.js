/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/vision.html",
        destination: "/vision",
        permanent: true,
      },
      {
        source: "/what-we-do.html",
        destination: "/what-we-do",
        permanent: true,
      },
      {
        source: "/founder.html",
        destination: "/founder",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
