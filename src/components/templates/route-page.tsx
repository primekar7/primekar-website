import NextLink from "next/link";
import { Header } from "@/components/chrome/header";
import { Footer } from "@/components/chrome/footer";
import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { PageHero } from "@/components/templates/page-hero";
import { PageFaq } from "@/components/templates/page-faq";
import { PageFinalCta } from "@/components/templates/page-final-cta";
import { breadcrumbJsonLd } from "@/lib/seo";
import { albertaRoutes } from "@/lib/content/site";

export type RoutePageContent = {
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
 * Data-driven route-page template (docs/component-map.md — RoutePage;
 * docs/page-template-review.md PT-003/PT-011). Shares the ServicePage shell
 * shape (hero/facts/FAQ/final-CTA) but adds a related-routes cross-link
 * section generated from `albertaRoutes` — it only ever lists routes that
 * are actually built, so it can never disclose an "unbuilt" state and
 * cannot drift out of sync with what routes actually exist.
 */
function RoutePage({
  content,
  builtRoutePaths,
  children,
}: {
  content: RoutePageContent;
  /** Paths of route pages that exist right now, so cross-links never point at an unbuilt page. */
  builtRoutePaths: string[];
  children: React.ReactNode;
}) {
  const { path, breadcrumbLabel } = content;
  const breadcrumbLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: breadcrumbLabel, path },
  ]);
  const otherRoutes = albertaRoutes.filter(
    (route) => route.href !== path && builtRoutePaths.includes(route.href),
  );

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
        />
        {/* Always rendered, regardless of how many sibling route pages
            exist yet, so the section-tone rhythm (docs/design-system.md
            §1a) never depends on build progress. Content varies instead of
            the section appearing/disappearing: real cards once siblings
            exist, a plain factual sentence otherwise — never a
            build-state disclosure (docs/page-template-review.md PT-011). */}
        <Section
          tone="base"
          scale="standard"
          aria-labelledby="related-routes-heading"
        >
          <HeadingGroup
            eyebrow="Other routes"
            headingAs="h2"
            heading={
              <span id="related-routes-heading">
                Other Private Alberta Routes
              </span>
            }
          />
          {otherRoutes.length > 0 ? (
            <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {otherRoutes.map((route) => (
                <li key={route.href}>
                  <NextLink
                    href={route.href}
                    className="flex min-h-11 items-center border border-[var(--pk-hairline)] px-5 text-sm font-medium text-[var(--pk-warm-white)] transition-colors hover:border-[var(--pk-hairline-strong)] hover:text-[var(--pk-gold)] focus-visible:ring-3 focus-visible:ring-[var(--pk-gold)]/50 focus-visible:outline-none"
                  >
                    {route.name}
                  </NextLink>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
              PrimeKar schedules private trips across Alberta.{" "}
              <NextLink
                href="/#routes-heading"
                className="font-semibold text-[var(--pk-warm-white)] underline decoration-[var(--pk-hairline-strong)] underline-offset-4 hover:text-[var(--pk-gold)] focus-visible:ring-3 focus-visible:ring-[var(--pk-gold)]/50 focus-visible:outline-none"
              >
                See all Alberta routes
              </NextLink>
              .
            </p>
          )}
        </Section>
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

export { RoutePage };
