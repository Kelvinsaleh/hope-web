import { ArticleCard } from "./ArticleCard";

interface RelatedItem {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  readingTime?: number;
  category?: string;
}

export function RelatedArticles({
  items,
  heading = "Related reading",
}: {
  items: RelatedItem[];
  heading?: string;
}) {
  if (!items.length) return null;

  return (
    <section className="mt-16 border-t border-ink-100 pt-10 dark:border-ink-800">
      <h2 className="font-display text-xl font-semibold text-ink-900 dark:text-white">
        {heading}
      </h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ArticleCard
            key={item.url}
            title={item.title}
            description={item.description}
            url={item.url}
            date={item.publishedAt}
            readingTime={item.readingTime}
            category={item.category}
          />
        ))}
      </div>
    </section>
  );
}
