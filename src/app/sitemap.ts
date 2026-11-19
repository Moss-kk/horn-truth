import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const pages = ["", "/about", "/contact", "/privacy", "/terms"].map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: "2026-11-20",
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.6,
  }));

  const articles = getAllArticles().map((article) => ({
    url: `${base}/articles/${article.slug}`,
    lastModified: article.date,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...pages, ...articles];
}
