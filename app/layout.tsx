import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://newportpedicabtours.com"),
  title: {
    default: "Newport Pedicab Tours",
    template: "%s | Newport Pedicab Tours",
  },
  description:
      "Experience Newport, Rhode Island from the comfort of a pedicab. Private guided tours of the historic district, Bellevue Avenue mansions, Ocean Drive, and more.",

  keywords: [
    "Newport pedicab",
    "Newport Rhode Island tours",
    "Pedicab Newport",
    "Newport sightseeing",
    "Newport mansion tours",
    "Bellevue Avenue",
    "Ocean Drive",
    "Newport transportation",
    "Guided tours Newport",
  ],

  authors: [
    {
      name: "Newport Pedicab Tours",
    },
  ],

  creator: "Newport Pedicab Tours",

  openGraph: {
    title: "Newport Pedicab Tours",
    description:
        "Private guided pedicab tours through historic Newport, Rhode Island.",
    url: "https://newportpedicabtours.com",
    siteName: "Newport Pedicab Tours",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Newport Pedicab Tours",
    description:
        "Explore Newport in comfort with a private guided pedicab tour.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body>{children}</body>
      </html>
  );
}