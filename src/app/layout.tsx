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
  title: "Sofie Patisserie Frankfurt",
  description: "Handcrafted Eastern European pastries & artisan baked goods in Frankfurt am Main",
  metadataBase: new URL("https://sofiepatisserie.com"),
  openGraph: {
    title: "Sofie Patisserie Frankfurt",
    description: "Handcrafted Eastern European pastries & artisan baked goods in Frankfurt am Main",
    url: "https://sofiepatisserie.com",
    siteName: "Sofie Patisserie",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
