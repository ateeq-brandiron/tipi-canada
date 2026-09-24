import { path, type PathIcon } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/** Simple stroke icons in the brand's thin-line style. */
function StepIcon({ name }: { name: PathIcon }) {
  const common = {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "electrolysis":
      return (
        <svg {...common}>
          <path d="M16 4c4.5 5.6 7.5 10 7.5 14a7.5 7.5 0 0 1-15 0C8.5 14 11.5 9.6 16 4Z" />
          <path d="M17 12l-3 6h4l-3 6" />
        </svg>
      );
    case "compression":
      return (
        <svg {...common}>
          <path d="M6 10h20M6 22h20" />
          <path d="M16 4v6m0 12v6" />
          <path d="M12 7l4 3 4-3M12 25l4-3 4 3" />
        </svg>
      );
    case "storage":
      return (
        <svg {...common}>
          <rect x="9" y="5" width="14" height="22" rx="7" />
          <path d="M9 13h14M9 19h14" />
        </svg>
      );
    case "transport":
      return (
        <svg {...common}>
          <path d="M3 21V10h15v11M18 14h6l5 4v3h-2" />
          <circle cx="9" cy="23" r="2.5" />
          <circle cx="23" cy="23" r="2.5" />
          <path d="M11.5 21h9" />
        </svg>
      );
    case "end-use":
      return (
        <svg {...common}>
          <path d="M5 26c3-10 9-17 22-21-2 12-9 19-19 21" />
          <path d="M5 26l10-10" />
        </svg>
      );
  }
}

export function OurPath() {
  return (
    <Section id={path.id} tone="white" eyebrow={path.eyebrow} heading={path.heading} intro={path.intro}>
      <ol className="relative grid gap-8 lg:grid-cols-5 lg:gap-6">
        {/* Connecting line: per-step vertical connectors below lg, one horizontal rule from lg. */}
        <span aria-hidden="true" className="absolute left-6 right-6 top-6 hidden h-px bg-line lg:block" />

        {path.steps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 80} className="relative flex gap-5 lg:flex-col lg:gap-0">
            {i < path.steps.length - 1 && (
              <span aria-hidden="true" className="absolute top-12 -bottom-8 left-6 w-px bg-line lg:hidden" />
            )}
            <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black bg-white text-forest">
              <StepIcon name={step.icon} />
            </span>
            <div className="min-w-0 max-w-xl pt-1 lg:mt-6 lg:pt-0">
              <p className="type-label text-red">
                <span className="sr-only">Step </span>
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="type-subhead mt-1">{step.title}</h3>
              <p className="mt-2 text-[0.9375rem] text-ink-muted">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-(--section-head-gap) grid gap-4 border-t border-line pt-10 md:grid-cols-12 md:gap-8">
        <h3 className="type-subhead md:col-span-4">{path.power.title}</h3>
        <p className="text-ink-muted md:col-span-8">{path.power.body}</p>
      </Reveal>
    </Section>
  );
}
