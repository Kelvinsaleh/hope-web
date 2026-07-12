import Link from "next/link";
import { getFaqCategories } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "FAQ",
  description: "Answers to common questions about Hope's AI chat, journaling, mood tracking, privacy, and more.",
  path: "/faq",
});

export default function FaqIndexPage() {
  const categories = getFaqCategories();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-display text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">
        Frequently Asked Questions
      </h1>
      <p className="mt-3 max-w-2xl text-ink-400">Browse by category, or use search to jump straight to an answer.</p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={cat.url}
            className="rounded-xl2 border border-ink-100 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 dark:border-ink-800 dark:bg-ink-900"
          >
            <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
              {cat.title}
            </h2>
            <p className="mt-2 text-sm text-ink-400">{cat.description}</p>
            <p className="mt-3 text-xs font-medium text-bloom-600">
              {(cat.questions as unknown[]).length} questions
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
