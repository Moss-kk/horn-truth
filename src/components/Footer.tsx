import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const year = "2026";

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-brand">
          <strong>{site.name}</strong> {site.tagline}
        </p>
        <nav className="footer-nav" aria-label="Legal">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/feed.xml">RSS</Link>
        </nav>
        <p className="footer-copy">
          © {year} {site.author}. English for now; the site is ready for Amharic later.
        </p>
      </div>
    </footer>
  );
}
