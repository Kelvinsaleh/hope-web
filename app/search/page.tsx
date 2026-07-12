import { SearchBar } from "@/components/SearchBar";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Search",
  description: "Search Hope's guides, research, and FAQ.",
  path: "/search",
});

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">
        Search
      </h1>
      <p className="mt-3 text-ink-400">Find guides, research, and FAQ answers.</p>
      <div className="mt-8">
        <SearchBar autoFocus />
      </div>
    </div>
  );
}
