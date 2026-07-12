import type { MetadataRoute } from "next";
import { getPublishedGuides, getPublishedResearch, getFaqCategories, getCompareSlugs } from "@/lib/content";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/why-hope",
    "/features",
    "/privacy",
    "/crisis-resources",
    "/ai-limitations",
    "/guides",
    "/research",
    "/faq",
    "/compare",
    "/search",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const guideRoutes = getPublishedGuides().map((g) => ({
    url: `${SITE_URL}${g.url}`,
    lastModified: new Date(g.updatedAt ?? g.publishedAt),
  }));

  const researchRoutes = getPublishedResearch().map((r) => ({
    url: `${SITE_URL}${r.url}`,
    lastModified: new Date(r.updatedAt ?? r.publishedAt),
  }));

  const faqRoutes = getFaqCategories().map((c) => ({
    url: `${SITE_URL}${c.url}`,
    lastModified: new Date(),
  }));

  const compareRoutes = getCompareSlugs().map((c) => ({
    url: `${SITE_URL}${c.url}`,
    lastModified: new Date(c.publishedAt),
  }));

  return [...staticRoutes, ...guideRoutes, ...researchRoutes, ...faqRoutes, ...compareRoutes];
}
