import { story } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";

export function Story() {
  return (
    <Section id={story.id} tone="white" eyebrow={story.eyebrow} heading={story.heading}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="space-y-5 text-ink-muted lg:col-span-7">
          {story.paragraphs.map((p, i) => (
            <p key={i} className={i === story.paragraphs.length - 1 ? "type-lead text-black" : "type-lead"}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal className="lg:col-span-5" delay={100}>
          <ImageSlot image={story.image} sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/3] w-full" />
          <figure className="mt-8 border-l-2 border-yellow pl-5">
            <figcaption className="type-label mb-2 text-red">{story.vision.label}</figcaption>
            <blockquote className="font-heading text-xl font-bold leading-snug">{story.vision.text}</blockquote>
          </figure>
        </Reveal>
      </div>

      <ul className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
        {story.values.map((v, i) => (
          <Reveal as="li" key={v.title} delay={i * 80} className="bg-white p-6 md:p-8">
            <p className="type-subhead">{v.title}</p>
            <p className="mt-2 text-ink-muted">{v.body}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
