import { cn } from "@/lib/utils";
import { Container } from "@/components/primitives/container";

const toneClasses = {
  base: "bg-background",
  elevated: "bg-[var(--pk-teal-elevated)]",
  feature: "bg-[var(--pk-teal-feature)] border-y border-[var(--pk-hairline)]",
} as const;

// Deliberate vertical-rhythm scale (docs/homepage-review.md F-024 §3) —
// replaces the previous uniform py-12/16/24 on every section with three
// distinct scales so importance reads spatially, not just in copy.
const scaleClasses = {
  compact: "py-10 sm:py-14 lg:py-16",
  standard: "py-12 sm:py-16 lg:py-24",
  feature: "py-16 sm:py-24 lg:py-32",
} as const;

function Section({
  className,
  containerClassName,
  tone = "base",
  scale = "standard",
  as: Comp = "section",
  containerAs,
  children,
  ...props
}: React.ComponentProps<"section"> & {
  containerClassName?: string;
  tone?: keyof typeof toneClasses;
  scale?: keyof typeof scaleClasses;
  as?: React.ElementType;
  containerAs?: React.ElementType;
}) {
  return (
    <Comp
      data-slot="section"
      className={cn(scaleClasses[scale], toneClasses[tone], className)}
      {...props}
    >
      <Container as={containerAs} className={containerClassName}>
        {children}
      </Container>
    </Comp>
  );
}

export { Section };
