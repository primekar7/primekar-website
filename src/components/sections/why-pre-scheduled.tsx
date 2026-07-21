import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";

// Compact, restrained connective section — structured as a two-column
// statement + factual tag list rather than a bare paragraph
// (docs/homepage-review.md F-024 §4). Tags restate the same approved
// scenarios already in the subheading copy, not new content.
const scenarios = ["Flights", "Meetings", "Early departures"];

function WhyPreScheduled() {
  return (
    <Section tone="base" scale="compact" aria-labelledby="why-heading">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <HeadingGroup
          className="max-w-xl"
          headingAs="h2"
          heading={<span id="why-heading">Built Around Planning Ahead</span>}
          subheading="PrimeKar rides are scheduled in advance through the app, so your trip is set before you travel — useful for flights, meetings and early departures where planning matters."
        />
        <ul className="flex flex-row flex-wrap gap-3 lg:flex-col">
          {scenarios.map((scenario) => (
            <li
              key={scenario}
              className="flex items-center gap-2 border border-[var(--pk-hairline)] px-4 py-2.5 text-sm font-semibold text-[var(--pk-cream)]"
            >
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-[var(--pk-gold)]"
              />
              {scenario}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export { WhyPreScheduled };
