import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { Card } from "@/components/primitives/card";

/**
 * Factual callout that points to an official external source instead of
 * asserting a live/seasonal condition (v7 §23 — do not hard-code weather,
 * road, or park-access conditions into an evergreen page). Styled as a
 * bordered card with a labelled source link so it reads as an intentional
 * composed element, not a bare paragraph (docs/page-template-review.md
 * PT-004).
 */
function PageCallout({
  id,
  eyebrow,
  heading,
  body,
  sourceLabel,
  sourceHref,
  tone = "base",
}: {
  id: string;
  eyebrow?: string;
  heading: string;
  body: string;
  sourceLabel: string;
  sourceHref: string;
  tone?: "base" | "elevated";
}) {
  return (
    <Section tone={tone} scale="compact" aria-labelledby={id}>
      <HeadingGroup
        eyebrow={eyebrow}
        headingAs="h2"
        heading={<span id={id}>{heading}</span>}
      />
      <Card className="mt-8 max-w-2xl">
        <p className="text-sm leading-relaxed text-[var(--pk-cream)]">{body}</p>
        {/* warm-white, not gold — gold text on the card's elevated
            background measures ~3.3:1, below WCAG AA (docs/design-system.md
            §1a). The gold underline is a decorative non-text accent, which
            only needs the ≥3:1 non-text threshold. */}
        <a
          href={sourceHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--pk-warm-white)] underline decoration-[var(--pk-hairline-strong)] underline-offset-4 focus-visible:ring-3 focus-visible:ring-[var(--pk-gold)]/50 focus-visible:outline-none"
        >
          {sourceLabel}
          <span aria-hidden="true" className="text-[var(--pk-gold)]">
            &#8599;
          </span>
        </a>
      </Card>
    </Section>
  );
}

export { PageCallout };
