const siteOrigin = new URL("https://www.komezapeercircle.info");

const publicPaths = [
  "/",
  "/vision.html",
  "/what-we-do.html",
  "/founder.html",
  "/contact.html",
];

export default function sitemap() {
  return publicPaths.map((path) => ({
    url: new URL(path, siteOrigin).toString(),
  }));
}
