import { company, nav } from "@/content/site";
import { SHOW_INVESTMENT_ASK } from "@/lib/config";
import { buildJsonLd, jsonLdScript } from "@/lib/jsonld";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Opportunity } from "@/components/sections/Opportunity";
import { OurPath } from "@/components/sections/OurPath";
import { Differentiators } from "@/components/sections/Differentiators";
import { Community } from "@/components/sections/Community";
import { Timeline } from "@/components/sections/Timeline";
import { Investment } from "@/components/sections/Investment";
import { Team } from "@/components/sections/Team";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { SiteFooter } from "@/components/sections/SiteFooter";

export default function Home() {
  // Insert the Investment link after Timeline when the section is enabled.
  const links = SHOW_INVESTMENT_ASK
    ? nav.links.flatMap((l) => (l.href === "#timeline" ? [l, nav.investmentLink] : [l]))
    : nav.links;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(buildJsonLd()) }}
      />
      <SiteHeader links={links} cta={nav.cta} homeLabel={company.name} />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Story />
        <Opportunity />
        <OurPath />
        <Differentiators />
        <Community />
        <Timeline />
        {SHOW_INVESTMENT_ASK && <Investment />}
        <Team />
        <Faq />
        <Contact />
      </main>
      <SiteFooter links={links} />
    </>
  );
}
