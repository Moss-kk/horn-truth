type AdSlotProps = {
  placement: "header" | "in-article";
  className?: string;
};

export function AdSlot({ placement, className = "" }: AdSlotProps) {
  // AdSense: after approval, set NEXT_PUBLIC_ADSENSE_CLIENT (ca-pub-XXXXXXXX)
  // and replace this placeholder with the official ad unit for this placement.
  const label = placement === "header" ? "Header advertisement" : "In-article advertisement";

  return (
    <aside
      className={`ad-slot ${className}`}
      aria-label={label}
      data-ad-placement={placement}
    >
      <span className="ad-slot-kicker">Advertisement</span>
      <span className="ad-slot-body">
        Ad slot reserved for Google AdSense
      </span>
    </aside>
  );
}
