import { story } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";

export function Story() {
  return (
    <Section id={story.id} tone="white" eyebrow={story.eyebrow} heading={story.heading}>
      <div className="grid gap-10 md:grid-cols-12 md:gap-10 lg:gap-16">
        <Reveal className="space-y-5 text-ink-muted md:col-span-7">
          {story.paragraphs.map((p, i) => (
            <p key={i} className={i === story.paragraphs.length - 1 ? "type-lead text-black" : "type-lead"}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal className="md:col-span-5" delay={100}>
          <ImageSlot image={story.image} sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/3] w-full" />
          <figure className="mt-8 border-l-2 border-yellow pl-5">
            <figcaption className="type-label mb-2 text-red">{story.vision.label}</figcaption>
            <blockquote className="font-heading text-xl font-bold leading-snug">{story.vision.text}</blockquote>
          </figure>
        </Reveal>
      </div>

      <ul className="mt-(--section-head-gap) grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
        {story.values.map((v, i) => (
          <Reveal as="li" key={v.title} delay={i * 80} className="bg-white p-[clamp(1.25rem,0.9rem+1.5vw,2rem)]">
            <p className="type-subhead">{v.title}</p>
            <p className="mt-2 text-ink-muted">{v.body}</p>
          </Reveal>
        ))}
      </ul>

      <div className="mt-(--section-head-gap)">
        <p className="type-label mb-6 text-red">{story.commitments.label}</p>
        <ul className="grid gap-8 md:grid-cols-2 md:gap-12">
          {story.commitments.items.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 80} className="border-t-2 border-black pt-6">
              <h3 className="type-subhead">{c.title}</h3>
              <p className="mt-3 text-ink-muted">{c.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
