import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { Reveal } from "@/components/primitives/reveal";

type Step = { title: string; desc: string };

/** Numbered-step device shared with the homepage HowItWorks section (docs/component-map.md). */
function PageSteps({
  id,
  eyebrow = "How it works",
  heading,
  subheading,
  steps,
  tone = "elevated",
}: {
  id: string;
  eyebrow?: string;
  heading: string;
  subheading?: string;
  steps: Step[];
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
      <ol className="relative mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <span
          aria-hidden="true"
          className="absolute top-5 right-0 left-0 hidden h-px bg-[var(--pk-hairline)] sm:block"
        />
        {steps.map((s, i) => (
          <Reveal
            key={s.title}
            as="li"
            delay={i * 0.05}
            className="relative flex flex-col gap-2.5"
          >
            <span className="relative flex size-10 items-center justify-center border border-[var(--pk-hairline-strong)] bg-[var(--pk-teal-deep)] font-heading text-base font-semibold text-[var(--pk-warm-white)]">
              {i + 1}
            </span>
            <h3 className="font-heading text-lg font-semibold tracking-tight text-[var(--pk-warm-white)]">
              {s.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {s.desc}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export { PageSteps };
