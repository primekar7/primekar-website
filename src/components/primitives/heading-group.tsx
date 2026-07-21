import { cn } from "@/lib/utils";

/**
 * Section heading block. Type scale strengthened and tracking added per
 * docs/homepage-review.md F-024 criterion E (display type under-scaled,
 * subheads running long). Subheading measure is capped in `ch` units so it
 * stays readable regardless of font-size changes at any breakpoint.
 */
function HeadingGroup({
  eyebrow,
  heading,
  subheading,
  align = "left",
  headingAs: HeadingTag = "h2",
  size = "standard",
  className,
}: {
  eyebrow?: string;
  heading: React.ReactNode;
  subheading?: React.ReactNode;
  align?: "left" | "center";
  headingAs?: React.ElementType;
  /** "feature" is reserved for the highest-priority sections (Airport, Corporate, App, Final CTA). */
  size?: "standard" | "feature";
  className?: string;
}) {
  return (
    <div
      data-slot="heading-group"
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        // Text colour is warm-white, not gold: measured gold-on-elevated
        // (~3.3:1) and gold-on-feature (~2.7:1) both fail WCAG AA for
        // normal-size text (docs/homepage-review.md F-008 measurement
        // during the F-024 pass). The gold hairline mark carries the
        // brand-accent role instead — decorative marks aren't subject to
        // text-contrast requirements.
        <span className="flex items-center gap-3 text-sm font-semibold tracking-[0.08em] text-[var(--pk-warm-white)] uppercase">
          <span
            aria-hidden="true"
            className="h-px w-8 bg-[var(--pk-hairline-strong)]"
          />
          {eyebrow}
        </span>
      ) : null}
      <HeadingTag
        className={cn(
          "font-heading leading-[1.05] font-semibold tracking-[-0.015em] text-balance",
          size === "feature"
            ? "text-4xl sm:text-5xl lg:text-6xl"
            : "text-3xl sm:text-4xl lg:text-5xl",
        )}
      >
        {heading}
      </HeadingTag>
      {subheading ? (
        <p className="max-w-[58ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subheading}
        </p>
      ) : null}
    </div>
  );
}

export { HeadingGroup };
