import type { ReactNode } from "react";

type Variant = "primary" | "solid-dark" | "outline-light" | "outline-dark";

const base =
  "inline-flex min-h-12 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm px-6 py-3 text-[0.9375rem] font-bold leading-tight transition-colors duration-150";

const variants: Record<Variant, string> = {
  // Yellow / Black — approved "maximum clarity" pairing.
  primary: "bg-yellow text-black hover:bg-white",
  // Black / White — for light surfaces where yellow would lack a visible edge.
  "solid-dark": "bg-black text-white hover:bg-forest",
  // For dark (Forest / Black) surfaces.
  "outline-light": "border border-white/70 text-white hover:border-white hover:bg-white hover:text-black",
  // For light (White / Paper) surfaces.
  "outline-dark": "border border-black text-black hover:bg-black hover:text-white",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}

export const buttonClasses = (variant: Variant = "primary") => `${base} ${variants[variant]}`;
