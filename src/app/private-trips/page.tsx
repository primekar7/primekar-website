import type { Metadata } from "next";
import NextLink from "next/link";
import { Header } from "@/components/chrome/header";
import { Footer } from "@/components/chrome/footer";
import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { Breadcrumb } from "@/components/primitives/breadcrumb";
import { TypographicPanel } from "@/components/primitives/typographic-panel";
import { Reveal } from "@/components/primitives/reveal";
import { LinkButton } from "@/components/ui/link-button";
import { PageFinalCta } from "@/components/templates/page-final-cta";
import { albertaRoutes, appExperienceAnchor } from "@/lib/content/site";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

const path = "/private-trips/";

export const metadata: Metadata = buildMetadata({
  title: "Private Trips from Calgary",
  description:
    "Schedule private, pre-scheduled transportation from Calgary to Banff, Canmore, Lake Louise and Jasper through the PrimeKar app.",
  path,
});

const sizeClasses: Record<(typeof albertaRoutes)[number]["size"], string> = {
  dominant: "aspect-[2/1] sm:col-span-2 sm:aspect-[2/1]",
  paired: "aspect-[2/1] sm:aspect-[4/3]",
  wide: "aspect-[2/1] sm:col-span-2 sm:aspect-[21/9]",
};

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Private Trips", path },
]);

// Hub page for the four route pages (docs/sitemap.md — distinct from each
// route's own page, an overview + entry point rather than a fifth route
// template instance).
export default function PrivateTripsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-[var(--pk-teal-elevated)] pt-10 pb-14 sm:pt-14 sm:pb-20">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "Private Trips" }]}
            />
            <HeadingGroup
              eyebrow="Private trips"
              size="feature"
              headingAs="h1"
              heading="Private Transportation from Calgary to Alberta Destinations"
              subheading="Schedule a private, pre-scheduled trip between Calgary and Banff, Canmore, Lake Louise or Jasper through the PrimeKar app."
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <LinkButton size="cta" href={`/${appExperienceAnchor}`}>
                Download the App
              </LinkButton>
            </div>
          </div>
        </section>

        <Section tone="base" scale="standard" aria-labelledby="routes-heading">
          <HeadingGroup
            eyebrow="Routes"
            headingAs="h2"
            heading={<span id="routes-heading">Choose a Route</span>}
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2">
            {albertaRoutes.map((route, i) => (
              <Reveal
                key={route.href}
                delay={i * 0.05}
                className={sizeClasses[route.size]}
              >
                <NextLink
                  href={route.href}
                  className="group block h-full focus-visible:ring-3 focus-visible:ring-[var(--pk-gold)]/50 focus-visible:outline-none"
                >
                  <TypographicPanel
                    label={route.name}
                    meta="Private route"
                    className="h-full transition-[border-color] duration-[var(--pk-dur-base)] group-hover:border-[var(--pk-hairline-strong)]"
                  />
                </NextLink>
              </Reveal>
            ))}
          </div>
        </Section>

        <PageFinalCta
          id="final-cta-heading"
          heading="Plan Your Private Trip"
          subheading="Download the PrimeKar app to schedule a private trip to your chosen Alberta destination in advance."
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
