import NextLink from "next/link";
import { Container } from "@/components/primitives/container";
import { Logo } from "@/components/primitives/logo";
import { footerColumns, nap, appLinks } from "@/lib/content/site";
import { publicRoutes } from "@/lib/site-routes";

// Structured finish (docs/homepage-review.md F-024 §11): tracked column
// headings with a hairline underline, a grounded darker surface distinct
// from the page content above, and improved link contrast/hover affordance.
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--pk-hairline)] bg-[var(--pk-teal-deep)]">
      <Container className="py-14 sm:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2 lg:col-span-2">
            <Logo className="h-9 w-[150px]" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[var(--pk-cream)]/70">
              Premium pre-scheduled transportation in Calgary and Alberta.
            </p>
            <ul className="mt-6 flex flex-col gap-2.5 text-sm text-[var(--pk-cream)]/70">
              <li>
                <a
                  href={nap.emailHref}
                  className="transition-colors hover:text-[var(--pk-gold)]"
                >
                  {nap.email}
                </a>
              </li>
              <li>
                <a
                  href={nap.phoneHref}
                  className="transition-colors hover:text-[var(--pk-gold)]"
                >
                  {nap.phoneDisplay}
                </a>
              </li>
              <li>{nap.locality}</li>
            </ul>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="border-b border-[var(--pk-hairline)] pb-2.5 text-xs font-semibold tracking-[0.08em] text-[var(--pk-warm-white)] uppercase">
                {column.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <NextLink
                      href={link.href}
                      prefetch={
                        publicRoutes.includes(link.href) ? undefined : false
                      }
                      className="text-sm text-[var(--pk-cream)]/70 transition-colors hover:text-[var(--pk-gold)]"
                    >
                      {link.label}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Get the app">
            <h2 className="border-b border-[var(--pk-hairline)] pb-2.5 text-xs font-semibold tracking-[0.08em] text-[var(--pk-warm-white)] uppercase">
              Get the App
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a
                  href={appLinks.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--pk-cream)]/70 transition-colors hover:text-[var(--pk-gold)]"
                >
                  App Store
                </a>
              </li>
              <li>
                <a
                  href={appLinks.googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--pk-cream)]/70 transition-colors hover:text-[var(--pk-gold)]"
                >
                  Google Play
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-[var(--pk-hairline)] pt-6 text-sm text-[var(--pk-cream)]/60">
          &copy; {year} PrimeKar. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
