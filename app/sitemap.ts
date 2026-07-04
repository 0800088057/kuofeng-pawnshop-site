import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/process", "/faq", "/contact", "/apply", "/knowledge"];
  const servicePaths = services.map((service) => `/services/${service.slug}`);
  const articlePaths = articles.map((article) => `/knowledge/${article.slug}`);

  return [...staticPaths, ...servicePaths, ...articlePaths].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));
}
