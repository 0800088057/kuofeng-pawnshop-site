import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/process", "/faq", "/contact", "/knowledge", "/privacy"];
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: path === "" || path === "/knowledge" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/knowledge" ? 0.9 : 0.7,
  }));
  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));
  const articleEntries = articles.map((article) => ({
    url: `${siteConfig.url}/knowledge/${article.slug}`,
    lastModified: new Date(`${article.date}T00:00:00.000Z`),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...serviceEntries, ...articleEntries];
}
