import { ArticleCard } from "@/components/ArticleCard";
import { getPublishedResearch } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Research",
  description: "The research behind journaling, mood tracking, reflection, and meditation.",
  path: "/research",
});

export default function ResearchIndexPage() {
  const research = getPublishedResearch();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-display text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">
        Research
      </h1>
      <p className="mt-3 max-w-2xl text-ink-400">
        A look at the evidence behind the practices Hope is built around — summarized plainly,
        with sources you can check yourself.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {research.map((r) => (
          <ArticleCard
            key={r.slug}
            title={r.title}
            description={r.description}
            url={r.url}
            date={r.publishedAt}
            readingTime={r.readingTime}
          />
        ))}
      </div>
    </div>
  );
}
