import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { LinkButton } from "@/components/ui/link-button";

const facts = [
  "Calgary International Airport (YYC)",
  "Pickup and drop-off",
  "Scheduled through the app",
];

function AirportFeature() {
  return (
    <Section tone="elevated" scale="feature" aria-labelledby="airport-heading">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
        <HeadingGroup
          eyebrow="Airport"
          headingAs="h2"
          size="feature"
          heading={
            <span id="airport-heading">Calgary Airport Transportation</span>
          }
          subheading="Schedule a pickup or drop-off at Calgary International Airport (YYC) in advance through the app."
        />
        <div className="flex flex-col gap-6">
          <ul className="flex flex-col gap-2.5">
            {facts.map((fact) => (
              <li
                key={fact}
                className="flex items-center gap-2.5 text-sm font-medium text-[var(--pk-cream)]"
              >
                <span aria-hidden="true" className="text-[var(--pk-gold)]">
                  &#9670;
                </span>
                {fact}
              </li>
            ))}
          </ul>
          <LinkButton
            size="cta"
            variant="outline"
            href="/calgary-airport-transportation/"
          >
            Airport Transportation
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}

export { AirportFeature };
