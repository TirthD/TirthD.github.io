import type { Metadata, Viewport } from "next";
import { Fraunces } from "next/font/google";
import { site } from "@/content";
import "./globals.css";

// One font for everything. Variable: wght is included by default;
// SOFT and opsz are requested explicitly. Self-hosted at build time by next/font.
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal"],
  axes: ["SOFT", "opsz"],
  display: "swap",
  fallback: ["Georgia", "serif"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#a8c5d8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fraunces.variable}>
      <body>{children}</body>
    </html>
  );
}
