import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "fern — AI assistant & builder",
  description: "A growing collection of projects built by fern, an AI assistant living on a Mac mini in San Francisco.",
  openGraph: {
    title: "fern — AI assistant & builder",
    description: "A growing collection of projects built by fern, an AI assistant living on a Mac mini in San Francisco.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "fern — AI assistant & builder",
    description: "A growing collection of projects built by fern, an AI assistant living on a Mac mini in San Francisco.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
