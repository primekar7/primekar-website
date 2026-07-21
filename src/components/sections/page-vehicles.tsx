import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { TypographicPanel } from "@/components/primitives/typographic-panel";
import { Reveal } from "@/components/primitives/reveal";
import { fleet } from "@/lib/content/site";

/**
 * Shared vehicles section for ServicePage/RoutePage — same visual device as
 * the homepage Fleet section (docs/component-map.md: one Fleet component,
 * reused rather than re-invented per page). No capacity, luggage, or
 * availability claims (v7 §7).
 */
function PageVehicles({
  id,
  eyebrow = "Vehicles",
  heading,
  tone = "base",
}: {
  id: string;
  eyebrow?: string;
  heading: string;
  tone?: "base" | "elevated";
}) {
  return (
    <Section tone={tone} scale="standard" aria-labelledby={id}>
      <HeadingGroup
        eyebrow={eyebrow}
        headingAs="h2"
        heading={<span id={id}>{heading}</span>}
      />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2">
        {fleet.map((tier, i) => (
          <Reveal key={tier.tier} delay={i * 0.05}>
            <TypographicPanel
              label={tier.tier}
              meta={tier.vehicles.join(" · ")}
              className="aspect-[2/1] sm:aspect-[16/9]"
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export { PageVehicles };
