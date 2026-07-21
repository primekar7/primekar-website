"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Short opacity+translate reveal for below-the-fold content only (docs/design-system.md §7).
 * Never used on the hero — hero content must paint immediately (v7 §16 Jesko Jets guardrail).
 *
 * Built on native IntersectionObserver + CSS transitions rather than the
 * Motion library (docs/homepage-review.md F-006 — Motion's animation engine
 * was the largest single chunk in the homepage's JS bundle, ~2x the
 * approved budget, and was pulled in solely for this one opacity+translate
 * effect). `prefers-reduced-motion` is honored by the global CSS override
 * in globals.css, which zeroes all transition/animation durations.
 *
 * Content renders fully visible in server HTML and on first client paint
 * (F-005 — Motion's `initial` prop previously shipped literal `opacity:0`
 * in the SSR output). After mount, only elements not already on screen are
 * given the hidden-then-reveal treatment, so already-visible SSR content
 * never flashes out and back in on hydration.
 */
const tagNames = { div: "div", li: "li" } as const;

function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Use "li" when the direct parent is a <ul>/<ol> — a wrapping <div> would break list semantics. */
  as?: keyof typeof tagNames;
}) {
  const ref = React.useRef<HTMLDivElement & HTMLLIElement>(null);
  const [state, setState] = React.useState<"static" | "hidden" | "shown">(
    "static",
  );

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const alreadyVisible = el.getBoundingClientRect().top < window.innerHeight;
    if (alreadyVisible) return;

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = tagNames[as];

  return (
    <Tag
      ref={ref as React.LegacyRef<HTMLDivElement & HTMLLIElement>}
      className={cn(
        className,
        state !== "static" &&
          "transition-[opacity,transform] duration-[var(--pk-dur-base)] ease-[var(--pk-ease-out)]",
        state === "hidden" && "translate-y-4 opacity-0",
      )}
      style={state !== "static" ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}

export { Reveal };
