import { SITE_NAME, SITE_URL } from "./seo";

/** Organization schema — include once in the root layout. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [] as string[],
    description:
      "Hope is an AI-powered journaling and reflection app focused on self-awareness, mood tracking, and student wellbeing. Hope is not a therapy or medical service.",
  };
}

/** Article schema for /guides and /research pages. */
export function articleSchema(args: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.title,
    description: args.description,
    url: args.url,
    datePublished: args.publishedAt,
    dateModified: args.updatedAt ?? args.publishedAt,
    author: { "@type": "Organization", name: args.author ?? "The Hope Team" },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    image: args.image ?? `${SITE_URL}/og-default.png`,
    mainEntityOfPage: { "@type": "WebPage", "@id": args.url },
  };
}

/** FAQPage schema, auto-generated from a category's question list. */
export function faqPageSchema(
  questions: { question: string; answer: string }[],
  url: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url,
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

/** BreadcrumbList schema. */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
