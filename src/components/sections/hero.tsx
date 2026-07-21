import { Container } from "@/components/primitives/container";
import { RouteDevice } from "@/components/primitives/route-device";
import { LinkButton } from "@/components/ui/link-button";
import { appExperienceAnchor, serviceFamilies } from "@/lib/content/site";

/**
 * Hero focal point (docs/homepage-review.md F-024 §1 / F-018). No approved
 * vehicle or Calgary photography exists yet, so the composition is built
 * entirely from typography, an abstract route-line device (pure CSS/SVG —
 * not a photo, not a redraw of the logo) and a bordered fact panel listing
 * the four service categories. Content paints immediately — no Reveal/
 * animation on hero content (v7 §16 Jesko Jets guardrail).
 */
function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--pk-teal-elevated)] pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pb-28"
      style={{
        backgroundImage:
          "radial-gradient(65% 55% at 88% -5%, color-mix(in srgb, var(--pk-gold), transparent 82%), transparent 70%)",
      }}
    >
      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
        <div className="flex flex-col gap-6">
          {/* warm-white, not gold — gold-on-elevated measures ~3.3:1, below WCAG AA for normal text (docs/homepage-review.md F-008) */}
          <span className="flex items-center gap-3 text-sm font-semibold tracking-[0.08em] text-[var(--pk-warm-white)] uppercase">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-[var(--pk-hairline-strong)]"
            />
            Calgary &amp; Alberta
          </span>
          <h1 className="max-w-2xl text-4xl leading-[1.03] font-semibold tracking-[-0.02em] text-[var(--pk-warm-white)] text-balance sm:text-6xl lg:text-[4.25rem]">
            Premium Pre&#8209;Scheduled Transportation in Calgary
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-[var(--pk-cream)] sm:text-xl">
            Plan your ride in advance and manage it in the PrimeKar app — for
            airport transfers, corporate travel and private trips across
            Alberta.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <LinkButton size="cta" href={appExperienceAnchor}>
              Download the App
            </LinkButton>
            <LinkButton size="cta" variant="outline" href="#services">
              Explore Services
            </LinkButton>
          </div>
        </div>

        <div
          className="relative hidden overflow-hidden border border-[var(--pk-hairline)] bg-[var(--pk-teal-deep)]/40 p-6 lg:block"
          aria-hidden="true"
        >
          <RouteDevice className="relative w-full text-[var(--pk-gold)]" />
          <ul className="relative mt-6 flex flex-col divide-y divide-[var(--pk-hairline)]">
            {serviceFamilies.map((service) => (
              <li
                key={service.href}
                className="py-3 text-sm font-medium text-[var(--pk-warm-white)] first:pt-0 last:pb-0"
              >
                {service.name}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export { Hero };
