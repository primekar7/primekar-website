import type { Metadata } from "next";
import { Header } from "@/components/chrome/header";
import { Footer } from "@/components/chrome/footer";
import { Breadcrumb } from "@/components/primitives/breadcrumb";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { Section } from "@/components/primitives/section";
import { FaqAccordion } from "@/components/primitives/faq-accordion";
import { PageFinalCta } from "@/components/templates/page-final-cta";
import { appExperienceAnchor } from "@/lib/content/site";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

const path = "/faq/";

export const metadata: Metadata = buildMetadata({
  title: "PrimeKar FAQ",
  description:
    "Frequently asked questions about PrimeKar's pre-scheduled transportation in Calgary and Alberta.",
  path,
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "FAQ", path },
]);

// General, site-wide questions only — route-specific questions live on
// their own route pages and are not duplicated here (Blueprint p23,
// docs/seo-map.md "Route/airport FAQ split").
const faqs = [
  {
    q: "What is PrimeKar?",
    a: "PrimeKar provides premium, pre-scheduled transportation in Calgary and Alberta — airport transfers, executive and corporate travel, and private routes to Banff, Canmore, Lake Louise and Jasper.",
  },
  {
    q: "Do I need the app to schedule a ride?",
    a: "Yes. Individual PrimeKar trips are scheduled and managed through the PrimeKar app, available on iPhone and Android.",
  },
  {
    q: "Is PrimeKar an on-demand or dispatch service?",
    a: "No. PrimeKar is a pre-scheduled service — every trip is planned in advance through the app rather than requested on demand.",
  },
  {
    q: "What's the difference between Executive and Corporate Transportation?",
    a: "Executive Transportation is scheduled by an individual for their own travel. Corporate Transportation is coordinated by an organization for its team or guests.",
  },
  {
    q: "Which vehicles does PrimeKar use?",
    a: "PrimeKar offers two vehicle tiers: Executive (Lexus, Tesla, Lincoln) and Elite XL (Chevrolet Suburban).",
  },
  {
    q: "How do I reach PrimeKar for corporate coordination or support?",
    a: "See the Contact page for PrimeKar's email and phone details.",
  },
];

export default function FaqPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-[var(--pk-teal-elevated)] pt-10 pb-14 sm:pt-14 sm:pb-20">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
            />
            <HeadingGroup
              eyebrow="Questions"
              size="feature"
              headingAs="h1"
              heading="PrimeKar Frequently Asked Questions"
            />
          </div>
        </section>

        <Section tone="base" scale="standard" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="sr-only">
            Frequently asked questions
          </h2>
          <FaqAccordion items={faqs} />
        </Section>

        <PageFinalCta
          id="final-cta-heading"
          heading="Ready to Schedule a Ride?"
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
