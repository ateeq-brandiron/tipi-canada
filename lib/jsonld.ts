import { company, faq, site } from "@/content/site";
import { SITE_URL } from "./config";

/** Organization + WebSite + FAQPage structured data (schema.org), as one @graph. */
export function buildJsonLd() {
  const orgId = `${SITE_URL}/#organization`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: company.name,
        legalName: company.legalName,
        alternateName: [company.shortName, company.legalOperatingName],
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/brand/logo-primary.svg`,
        },
        slogan: site.brandLines.primary,
        description: site.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: company.location.locality,
          addressRegion: company.location.regionCode,
          addressCountry: company.location.country,
        },
        areaServed: { "@type": "AdministrativeArea", name: "British Columbia, Canada" },
        knowsAbout: ["Green hydrogen", "Electrolysis", "Energy-as-a-Service", "Clean energy"],
        ...(company.sameAs.length ? { sameAs: company.sameAs } : {}),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: company.name,
        inLanguage: "en-CA",
        publisher: { "@id": orgId },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}

/** Serialise for a <script type="application/ld+json">, escaping "<" to prevent tag injection. */
export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
