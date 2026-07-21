import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { TypographicPanel } from "@/components/primitives/typographic-panel";
import { appLinks } from "@/lib/content/site";

// No approved clean app screenshots exist yet (docs/asset-audit.md §C — the
// supplied screenshots carry personal names, invoice data and legacy
// "Tap and Go" / "Luxury on Demand" messaging and are audit-only).
// Presented as a factual capability narrative with a reserved, clearly
// non-photographic slot the approved screenshot can later drop into
// without a re-layout — not a fabricated device mockup
// (docs/homepage-review.md F-024 §7).
const capabilities = [
  "Schedule your pickup details in the app ahead of time.",
  "Review your trip details before pickup.",
  "Manage the trip through to completion.",
];

function AppExperience() {
  return (
    <Section
      id="app-experience"
      tone="base"
      scale="feature"
      aria-labelledby="app-experience-heading"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
        <div className="flex flex-col gap-6">
          <HeadingGroup
            eyebrow="The app"
            headingAs="h2"
            size="feature"
            heading={
              <span id="app-experience-heading">
                Manage Your Ride in the App
              </span>
            }
            subheading="Scheduling and trip management happen in the PrimeKar app, available on iPhone and Android."
          />
          <ul className="flex flex-col divide-y divide-[var(--pk-hairline)] border-y border-[var(--pk-hairline)]">
            {capabilities.map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 py-3.5 text-sm leading-relaxed text-[var(--pk-cream)] sm:text-base"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 size-1.5 shrink-0 rounded-full bg-[var(--pk-gold)]"
                />
                {c}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={appLinks.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 min-w-11 items-center justify-center rounded-full bg-[var(--pk-gold)] px-6 text-base font-semibold text-[var(--pk-teal)] focus-visible:ring-3 focus-visible:ring-[var(--pk-gold)]/50 focus-visible:outline-none"
            >
              App Store
            </a>
            <a
              href={appLinks.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-[var(--pk-gold)] px-6 text-base font-semibold text-[var(--pk-warm-white)] focus-visible:ring-3 focus-visible:ring-[var(--pk-gold)]/50 focus-visible:outline-none"
            >
              Google Play
            </a>
          </div>
        </div>

        {/*
          Hidden below `lg` — v7 §20 explicitly warns against an oversized
          mobile phone-mockup/slot, and this reserved panel added ~500px of
          mobile scroll for no content (docs/homepage-review.md F-024
          criterion G measured this regression during the visual pass).
          Mobile relies on the capability list + store links only.
        */}
        <TypographicPanel
          label="PrimeKar App"
          meta="iPhone & Android"
          className="mx-auto hidden aspect-[9/16] w-full max-w-[280px] lg:block"
        />
      </div>
    </Section>
  );
}

export { AppExperience };
