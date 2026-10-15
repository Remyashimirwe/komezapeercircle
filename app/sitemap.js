const siteOrigin = new URL("https://www.komezapeercircle.info");

const publicPaths = [
  "/",
  "/vision",
  "/what-we-do",
  "/founder",
  "/contact",
];

export default function sitemap() {
  return publicPaths.map((path) => ({
    url: new URL(path, siteOrigin).toString(),
  }));
}
