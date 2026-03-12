import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tirth Dave — AI Researcher · Data Engineer · Cloud",
  description:
    "Portfolio of Tirth Dave — MS in AI at Northeastern University. Building intelligent systems at the intersection of AI, data engineering, and cloud computing.",
  keywords: [
    "Tirth Dave", "AI Engineer", "Data Engineer", "Cloud Engineer",
    "Machine Learning", "Snowflake", "Python", "Northeastern University",
  ],
  authors: [{ name: "Tirth Dave" }],
  openGraph: {
    title: "Tirth Dave — AI Researcher · Data Engineer · Cloud",
    description: "Building intelligent systems at the intersection of AI, data engineering, and cloud.",
    url: "https://tirthd.github.io",
    siteName: "Tirth Dave",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tirth Dave — AI Researcher · Data Engineer · Cloud",
    description: "Building intelligent systems at the intersection of AI, data engineering, and cloud.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-[#1d1d1f] antialiased">
        {children}
      </body>
    </html>
  );
}