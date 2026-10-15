import Script from "next/script";
import "./globals.css";

const siteUrl = "https://www.komezapeercircle.info";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Komeza Peer Circle — HIV peer support for young women in Kigali",
    template: "%s | Komeza Peer Circle",
  },
  description:
    "A free, confidential weekly peer support group for young women in Kanombe, Kigali, including young women living with HIV. Talk openly, end the stigma.",
  authors: [{ name: "UMULINGA G Jolly" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Komeza Peer Circle",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png", sizes: "512x512" }],
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#c41e3a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Young+Serif&family=Figtree:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Script src="/i18n.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
