import { format } from "date-fns";
import { CrisisBanner } from "./CrisisBanner";
import { JsonLd } from "./JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/seo";

interface ArticleLayoutProps {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  category?: string;
  url: string; // path, e.g. /guides/slug
  sectionLabel: string; // "Guide" | "Research"
  children: React.ReactNode;
  showCrisisBanner?: boolean;
}

export function ArticleLayout({
  title,
  description,
  publishedAt,
  updatedAt,
  readingTime,
  category,
  url,
  sectionLabel,
  children,
  showCrisisBanner = false,
}: ArticleLayoutProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <JsonLd
        data={articleSchema({
          title,
          description,
          url: `${SITE_URL}${url}`,
          publishedAt,
          updatedAt,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: sectionLabel, url: `${SITE_URL}${url.split("/").slice(0, 2).join("/")}` },
          { name: title, url: `${SITE_URL}${url}` },
        ])}
      />

      <header className="mb-8">
        {category && (
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-bloom-600">
            {category}
          </p>
        )}
        <h1 className="font-display text-3xl font-bold leading-tight text-ink-900 dark:text-white sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-lg text-ink-400 dark:text-ink-100/70">{description}</p>
        <div className="mt-4 flex items-center gap-3 text-sm text-ink-400">
          <time dateTime={publishedAt}>{format(new Date(publishedAt), "MMMM d, yyyy")}</time>
          <span aria-hidden>·</span>
          <span>{readingTime} min read</span>
        </div>
      </header>

      {showCrisisBanner && (
        <div className="mb-10">
          <CrisisBanner compact />
        </div>
      )}

      <div className="prose prose-lg dark:prose-invert max-w-none">{children}</div>
    </article>
  );
}
