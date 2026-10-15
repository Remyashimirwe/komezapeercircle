const siteOrigin = new URL("https://www.komezapeercircle.info");

const publicPages = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/vision", changeFrequency: "monthly", priority: 0.8 },
  { path: "/what-we-do", changeFrequency: "monthly", priority: 0.8 },
  { path: "/founder", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
];

// These pages were last updated when the clean Next.js routes were published.
const pagesLastModified = new Date("2026-10-15T07:56:20+02:00");

export default function sitemap() {
  return publicPages.map(({ path, changeFrequency, priority }) => ({
    url: new URL(path, siteOrigin).toString(),
    lastModified: pagesLastModified,
    changeFrequency,
    priority,
  }));
}
