import type { Metadata } from "next";
import { Header } from "@/components/chrome/header";
import { Footer } from "@/components/chrome/footer";
import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { Breadcrumb } from "@/components/primitives/breadcrumb";
import { TypographicPanel } from "@/components/primitives/typographic-panel";
import { Reveal } from "@/components/primitives/reveal";
import { PageFinalCta } from "@/components/templates/page-final-cta";
import { appExperienceAnchor, fleet } from "@/lib/content/site";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

const path = "/fleet/";

export const metadata: Metadata = buildMetadata({
  title: "PrimeKar Fleet — Executive & Elite XL",
  description:
    "PrimeKar's Calgary and Alberta fleet: Executive and Elite XL vehicle tiers, scheduled in advance through the app.",
  path,
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Fleet", path },
]);

// No vehicle capacity, luggage, or availability claims (v7 §7) — tier and
// make/model only, matching the homepage Fleet section.
export default function FleetPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-[var(--pk-teal-elevated)] pt-10 pb-14 sm:pt-14 sm:pb-20">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "Fleet" }]}
            />
            <HeadingGroup
              eyebrow="Vehicles"
              size="feature"
              headingAs="h1"
              heading="PrimeKar Vehicle Options"
              subheading="Every PrimeKar trip is scheduled with one of two vehicle tiers, used consistently across airport, executive, corporate and private-route service."
            />
          </div>
        </section>

        <Section tone="base" scale="standard" aria-labelledby="fleet-heading">
          <h2 id="fleet-heading" className="sr-only">
            Vehicle tiers
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {fleet.map((tier, i) => (
              <Reveal key={tier.tier} delay={i * 0.05}>
                <TypographicPanel
                  label={tier.tier}
                  meta={tier.vehicles.join(" · ")}
                  className="aspect-[4/3] sm:aspect-[16/9]"
                />
              </Reveal>
            ))}
          </div>
        </Section>

        <PageFinalCta
          id="final-cta-heading"
          heading="Schedule Your Ride"
          subheading="Download the PrimeKar app to schedule your trip and choose your vehicle tier in advance."
          primaryCta={{
            label: "Download the App",
            href: `/${appExperienceAnchor}`,
          }}
          secondaryCta={{ label: "Explore All Services", href: "/#services" }}
        />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
