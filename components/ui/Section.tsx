import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export type Tone = "white" | "paper" | "forest" | "black";

const toneClasses: Record<Tone, string> = {
  white: "bg-white text-black",
  paper: "bg-paper text-black",
  forest: "bg-forest text-white",
  black: "bg-black text-white",
};

/** Eyebrow colour per surface, chosen from approved pairings for AA contrast. */
const eyebrowClasses: Record<Tone, string> = {
  white: "text-red", // Red on White 5.2:1
  paper: "text-red", // Red on Paper 4.8:1
  forest: "text-yellow", // Yellow on Forest
  black: "text-yellow", // Yellow on Black 13.7:1
};

export function isDark(tone: Tone) {
  return tone === "forest" || tone === "black";
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

type SectionProps = {
  id?: string;
  tone?: Tone;
  eyebrow?: string;
  heading?: string;
  intro?: string;
  children?: ReactNode;
  className?: string;
  /** Extra decorative layer rendered behind the content (e.g. linework). */
  decoration?: ReactNode;
};

export function Section({
  id,
  tone = "white",
  eyebrow,
  heading,
  intro,
  children,
  className = "",
  decoration,
}: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={heading ? headingId : undefined}
      className={`relative overflow-hidden py-20 md:py-28 ${toneClasses[tone]} ${className}`}
    >
      {decoration}
      <Container className="relative">
        {(eyebrow || heading || intro) && (
          <Reveal className="mb-12 max-w-3xl md:mb-16">
            {eyebrow && <p className={`type-label mb-4 ${eyebrowClasses[tone]}`}>{eyebrow}</p>}
            {heading && (
              <h2 id={headingId} className="type-h2 text-balance">
                {heading}
              </h2>
            )}
            {intro && (
              <p className={`type-lead mt-5 ${isDark(tone) ? "text-white/85" : "text-ink-muted"}`}>
                {intro}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
