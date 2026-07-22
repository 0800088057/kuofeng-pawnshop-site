import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
};

export function createMetadata({ title, description, path = "/", image = "/assets/ui/kf-hero-banner.webp", type = "website" }: MetadataInput = {}): Metadata {
  const pageTitle = title ? `${title}｜${siteConfig.name}` : `${siteConfig.name}｜台北大同區合法當舖`;
  const pageDescription = description || siteConfig.description;
  const url = new URL(path, siteConfig.url).toString();
  const imageUrl = new URL(image, siteConfig.url).toString();

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageTitle,
    description: pageDescription,
    applicationName: siteConfig.name,
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "金融服務",
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      locale: "zh_TW",
      type,
      images: [{ url: imageUrl, alt: pageTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
    },
  };
}
