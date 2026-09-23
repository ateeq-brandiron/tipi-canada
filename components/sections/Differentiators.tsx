import { differentiators } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Differentiators() {
  return (
    <Section
      id={differentiators.id}
      tone="black"
      eyebrow={differentiators.eyebrow}
      heading={differentiators.heading}
    >
      <ul className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {differentiators.items.map((item, i) => (
          <Reveal as="li" key={item.title} delay={(i % 3) * 80} className="border-t border-white/25 pt-6">
            <p aria-hidden="true" className="font-heading text-3xl font-bold text-yellow">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="type-subhead mt-4">{item.title}</h3>
            <p className="mt-3 text-white/85">{item.body}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
