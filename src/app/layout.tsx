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
  title: "Oria Agency — Building Digital Products That Scale",
  description:
    "Premium web studio with international experience. Full-stack development, automation, UI/UX design, and MVP delivery. From concept to deployment.",
  keywords: [
    "web development",
    "full-stack",
    "Next.js",
    "React",
    "Python",
    "FastAPI",
    "automation",
    "Telegram bots",
    "UI/UX design",
    "MVP development",
  ],
  openGraph: {
    title: "Oria Agency — Building Digital Products That Scale",
    description:
      "From MVP to Enterprise. Fast, Reliable, Global.",
    type: "website",
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
