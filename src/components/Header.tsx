import Link from "next/link";
import { site } from "@/lib/site";
import { AdSlot } from "@/components/AdSlot";
import { SupportButton } from "@/components/SupportButton";

const nav = [
  { href: "/", label: "Articles" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="flag-bar" aria-hidden="true" />
      <div className="header-inner">
        <Link href="/" className="brand">
          <span className="brand-name">{site.name}</span>
          <span className="brand-tagline">{site.tagline}</span>
        </Link>
        <nav className="nav" aria-label="Main">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <SupportButton />
        </nav>
      </div>
      <AdSlot placement="header" />
    </header>
  );
}
