import { cn } from "@/lib/utils";

function Card({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "group relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--pk-hairline)] bg-card p-5 text-card-foreground transition-colors duration-[var(--pk-dur-base)] ease-[var(--pk-ease-out)] hover:border-[var(--pk-hairline-strong)] sm:p-6",
        className,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px scale-x-0 bg-[var(--pk-gold)] transition-transform duration-[var(--pk-dur-base)] ease-[var(--pk-ease-out)] group-hover:scale-x-100"
      />
      {children}
    </div>
  );
}

export { Card };
