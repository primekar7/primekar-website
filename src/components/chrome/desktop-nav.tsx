"use client";

import * as React from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";
import { primaryNav } from "@/lib/content/site";
import { publicRoutes } from "@/lib/site-routes";

/**
 * Lightweight custom dropdown — no Base UI NavigationMenu (docs/page-
 * template-review.md PT-006: NavigationMenu + Dialog were the largest
 * avoidable chunk in the initial JS, ~70KB gzip, for pages with otherwise
 * zero interactivity). Click/Enter/Space to open (not hover-only, per
 * docs/test-matrix.md "no hover-only functionality"); Escape closes and
 * returns focus to the trigger; a document click outside closes it.
 */
function NavDropdown({
  label,
  children,
}: {
  label: string;
  children: NavChild[];
}) {
  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLLIElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const panelId = React.useId();

  React.useEffect(() => {
    if (!open) return;
    function onDocPointerDown(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("mousedown", onDocPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <li ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 items-center gap-1 rounded-lg px-2.5 py-1.5 text-sm font-medium text-[var(--pk-warm-white)] outline-none hover:bg-[var(--pk-teal-elevated)] hover:text-[var(--pk-cream)] focus-visible:ring-3 focus-visible:ring-[var(--pk-gold)]/50"
      >
        {label}
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className={cn("size-3.5 transition-transform", open && "rotate-180")}
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
      </button>
      {open ? (
        <ul
          id={panelId}
          role="menu"
          aria-label={label}
          className="absolute top-full left-0 z-10 mt-2 min-w-[260px] rounded-lg border border-[var(--pk-hairline)] bg-[var(--pk-teal-elevated)] p-1 shadow-lg"
        >
          {children.map((child) => (
            <li key={child.href} role="none">
              <NextLink
                role="menuitem"
                href={child.href}
                onClick={() => setOpen(false)}
                // Unbuilt routes are still linked (approved sitemap, tracked
                // production blocker — docs/page-template-review.md PT-013)
                // but not prefetched, so they don't generate the expected
                // 404 prefetch noise Next.js would otherwise request eagerly.
                prefetch={publicRoutes.includes(child.href) ? undefined : false}
                className="flex min-h-11 items-center rounded-md px-3 py-2 text-sm text-[var(--pk-warm-white)] outline-none hover:bg-[var(--pk-teal-deep)] hover:text-[var(--pk-cream)] focus-visible:ring-3 focus-visible:ring-[var(--pk-gold)]/50"
              >
                {child.label}
              </NextLink>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

type NavChild = { label: string; href: string };

function DesktopNav() {
  return (
    <nav aria-label="Primary" className="hidden lg:flex">
      <ul className="flex items-center gap-1">
        {primaryNav.map((item) =>
          item.children ? (
            <NavDropdown key={item.label} label={item.label}>
              {item.children}
            </NavDropdown>
          ) : (
            <li key={item.label}>
              <NextLink
                href={item.href!}
                prefetch={publicRoutes.includes(item.href!) ? undefined : false}
                className="flex h-9 items-center rounded-lg px-2.5 py-1.5 text-sm font-medium text-[var(--pk-warm-white)] outline-none hover:bg-[var(--pk-teal-elevated)] hover:text-[var(--pk-cream)] focus-visible:ring-3 focus-visible:ring-[var(--pk-gold)]/50"
              >
                {item.label}
              </NextLink>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}

export { DesktopNav };
