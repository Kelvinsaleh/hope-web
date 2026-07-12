import { ArticleCard } from "@/components/ArticleCard";
import { getPublishedGuides } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Guides",
  description: "Practical guides on journaling, mood tracking, emotional awareness, and student wellbeing.",
  path: "/guides",
});

export default function GuidesIndexPage() {
  const guides = getPublishedGuides();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-display text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">
        Guides
      </h1>
      <p className="mt-3 max-w-2xl text-ink-400">
        Practical, well-sourced guides on journaling, reflection, mood, and student wellbeing.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => (
          <ArticleCard
            key={g.slug}
            title={g.title}
            description={g.description}
            url={g.url}
            date={g.publishedAt}
            readingTime={g.readingTime}
            category={g.category}
          />
        ))}
      </div>
    </div>
  );
}
