import type { Metadata } from "next";

export const SITE_NAME = "Hope";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hopementalhealthsupport.xyz";
export const SITE_TAGLINE = "AI-powered journaling and reflection platform";
export const SITE_DESCRIPTION =
  "Hope helps you understand yourself better with AI-powered journaling, mood tracking, guided breathing, and personalized reflection — built for students and anyone building a self-awareness habit.";

interface BuildMetadataArgs {
  title: string;
  description: string;
  path: string; // e.g. "/guides/how-journaling-improves-mental-wellbeing"
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  /** Set true for the homepage, where the title is already the full brand title. */
  absoluteTitle?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  absoluteTitle = false,
}: BuildMetadataArgs): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? `${SITE_URL}/og-default.png`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type,
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      ...(type === "article" && modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
