import { sitePages } from "../lib/site-pages";

export function pageMetadata(key) {
  const page = sitePages[key];

  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: page.canonical },
    openGraph: {
      type: "website",
      siteName: "Komeza Peer Circle",
      locale: "en_GB",
      title: page.ogTitle,
      description: page.ogDescription,
      url: page.canonical,
      images: [{ url: page.ogImage, alt: page.ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.twitterTitle,
      description: page.twitterDescription,
      images: [{ url: page.twitterImage, alt: page.twitterImageAlt }],
    },
  };
}

export function StructuredData({ pageKey }) {
  const page = sitePages[pageKey];

  if (!page.structuredData) return null;

  const json = JSON.stringify(page.structuredData).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
