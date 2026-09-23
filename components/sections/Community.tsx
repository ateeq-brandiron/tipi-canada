import { community } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Linework } from "@/components/ui/Linework";

function formatPercent(n: number) {
  return `${Number.isInteger(n) ? n : n.toFixed(1)}%`;
}

function OwnershipChart() {
  const { segments, chartLabel, indigenousFloorLabel } = community.ownership;
  const indigenousTotal = segments.filter((s) => s.indigenous).reduce((sum, s) => sum + s.percent, 0);

  return (
    <figure aria-labelledby="ownership-caption">
      <figcaption id="ownership-caption" className="type-label mb-4 text-yellow">
        {chartLabel}
      </figcaption>

      {/* Indigenous share bracket */}
      <div className="mb-2 text-sm font-bold" style={{ width: `${indigenousTotal}%` }}>
        <span className="block border-x border-t border-white/70 px-2 pt-1.5 pb-1 text-white">
          {indigenousFloorLabel}
        </span>
      </div>

      {/* Bar — purely visual; the list below carries the same data for screen readers. */}
      <div aria-hidden="true" className="flex h-14 w-full gap-1">
        {segments.map((s) => (
          <div
            key={s.label}
            style={{ flex: `${s.percent} 1 0%` }}
            className={`flex items-center justify-center text-sm font-bold ${
              s.indigenous ? "bg-yellow text-black" : "border border-dashed border-white/80 text-white"
            }`}
          >
            {s.qualifier === "max" ? `≤ ${formatPercent(s.percent)}` : formatPercent(s.percent)}
          </div>
        ))}
      </div>

      <ul className="mt-5 grid gap-3 sm:grid-cols-3">
        {segments.map((s) => (
          <li key={s.label} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className={`mt-1 h-3.5 w-3.5 shrink-0 ${s.indigenous ? "bg-yellow" : "border border-dashed border-white"}`}
            />
            <span>
              <span className="block font-bold">{s.label}</span>
              <span className="text-sm text-white/85">
                {s.qualifier === "max" ? `Up to ${formatPercent(s.percent)}` : formatPercent(s.percent)}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </figure>
  );
}

export function Community() {
  const { ownership, benefits, safeguards, consentNote } = community;
  return (
    <Section
      id={community.id}
      tone="forest"
      eyebrow={community.eyebrow}
      heading={community.heading}
      decoration={<Linework variant="river" className="text-white/10" />}
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h3 className="type-subhead">{ownership.title}</h3>
          <p className="mt-3 text-white/90">{ownership.body}</p>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={100}>
          <OwnershipChart />
        </Reveal>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden border border-white/25 bg-white/25 md:grid-cols-2">
        {[benefits, safeguards].map((block, i) => (
          <Reveal key={block.title} delay={i * 80} className="bg-forest p-7 md:p-10">
            <h3 className="type-subhead">{block.title}</h3>
            <p className="mt-3 text-white/90">{block.body}</p>
          </Reveal>
        ))}
      </div>

      <p className="mt-10 max-w-3xl text-sm text-white/80">{consentNote}</p>
    </Section>
  );
}
