import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
};

export function createMetadata({ title, description, path = "/", image = "/assets/ui/kf-hero-banner.png", type = "website" }: MetadataInput = {}): Metadata {
  const pageTitle = title ? `${title}｜${siteConfig.name}` : `${siteConfig.name}｜台北大同區合法當舖`;
  const pageDescription = description || siteConfig.description;
  const url = new URL(path, siteConfig.url).toString();
  const imageUrl = new URL(image, siteConfig.url).toString();

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      locale: "zh_TW",
      type,
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
    },
  };
}
