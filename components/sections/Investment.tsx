import { investment } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

/** Rendered only when SHOW_INVESTMENT_ASK is on (see lib/config.ts). */
export function Investment() {
  return (
    <Section id={investment.id} tone="black">
      <Reveal className="grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <p className="type-label mb-4 text-yellow">{investment.eyebrow}</p>
          <h2 id={`${investment.id}-heading`} className="type-h2">
            {investment.heading}
          </h2>
          <p className="type-lead mt-5 text-white/85">{investment.body}</p>
          <div className="mt-8">
            <ButtonLink href={investment.cta.href}>{investment.cta.label}</ButtonLink>
          </div>
        </div>
        <div className="border-t border-yellow pt-6 md:col-span-4 md:border-t-0 md:border-l md:pt-0 md:pl-10">
          <p className="font-heading text-6xl font-bold text-yellow md:text-7xl">{investment.amount}</p>
          <p className="type-label mt-3 text-white/80">{investment.amountLabel}</p>
        </div>
      </Reveal>
    </Section>
  );
}
