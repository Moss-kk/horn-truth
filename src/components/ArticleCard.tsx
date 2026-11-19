import Link from "next/link";
import type { Article } from "@/lib/articles";
import { formatDate } from "@/lib/articles";

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <article className={featured ? "article-card featured" : "article-card"}>
      <p className="card-meta">
        <time dateTime={article.date}>{formatDate(article.date)}</time>
        {article.draft ? <span className="draft-badge">Draft</span> : null}
      </p>
      <h2 className="card-title">
        <Link href={`/articles/${article.slug}`}>{article.title}</Link>
      </h2>
      <p className="card-excerpt">{article.excerpt}</p>
      <Link className="card-more" href={`/articles/${article.slug}`}>
        Read the article
      </Link>
    </article>
  );
}
