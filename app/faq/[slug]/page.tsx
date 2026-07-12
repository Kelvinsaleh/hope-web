import { notFound } from "next/navigation";
import { FAQAccordion } from "@/components/FAQAccordion";
import { getFaqBySlug, getFaqCategories } from "@/lib/content";
import { buildMetadata, SITE_URL } from "@/lib/seo";

export async function generateStaticParams() {
  return getFaqCategories().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getFaqBySlug(slug);
  if (!category) return {};
  return buildMetadata({
    title: `${category.title} FAQ`,
    description: category.description,
    path: category.url,
  });
}

export default async function FaqCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getFaqBySlug(slug);
  if (!category) notFound();

  const questions = category.questions as { question: string; answer: string }[];

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-sm font-medium uppercase tracking-wide text-bloom-600">FAQ</p>
      <h1 className="mt-2 font-display text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">
        {category.title}
      </h1>
      <p className="mt-3 text-ink-400">{category.description}</p>

      <div className="mt-10">
        <FAQAccordion questions={questions} pageUrl={`${SITE_URL}${category.url}`} />
      </div>
    </div>
  );
}
