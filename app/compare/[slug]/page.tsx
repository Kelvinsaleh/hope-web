import { use } from "react";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { allCompares } from "contentlayer/generated";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CTASection } from "@/components/CTASection";
import { getCompareSlugs } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return getCompareSlugs().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = allCompares.find((c) => c.slug === slug);
  if (!page) return {};
  return buildMetadata({ title: page.title, description: page.description, path: page.url });
}

export default function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const page = allCompares.find((c) => c.slug === slug);
  if (!page) notFound();

  const MDXContent = useMDXComponent(page.body.code);
  const rows = page.rows as { feature: string; hope: string; competitor: string }[];

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">
        {page.title}
      </h1>
      <p className="mt-4 text-lg text-ink-400">{page.description}</p>

      <div className="prose prose-lg dark:prose-invert mt-8 max-w-none">
        <MDXContent />
      </div>

      <div className="mt-10">
        <ComparisonTable competitorName={page.competitor} rows={rows} />
      </div>

      <div className="mt-12">
        <CTASection />
      </div>
    </article>
  );
}
