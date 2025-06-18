import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "WeviHealth - AI-Powered Home Healthcare Platform",
  description: "WeviHealth brings you cutting-edge AI automation, advanced scheduling, and intelligent care optimization — all within a single, secure platform designed for modern healthcare providers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
