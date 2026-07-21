import type { Metadata } from "next";
import { Header } from "@/components/chrome/header";
import { Footer } from "@/components/chrome/footer";
import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { Breadcrumb } from "@/components/primitives/breadcrumb";
import { Card } from "@/components/primitives/card";
import { PageFinalCta } from "@/components/templates/page-final-cta";
import { appExperienceAnchor, nap } from "@/lib/content/site";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

const path = "/contact/";

export const metadata: Metadata = buildMetadata({
  title: "Contact PrimeKar",
  description:
    "Contact PrimeKar for corporate coordination, inquiries and support. Individual rides are scheduled in advance through the PrimeKar app.",
  path,
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Contact", path },
]);

// No production contact form (v7 §19 — a form cannot ship until its
// submission destination, privacy handling, error handling and spam
// protection are approved; none are yet). NAP only, with the approved
// scope of use (docs/decision-log.md D-009): corporate coordination,
// inquiries and support — not an immediate-dispatch channel.
export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-[var(--pk-teal-elevated)] pt-10 pb-14 sm:pt-14 sm:pb-20">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
            />
            <HeadingGroup
              eyebrow="Contact"
              size="feature"
              headingAs="h1"
              heading="Contact PrimeKar"
              subheading="Individual rides are scheduled in advance through the PrimeKar app. For corporate coordination, inquiries and support, reach PrimeKar directly below."
            />
          </div>
        </section>

        <Section tone="base" scale="standard" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="sr-only">
            Contact details
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Card>
              <p className="text-xs font-semibold tracking-[0.08em] text-[var(--pk-warm-white)] uppercase">
                Email
              </p>
              <a
                href={nap.emailHref}
                className="mt-2 flex min-h-11 items-center text-base font-semibold text-[var(--pk-cream)] hover:text-[var(--pk-gold)]"
              >
                {nap.email}
              </a>
            </Card>
            <Card>
              <p className="text-xs font-semibold tracking-[0.08em] text-[var(--pk-warm-white)] uppercase">
                Phone
              </p>
              <a
                href={nap.phoneHref}
                className="mt-2 flex min-h-11 items-center text-base font-semibold text-[var(--pk-cream)] hover:text-[var(--pk-gold)]"
              >
                {nap.phoneDisplay}
              </a>
            </Card>
            <Card>
              <p className="text-xs font-semibold tracking-[0.08em] text-[var(--pk-warm-white)] uppercase">
                Location
              </p>
              <p className="mt-2 flex min-h-11 items-center text-base font-semibold text-[var(--pk-cream)]">
                {nap.locality}
              </p>
            </Card>
          </div>
        </Section>

        <PageFinalCta
          id="final-cta-heading"
          heading="Ready to Schedule a Ride?"
          subheading="Individual trips are scheduled through the PrimeKar app rather than by contacting PrimeKar directly."
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
