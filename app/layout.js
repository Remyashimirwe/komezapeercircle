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
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 28'%3E%3Cpath d='M11 2c-5 0-7 6-3 13l-6 11M11 2c5 0 7 6 3 13l6 11M8 15c2 3 4 3 6 0' stroke='%23c41e3a' stroke-width='3' fill='none' stroke-linecap='round'/%3E%3C/svg%3E",
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
