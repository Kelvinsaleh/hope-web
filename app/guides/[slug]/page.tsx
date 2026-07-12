import { use } from "react";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { ArticleLayout } from "@/components/ArticleLayout";
import { RelatedArticles } from "@/components/RelatedArticles";
import { CTASection } from "@/components/CTASection";
import { getGuideBySlug, getPublishedGuides, getRelatedGuides } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return getPublishedGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return buildMetadata({
    title: guide.title,
    description: guide.description,
    path: guide.url,
    type: "article",
    publishedTime: guide.publishedAt,
    modifiedTime: guide.updatedAt,
  });
}

export default function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const MDXContent = useMDXComponent(guide.body.code);
  const related = getRelatedGuides(guide);

  return (
    <>
      <ArticleLayout
        title={guide.title}
        description={guide.description}
        publishedAt={guide.publishedAt}
        updatedAt={guide.updatedAt}
        readingTime={guide.readingTime}
        category={guide.category}
        url={guide.url}
        sectionLabel="Guides"
      >
        <MDXContent />
      </ArticleLayout>

      <div className="mx-auto max-w-3xl px-4 pb-16">
        <RelatedArticles
          items={related.map((g) => ({
            title: g.title,
            description: g.description,
            url: g.url,
            publishedAt: g.publishedAt,
            readingTime: g.readingTime,
            category: g.category,
          }))}
        />
        <div className="mt-12">
          <CTASection />
        </div>
      </div>
    </>
  );
}
