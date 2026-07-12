import { use } from "react";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { ArticleLayout } from "@/components/ArticleLayout";
import { RelatedArticles } from "@/components/RelatedArticles";
import { getResearchBySlug, getPublishedResearch, getRelatedResearch } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return getPublishedResearch().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const research = getResearchBySlug(slug);
  if (!research) return {};
  return buildMetadata({
    title: research.title,
    description: research.description,
    path: research.url,
    type: "article",
    publishedTime: research.publishedAt,
    modifiedTime: research.updatedAt,
  });
}

export default function ResearchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const research = getResearchBySlug(slug);
  if (!research) notFound();

  const MDXContent = useMDXComponent(research.body.code);
  const related = getRelatedResearch(research);

  return (
    <>
      <ArticleLayout
        title={research.title}
        description={research.description}
        publishedAt={research.publishedAt}
        updatedAt={research.updatedAt}
        readingTime={research.readingTime}
        url={research.url}
        sectionLabel="Research"
      >
        <MDXContent />
      </ArticleLayout>
      <div className="mx-auto max-w-3xl px-4 pb-16">
        <RelatedArticles
          items={related.map((r) => ({
            title: r.title,
            description: r.description,
            url: r.url,
            publishedAt: r.publishedAt,
            readingTime: r.readingTime,
          }))}
        />
      </div>
    </>
  );
}
