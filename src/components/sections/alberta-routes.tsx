import NextLink from "next/link";
import { Section } from "@/components/primitives/section";
import { HeadingGroup } from "@/components/primitives/heading-group";
import { TypographicPanel } from "@/components/primitives/typographic-panel";
import { Reveal } from "@/components/primitives/reveal";
import { albertaRoutes } from "@/lib/content/site";

// No approved Alberta destination photography exists yet
// (docs/media-inventory.md — Banff/Canmore/Lake Louise/Jasper imagery
// outstanding). Cards use the approved typographic brand treatment instead
// of stock or generated destination photos. Card sizing follows the Nelson
// Travel hierarchy pattern (Banff dominant; Canmore + Lake Louise paired;
// Jasper wide) per docs/component-map.md. Mobile aspect ratios compacted to
// a uniform 16:9 (docs/homepage-review.md F-024 §8 / F-011) — the Nelson
// hierarchy only differentiates sizes from `sm:` upward.
//
// The dominant card is sized with an explicit aspect ratio rather than
// `row-span-2` + `aspect-auto` — the row-span approach collapsed to a
// sliver because nothing else occupied its spanned grid rows to establish
// their height (verified during the F-024 visual pass). An explicit,
// taller-than-paired aspect ratio is a more robust way to read as
// "dominant" at full width.
const sizeClasses: Record<(typeof albertaRoutes)[number]["size"], string> = {
  dominant: "aspect-[2/1] sm:col-span-2 sm:aspect-[2/1]",
  paired: "aspect-[2/1] sm:aspect-[4/3]",
  wide: "aspect-[2/1] sm:col-span-2 sm:aspect-[21/9]",
};

function AlbertaRoutes() {
  return (
    <Section tone="base" scale="standard" aria-labelledby="routes-heading">
      <HeadingGroup
        eyebrow="Private routes"
        headingAs="h2"
        heading={<span id="routes-heading">Private Alberta Routes</span>}
        subheading="Scheduled private trips between Calgary and Banff, Canmore, Lake Louise and Jasper."
      />
      <div className="mt-8 grid sm:mt-10 grid-cols-1 gap-4 sm:grid-cols-2">
        {albertaRoutes.map((route, i) => (
          <Reveal
            key={route.href}
            delay={i * 0.05}
            className={sizeClasses[route.size]}
          >
            <NextLink
              href={route.href}
              className="group block h-full focus-visible:ring-3 focus-visible:ring-[var(--pk-gold)]/50 focus-visible:outline-none"
            >
              <TypographicPanel
                label={route.name}
                meta="Private route"
                className="h-full transition-[border-color] duration-[var(--pk-dur-base)] group-hover:border-[var(--pk-hairline-strong)]"
              />
            </NextLink>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export { AlbertaRoutes };
