import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { LinkButton } from "@/components/ui/link-button";

// Feature-tone statement section (docs/homepage-review.md F-024 §9) — the
// approved copy is unchanged; only structure (use-case list) is added. No
// invented enterprise numbers, logos or client claims.
const useCases = ["Teams", "Clients", "Guests"];

function CorporateFeature() {
  return (
    <Section tone="feature" scale="feature" aria-labelledby="corporate-heading">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
        <HeadingGroup
          eyebrow="Corporate"
          headingAs="h2"
          size="feature"
          heading={<span id="corporate-heading">Corporate Transportation</span>}
          subheading="PrimeKar supports organizations coordinating scheduled transportation for teams, clients and guests."
        />
        <div className="flex flex-col gap-6">
          <ul className="flex flex-row flex-wrap gap-3">
            {useCases.map((useCase) => (
              <li
                key={useCase}
                className="border border-[var(--pk-hairline-strong)] px-4 py-2 text-sm font-semibold tracking-wide text-[var(--pk-warm-white)] uppercase"
              >
                {useCase}
              </li>
            ))}
          </ul>
          <LinkButton size="cta" href="/corporate-transportation-calgary/">
            Corporate Transportation
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}

export { CorporateFeature };
