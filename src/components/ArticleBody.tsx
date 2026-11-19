import type { ReactNode } from "react";
import Markdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { AdSlot } from "@/components/AdSlot";
import type { ArticleSource } from "@/lib/articles";

function splitIntro(markdown: string) {
  const parts = markdown.trim().split(/\n\n+/);
  if (parts.length < 3) {
    return { before: markdown, after: "" };
  }
  return {
    before: parts.slice(0, 2).join("\n\n"),
    after: parts.slice(2).join("\n\n"),
  };
}

function unwrapFigures({ children }: { children?: ReactNode }) {
  const list = Array.isArray(children) ? children : [children];
  const only = list.length === 1 ? list[0] : null;
  if (only && typeof only === "object" && only !== null && "type" in only) {
    const type = (only as { type?: unknown }).type;
    if (type === "figure") return <>{children}</>;
  }
  return <p>{children}</p>;
}

const markdownComponents: Components = {
  p: unwrapFigures,
  img: ({ alt, src, title }) => {
    const imageSrc = typeof src === "string" ? src : undefined;
    return (
      <figure className="article-figure">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageSrc} alt={alt ?? ""} />
        {title || alt ? <figcaption>{title || alt}</figcaption> : null}
      </figure>
    );
  },
};

export function ArticleBody({ content, sources }: { content: string; sources: ArticleSource[] }) {
  const { before, after } = splitIntro(content);

  return (
    <>
      <div className="prose">
        <Markdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {before}
        </Markdown>
      </div>
      <AdSlot placement="in-article" className="ad-in-article" />
      {after ? (
        <div className="prose">
          <Markdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {after}
          </Markdown>
        </div>
      ) : null}
      {sources.length > 0 ? (
        <section className="sources" aria-labelledby="sources-heading">
          <h2 id="sources-heading">Sources</h2>
          <ol>
            {sources.map((source, index) => (
              <li key={`${source.title}-${index}`}>
                {source.url ? (
                  <a href={source.url} rel="noopener noreferrer" target="_blank">
                    {source.title}
                  </a>
                ) : (
                  <span>{source.title}</span>
                )}
                {source.note ? <span className="source-note"> — {source.note}</span> : null}
              </li>
            ))}
          </ol>
        </section>
      ) : null}
    </>
  );
}
