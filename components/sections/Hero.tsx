import Image from "next/image";
import { hero } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { Linework } from "@/components/ui/Linework";

/*
 * Layout
 * - Phones/tablets: the photo sits on top (turtle framed), fading into navy, then the copy.
 * - Desktop (lg+): the photo fills the right ~55% and fades left into the navy behind the copy.
 * The copy comes first in the DOM so the headline is read before the image.
 */
export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative flex flex-col overflow-hidden bg-navy text-white">
      <Container className="relative z-10 -mt-12 pb-[clamp(3.5rem,2.5rem+4vw,6rem)] sm:-mt-20 lg:mt-0 lg:pt-[clamp(6rem,4rem+5vw,9rem)]">
        <div className="max-w-2xl lg:max-w-[34rem] xl:max-w-xl">
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

        <dl className="mt-[clamp(3rem,2rem+4vw,5rem)] grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/25 pt-8 md:grid-cols-4">
          {hero.facts.map((fact) => (
            <div key={fact.label} className="flex flex-col">
              <dt className="type-label order-2 mt-1 text-white/80">{fact.label}</dt>
              <dd className="order-1 font-heading text-2xl font-bold md:text-[1.75rem]">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>

      {/* Photo: visually first on small screens (order-first), a right-hand panel on desktop.
          The photo is zoomed from the top (treeline stays in frame) so the turtle reads larger;
          the panel clips the zoom, and `sizes` requests extra resolution to keep it sharp. */}
      <div className="relative order-first aspect-[16/10] w-full overflow-hidden sm:aspect-[16/8] lg:absolute lg:inset-y-0 lg:right-0 lg:order-none lg:aspect-auto lg:w-[56%]">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="(min-width: 1024px) 80vw, 140vw"
          className="origin-[50%_0%] scale-[1.35] object-cover lg:origin-[50%_0%] lg:scale-[1.2] xl:origin-[62%_0%] xl:scale-[1.4]"
          style={{ objectPosition: hero.image.focus }}
        />
        {/* Fades that blend the photo into the navy: bottom on small screens, left + bottom on desktop. */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-navy" />
        <div aria-hidden="true" className="absolute inset-y-0 left-0 hidden w-2/3 bg-gradient-to-r from-navy via-navy/60 to-transparent lg:block" />
      </div>

      <Linework variant="river" className="z-0 text-yellow/20" />
    </section>
  );
}
