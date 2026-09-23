import { timeline } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ReviewBadge } from "@/components/ui/ReviewBadge";

export function Timeline() {
  return (
    <Section id={timeline.id} tone="white" eyebrow={timeline.eyebrow} heading={timeline.heading}>
      <ol className="relative grid gap-10 md:grid-cols-4 md:gap-8">
        <span aria-hidden="true" className="absolute left-[7px] top-2 bottom-2 w-px bg-line md:hidden" />
        <span aria-hidden="true" className="absolute left-0 right-0 top-[7px] hidden h-px bg-line md:block" />

        {timeline.items.map((item, i) => (
          <Reveal as="li" key={item.year} delay={i * 80} className="relative pl-9 md:pl-0">
            <span
              aria-hidden="true"
              className={`absolute left-0 top-0 h-[15px] w-[15px] rounded-full border-2 border-black ${
                i === 0 ? "bg-yellow" : "bg-white"
              }`}
            />
            <div className="md:pt-9">
              <p className="font-heading text-3xl font-bold">{item.year}</p>
              <h3 className="type-subhead mt-2">
                {item.title}
                {item.needsApproval && <ReviewBadge />}
              </h3>
              <p className="mt-2 text-ink-muted">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>
      <p className="mt-14 max-w-3xl border-t border-line pt-6 text-sm text-ink-muted">{timeline.caveat}</p>
    </Section>
  );
}
