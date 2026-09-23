import { SHOW_REVIEW_NOTES } from "@/lib/config";

/** Small marker for content awaiting client confirmation. Hidden when review notes are off. */
export function ReviewBadge({ children = "Pending confirmation" }: { children?: string }) {
  if (!SHOW_REVIEW_NOTES) return null;
  return (
    <span className="ml-2 inline-block bg-black px-2 py-0.5 align-middle text-[0.6875rem] font-bold uppercase tracking-wider text-yellow">
      [{children}]
    </span>
  );
}
