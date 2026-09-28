import Image from "next/image";
import type { Texture } from "@/content/site";

/**
 * Full-bleed decorative photo texture behind a section's content.
 * Always aria-hidden; `overlay` classes tint it so text keeps AA contrast.
 * Lazy-loaded (below the fold) and served responsively by next/image.
 */
export function BackgroundTexture({
  texture,
  imageClassName = "",
  overlay,
}: {
  texture: Texture;
  /** Extra classes on the image, e.g. opacity or blend mode. */
  imageClassName?: string;
  /** Classes for a tint layer above the image (colour, gradient). */
  overlay?: string;
}) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <Image
        src={texture.src}
        alt=""
        fill
        sizes="100vw"
        quality={70}
        className={`object-cover ${imageClassName}`}
        style={{ objectPosition: texture.focus ?? "50% 50%" }}
      />
      {overlay && <div className={`absolute inset-0 ${overlay}`} />}
    </div>
  );
}
