import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <p className="font-display text-6xl font-bold text-bloom-500">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-ink-900 dark:text-white">
        We couldn't find that page
      </h1>
      <p className="mt-2 text-ink-400">
        It may have moved, or never existed. Try the guides, or head back home.
      </p>
      <div className="mt-6 flex gap-3">
        <Link href="/" className="rounded-full bg-bloom-500 px-5 py-2.5 text-sm font-semibold text-white">
          Go home
        </Link>
        <Link
          href="/guides"
          className="rounded-full border border-ink-100 px-5 py-2.5 text-sm font-semibold text-ink-800 dark:border-ink-800 dark:text-ink-100"
        >
          Browse guides
        </Link>
      </div>
    </div>
  );
}
