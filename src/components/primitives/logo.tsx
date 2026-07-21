import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Renders the approved dark-background PrimeKar logo master unchanged
 * (public/brand/primekar-logo-dark.jpg — byte-identical to
 * docs/source-material/assets/primekar-logo-dark.jpg). The master is a
 * square canvas with the wordmark centered in a band roughly a third of
 * its height; `object-position` windows the intact image onto that band
 * for legible in-page display without writing a cropped derivative file
 * to disk. Every section this appears in uses the exact --pk-teal
 * background baked into the JPEG, so the letterboxed area is invisible.
 */
function Logo({
  className,
  priority,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="PrimeKar home"
      className={cn(
        "relative block h-9 w-[150px] shrink-0 overflow-hidden sm:h-10 sm:w-[168px]",
        className,
      )}
    >
      <Image
        src="/brand/primekar-logo-dark.jpg"
        alt="PrimeKar"
        fill
        priority={priority}
        sizes="168px"
        style={{ objectFit: "cover", objectPosition: "50% 46%" }}
      />
    </Link>
  );
}

export { Logo };
