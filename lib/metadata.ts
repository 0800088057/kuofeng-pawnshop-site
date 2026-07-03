import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
};

export function createMetadata({ title, description, path = "/" }: MetadataInput = {}): Metadata {
  const pageTitle = title ? `${title}｜${siteConfig.name}` : `${siteConfig.name}｜台北大同區合法當舖`;
  const pageDescription = description || siteConfig.description;
  const url = new URL(path, siteConfig.url).toString();

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
      type: "website",
    },
  };
}
