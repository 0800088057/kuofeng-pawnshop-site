import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/process", "/faq", "/contact", "/knowledge", "/privacy", "/editorial-policy"];
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteConfig.url}${path}`,
  }));
  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
  }));
  const articleEntries = articles.map((article) => ({
    url: `${siteConfig.url}/knowledge/${article.slug}`,
    lastModified: new Date(`${article.updatedDate ?? article.date}T00:00:00.000Z`),
  }));

  return [...staticEntries, ...serviceEntries, ...articleEntries];
}
