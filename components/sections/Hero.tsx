import { hero } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { Linework } from "@/components/ui/Linework";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden bg-forest text-white">
      <Linework variant="river" className="text-yellow/35" />
      <Linework variant="ridge" className="text-white/12" />

      <Container className="relative py-[clamp(4rem,2.5rem+7vw,8rem)]">
        <div className="max-w-3xl">
          <p className="type-label mb-6 text-yellow">{hero.eyebrow}</p>
          <h1 id="hero-heading" className="type-h1 text-balance">
            {hero.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="type-lead mt-6 max-w-2xl text-white/90">{hero.valueStatement}</p>

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
    </section>
  );
}
