import { site } from "@/lib/site";

export function SupportButton({ className = "" }: { className?: string }) {
  return (
    <a className={`support-btn ${className}`} href={site.supportUrl}>
      Support my work
    </a>
  );
}
