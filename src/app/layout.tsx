import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import { CustomCursor } from "@/components/custom-cursor";
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
  title: "Sofié Patisserie Frankfurt — Handgefertigte Osteuropäische Patisserie",
  description:
    "Premium Patisserie in Frankfurt. Handgefertigt mit Bio-Zutaten aus der Normandie, Madagaskar und Osteuropa. Medovik, Sirniki, Napoleonka — kostenlose Lieferung ab 59 €.",
  metadataBase: new URL("https://sofiepatisserie.com"),
  openGraph: {
    title: "Sofié Patisserie Frankfurt",
    description:
      "Handgefertigte osteuropäische Patisserie mit Premium-Zutaten. Kostenlose Lieferung in Frankfurt & Taunus.",
    url: "https://sofiepatisserie.com",
    siteName: "Sofié Patisserie",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sofié Patisserie Frankfurt",
    description:
      "Handgefertigte osteuropäische Patisserie mit Premium-Zutaten. Kostenlose Lieferung in Frankfurt & Taunus.",
  },
  alternates: {
    canonical: "https://sofiepatisserie.com",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              name: "Sofié Patisserie",
              url: "https://sofiepatisserie.com",
              email: "info@sofiepatisserie.com",
              description:
                "Handgefertigte osteuropäische Patisserie in Frankfurt am Main. Premium-Zutaten, auf Wunsch mit Stevia.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Frankfurt am Main",
                addressCountry: "DE",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
              priceRange: "€€",
              servesCuisine: "Osteuropäische Patisserie",
              areaServed: [
                "Frankfurt am Main",
                "Bad Homburg",
                "Kronberg",
                "Königstein",
                "Oberursel",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen font-sans">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
