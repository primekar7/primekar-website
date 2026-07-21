import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { LinkButton } from "@/components/ui/link-button";
import { appExperienceAnchor } from "@/lib/content/site";

// The page's visual climax (docs/homepage-review.md F-024 §11) — feature
// tone and scale, strongest heading treatment, unambiguous primary/
// secondary CTA hierarchy.
function FinalCta() {
  return (
    <Section tone="feature" scale="feature" aria-labelledby="final-cta-heading">
      <div className="flex flex-col items-center gap-8 text-center">
        <HeadingGroup
          align="center"
          headingAs="h2"
          size="feature"
          heading={<span id="final-cta-heading">Plan Your Next Ride</span>}
          subheading="Download the PrimeKar app to schedule your ride in advance."
        />
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton size="cta" href={appExperienceAnchor}>
            Download the App
          </LinkButton>
          <LinkButton size="cta" variant="outline" href="#services">
            Explore Services
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}

export { FinalCta };
