import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sofié Patisserie Frankfurt",
  description:
    "Handgefertigte osteuropäische Patisserie in Frankfurt am Main. Torten, Sirniki, Medovik und mehr.",
  metadataBase: new URL("https://sofiepatisserie.com"),
  openGraph: {
    title: "Sofié Patisserie Frankfurt",
    description:
      "Handgefertigte osteuropäische Patisserie in Frankfurt am Main",
    url: "https://sofiepatisserie.com",
    siteName: "Sofié Patisserie",
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
      lang="de"
      className={`${geist.variable} ${cormorant.variable} antialiased`}
    >
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
