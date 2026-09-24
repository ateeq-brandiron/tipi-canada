import { opportunity } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Opportunity() {
  return (
    <Section
      id={opportunity.id}
      tone="paper"
      eyebrow={opportunity.eyebrow}
      heading={opportunity.heading}
      intro={opportunity.intro}
    >
      <ul className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
        {opportunity.cards.map((card, i) => (
          <Reveal as="li" key={card.title} delay={(i % 2) * 80} className="bg-paper p-[clamp(1.5rem,1rem+2vw,2.5rem)]">
            <span aria-hidden="true" className="mb-5 block h-0.5 w-10 bg-red" />
            <h3 className="type-subhead">{card.title}</h3>
            <p className="mt-3 text-ink-muted">{card.body}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
