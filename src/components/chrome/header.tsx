import { Logo } from "@/components/primitives/logo";
import { Container } from "@/components/primitives/container";
import { LinkButton } from "@/components/ui/link-button";
import { DesktopNav } from "@/components/chrome/desktop-nav";
import { MobileNav } from "@/components/chrome/mobile-nav";

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--pk-gold)]/15 bg-[var(--pk-teal)]">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-20">
        <Logo priority />
        <DesktopNav />
        <div className="flex items-center gap-2">
          <LinkButton
            size="cta"
            className="hidden lg:inline-flex"
            href="/download-app/"
          >
            Download the App
          </LinkButton>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

export { Header };
