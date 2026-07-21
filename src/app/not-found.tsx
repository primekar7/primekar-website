import type { Metadata } from "next";
import { Header } from "@/components/chrome/header";
import { Footer } from "@/components/chrome/footer";
import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { LinkButton } from "@/components/ui/link-button";

// v7 §17 technical fallback requirements: accessible not-found UI, recovery
// links to Home/Services/Contact, no stack traces or internal paths,
// excluded from indexing. Uses the framework's own not-found convention
// rather than redirecting every unknown URL to the homepage.
export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Section
          tone="base"
          scale="feature"
          aria-labelledby="not-found-heading"
        >
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
            <HeadingGroup
              align="center"
              eyebrow="404"
              headingAs="h1"
              size="feature"
              heading={<span id="not-found-heading">Page Not Found</span>}
              subheading="The page you're looking for doesn't exist or may have moved."
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <LinkButton size="cta" href="/">
                Back to Home
              </LinkButton>
              <LinkButton size="cta" variant="outline" href="/#services">
                Explore Services
              </LinkButton>
              <LinkButton size="cta" variant="outline" href="/contact/">
                Contact PrimeKar
              </LinkButton>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
