import { company, contact } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Linework } from "@/components/ui/Linework";
import { ContactForm } from "./ContactForm";

export function Contact() {
  const { email, phone, emailIsPlaceholder } = company.contact;
  return (
    <Section id={contact.id} tone="forest" decoration={<Linework variant="ridge" className="text-yellow/20" />}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="type-label mb-4 text-yellow">{contact.eyebrow}</p>
          <h2 id={`${contact.id}-heading`} className="type-h2">
            {contact.heading}
          </h2>
          <p className="type-lead mt-5 text-white/90">{contact.body}</p>

          <div className="mt-10 border-t border-white/25 pt-6">
            <p className="type-label mb-3 text-white/80">{contact.directLabel}</p>
            <ul className="space-y-2 font-bold">
              <li>
                {emailIsPlaceholder ? (
                  <span>{email}</span>
                ) : (
                  <a href={`mailto:${email}`} className="underline decoration-yellow underline-offset-4 hover:text-yellow">
                    {email}
                  </a>
                )}
              </li>
              <li>
                <span>{phone}</span>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
