import Image from "next/image";
import { company } from "@/content/site";

/*
 * Official logo files from the TIPI Logo Files folder (Brand Guide V10).
 * Only the SVG viewBox was trimmed to the artwork bounds — paths, colours and
 * proportions are untouched. Never recolour, rotate, distort or add effects.
 * Clear space (x = height of the turtle's inner core) is provided by callers.
 */

// Artwork aspect ratios from the trimmed viewBoxes.
const PRIMARY_RATIO = 2100 / 676; // horizontal lockup
const MARK_RATIO = 2100 / 2344; // turtle mark

export function PrimaryLogo({ height = 40, priority = false }: { height?: number; priority?: boolean }) {
  return (
    <Image
      src="/brand/logo-primary.svg"
      alt={company.name}
      width={Math.round(height * PRIMARY_RATIO)}
      height={height}
      priority={priority}
      unoptimized
    />
  );
}

export function LogoMark({
  height = 56,
  variant = "color",
  alt = "",
}: {
  height?: number;
  variant?: "color" | "white";
  /** Empty alt when the company name is rendered as text alongside. */
  alt?: string;
}) {
  return (
    <Image
      src={variant === "white" ? "/brand/logo-mark-white.svg" : "/brand/logo-mark.svg"}
      alt={alt}
      width={Math.round(height * MARK_RATIO)}
      height={height}
      unoptimized
    />
  );
}
