import { cn } from "@/lib/utils";

/**
 * Composed brand-typography surface used in place of photography that has
 * not been supplied/approved yet (docs/media-inventory.md — fleet and
 * Alberta destination imagery outstanding). Deliberately designed rather
 * than a placeholder gradient (docs/homepage-review.md F-024 §8): a large
 * decorative initial letterform, a gold hairline edge, and a two-line
 * typographic lockup (name + optional factual meta line). Purely
 * typographic/graphic — no photographic or fabricated imagery. Swap for
 * `AspectImage` once real photography is approved; the lockup content
 * (label/meta) can move directly into the image's caption at that point.
 */
function TypographicPanel({
  label,
  meta,
  className,
}: {
  label: string;
  meta?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-end overflow-hidden border border-[var(--pk-hairline)] p-5 sm:p-6",
        className,
      )}
      style={{
        backgroundImage:
          "linear-gradient(150deg, var(--pk-teal-elevated) 0%, var(--pk-teal) 78%)",
      }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 -right-3 font-heading text-[6.5rem] leading-none font-semibold text-[var(--pk-gold)]/[0.09] select-none sm:-top-8 sm:-right-4 sm:text-[9rem]"
      >
        {label.charAt(0)}
      </span>
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 h-px w-12 bg-[var(--pk-hairline-strong)]"
      />
      <div className="relative flex flex-col gap-1">
        <span className="font-heading text-xl font-semibold tracking-tight text-[var(--pk-warm-white)] sm:text-2xl">
          {label}
        </span>
        {meta ? (
          // warm-white, not gold — the panel's own background gradient
          // ranges from elevated to base teal, and gold-on-elevated
          // measures ~3.3:1, below WCAG AA for normal text
          // (docs/homepage-review.md F-008)
          <span className="text-xs font-semibold tracking-[0.06em] text-[var(--pk-warm-white)] uppercase">
            {meta}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export { TypographicPanel };
