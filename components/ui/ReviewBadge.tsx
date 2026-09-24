import { SHOW_REVIEW_NOTES } from "@/lib/config";

/** Small marker for content awaiting client confirmation. Hidden when review notes are off.
 *  Parents lay it out with a wrapping flex row + gap so it wraps flush, never indented. */
export function ReviewBadge({ children = "Pending confirmation" }: { children?: string }) {
  if (!SHOW_REVIEW_NOTES) return null;
  return (
    <span className="inline-block bg-black px-2 py-0.5 align-middle text-xs font-bold uppercase tracking-wider text-yellow">
      [{children}]
    </span>
  );
}
