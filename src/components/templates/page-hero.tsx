import { Container } from "@/components/primitives/container";
import { Breadcrumb } from "@/components/primitives/breadcrumb";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { RouteDevice } from "@/components/primitives/route-device";
import { LinkButton } from "@/components/ui/link-button";

/**
 * Shared hero shell for ServicePage/RoutePage (docs/page-template-review.md
 * PT-004). Quick facts are folded into a composed right-hand panel instead
 * of a separate bare band — the panel gives the hero a focal element at
 * ≥1024px instead of leaving half the band empty, and the facts strip no
 * longer exists as its own under-filled section.
 */
function PageHero({
  eyebrow,
  h1,
  subheading,
  breadcrumb,
  quickFacts,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  h1: string;
  subheading: string;
  breadcrumb: { label: string; href?: string }[];
  quickFacts: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}) {
  return (
    <section
      className="relative overflow-hidden bg-[var(--pk-teal-elevated)] pt-10 pb-14 sm:pt-14 sm:pb-20"
      style={{
        backgroundImage:
          "radial-gradient(60% 55% at 90% -10%, color-mix(in srgb, var(--pk-gold), transparent 85%), transparent 70%)",
      }}
    >
      <Container className="relative grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center lg:gap-16">
        <div className="flex flex-col gap-6">
          <Breadcrumb items={breadcrumb} />
          <HeadingGroup
            eyebrow={eyebrow}
            headingAs="h1"
            size="feature"
            heading={h1}
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

        <div
          className="relative hidden overflow-hidden border border-[var(--pk-hairline)] bg-[var(--pk-teal-deep)]/40 p-6 lg:block"
          aria-hidden="true"
        >
          <RouteDevice className="relative w-full text-[var(--pk-gold)]" />
          <ul className="relative mt-6 flex flex-col divide-y divide-[var(--pk-hairline)]">
            {quickFacts.map((fact) => (
              <li
                key={fact}
                className="py-3 text-sm font-medium text-[var(--pk-warm-white)] first:pt-0 last:pb-0"
              >
                {fact}
              </li>
            ))}
          </ul>
        </div>

        {/* Below lg the panel is hidden, so the facts still need to reach
            screen-reader and no-JS users — a visually-compact list under
            the CTAs covers that without duplicating the lg panel visually. */}
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:hidden">
          {quickFacts.map((fact) => (
            <li
              key={fact}
              className="border border-[var(--pk-hairline)] px-4 py-3 text-sm font-medium text-[var(--pk-cream)]"
            >
              {fact}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export { PageHero };
