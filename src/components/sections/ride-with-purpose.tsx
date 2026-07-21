import NextLink from "next/link";
import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";

// Required minimum treatment only (docs/master-spec-v7.md §6): initiative
// name, verified high-level purpose, restrained link. No statistics,
// contribution amounts, eligibility rules, partners, or medical affiliations
// — none are verified. Kept as its own section, separate from Reliability.
// Visual treatment is deliberately quiet — a plain hairline frame, no
// decoration beyond that — so it reads as a values statement rather than
// another slab, without adding volume (docs/homepage-review.md F-024 §10).
function RideWithPurpose() {
  return (
    <Section
      id="ride-with-purpose"
      tone="base"
      scale="compact"
      aria-labelledby="rwp-heading"
    >
      <div className="border border-[var(--pk-hairline)] px-6 py-10 sm:px-10 sm:py-12">
        <HeadingGroup
          align="center"
          className="mx-auto max-w-xl"
          headingAs="h2"
          heading={<span id="rwp-heading">Ride With Purpose</span>}
          subheading="Ride With Purpose is PrimeKar's social-impact initiative supporting free transportation for cancer patients."
        />
        <div className="mt-4 flex justify-center">
          <NextLink
            href="/about/"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--pk-cream)] transition-colors hover:text-[var(--pk-gold)]"
          >
            Learn more on the About page
          </NextLink>
        </div>
      </div>
    </Section>
  );
}

export { RideWithPurpose };
