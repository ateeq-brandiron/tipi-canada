import Image from "next/image";
import type { ImageSlot as ImageSlotData } from "@/content/site";
import { SHOW_REVIEW_NOTES } from "@/lib/config";
import { Linework } from "./Linework";

/**
 * Renders a real photo via next/image when `src` is set, otherwise a quiet
 * linework placeholder labelled with what the client needs to supply.
 */
export function ImageSlot({
  image,
  sizes,
  className = "",
}: {
  image: ImageSlotData;
  sizes: string;
  className?: string;
}) {
  if (image.src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={image.src} alt={image.alt} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }

  return (
    // Decorative until a real photo is supplied; the alt text is reserved for the real image.
    <div className={`relative flex items-end overflow-hidden bg-forest text-white ${className}`}>
      <Linework variant="ridge" className="text-yellow/50" />
      <Linework variant="river" className="text-white/25" />
      {SHOW_REVIEW_NOTES && (
        <p className="relative m-4 bg-black px-3 py-2 text-xs font-bold text-yellow">{image.placeholderNote}</p>
      )}
    </div>
  );
}
