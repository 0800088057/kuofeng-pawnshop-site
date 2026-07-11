import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/process", "/faq", "/contact", "/apply", "/knowledge", "/privacy"];
  const servicePaths = services.map((service) => `/services/${service.slug}`);
  const staticEntries = [...staticPaths, ...servicePaths].map((path) => ({
    url: `${siteConfig.url}${path}`,
  }));
  const articleEntries = articles.map((article) => ({
    url: `${siteConfig.url}/knowledge/${article.slug}`,
    lastModified: new Date(`${article.date}T00:00:00.000Z`),
  }));

  return [...staticEntries, ...articleEntries];
}
