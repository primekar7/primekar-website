import { Logo } from "@/components/primitives/logo";
import { Container } from "@/components/primitives/container";
import { LinkButton } from "@/components/ui/link-button";
import { DesktopNav } from "@/components/chrome/desktop-nav";
import { MobileNav } from "@/components/chrome/mobile-nav";

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--pk-gold)]/15 bg-[var(--pk-teal)]">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[88px]">
        <Logo priority className="max-[359px]:h-7 max-[359px]:w-[112px]" />
        <DesktopNav />
        <div className="flex items-center gap-1.5 sm:gap-2">
          <LinkButton
            size="cta"
            className="hidden lg:inline-flex"
            href="/download-app/"
          >
            Download the App
          </LinkButton>
          <LinkButton
            size="cta"
            className="inline-flex h-9 min-w-11 px-3 text-xs sm:h-10 sm:px-4 sm:text-sm lg:hidden"
            href="/download-app/"
          >
            <span className="max-[359px]:hidden">Download the App</span>
            <span className="hidden max-[359px]:inline">Download</span>
          </LinkButton>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

export { Header };
