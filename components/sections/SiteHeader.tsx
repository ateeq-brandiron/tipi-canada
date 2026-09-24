"use client";

import { useEffect, useRef, useState } from "react";
import type { NavLink } from "@/content/site";
import { PrimaryLogo } from "@/components/ui/Logo";
import { buttonClasses } from "@/components/ui/Button";

type Props = {
  links: NavLink[];
  cta: { label: string; href: string };
  homeLabel: string;
};

/** Breakpoint (Tailwind `lg`) at which the full desktop navigation fits. */
const DESKTOP_QUERY = "(min-width: 1024px)";

export function SiteHeader({ links, cta, homeLabel }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const close = () => setOpen(false);

  // While the mobile menu is open: lock page scroll, move focus into the menu,
  // close on Escape, and close automatically if the viewport grows to desktop.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = (e: MediaQueryListEvent) => e.matches && setOpen(false);

    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      root.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
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
      <div className="container-page flex h-(--header-h) items-center justify-between gap-4 lg:gap-6">
        {/* Logo: 40px tall on phones, 50px from md. The link keeps a ≥44px tap area. */}
        <a
          href="#top"
          aria-label={`${homeLabel}, back to top`}
          onClick={() => close()}
          className="flex h-11 shrink-0 items-center [&_img]:h-10 [&_img]:w-auto md:[&_img]:h-[50px]"
        >
          <PrimaryLogo height={50} priority />
        </a>

        <nav aria-label="Primary" className="hidden min-w-0 lg:block">
          <ul className="flex items-center gap-1 xl:gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active === link.href ? "true" : undefined}
                  className={`relative inline-flex h-11 min-w-11 items-center justify-center px-2 text-sm font-semibold whitespace-nowrap transition-colors hover:text-black ${
                    active === link.href
                      ? "text-black after:absolute after:inset-x-2 after:bottom-1.5 after:h-0.5 after:bg-red"
                      : "text-ink-muted"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          {/* Wrapper controls visibility: the button's own inline-flex would override `hidden`. */}
          <div className="hidden md:block">
            <a href={cta.href} className={`${buttonClasses("solid-dark")} min-h-11 px-5 text-sm`}>
              {cta.label}
            </a>
          </div>
          <button
            ref={toggleRef}
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

      {/* Mobile / tablet menu: a full-height panel under the header, scrollable if the
          viewport is short (e.g. phones in landscape). Page scroll is locked while open. */}
      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!open}
        className="absolute inset-x-0 top-full h-[calc(100dvh-var(--header-h))] overflow-y-auto overscroll-contain border-t border-line bg-white lg:hidden"
      >
        <nav aria-label="Primary mobile" className="container-page py-4">
          <ul>
            {links.map((link) => (
              <li key={link.href} className="border-b border-line">
                <a
                  href={link.href}
                  aria-current={active === link.href ? "true" : undefined}
                  onClick={() => close()}
                  className="flex min-h-14 items-center text-lg font-semibold aria-[current=true]:text-red"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={cta.href}
            onClick={() => close()}
            className={`${buttonClasses("solid-dark")} mt-6 w-full md:hidden`}
          >
            {cta.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
