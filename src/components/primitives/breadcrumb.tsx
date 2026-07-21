import NextLink from "next/link";

type Crumb = { label: string; href?: string };

function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1">
              {item.href && !isLast ? (
                <NextLink
                  href={item.href}
                  className="flex min-h-11 items-center rounded-md px-1 transition-colors hover:text-[var(--pk-gold)] focus-visible:ring-3 focus-visible:ring-[var(--pk-gold)]/50 focus-visible:outline-none"
                >
                  {item.label}
                </NextLink>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className="flex min-h-11 items-center px-1"
                >
                  {item.label}
                </span>
              )}
              {!isLast ? (
                <span
                  aria-hidden="true"
                  className="text-[var(--pk-hairline-strong)]"
                >
                  /
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export { Breadcrumb };
