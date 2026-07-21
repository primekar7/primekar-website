import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

/** next/image wrapper that reserves layout space via a fixed aspect ratio (prevents CLS). */
function AspectImage({
  ratio = "16/9",
  className,
  containerClassName,
  alt,
  ...props
}: Omit<ImageProps, "fill"> & { ratio?: string; containerClassName?: string }) {
  return (
    <div
      className={cn("relative w-full overflow-hidden", containerClassName)}
      style={{ aspectRatio: ratio }}
    >
      <Image
        fill
        alt={alt}
        className={cn("object-cover", className)}
        {...props}
      />
    </div>
  );
}

export { AspectImage };
