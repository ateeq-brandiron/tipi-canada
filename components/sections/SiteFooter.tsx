import { company, disclaimer, footer, type NavLink } from "@/content/site";
import { Container } from "@/components/ui/Section";
import { LogoMark } from "@/components/ui/Logo";

export function SiteFooter({ links }: { links: NavLink[] }) {
  return (
    <footer className="bg-black text-white">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            {/* White mark on Black; generous clear space around it. */}
            <div className="inline-block p-2">
              <LogoMark variant="white" height={64} />
            </div>
            <p className="mt-6 font-heading text-xl font-bold">{company.name}</p>
            <p className="mt-1 text-white/80">{footer.tagline}</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-7">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/85 hover:text-yellow">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-12 border-t border-white/20 pt-8 text-sm text-white/85">{footer.shortNotice}</p>

        <details className="group mt-6 border border-white/20">
          <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 font-bold">
            {footer.disclaimerToggle}
            <span aria-hidden="true" className="text-yellow transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="space-y-5 border-t border-white/20 px-5 py-6 text-sm leading-relaxed text-white/85">
            <div>
              <p className="font-bold text-white">{disclaimer.title}</p>
              <p>{disclaimer.subtitle}</p>
              <p>{disclaimer.entity}</p>
            </div>
            <p className="font-bold text-white">{disclaimer.important}</p>
            <p>{disclaimer.intro}</p>
            {disclaimer.sections.map((section) => (
              <div key={section.heading}>
                <p className="mb-2 font-bold text-white">{section.heading}</p>
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="mb-2">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="list-disc space-y-1 pl-5">
                    {section.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </details>

        <p className="mt-8 text-sm text-white/80">{footer.copyright}</p>
      </Container>
    </footer>
  );
}
