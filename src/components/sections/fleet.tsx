import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { TypographicPanel } from "@/components/primitives/typographic-panel";
import { Reveal } from "@/components/primitives/reveal";
import { fleet } from "@/lib/content/site";

// No approved fleet photography exists yet (docs/media-inventory.md).
// Vehicle class and make/model only — no capacity, luggage, or availability
// claims (v7 §7 prohibits inventing any of these).
function Fleet() {
  return (
    <Section tone="base" scale="standard" aria-labelledby="fleet-heading">
      <HeadingGroup
        eyebrow="Vehicles"
        headingAs="h2"
        heading={<span id="fleet-heading">Fleet</span>}
      />
      <div className="mt-8 grid sm:mt-10 grid-cols-1 gap-4 sm:grid-cols-2">
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

export { Fleet };
