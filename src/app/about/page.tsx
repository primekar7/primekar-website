import type { Metadata } from "next";
import NextLink from "next/link";
import { Header } from "@/components/chrome/header";
import { Footer } from "@/components/chrome/footer";
import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { Breadcrumb } from "@/components/primitives/breadcrumb";
import { PageFinalCta } from "@/components/templates/page-final-cta";
import { appExperienceAnchor } from "@/lib/content/site";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

const path = "/about/";

export const metadata: Metadata = buildMetadata({
  title: "About PrimeKar",
  description:
    "PrimeKar provides premium, pre-scheduled transportation in Calgary and Alberta — planned in advance through the app, not requested on demand.",
  path,
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "About PrimeKar", path },
]);

// Content is deliberately conservative: only facts already verified and
// approved elsewhere on the site (docs/decision-log.md D-010). No founding
// date, "first in Calgary," or other unsupported claims (Section 9).
export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-[var(--pk-teal-elevated)] pt-10 pb-14 sm:pt-14 sm:pb-20">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "About PrimeKar" },
              ]}
            />
            <HeadingGroup
              eyebrow="About"
              size="feature"
              headingAs="h1"
              heading="Built in Calgary for Rides That Need to Be Planned"
              subheading="PrimeKar provides premium, pre-scheduled transportation in Calgary and Alberta — planned in advance through the app, not requested on demand."
            />
          </div>
        </section>

        <Section
          tone="base"
          scale="standard"
          aria-labelledby="approach-heading"
        >
          <HeadingGroup
            eyebrow="Our approach"
            headingAs="h2"
            heading={
              <span id="approach-heading">Pre-Scheduled, Not On-Demand</span>
            }
            subheading="Every PrimeKar trip — airport transfers, executive travel, corporate coordination and private Alberta routes — is scheduled in advance through the app and managed from booking through to completion. Rides are not requested on demand or dispatched ad hoc."
          />
        </Section>

        <Section tone="elevated" scale="feature" aria-labelledby="rwp-heading">
          <div className="mx-auto max-w-2xl border border-[var(--pk-hairline)] px-6 py-10 text-center sm:px-10 sm:py-12">
            <HeadingGroup
              align="center"
              className="mx-auto"
              eyebrow="Ride With Purpose"
              headingAs="h2"
              heading={<span id="rwp-heading">Ride With Purpose</span>}
              subheading="Ride With Purpose is PrimeKar's social-impact initiative supporting free transportation for cancer patients. It runs alongside PrimeKar's regular pre-scheduled service, using the same planning-first approach."
            />
          </div>
        </Section>

        <Section
          tone="base"
          scale="standard"
          aria-labelledby="learn-more-heading"
        >
          <HeadingGroup
            eyebrow="Learn more"
            headingAs="h2"
            heading={<span id="learn-more-heading">More About PrimeKar</span>}
          />
          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <li>
              <NextLink
                href="/how-it-works/"
                className="flex min-h-11 items-center border border-[var(--pk-hairline)] px-5 text-sm font-medium text-[var(--pk-warm-white)] transition-colors hover:border-[var(--pk-hairline-strong)] hover:text-[var(--pk-gold)] focus-visible:ring-3 focus-visible:ring-[var(--pk-gold)]/50 focus-visible:outline-none"
              >
                How It Works
              </NextLink>
            </li>
            <li>
              <NextLink
                href="/fleet/"
                className="flex min-h-11 items-center border border-[var(--pk-hairline)] px-5 text-sm font-medium text-[var(--pk-warm-white)] transition-colors hover:border-[var(--pk-hairline-strong)] hover:text-[var(--pk-gold)] focus-visible:ring-3 focus-visible:ring-[var(--pk-gold)]/50 focus-visible:outline-none"
              >
                Fleet
              </NextLink>
            </li>
            <li>
              <NextLink
                href="/contact/"
                className="flex min-h-11 items-center border border-[var(--pk-hairline)] px-5 text-sm font-medium text-[var(--pk-warm-white)] transition-colors hover:border-[var(--pk-hairline-strong)] hover:text-[var(--pk-gold)] focus-visible:ring-3 focus-visible:ring-[var(--pk-gold)]/50 focus-visible:outline-none"
              >
                Contact
              </NextLink>
            </li>
          </ul>
        </Section>

        <PageFinalCta
          id="final-cta-heading"
          heading="Schedule Your Ride"
          subheading="Download the PrimeKar app to schedule your Calgary or Alberta trip in advance."
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
