import type { Viewport } from "next";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@/components/Analytics";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { northTaiwanServiceAreas, siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#28a8d3",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const businessId = `${siteConfig.url}/#business`;
  const websiteId = `${siteConfig.url}/#website`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["PawnShop", "FinancialService"],
        "@id": businessId,
        name: siteConfig.name,
        url: siteConfig.url,
        image: new URL("/assets/ui/kf-hero-banner.png", siteConfig.url).toString(),
        logo: new URL("/assets/legacy-web02/i25.png", siteConfig.url).toString(),
        telephone: siteConfig.phone,
        taxID: siteConfig.taxId,
        address: {
          "@type": "PostalAddress",
          streetAddress: "民族西路78號1樓",
          addressLocality: "大同區",
          addressRegion: "台北市",
          addressCountry: "TW",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        areaServed: northTaiwanServiceAreas.map((name) => ({
          "@type": "AdministrativeArea",
          name,
        })),
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          contactType: "customer service",
          availableLanguage: ["zh-TW"],
        },
        hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "國豐當舖服務項目",
          itemListElement: ["汽車借款", "房屋二胎", "支票借款", "工商融資", "代償諮詢", "萬物質借"].map((name) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name,
              provider: { "@id": businessId },
            },
          })),
        },
        description: siteConfig.description,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "zh-TW",
        publisher: { "@id": businessId },
      },
    ],
  };

  return (
    <html lang="zh-TW">
      <body>
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
