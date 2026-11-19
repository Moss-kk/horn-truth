import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for ${site.name}, the writing site of ${site.author}.`,
};

export default function TermsPage() {
  return (
    <main className="page legal">
      <p className="kicker">Legal</p>
      <h1 className="page-title">Terms of Use</h1>
      <p className="lede">Last updated 20 November 2026 (Africa/Addis_Ababa).</p>
      <p>
        By using {site.name}, you agree to these terms. If you do not agree,
        please do not use the site.
      </p>
      <h2>The site</h2>
      <p>
        {site.name} publishes writing by {site.author} on the Horn of Africa,
        the Nile and the Red Sea. Some articles are clearly marked as drafts
        and may be revised. The site is provided for general information and
        commentary. It is not legal, investment or official government advice.
      </p>
      <h2>Intellectual property</h2>
      <p>
        Unless a caption or credit says otherwise, the text on this site is
        the work of {site.author}. You may link to articles and quote short
        passages with credit and a link. You may not copy entire articles,
        scrape the site for training data, or present the work as your own
        without permission. Some photographs and maps are used under Creative
        Commons licences; those captions must be kept if the image is reused
        under the same licence.
      </p>
      <h2>Acceptable use</h2>
      <p>
        Do not misuse the site, attempt to break its security, or use it to
        send spam or unlawful content. Comments, if added later, must not
        include illegal material or harassment.
      </p>
      <h2>Advertising and support</h2>
      <p>
        Advertisement slots and the “Support my work” button are placeholders
        until a provider is connected. When they are live, third-party terms
        (for example Google AdSense) may also apply. The site does not
        guarantee any particular result from a donation or advertisement.
      </p>
      <h2>Disclaimer and liability</h2>
      <p>
        The site is provided “as is.” We work to be careful with sources, but
        we do not warrant that every page is complete or free of error. To the
        fullest extent allowed by law, {site.author} is not liable for losses
        that arise from your use of the site or from relying on its contents.
      </p>
      <h2>Changes</h2>
      <p>
        These terms may be updated from time to time. The date at the top of
        this page will change when they do. Questions can be sent through the{" "}
        <a href="/contact">contact page</a>.
      </p>
    </main>
  );
}
