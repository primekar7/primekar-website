"use client";

import { Header } from "@/components/chrome/header";
import { Footer } from "@/components/chrome/footer";
import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { LinkButton } from "@/components/ui/link-button";
import { Button } from "@/components/ui/button";

// v7 §17 technical fallback requirements: accessible runtime-error
// fallback, recovery links, no stack traces/paths/secrets exposed. `error`
// is intentionally not rendered or logged to the DOM/console here.
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <Header />
      <main id="main-content">
        <Section tone="base" scale="feature" aria-labelledby="error-heading">
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
            <HeadingGroup
              align="center"
              eyebrow="Error"
              headingAs="h1"
              size="feature"
              heading={<span id="error-heading">Something Went Wrong</span>}
              subheading="An unexpected error occurred. You can try again, or return to the homepage."
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="cta" onClick={reset}>
                Try Again
              </Button>
              <LinkButton size="cta" variant="outline" href="/">
                Back to Home
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
