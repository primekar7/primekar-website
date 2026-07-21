/**
 * Native <details>/<summary> disclosure — zero JavaScript, keyboard- and
 * screen-reader-operable by default (docs/component-map.md requires a
 * Disclosure/Accordion primitive for FAQ; docs/page-template-review.md
 * PT-016 found the templates used an always-expanded <dl> instead).
 */
function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mt-8 flex flex-col divide-y divide-[var(--pk-hairline)] border-y border-[var(--pk-hairline)]">
      {items.map((item) => (
        <details key={item.q} className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-heading text-base font-semibold text-[var(--pk-warm-white)] outline-none focus-visible:ring-3 focus-visible:ring-[var(--pk-gold)]/50 [&::-webkit-details-marker]:hidden">
            {item.q}
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="size-4 shrink-0 text-[var(--pk-gold)] transition-transform duration-[var(--pk-dur-base)] group-open:rotate-180"
            >
              <path
                d="M5 7.5 10 12.5 15 7.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </summary>
          <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}

export { FaqAccordion };
