import { cn } from "@/lib/utils";

function Container({
  className,
  as: Comp = "div",
  ...props
}: React.ComponentProps<"div"> & { as?: React.ElementType }) {
  return (
    <Comp
      data-slot="container"
      className={cn(
        "mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8",
        className,
      )}
      {...props}
    />
  );
}

export { Container };
