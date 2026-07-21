import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { Card } from "@/components/primitives/card";
import { Reveal } from "@/components/primitives/reveal";

/**
 * Card-grid list of trip/use-case scenarios — describes how PrimeKar's
 * existing, already-approved scheduling process applies to a specific
 * page's context, without inventing any new destination or timing fact
 * (docs/page-template-review.md PT-005). Reused across service and route
 * pages so each gets differentiated, structured content instead of a bare
 * heading-and-paragraph band (PT-004).
 */
function PageScenarios({
  id,
  eyebrow,
  heading,
  subheading,
  items,
  tone = "elevated",
}: {
  id: string;
  eyebrow: string;
  heading: string;
  subheading?: string;
  items: string[];
  tone?: "base" | "elevated";
}) {
  return (
    <Section tone={tone} scale="standard" aria-labelledby={id}>
      <HeadingGroup
        eyebrow={eyebrow}
        headingAs="h2"
        heading={<span id={id}>{heading}</span>}
        subheading={subheading}
      />
      <ul className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2">
        {items.map((item, i) => (
          <Reveal key={item} as="li" delay={i * 0.05} className="h-full">
            <Card className="flex h-full flex-col gap-3">
              <span aria-hidden="true" className="text-[var(--pk-gold)]">
                &#9670;
              </span>
              <p className="text-sm leading-relaxed text-[var(--pk-cream)]">
                {item}
              </p>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

export { PageScenarios };
