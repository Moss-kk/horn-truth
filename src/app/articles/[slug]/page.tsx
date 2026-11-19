import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/ArticleBody";
import { formatDate, getArticle, getArticleSlugs } from "@/lib/articles";
import { getSiteUrl, site } from "@/lib/site";

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const url = `${getSiteUrl()}/articles/${article.slug}`;
  const image = article.ogImage ?? "/og-default.jpg";

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      siteName: site.name,
      locale: site.locale,
      url,
      title: article.title,
      description: article.description,
      publishedTime: article.date,
      authors: [site.author],
      images: [{ url: image, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      site: `@${site.xHandle}`,
      creator: `@${site.xHandle}`,
      title: article.title,
      description: article.description,
      images: [image],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <main className="page" lang={article.lang}>
      <article>
        <header className="article-header">
          <p className="kicker">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            {article.draft ? <span className="draft-badge">Draft</span> : null}
            <span> · {site.author}</span>
          </p>
          <h1 className="article-title">{article.title}</h1>
          <p className="lede">{article.description}</p>
        </header>
        <ArticleBody content={article.content} sources={article.sources} />
      </article>
    </main>
  );
}
