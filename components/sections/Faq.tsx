import { faq } from "@/content/site";
import { Section } from "@/components/ui/Section";

/** Native <details> accordion: keyboard and screen-reader accessible with no JS. */
export function Faq() {
  return (
    <Section id={faq.id} tone="white" eyebrow={faq.eyebrow} heading={faq.heading}>
      <div className="border-t border-black">
        {faq.items.map((item) => (
          <details key={item.question} className="group border-b border-line">
            <summary className="flex cursor-pointer items-start justify-between gap-6 py-6 text-left">
              <h3 className="type-subhead">{item.question}</h3>
              <span
                aria-hidden="true"
                className="relative mt-1.5 h-4 w-4 shrink-0 before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-4 before:-translate-y-1/2 before:bg-red after:absolute after:top-0 after:left-1/2 after:h-4 after:w-0.5 after:-translate-x-1/2 after:bg-red after:transition-transform group-open:after:scale-y-0"
              />
            </summary>
            <p className="max-w-3xl pb-7 text-ink-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
