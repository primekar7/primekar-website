import * as React from "react";
import NextLink from "next/link";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

/**
 * A navigation control styled like Button but rendered as a real anchor.
 * Every current use of `Button` + `render={<NextLink/>}` is a navigation,
 * never a form action — Base UI's Button primitive announces those as
 * `role="button"` while only partially supporting native button keyboard
 * behaviour (Space did not activate — docs/homepage-review.md F-004).
 * A plain anchor gets correct link semantics and full keyboard support for
 * free from the browser.
 */
type LinkButtonProps = React.ComponentProps<typeof NextLink> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

function LinkButton({
  className,
  variant = "default",
  size = "default",
  ...props
}: LinkButtonProps) {
  return (
    <NextLink
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { LinkButton };
