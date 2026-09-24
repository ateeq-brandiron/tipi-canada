import { timeline } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ReviewBadge } from "@/components/ui/ReviewBadge";

export function Timeline() {
  return (
    <Section id={timeline.id} tone="white" eyebrow={timeline.eyebrow} heading={timeline.heading}>
      <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
        <span aria-hidden="true" className="absolute left-0 right-0 top-[7px] hidden h-px bg-line lg:block" />

        {timeline.items.map((item, i) => (
          <Reveal as="li" key={item.year} delay={i * 80} className="relative pl-9 lg:pl-0">
            {i < timeline.items.length - 1 && (
              <span aria-hidden="true" className="absolute top-[15px] -bottom-10 left-[7px] w-px bg-line lg:hidden" />
            )}
            <span
              aria-hidden="true"
              className={`absolute left-0 top-0 h-[15px] w-[15px] rounded-full border-2 border-black ${
                i === 0 ? "bg-yellow" : "bg-white"
              }`}
            />
            <div className="max-w-xl lg:pt-9">
              <p className="font-heading text-3xl font-bold">{item.year}</p>
              <h3 className="type-subhead mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
                {item.title}
                {item.needsApproval && <ReviewBadge />}
              </h3>
              <p className="mt-2 text-ink-muted">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>
      <p className="mt-(--section-head-gap) max-w-3xl border-t border-line pt-6 text-sm text-ink-muted">{timeline.caveat}</p>
    </Section>
  );
}
