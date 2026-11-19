# Horn Truth

A simple, fast, mobile-first article site for **Yonas Tibebu**, an Ethiopian writer on the Horn of Africa, the Nile and the Red Sea.

Live writing will be linked from X. This repository is a static Next.js blog: add a markdown file, commit, and the new article appears on the home page.

## Stack

- Next.js App Router and TypeScript
- Markdown articles in `content/articles/`
- Tailwind CSS
- Deployed on Vercel (free `vercel.app` URL; no custom domain is attached unless Yonas decides otherwise)

## Adding a new article

1. Create a file in `content/articles/`, named with a URL slug, for example `content/articles/my-new-piece.md`.
2. Start with frontmatter:

```yaml
---
title: "The title readers will see"
description: "One or two sentences for search engines and social cards."
date: "2026-11-21"
excerpt: "A short preview for the home page and RSS."
draft: true
lang: en
ogImage: "/og-default.jpg"
sources:
  - title: "Source name"
    url: "https://example.com"
    note: "Optional context."
---
```

3. Write the article in Markdown below that block. Images go in `public/` and are referenced as `/images/...`.
4. Set `draft: true` while the text is still being polished (a “Draft” badge will show). Set `draft: false` when it is final. Drafts are still listed on the home page.
5. For Amharic later, set `lang: am`. Ethiopic fonts are already loaded.
6. Commit and push (or redeploy). The home list, article page, sitemap and RSS feed update from the folder automatically.

Do not invent sources. Put the real list in `sources:`; it is rendered at the bottom of the article.

## Site pages

- `/` latest articles
- `/articles/[slug]` full article, sources, in-article ad placeholder
- `/about` and `/contact`
- `/privacy` and `/terms` (needed for Google AdSense)
- `/ads.txt` placeholder
- `/sitemap.xml`, `/robots.txt`, `/feed.xml`

## Advertising and support

Header and in-article slots are placeholders. After AdSense approval:

1. Put the official line in `public/ads.txt`.
2. Add the publisher ID, for example `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXX`.
3. Replace the placeholders in `src/components/AdSlot.tsx`.

The “Support my work” button currently points to `#support`. Change `supportUrl` in `src/lib/site.ts` when a payment link is ready.

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).
