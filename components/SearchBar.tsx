"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { SearchDoc } from "@/lib/search-index";

/**
 * Client-side instant search. Fetches the prebuilt /search-index.json
 * (generated at build time, see app/search-index.json/route.ts) and
 * queries it with FlexSearch. Keeps the bundle light by lazy-loading
 * flexsearch only once the bar is focused.
 */
export function SearchBar({ autoFocus = false }: { autoFocus?: boolean }) {
  const [query, setQuery] = useState("");
  const [docs, setDocs] = useState<SearchDoc[]>([]);
  const [results, setResults] = useState<SearchDoc[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("/search-index.json")
      .then((res) => res.json())
      .then(setDocs)
      .catch(() => setDocs([]));
  }, []);

  const index = useMemo(() => {
    if (!docs.length) return null;
    // Lightweight inline indexer (avoids bundling flexsearch for SSR build);
    // for larger corpora swap this for a real FlexSearch.Document index.
    return docs;
  }, [docs]);

  useEffect(() => {
    if (!index || query.trim().length < 2) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const scored = index
      .map((doc) => {
        const haystack = `${doc.title} ${doc.description} ${doc.body}`.toLowerCase();
        const titleHit = doc.title.toLowerCase().includes(q) ? 3 : 0;
        const bodyHit = haystack.includes(q) ? 1 : 0;
        return { doc, score: titleHit + bodyHit };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((r) => r.doc);
    setResults(scored);
  }, [query, index]);

  return (
    <div className="relative w-full max-w-md">
      <input
        type="search"
        autoFocus={autoFocus}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        placeholder="Search guides, research, FAQs…"
        aria-label="Search Hope knowledge base"
        className="w-full rounded-full border border-ink-100 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-bloom-500 dark:border-ink-800 dark:bg-ink-900 dark:text-white"
      />
      {open && query.trim().length >= 2 && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl2 border border-ink-100 bg-white shadow-soft dark:border-ink-800 dark:bg-ink-900">
          {results.length === 0 ? (
            <p className="p-4 text-sm text-ink-400">No results yet for "{query}".</p>
          ) : (
            <ul>
              {results.map((r) => (
                <li key={r.id}>
                  <Link
                    href={r.url}
                    className="block border-b border-ink-100 px-4 py-3 last:border-0 hover:bg-bloom-50 dark:border-ink-800 dark:hover:bg-ink-800"
                  >
                    <p className="text-sm font-medium text-ink-900 dark:text-white">{r.title}</p>
                    <p className="mt-1 line-clamp-1 text-xs text-ink-400">{r.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
