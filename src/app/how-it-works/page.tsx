import type { Metadata } from "next";
import { Header } from "@/components/chrome/header";
import { Footer } from "@/components/chrome/footer";
import { Breadcrumb } from "@/components/primitives/breadcrumb";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { PageSteps } from "@/components/sections/page-steps";
import { PageFinalCta } from "@/components/templates/page-final-cta";
import { appExperienceAnchor } from "@/lib/content/site";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

const path = "/how-it-works/";

export const metadata: Metadata = buildMetadata({
  title: "How PrimeKar Works",
  description:
    "Schedule your PrimeKar ride in three steps: schedule, confirm and ride — all managed through the app.",
  path,
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "How It Works", path },
]);

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-[var(--pk-teal-elevated)] pt-10 pb-14 sm:pt-14 sm:pb-20">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "How It Works" }]}
            />
            <HeadingGroup
              eyebrow="Process"
              size="feature"
              headingAs="h1"
              heading="Schedule Your PrimeKar Ride in Three Steps"
              subheading="Every PrimeKar trip — airport, executive, corporate or a private Alberta route — is scheduled, confirmed and completed the same way, through the app."
            />
          </div>
        </section>

        <PageSteps
          id="steps-heading"
          eyebrow="The process"
          heading="Schedule, Confirm, Ride"
          tone="base"
          steps={[
            {
              title: "Schedule",
              desc: "Set your pickup or drop-off details in the app ahead of time.",
            },
            {
              title: "Confirm",
              desc: "Review your trip details in the app before your ride.",
            },
            {
              title: "Ride",
              desc: "Your driver arrives for your scheduled pickup.",
            },
          ]}
        />

        <PageFinalCta
          id="final-cta-heading"
          heading="Get Started"
          subheading="Download the PrimeKar app to schedule your first trip."
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
