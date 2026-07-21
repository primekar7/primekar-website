/** Abstract route-line motif — two points on a dashed path. Decorative only. */
function RouteDevice({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 90"
      fill="none"
      aria-hidden="true"
      className={className ?? "w-full text-[var(--pk-gold)]"}
    >
      <path
        d="M12 70 C 90 70, 120 20, 268 20"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeDasharray="2 7"
        strokeLinecap="round"
      />
      <circle cx="12" cy="70" r="5" fill="currentColor" />
      <circle cx="268" cy="20" r="5" fill="currentColor" fillOpacity="0.55" />
      <circle
        cx="268"
        cy="20"
        r="9"
        stroke="currentColor"
        strokeOpacity="0.35"
      />
    </svg>
  );
}

export { RouteDevice };
