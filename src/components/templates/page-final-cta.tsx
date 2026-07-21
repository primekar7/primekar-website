import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { LinkButton } from "@/components/ui/link-button";

function PageFinalCta({
  id,
  heading,
  subheading,
  primaryCta,
  secondaryCta,
}: {
  id: string;
  heading: string;
  subheading: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}) {
  return (
    <Section tone="feature" scale="feature" aria-labelledby={id}>
      <div className="flex flex-col items-center gap-6 text-center">
        <HeadingGroup
          align="center"
          headingAs="h2"
          size="feature"
          heading={<span id={id}>{heading}</span>}
          subheading={subheading}
        />
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton size="cta" href={primaryCta.href}>
            {primaryCta.label}
          </LinkButton>
          <LinkButton size="cta" variant="outline" href={secondaryCta.href}>
            {secondaryCta.label}
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}

export { PageFinalCta };
