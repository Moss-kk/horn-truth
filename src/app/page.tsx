import { ArticleCard } from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/articles";
import { site } from "@/lib/site";

export default function HomePage() {
  const articles = getAllArticles();
  const [featured, ...rest] = articles;

  return (
    <main className="page">
      <p className="kicker">Latest writing</p>
      <h1 className="page-title">{site.name}</h1>
      <p className="lede">
        A home for full articles on the Horn of Africa, the Nile and the Red Sea,
        written by {site.author}. New pieces will be linked from X.
      </p>
      <div className="article-list">
        {featured ? <ArticleCard article={featured} featured /> : null}
        {rest.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </main>
  );
}
