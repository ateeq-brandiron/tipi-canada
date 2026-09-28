import Image from "next/image";
import { hero } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { Linework } from "@/components/ui/Linework";

/*
 * Layout
 * - Phones/tablets: the photo sits on top (turtle framed), fading into navy, then the copy.
 * - Desktop (lg+): two columns inside the page container; the photo's top and bottom align with the copy.
 * The copy comes first in the DOM so the headline is read before the image.
 */
export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden bg-navy text-white">
      {/* One grid from lg: copy (cols 1–6) and photo (cols 7–12) share the same top edge and row height,
          so the photo lines up with the text block; the facts row spans both columns below. */}
      <Container className="relative z-10 flex flex-col pb-[clamp(3.5rem,2.5rem+4vw,6rem)] lg:grid lg:grid-cols-12 lg:gap-x-12 lg:pt-[clamp(6rem,4rem+5vw,9rem)]">
        <div className="relative z-10 -mt-12 max-w-2xl sm:-mt-20 lg:col-span-6 lg:mt-0 lg:max-w-none">
          <p className="type-label mb-6 text-yellow">{hero.eyebrow}</p>
          <h1 id="hero-heading" className="type-h1 text-balance">
            {hero.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="type-lead mt-6 text-white/90">{hero.valueStatement}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="outline-light">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        {/* Photo: full-bleed on top on small screens (order-first, negative gutter margins);
            the right-hand column from lg, stretched to the height of the copy.
            Zoomed from the top so the turtle reads larger; the frame clips the zoom. */}
        <div className="relative order-first -mx-(--gutter) aspect-[16/10] overflow-hidden sm:aspect-[16/8] lg:order-none lg:col-span-6 lg:mx-0 lg:aspect-auto">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="(min-width: 1536px) 900px, (min-width: 1024px) 70vw, 140vw"
            className="origin-[50%_0%] scale-[1.35] object-cover lg:origin-[55%_0%] lg:scale-[1.6]"
            style={{ objectPosition: hero.image.focus }}
          />
          {/* Fades that blend the photo into the navy: bottom on small screens, none on desktop, so the frame edges stay crisp and aligned with the copy. */}
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-navy lg:hidden" />
        </div>

        <dl className="mt-[clamp(3rem,2rem+4vw,5rem)] grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/25 pt-8 md:grid-cols-4 lg:col-span-12">
          {hero.facts.map((fact) => (
            <div key={fact.label} className="flex flex-col">
              <dt className="type-label order-2 mt-1 text-white/80">{fact.label}</dt>
              <dd className="order-1 font-heading text-2xl font-bold md:text-[1.75rem]">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>

      <Linework variant="river" className="z-0 text-yellow/20" />
    </section>
  );
}
