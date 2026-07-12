import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

/* ---------------------------------------------------------------------- */
/*  Shared computed fields                                                */
/* ---------------------------------------------------------------------- */

const baseComputedFields = (urlPrefix: string) => ({
  slug: {
    type: "string" as const,
    resolve: (doc: any) => doc._raw.flattenedPath.replace(`${urlPrefix}/`, ""),
  },
  url: {
    type: "string" as const,
    resolve: (doc: any) =>
      `/${urlPrefix}/${doc._raw.flattenedPath.replace(`${urlPrefix}/`, "")}`,
  },
  readingTime: {
    type: "number" as const,
    resolve: (doc: any) => Math.max(1, Math.round(doc.body.raw.split(/\s+/).length / 220)),
  },
});

/* ---------------------------------------------------------------------- */
/*  Guides — /guides/[slug]                                               */
/* ---------------------------------------------------------------------- */

export const Guide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: `guides/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
    updatedAt: { type: "date", required: false },
    author: { type: "string", required: false, default: "The Hope Team" },
    category: { type: "string", required: false, default: "Mental Wellbeing" },
    tags: { type: "list", of: { type: "string" }, required: false, default: [] },
    relatedGuides: { type: "list", of: { type: "string" }, required: false, default: [] },
    coverImage: { type: "string", required: false },
    draft: { type: "boolean", required: false, default: false },
  },
  computedFields: baseComputedFields("guides"),
}));

/* ---------------------------------------------------------------------- */
/*  Research — /research/[slug]                                          */
/* ---------------------------------------------------------------------- */

export const Research = defineDocumentType(() => ({
  name: "Research",
  filePathPattern: `research/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
    updatedAt: { type: "date", required: false },
    summary: { type: "string", required: false },
    tags: { type: "list", of: { type: "string" }, required: false, default: [] },
    draft: { type: "boolean", required: false, default: false },
  },
  computedFields: baseComputedFields("research"),
}));

/* ---------------------------------------------------------------------- */
/*  FAQ — grouped by category, /faq/[slug]                                */
/* ---------------------------------------------------------------------- */

export const FaqCategory = defineDocumentType(() => ({
  name: "FaqCategory",
  filePathPattern: `faq/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true }, // e.g. "AI Chat"
    description: { type: "string", required: true },
    order: { type: "number", required: false, default: 0 },
    // Structured Q&A used to auto-generate FAQPage JSON-LD.
    // Keep authored as MDX body too, for rich answers + the accordion.
    questions: {
      type: "json", // [{ question: string, answer: string }]
      required: true,
    },
  },
  computedFields: baseComputedFields("faq"),
}));

/* ---------------------------------------------------------------------- */
/*  Compare — /compare/[slug]                                             */
/* ---------------------------------------------------------------------- */

export const Compare = defineDocumentType(() => ({
  name: "Compare",
  filePathPattern: `compare/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    competitor: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
    rows: {
      // [{ feature: string, hope: string, competitor: string }]
      type: "json",
      required: true,
    },
  },
  computedFields: baseComputedFields("compare"),
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Guide, Research, FaqCategory, Compare],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
      [rehypePrettyCode, { theme: "github-light" }],
    ],
  },
});
