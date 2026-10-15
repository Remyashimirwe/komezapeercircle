const siteUrl = "https://www.komezapeercircle.info";

export default function sitemap() {
  return ["/", "/vision.html", "/what-we-do.html", "/founder.html", "/contact.html"].map(
    (path) => ({ url: `${siteUrl}${path}` }),
  );
}
