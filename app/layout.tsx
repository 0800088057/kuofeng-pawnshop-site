import type { Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#28a8d3",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FinancialService"],
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    taxID: siteConfig.taxId,
    address: {
      "@type": "PostalAddress",
      streetAddress: "民族西路78號1樓",
      addressLocality: "大同區",
      addressRegion: "台北市",
      addressCountry: "TW",
    },
    openingHours: "Mo-Fr 09:00-18:00",
    description: siteConfig.description,
  };

  return (
    <html lang="zh-TW">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
