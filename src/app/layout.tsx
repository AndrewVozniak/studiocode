import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "studiocode.com.ua — Custom Software Development in Ukraine",
  description:
    "Ukrainian software development company. Full-stack web development, automation, UI/UX design, and MVP delivery. From idea to production.",
  keywords: [
    "web development",
    "software development Ukraine",
    "full-stack",
    "Next.js",
    "React",
    "Python",
    "FastAPI",
    "automation",
    "Telegram bots",
    "UI/UX design",
    "MVP development",
    "studiocode",
    "розробка сайтів",
    "веб-розробка",
  ],
  openGraph: {
    title: "studiocode.com.ua — Custom Software Development",
    description:
      "We build software that drives growth. Custom web development, automation & design.",
    type: "website",
    url: "https://studiocode.com.ua",
    siteName: "studiocode.com.ua",
  },
  metadataBase: new URL("https://studiocode.com.ua"),
  alternates: {
    canonical: "https://studiocode.com.ua",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
