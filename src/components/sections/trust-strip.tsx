import { Section } from "@/components/primitives/section";

// Factual, verifiable statements only — no ratings, stats, or guarantees
// (docs/master-spec-v7.md §18: evidence-dependent sections must not fabricate).
const facts = [
  "Calgary-based",
  "Executive & Elite XL vehicles",
  "Scheduled through the PrimeKar app",
  "Serving YYC Airport & Alberta routes",
];

// Redesigned as a bordered confidence band with hairline separators rather
// than a stacked grey disclaimer (docs/homepage-review.md F-024 §12).
function TrustStrip() {
  return (
    <Section
      tone="base"
      scale="compact"
      className="border-y border-[var(--pk-hairline)]"
      aria-label="At a glance"
    >
      <ul className="grid grid-cols-1 divide-y divide-[var(--pk-hairline)] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {facts.map((fact) => (
          <li
            key={fact}
            className="flex items-center justify-center gap-2 px-4 py-4 text-center text-xs font-semibold tracking-[0.08em] text-[var(--pk-cream)] uppercase sm:text-sm"
          >
            <span aria-hidden="true" className="text-[var(--pk-gold)]">
              &#9670;
            </span>
            {fact}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export { TrustStrip };
