import type { Metadata } from "next";
import { Header } from "@/components/chrome/header";
import { Footer } from "@/components/chrome/footer";
import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { Breadcrumb } from "@/components/primitives/breadcrumb";
import { appLinks } from "@/lib/content/site";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

const path = "/download-app/";

export const metadata: Metadata = buildMetadata({
  title: "Download the PrimeKar App",
  description:
    "Download the PrimeKar app for iPhone or Android to schedule and manage your Calgary and Alberta rides in advance.",
  path,
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Download the App", path },
]);

// Replaces the legacy JS-redirect `/DownloadApp` (docs/cta-map.md): both
// official store badges are always shown, keyboard- and screen-reader-
// accessible, with no user-agent detection, auto-redirect, or platform
// hidden from any visitor (v7 §19 "keep both store choices accessible").
export default function DownloadAppPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-[var(--pk-teal-elevated)] pt-10 pb-14 sm:pt-14 sm:pb-20">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Download the App" },
              ]}
            />
            <HeadingGroup
              eyebrow="The app"
              size="feature"
              headingAs="h1"
              heading="Schedule and Manage Your Ride with the PrimeKar App"
              subheading="Available on iPhone and Android. Schedule your pickup or drop-off details ahead of time, review your trip before pickup, and manage it through to completion."
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={appLinks.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 min-w-11 items-center justify-center rounded-full bg-[var(--pk-gold)] px-6 text-base font-semibold text-[var(--pk-teal)] focus-visible:ring-3 focus-visible:ring-[var(--pk-gold)]/50 focus-visible:outline-none"
              >
                App Store
              </a>
              <a
                href={appLinks.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-[var(--pk-gold)] px-6 text-base font-semibold text-[var(--pk-warm-white)] focus-visible:ring-3 focus-visible:ring-[var(--pk-gold)]/50 focus-visible:outline-none"
              >
                Google Play
              </a>
            </div>
          </div>
        </section>

        <Section
          tone="base"
          scale="standard"
          aria-labelledby="capabilities-heading"
        >
          <HeadingGroup
            eyebrow="What you can do"
            headingAs="h2"
            heading={<span id="capabilities-heading">In the App</span>}
          />
          <ul className="mt-8 flex flex-col divide-y divide-[var(--pk-hairline)] border-y border-[var(--pk-hairline)]">
            {[
              "Schedule your pickup or drop-off details ahead of time.",
              "Review your trip details before pickup.",
              "Manage the trip through to completion.",
            ].map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 py-3.5 text-sm leading-relaxed text-[var(--pk-cream)] sm:text-base"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 size-1.5 shrink-0 rounded-full bg-[var(--pk-gold)]"
                />
                {c}
              </li>
            ))}
          </ul>
        </Section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
