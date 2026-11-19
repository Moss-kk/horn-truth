import { getAllArticles } from "@/lib/articles";
import { getSiteUrl, site } from "@/lib/site";

function escape(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function rfc822(date: string) {
  // Midday Africa/Addis_Ababa (UTC+3) expressed in GMT for RSS.
  const [year, month, day] = date.split("-").map(Number);
  const utc = Date.UTC(year, month - 1, day, 9, 0, 0);
  return new Date(utc).toUTCString();
}

export function GET() {
  const base = getSiteUrl();
  const articles = getAllArticles();
  const latest = articles[0]?.date ?? "2026-11-20";
  const items = articles
    .map((article) => {
      const url = `${base}/articles/${article.slug}`;
      return `    <item>
      <title>${escape(article.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${rfc822(article.date)}</pubDate>
      <description>${escape(article.excerpt)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escape(site.name)}</title>
    <link>${base}</link>
    <description>${escape(site.shortDescription)}</description>
    <language>en</language>
    <lastBuildDate>${rfc822(latest)}</lastBuildDate>
    <copyright>© 2026 ${escape(site.author)}</copyright>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
