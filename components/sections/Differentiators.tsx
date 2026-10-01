import Image from "next/image";
import { differentiators, textures } from "@/content/site";
import { BackgroundTexture } from "@/components/ui/BackgroundTexture";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Differentiators() {
  return (
    <Section
      id={differentiators.id}
      tone="black"
      eyebrow={differentiators.eyebrow}
      heading={differentiators.heading}
      decoration={
        <BackgroundTexture
          texture={textures.feathersDark}
          imageClassName="opacity-80"
          overlay="bg-gradient-to-b from-black/75 via-black/55 to-black/80"
        />
      }
    >
      <ul className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {differentiators.items.map((item, i) => (
          <Reveal as="li" key={item.title} delay={(i % 3) * 80} className="border-t border-white/25 pt-6">
            {/* The creative director's icon replaces the former "01–05" numeral (both decorative). */}
            <Image src={item.icon.src} alt="" width={item.icon.width} height={item.icon.height} className="h-14 w-auto" />
            <h3 className="type-subhead mt-6">{item.title}</h3>
            <p className="mt-3 text-white/85">{item.body}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
