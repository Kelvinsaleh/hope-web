# Hope Knowledge Base & AI Discovery Website

Next.js 15 (App Router) site for **Hope** — an AI-powered journaling and reflection app. Built to
be crawlable by Google and AI systems, establish trust, and drive installs.

This codebase was built and verified with a real `npm install` + `next build` — it compiles
cleanly and statically generates all 42 routes. The one thing **not** verified in the build
environment this was created in is fetching Google Fonts at build time (that environment had no
network access to `fonts.googleapis.com`); on Vercel or any normal host this works automatically
with zero changes.

## Stack

Next.js 15 · TypeScript · Tailwind CSS · Contentlayer2 (MDX) · ESLint · Prettier

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in real values before deploying
npm run dev                  # http://localhost:3000
```

```bash
npm run build                # contentlayer2 build && next build
npm run start                # serve the production build
```

## Project structure

```
app/                  Routes (App Router)
  guides/[slug]        Guide articles, generated from content/guides/*.mdx
  research/[slug]       Research articles, from content/research/*.mdx
  faq/[slug]            FAQ categories, from content/faq/*.mdx
  compare/[slug]        Comparison pages, from content/compare/*.mdx
  why-hope/              The problems Hope solves, in depth
  features/              Feature-by-feature breakdown with anchored sections
  sitemap.ts, robots.ts, feed.xml/route.ts, search-index.json/route.ts
components/           Navbar, Footer, SearchBar, FAQAccordion, ArticleCard,
                       ArticleLayout, RelatedArticles, CTASection, CrisisBanner, etc.
content/               MDX content — see "Content workflow" below
lib/                   seo.ts (metadata), schema.ts (JSON-LD), content.ts (data
                       helpers, related-article logic), search-index.ts
contentlayer.config.ts Defines the Guide / Research / FaqCategory / Compare schemas
```

## Content inventory

- **15 guides** — the original 10 plus 5 deep feature explainers: the AI journaling companion,
  AI therapy chat (honestly positioned — Hope is not therapy, but this captures that search
  intent and explains the real distinction), the science behind breathing exercises, journaling's
  full impact on mental health, and guided meditation's role and personalization.
- **8 FAQ categories, 161 total questions** — AI Chat (21), Journaling (20), Mood Tracking (20),
  Weekly Reports (20), Breathing Exercises (20, new), Guided Meditations (20), Privacy (20),
  Premium (20).
- **7 research pages** — journaling, mood tracking, reflection, meditation, breathing/HRV (new),
  AI-assisted journaling (new, honestly scoped to the youth of that evidence base), and the
  student mental health landscape (new, supporting context for why Hope targets students).
- **4 comparison pages** — Hope vs ChatGPT, Replika, Headspace, Calm.
- **About, Why Hope, Features, AI Limitations** — About covers mission/vision plus a "problems
  Hope solves" section; Why Hope goes deep on six specific gaps (access, the blank page problem,
  the pattern problem, the between-sessions gap, student-specific pressure, and the "is this
  serious enough" problem); Features is a feature-by-feature breakdown with anchored sections
  linking out to the relevant guide and FAQ category; AI Limitations lists 8 specific limitations
  plus an explicit therapy-vs-AI-companion comparison and a "when to seek help" checklist.

## Content workflow

Every guide, research article, FAQ category, and comparison page is an MDX file under `content/`.
Add a new file, fill in the frontmatter, and the route, sitemap entry, RSS item, and search index
all update automatically on the next build — no code changes needed.

**Guide** (`content/guides/your-slug.mdx`):
```yaml
---
title: "Your Title"
description: "One or two sentences, used for SEO + card previews."
publishedAt: "2026-03-01"
category: "Journaling"
tags: ["journaling"]
relatedGuides: ["other-guide-slug"]   # optional, falls back to category/tag matching
---
```

**FAQ category** (`content/faq/your-category.mdx`) — note `questions` is structured JSON, used to
auto-generate the FAQPage schema and the accordion:
```yaml
---
title: "Category Name"
description: "Short category description."
order: 8
questions:
  [
    { "question": "...", "answer": "..." }
  ]
---
```

**Compare page** (`content/compare/hope-vs-x.mdx`) — `rows` drives the comparison table:
```yaml
---
title: "Hope vs X"
description: "..."
competitor: "X"
publishedAt: "2026-03-01"
rows: [{ "feature": "...", "hope": "...", "competitor": "..." }]
---
```

### What's full vs. what's a starter draft

Every section has real, complete content — nothing is lorem ipsum. Two things are intentionally
lighter than the original spec, so you can decide when to invest more:

- The original 10 guides are ~800–1200 words each (spec asked for 1500–2500). The 5 newer deep
  feature guides (AI companion, AI therapy chat, breathing science, journaling's full impact,
  meditation's role) run longer — 1500–2500+ words each — since they're built specifically to
  rank for high-intent feature and comparison searches.
- Crisis line numbers in `app/crisis-resources/page.tsx` are placeholders — verify and expand
  before publishing.

Everything else — routing, SEO, JSON-LD, sitemap, RSS, search, dark mode, comparison tables, the
full FAQ set, the Why Hope and Features pages — is fully built and production-ready as-is.

## SEO & structured data

- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt` from live content.
- `app/feed.xml/route.ts` generates an RSS feed of guides + research.
- Every page has canonical URL, OpenGraph, and Twitter card metadata via `lib/seo.ts`.
- JSON-LD (`lib/schema.ts`): `Organization` (root layout, every page), `Article` (guides +
  research), `FAQPage` (auto-generated from each FAQ category's `questions`), `BreadcrumbList`
  (articles).

## Search

`/search-index.json` is a route handler that serves all guides, research, and FAQ Q&As as JSON at
build/request time. `components/SearchBar.tsx` fetches it and does simple client-side scoring —
intentionally dependency-light so it works without extra setup. If your content library grows
large (a few hundred+ articles), swap the scoring logic for a real `FlexSearch.Document` index
(the package is already in `package.json`).

## Analytics

`components/Analytics.tsx` loads Google Analytics and/or Plausible **only if** their env vars are
set in `.env.local` — ships with zero tracking by default.

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXX
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=hopementalhealthsupport.xyz
```

## Before you publish — checklist

These are placeholders by design and need real values before this goes live:

- [ ] `content/crisis-resources` table in `app/crisis-resources/page.tsx` — verify every hotline
      number is current, and add every country you're targeting (Kenya's number is a placeholder).
- [ ] `app/privacy/page.tsx` — fill in your actual data retention policy, AI provider name, and
      at-rest encryption details (marked inline with `<em>` notes).
- [ ] `public/logo.png` and `public/og-default.png` — add real brand assets (referenced in
      `lib/schema.ts` and `lib/seo.ts`, currently pointing at files that don't exist yet).
- [ ] `.env.local` — set `NEXT_PUBLIC_SITE_URL`, app store links, and analytics IDs.
- [ ] Expand guides toward 1500–2500 words and FAQ categories toward 20+ questions each, if/when
      you want the fuller content depth from the original brief.

## Deployment

See `DEPLOYMENT.md`.
