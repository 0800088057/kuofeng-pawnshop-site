import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/process", "/faq", "/contact", "/apply"];
  const servicePaths = services.map((service) => `/services/${service.slug}`);

  return [...staticPaths, ...servicePaths].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));
}
