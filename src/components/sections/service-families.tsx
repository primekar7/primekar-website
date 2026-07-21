import NextLink from "next/link";
import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { Card } from "@/components/primitives/card";
import { Reveal } from "@/components/primitives/reveal";
import { serviceFamilies } from "@/lib/content/site";

function ServiceFamilies() {
  return (
    <Section
      id="services"
      tone="elevated"
      scale="standard"
      aria-labelledby="services-heading"
    >
      <HeadingGroup
        eyebrow="What we offer"
        headingAs="h2"
        heading={<span id="services-heading">Services</span>}
        subheading="Four scheduled transportation categories, each built around planning ahead."
      />
      <div className="mt-8 grid sm:mt-10 grid-cols-1 gap-4 sm:grid-cols-2">
        {serviceFamilies.map((service, i) => (
          <Reveal key={service.href} delay={i * 0.05}>
            <Card className="flex h-full flex-col gap-3">
              {/* warm-white, not gold — gold-on-elevated measures ~3.3:1, below WCAG AA for normal text (docs/homepage-review.md F-008) */}
              <span
                aria-hidden="true"
                className="font-heading text-sm font-semibold text-[var(--pk-warm-white)]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-xl font-semibold tracking-tight text-[var(--pk-warm-white)]">
                {service.name}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <NextLink
                href={service.href}
                className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-[var(--pk-cream)] transition-colors hover:text-[var(--pk-gold)]"
              >
                Learn more
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </NextLink>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export { ServiceFamilies };
