import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.author}, Ethiopian writer on the Horn of Africa, the Nile and the Red Sea, and the home of ${site.name}.`,
};

export default function AboutPage() {
  return (
    <main className="page about">
      <p className="kicker">About</p>
      <h1 className="page-title">{site.author}</h1>
      <p className="lede">
        Ethiopian writer on the Horn of Africa, the Nile and the Red Sea.
      </p>
      <p>
        {site.name} is the article home of {site.author}. Short posts on X
        will point here, so readers can sit with the full argument, the maps
        and the sources.
      </p>
      <h2>What this site is for</h2>
      <p>
        The work is concerned with history and present politics in the Horn:
        Ethiopia’s place on the Red Sea, the rivers that rise on the Ethiopian
        highlands, and the treaties and dams that have shaped the Nile.
      </p>
      <p>
        English is the language of the site for now. The typography already
        includes Ethiopic fonts, so Amharic articles can be added later without
        redesigning the pages.
      </p>
      <p>
        You can follow the writing on X at{" "}
        <a href={site.xUrl} rel="noopener noreferrer" target="_blank">
          @{site.xHandle}
        </a>
        . A “Support my work” button is on every page; the link is a
        placeholder until a payment or contribution method is chosen.
      </p>
    </main>
  );
}
