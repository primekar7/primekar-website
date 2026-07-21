function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only z-100 rounded-md bg-[var(--pk-gold)] px-4 py-3 font-semibold text-[var(--pk-teal)] focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
    >
      Skip to main content
    </a>
  );
}

export { SkipLink };
