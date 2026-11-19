import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ArticleSource = {
  title: string;
  url?: string;
  note?: string;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  excerpt: string;
  draft: boolean;
  lang: string;
  ogImage?: string;
  sources: ArticleSource[];
  content: string;
};

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

function readArticle(filename: string): Article {
  const slug = filename.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(ARTICLES_DIR, filename), "utf8");
  const { data, content } = matter(raw);

  if (!data.title || !data.description || !data.date) {
    throw new Error(`Article ${filename} is missing title, description or date.`);
  }

  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    date: String(data.date),
    excerpt: String(data.excerpt ?? data.description),
    draft: Boolean(data.draft),
    lang: String(data.lang ?? "en"),
    ogImage: data.ogImage ? String(data.ogImage) : undefined,
    sources: Array.isArray(data.sources) ? data.sources : [],
    content,
  };
}

export function getArticleSlugs() {
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export function getAllArticles(): Article[] {
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map(readArticle)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticle(slug: string): Article | null {
  const md = path.join(ARTICLES_DIR, `${slug}.md`);
  const mdx = path.join(ARTICLES_DIR, `${slug}.mdx`);
  if (fs.existsSync(md)) return readArticle(path.basename(md));
  if (fs.existsSync(mdx)) return readArticle(path.basename(mdx));
  return null;
}

export function formatDate(date: string, locale = "en-GB") {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Africa/Addis_Ababa",
  }).format(new Date(`${date}T12:00:00+03:00`));
}
