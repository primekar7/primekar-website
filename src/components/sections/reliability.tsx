import NextLink from "next/link";
import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";

// No verified reliability stats, certifications, or guarantees exist
// (docs/decision-log.md D-010) — factual, process-based framing only.
// Bordered panel gives the section a designed edge without adding content
// (docs/homepage-review.md F-024).
function Reliability() {
  return (
    <Section
      tone="elevated"
      scale="compact"
      aria-labelledby="reliability-heading"
    >
      <div className="border-l-2 border-[var(--pk-gold)] pl-6 sm:pl-8">
        <HeadingGroup
          headingAs="h2"
          className="max-w-none"
          heading={
            <span id="reliability-heading">
              How PrimeKar Approaches Reliability
            </span>
          }
          subheading="Every PrimeKar ride is scheduled in advance rather than requested on demand, so trip details are set before pickup. Trips are managed through the app from scheduling through to completion."
        />
        <NextLink
          href="#ride-with-purpose"
          className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--pk-cream)] transition-colors hover:text-[var(--pk-gold)]"
        >
          Learn about Ride With Purpose &rarr;
        </NextLink>
      </div>
    </Section>
  );
}

export { Reliability };
