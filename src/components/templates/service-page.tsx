import { Header } from "@/components/chrome/header";
import { Footer } from "@/components/chrome/footer";
import { PageHero } from "@/components/templates/page-hero";
import { PageFaq } from "@/components/templates/page-faq";
import { PageFinalCta } from "@/components/templates/page-final-cta";
import { breadcrumbJsonLd } from "@/lib/seo";

export type ServicePageContent = {
  path: string;
  eyebrow: string;
  h1: string;
  subheading: string;
  breadcrumbLabel: string;
  quickFacts: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  faqHeading: string;
  faqs: { q: string; a: string }[];
  finalCta: { heading: string; subheading: string };
};

/**
 * Data-driven service-page template (docs/component-map.md — ServicePage;
 * docs/page-template-review.md PT-003). The hero, breadcrumb, quick facts,
 * FAQ and final CTA are the genuinely shared shell across every service
 * page; page-specific content (how it works, differentiators, etc.) is
 * composed by the caller as `children` using the same shared primitives —
 * this keeps section content and ordering page-specific rather than forcing
 * every service into an identical body (v7 §17 thin/duplicate-page rule).
 */
function ServicePage({
  content,
  children,
}: {
  content: ServicePageContent;
  children: React.ReactNode;
}) {
  const { path, breadcrumbLabel } = content;
  const breadcrumbLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: breadcrumbLabel, path },
  ]);

  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow={content.eyebrow}
          h1={content.h1}
          subheading={content.subheading}
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: breadcrumbLabel },
          ]}
          quickFacts={content.quickFacts}
          primaryCta={content.primaryCta}
          secondaryCta={content.secondaryCta}
        />
        {children}
        <PageFaq
          id="faq-heading"
          heading={content.faqHeading}
          faqs={content.faqs}
          tone="base"
        />
        <PageFinalCta
          id="final-cta-heading"
          heading={content.finalCta.heading}
          subheading={content.finalCta.subheading}
          primaryCta={content.primaryCta}
          secondaryCta={content.secondaryCta}
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

export { ServicePage };
