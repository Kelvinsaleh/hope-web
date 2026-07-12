import { allGuides, allResearch, allFaqCategories } from "contentlayer/generated";

export interface SearchDoc {
  id: string;
  title: string;
  description: string;
  url: string;
  type: "guide" | "research" | "faq";
  body: string;
}

/**
 * Builds a flat, serializable index of all searchable content.
 * Used both to hydrate the client-side FlexSearch index (see
 * components/SearchBar.tsx) and to back /search for no-JS fallback.
 */
export function buildSearchDocs(): SearchDoc[] {
  const guides: SearchDoc[] = allGuides
    .filter((g) => !g.draft)
    .map((g) => ({
      id: g.url,
      title: g.title,
      description: g.description,
      url: g.url,
      type: "guide",
      body: g.body.raw.slice(0, 4000),
    }));

  const research: SearchDoc[] = allResearch
    .filter((r) => !r.draft)
    .map((r) => ({
      id: r.url,
      title: r.title,
      description: r.description,
      url: r.url,
      type: "research",
      body: r.body.raw.slice(0, 4000),
    }));

  const faqs: SearchDoc[] = allFaqCategories.flatMap((cat) =>
    (cat.questions as { question: string; answer: string }[]).map((q, i) => ({
      id: `${cat.url}#q${i}`,
      title: q.question,
      description: q.answer.slice(0, 160),
      url: `${cat.url}#q${i}`,
      type: "faq" as const,
      body: q.answer,
    })),
  );

  return [...guides, ...research, ...faqs];
}
