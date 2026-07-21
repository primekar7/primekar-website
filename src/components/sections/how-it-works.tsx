import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { Reveal } from "@/components/primitives/reveal";

const steps = [
  {
    step: "1",
    title: "Schedule",
    description: "Set your pickup details in the PrimeKar app ahead of time.",
  },
  {
    step: "2",
    title: "Confirm",
    description: "Review your trip details in the app before your ride.",
  },
  {
    step: "3",
    title: "Ride",
    description: "Your driver arrives for your scheduled pickup.",
  },
];

function HowItWorks() {
  return (
    <Section
      tone="elevated"
      scale="standard"
      aria-labelledby="how-it-works-heading"
    >
      <HeadingGroup
        eyebrow="The process"
        headingAs="h2"
        heading={<span id="how-it-works-heading">How It Works</span>}
      />
      <ol className="relative mt-8 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-3">
        <span
          aria-hidden="true"
          className="absolute top-5 right-0 left-0 hidden h-px bg-[var(--pk-hairline)] sm:block"
        />
        {steps.map((s, i) => (
          <Reveal
            key={s.step}
            as="li"
            delay={i * 0.05}
            className="relative flex flex-col gap-2.5"
          >
            {/* warm-white on deep, not gold on elevated — gold-on-elevated measures ~3.3:1, below WCAG AA for normal text (docs/homepage-review.md F-008) */}
            <span className="relative flex size-10 items-center justify-center border border-[var(--pk-hairline-strong)] bg-[var(--pk-teal-deep)] font-heading text-base font-semibold text-[var(--pk-warm-white)]">
              {s.step}
            </span>
            <h3 className="font-heading text-lg font-semibold tracking-tight text-[var(--pk-warm-white)]">
              {s.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {s.description}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export { HowItWorks };
