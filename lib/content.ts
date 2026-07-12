import { allGuides, allResearch, allFaqCategories, allCompares } from "contentlayer/generated";
import type { Guide, Research } from "contentlayer/generated";

export function getPublishedGuides() {
  return allGuides
    .filter((g) => !g.draft)
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
}

export function getPublishedResearch() {
  return allResearch
    .filter((r) => !r.draft)
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
}

export function getFaqCategories() {
  return [...allFaqCategories].sort((a, b) => a.order - b.order);
}

export function getCompareSlugs() {
  return allCompares;
}

export function getGuideBySlug(slug: string) {
  return allGuides.find((g) => g.slug === slug && !g.draft);
}

export function getResearchBySlug(slug: string) {
  return allResearch.find((r) => r.slug === slug && !r.draft);
}

export function getFaqBySlug(slug: string) {
  return allFaqCategories.find((f) => f.slug === slug);
}

/**
 * Related guides: explicit `relatedGuides` frontmatter wins; otherwise
 * fall back to shared category/tags, excluding the current article.
 */
export function getRelatedGuides(current: Guide, max = 3) {
  if (current.relatedGuides?.length) {
    const explicit = current.relatedGuides
      .map((slug) => allGuides.find((g) => g.slug === slug && !g.draft))
      .filter(Boolean) as Guide[];
    if (explicit.length) return explicit.slice(0, max);
  }

  return getPublishedGuides()
    .filter((g) => g.slug !== current.slug)
    .filter(
      (g) =>
        g.category === current.category ||
        g.tags.some((t) => current.tags.includes(t)),
    )
    .slice(0, max);
}

export function getRelatedResearch(current: Research, max = 3) {
  return getPublishedResearch()
    .filter((r) => r.slug !== current.slug)
    .filter((r) => r.tags.some((t) => current.tags.includes(t)))
    .slice(0, max);
}
