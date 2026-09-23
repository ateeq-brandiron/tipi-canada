"use client";

import { useEffect, useState } from "react";
import type { NavLink } from "@/content/site";
import { PrimaryLogo } from "@/components/ui/Logo";
import { buttonClasses } from "@/components/ui/Button";

type Props = {
  links: NavLink[];
  cta: { label: string; href: string };
  homeLabel: string;
};

export function SiteHeader({ links, cta, homeLabel }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [links]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-yellow focus:px-4 focus:py-2 focus:font-bold focus:text-black"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a href="#top" aria-label={`${homeLabel}, back to top`} className="shrink-0 py-2">
          <PrimaryLogo height={50} priority />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active === link.href ? "true" : undefined}
                  className={`relative py-2 text-sm font-semibold transition-colors hover:text-black ${
                    active === link.href
                      ? "text-black after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-red"
                      : "text-ink-muted"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {/* Wrapper controls visibility: the button's own inline-flex would override `hidden`. */}
          <div className="hidden md:block">
            <a href={cta.href} className={`${buttonClasses("solid-dark")} min-h-11 px-5 text-sm`}>
              {cta.label}
            </a>
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Primary mobile"
        hidden={!open}
        className="border-t border-line bg-white lg:hidden"
      >
        <ul className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line py-3.5 text-base font-semibold last:border-0"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4 pb-2 md:hidden">
            <a href={cta.href} onClick={() => setOpen(false)} className={`${buttonClasses("solid-dark")} w-full`}>
              {cta.label}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
