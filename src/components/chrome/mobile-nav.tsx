"use client";

import * as React from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/primitives/logo";
import { primaryNav } from "@/lib/content/site";
import { publicRoutes } from "@/lib/site-routes";

function MobileNavGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const panelId = React.useId();
  return (
    <div className="border-b border-[var(--pk-gold)]/15">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left text-lg font-semibold text-[var(--pk-warm-white)] focus-visible:ring-3 focus-visible:ring-[var(--pk-gold)]/50 focus-visible:outline-none"
      >
        {label}
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className={cn(
            "size-5 text-[var(--pk-gold)] transition-transform",
            open && "rotate-180",
          )}
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
        <ul id={panelId} className="flex flex-col gap-1 pb-4 pl-2">
          {children}
        </ul>
      ) : null}
    </div>
  );
}

/**
 * Native <dialog> instead of Base UI's Dialog primitive (docs/page-
 * template-review.md PT-006 / PT-014). showModal() gives a real top-layer
 * modal with a built-in focus trap and Escape-to-close for free — Base UI's
 * own trap had already proven unreliable and was being bypassed with manual
 * `inert` (docs/design-system.md §8); the browser's native modal behaviour
 * makes that workaround unnecessary rather than replacing one workaround
 * with another.
 */
function MobileNav() {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const [open, setOpen] = React.useState(false);

  // The HTML spec's "hide a modal dialog" steps queue a task to remove the
  // dialog from the top layer, which can move focus after this callback
  // already returns — a same-tick or even rAF-timed `.focus()` runs before
  // that queued task and gets overwritten. A macrotask (setTimeout) is
  // ordered after it.
  const restoreFocusToTrigger = React.useCallback(() => {
    setTimeout(() => triggerRef.current?.focus(), 50);
  }, []);

  const close = React.useCallback(() => {
    dialogRef.current?.close();
    setOpen(false);
    restoreFocusToTrigger();
  }, [restoreFocusToTrigger]);

  React.useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    // Covers the native Escape-to-close path, which closes the dialog
    // without going through the `close` callback above.
    function onClose() {
      setOpen(false);
      restoreFocusToTrigger();
    }
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, [restoreFocusToTrigger]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label="Open menu"
        onClick={() => {
          setOpen(true);
          dialogRef.current?.showModal();
        }}
        className="flex size-11 items-center justify-center rounded-lg text-[var(--pk-warm-white)] outline-none hover:bg-[var(--pk-teal-elevated)] focus-visible:ring-3 focus-visible:ring-[var(--pk-gold)]/50 lg:hidden"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6">
          <path
            d="M4 6h16M4 12h16M4 18h16"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Mobile navigation"
        onCancel={(e) => {
          // Let the dialog's own default Escape handling close it normally
          // (fires the `close` event above) rather than intercepting it.
          e.preventDefault();
          close();
        }}
        onClick={(e) => {
          // Click on the ::backdrop lands directly on the <dialog> element
          // itself (the panel content stops propagation via its own click).
          if (e.target === dialogRef.current) close();
        }}
        className={cn(
          "m-0 h-dvh max-h-none w-full max-w-sm bg-[var(--pk-teal)] p-0 backdrop:bg-black/40",
          "open:flex open:flex-col",
          "fixed inset-y-0 right-0 left-auto",
        )}
      >
        {open ? (
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex h-full flex-col overflow-y-auto p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                aria-label="Close menu"
                onClick={close}
                className="flex size-11 items-center justify-center rounded-lg text-[var(--pk-warm-white)] outline-none hover:bg-[var(--pk-teal-elevated)] focus-visible:ring-3 focus-visible:ring-[var(--pk-gold)]/50"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav aria-label="Primary" className="mt-6 flex-1">
              <ul className="flex flex-col">
                {primaryNav.map((item) =>
                  item.children ? (
                    <li key={item.label}>
                      <MobileNavGroup label={item.label}>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <NextLink
                              href={child.href}
                              onClick={close}
                              prefetch={
                                publicRoutes.includes(child.href)
                                  ? undefined
                                  : false
                              }
                              className="block min-h-11 rounded-lg px-3 py-2.5 text-base text-[var(--pk-cream)] hover:bg-[var(--pk-teal-elevated)] focus-visible:ring-3 focus-visible:ring-[var(--pk-gold)]/50 focus-visible:outline-none"
                            >
                              {child.label}
                            </NextLink>
                          </li>
                        ))}
                      </MobileNavGroup>
                    </li>
                  ) : (
                    <li
                      key={item.label}
                      className="border-b border-[var(--pk-gold)]/15"
                    >
                      <NextLink
                        href={item.href!}
                        onClick={close}
                        prefetch={
                          publicRoutes.includes(item.href!) ? undefined : false
                        }
                        className="block min-h-11 py-4 text-lg font-semibold text-[var(--pk-warm-white)] focus-visible:ring-3 focus-visible:ring-[var(--pk-gold)]/50 focus-visible:outline-none"
                      >
                        {item.label}
                      </NextLink>
                    </li>
                  ),
                )}
              </ul>
            </nav>

            <NextLink
              href="/download-app/"
              onClick={close}
              className="mt-6 inline-flex h-11 min-w-11 shrink-0 items-center justify-center rounded-full bg-[var(--pk-gold)] px-6 text-base font-semibold text-[var(--pk-teal)] focus-visible:ring-3 focus-visible:ring-[var(--pk-gold)]/50 focus-visible:outline-none"
            >
              Download the App
            </NextLink>
          </div>
        ) : null}
      </dialog>
    </>
  );
}

export { MobileNav };
