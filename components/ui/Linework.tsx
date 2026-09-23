/**
 * Thin, flowing linework — the brand's "quiet connective device".
 * Echoes river, ridgeline and movement. Purely decorative (aria-hidden) and
 * coloured with currentColor so each surface can set an approved colour.
 */

type Variant = "river" | "ridge";

const paths: Record<Variant, string[]> = {
  river: [
    "M-20 520 C 180 460, 320 560, 520 500 S 860 380, 1060 430 S 1340 520, 1460 470",
    "M-20 560 C 200 500, 340 600, 540 540 S 880 420, 1080 470 S 1360 560, 1460 510",
    "M-20 600 C 220 540, 360 640, 560 580 S 900 460, 1100 510 S 1380 600, 1460 550",
    "M-20 300 C 140 250, 260 330, 420 290 S 700 190, 880 230 S 1180 320, 1460 260",
  ],
  ridge: [
    "M-20 420 L 180 300 L 300 360 L 470 220 L 620 330 L 760 260 L 930 380 L 1080 280 L 1260 360 L 1460 250",
    "M-20 470 C 200 430, 380 470, 560 440 S 920 400, 1120 430 S 1360 470, 1460 450",
  ],
};

export function Linework({
  variant = "river",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1440 720"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      fill="none"
    >
      {paths[variant].map((d, i) => (
        <path key={i} d={d} stroke="currentColor" strokeWidth={1} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}
