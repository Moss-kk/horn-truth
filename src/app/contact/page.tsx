import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.author} about ${site.name} and the writing on the Horn of Africa, the Nile and the Red Sea.`,
};

export default function ContactPage() {
  const mailBody = encodeURIComponent(
    `Hello ${site.author},\n\nI am writing about Horn Truth.\n`,
  );
  const mailto = `mailto:?subject=${encodeURIComponent("Horn Truth")}&body=${mailBody}`;

  return (
    <main className="page">
      <p className="kicker">Contact</p>
      <h1 className="page-title">Get in touch</h1>
      <p className="lede">
        The quickest way to reach {site.author} today is on X.
      </p>
      <div className="contact-box">
        <p>
          Write to{" "}
          <a href={site.xUrl} rel="noopener noreferrer" target="_blank">
            @{site.xHandle}
          </a>
          . For a longer note, you can also open a message in your own email
          app.
        </p>
        <p>
          <a href={mailto}>Open an email draft</a>
        </p>
        <p>
          A dedicated contact address will be added here when one is set up.
          Please do not use this site to send confidential information.
        </p>
      </div>
    </main>
  );
}
