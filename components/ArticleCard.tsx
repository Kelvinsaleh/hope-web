import Link from "next/link";
import { format } from "date-fns";

interface ArticleCardProps {
  title: string;
  description: string;
  url: string;
  date: string;
  readingTime?: number;
  category?: string;
}

export function ArticleCard({
  title,
  description,
  url,
  date,
  readingTime,
  category,
}: ArticleCardProps) {
  return (
    <Link
      href={url}
      className="group flex flex-col rounded-xl2 border border-ink-100 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg dark:border-ink-800 dark:bg-ink-900"
    >
      {category && (
        <span className="mb-3 w-fit rounded-full bg-bloom-100 px-3 py-1 text-xs font-medium text-bloom-700 dark:bg-bloom-900 dark:text-bloom-200">
          {category}
        </span>
      )}
      <h3 className="font-display text-lg font-semibold text-ink-900 group-hover:text-bloom-600 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm text-ink-400 dark:text-ink-100/70">{description}</p>
      <div className="mt-4 flex items-center gap-3 text-xs text-ink-400">
        <time dateTime={date}>{format(new Date(date), "MMM d, yyyy")}</time>
        {readingTime && (
          <>
            <span aria-hidden>·</span>
            <span>{readingTime} min read</span>
          </>
        )}
      </div>
    </Link>
  );
}
