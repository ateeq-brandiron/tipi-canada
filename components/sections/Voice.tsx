import Image from "next/image";
import { voice } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/** "How we work": the six brand voice traits, each with the creative director's icon.
 *  Navy, because several icons are pale (sand, mint) and disappear on light surfaces. */
export function Voice() {
  return (
    <Section id={voice.id} tone="navy" eyebrow={voice.eyebrow} heading={voice.heading}>
      <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {voice.items.map((item, i) => (
          <Reveal as="li" key={item.title} delay={(i % 3) * 80}>
            <Image
              src={item.icon.src}
              alt=""
              width={item.icon.width}
              height={item.icon.height}
              className="h-14 w-auto"
            />
            <h3 className="type-subhead mt-6">{item.title}</h3>
            <p className="mt-3 text-white/85">{item.body}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
