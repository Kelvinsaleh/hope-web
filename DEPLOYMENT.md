# Deployment

## Vercel (recommended)

Vercel is built by the Next.js team and is the path of least friction for this stack.

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. In Vercel: **Add New Project** → import the repo. Vercel auto-detects Next.js — no config
   needed.
3. Set environment variables under **Project Settings → Environment Variables** (copy from
   `.env.example`):
   - `NEXT_PUBLIC_SITE_URL` — your production domain, e.g. `https://hopementalhealthsupport.xyz`
   - `NEXT_PUBLIC_APP_STORE_URL`, `NEXT_PUBLIC_PLAY_STORE_URL`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` and/or `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (optional)
4. Deploy. Vercel runs `npm run build` (which runs `contentlayer2 build && next build`)
   automatically.
5. Add your custom domain under **Project Settings → Domains**, and point your DNS at Vercel
   (it'll give you the exact records to add).

Every push to your main branch redeploys automatically; every pull request gets a preview URL —
useful for reviewing new guide drafts before they go live.

## Alternative: any Node host (Railway, Render, Fly.io, a VPS)

```bash
npm install
npm run build
npm run start   # serves on port 3000 by default; set PORT env var to change it
```

Make sure the host runs Node 18.18+ (Next.js 15 requirement) and that your `.env` values are set
in the host's environment configuration, not committed to the repo.

## Static export (optional, only if you don't need the search-index or feed.xml route handlers)

This site uses two route handlers (`/search-index.json`, `/feed.xml`) which need a Node runtime —
true static export (`next export`) isn't compatible with them as-is. If you specifically want a
fully static export, you'd need to either:
- Pre-generate `search-index.json` and `feed.xml` as static files in `public/` at build time
  instead of as route handlers, or
- Drop client-side search and RSS, and rely on the sitemap + crawlable pages alone for discovery.

For most use cases, deploying to Vercel (or any Node host) as-is is simpler and gives you both.

## Post-deploy checklist

- [ ] Verify `/sitemap.xml`, `/robots.txt`, and `/feed.xml` resolve correctly on the live domain.
- [ ] Submit the sitemap in Google Search Console.
- [ ] Spot-check a guide, FAQ category, and compare page's JSON-LD with Google's [Rich Results
      Test](https://search.google.com/test/rich-results).
- [ ] Confirm analytics fire (if enabled) using GA's Realtime view or the Plausible dashboard.
- [ ] Re-read `README.md`'s "Before you publish" checklist — crisis line numbers and privacy
      policy specifics are placeholders that need real values before launch.
