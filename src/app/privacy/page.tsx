import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}, the writing site of ${site.author}.`,
};

export default function PrivacyPage() {
  return (
    <main className="page legal">
      <p className="kicker">Legal</p>
      <h1 className="page-title">Privacy Policy</h1>
      <p className="lede">Last updated 20 November 2026 (Africa/Addis_Ababa).</p>
      <p>
        {site.name} (“the site”) is operated by {site.author}. This policy
        explains what information may be collected when you visit, and how it
        may be used. The site is published for a general audience and is not
        directed at children.
      </p>
      <h2>Information we collect</h2>
      <p>
        We do not require an account to read articles. Like most websites, our
        hosting provider (currently Vercel) may automatically receive standard
        technical data such as IP address, browser type, device information,
        referring URL and pages requested. This is used to operate, secure and
        understand the site.
      </p>
      <h2>Cookies and advertising</h2>
      <p>
        Advertising space is reserved for Google AdSense. Until an AdSense
        publisher ID is added, those slots are empty placeholders and do not
        serve third-party ads. After ads are enabled, Google and its partners
        may use cookies or similar technologies to show ads, measure
        performance and limit how often you see a message. You can learn more
        and opt out of personalised ads through Google’s advertising settings
        and, where available, industry opt-out tools.
      </p>
      <h2>How we use information</h2>
      <p>
        Information is used to publish and improve the site, keep it secure,
        comply with the law, and — once ads or a support method are live —
        operate those features. We do not sell your personal information.
      </p>
      <h2>Links and third parties</h2>
      <p>
        Articles may link to source documents and other sites. Those sites
        have their own privacy practices. The public X account{" "}
        <a href={site.xUrl}>@{site.xHandle}</a> is operated on X’s terms, not
        this policy.
      </p>
      <h2>Contact</h2>
      <p>
        For a privacy question, contact {site.author} via{" "}
        <a href={site.xUrl}>@{site.xHandle}</a> or the{" "}
        <a href="/contact">contact page</a>. This policy may be updated as the
        site adds a mailing list, donations or advertising.
      </p>
    </main>
  );
}
