import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { FaqAccordion } from "@/components/primitives/faq-accordion";

function PageFaq({
  id,
  eyebrow,
  heading,
  faqs,
  tone = "elevated",
}: {
  id: string;
  eyebrow?: string;
  heading: string;
  faqs: { q: string; a: string }[];
  tone?: "base" | "elevated";
}) {
  return (
    <Section tone={tone} scale="compact" aria-labelledby={id}>
      <HeadingGroup
        eyebrow={eyebrow}
        headingAs="h2"
        heading={<span id={id}>{heading}</span>}
      />
      <FaqAccordion items={faqs} />
    </Section>
  );
}

export { PageFaq };
