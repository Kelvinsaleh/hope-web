import Link from "next/link";
import { getCompareSlugs } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Compare Hope",
  description: "How Hope compares to ChatGPT, Replika, Headspace, and Calm.",
  path: "/compare",
});

export default function CompareIndexPage() {
  const comparisons = getCompareSlugs();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="font-display text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">
        Compare Hope
      </h1>
      <p className="mt-3 text-ink-400">
        Honest, feature-by-feature comparisons — Hope isn't the right fit for everyone, and these
        pages say so.
      </p>
      <ul className="mt-8 space-y-3">
        {comparisons.map((c) => (
          <li key={c.slug}>
            <Link
              href={c.url}
              className="block rounded-xl2 border border-ink-100 bg-white p-5 font-medium text-ink-900 transition hover:-translate-y-0.5 dark:border-ink-800 dark:bg-ink-900 dark:text-white"
            >
              {c.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
