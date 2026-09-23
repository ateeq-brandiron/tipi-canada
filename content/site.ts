/**
 * Turtle Island Power Inc. — site content.
 *
 * ALL user-facing copy lives here so copy edits never touch components.
 *
 * Source priority (when sources conflict):
 *   1. Approved FAQ (Aug 2026)            -> facts
 *   2. Approved Messaging Platform         -> tone, messaging
 *   3. Content draft / prototype           -> structure only
 * Team bios come from the 08/19/26 Core Team document and individual bios.
 * The legal disclaimer is reproduced verbatim from the approved disclaimer.
 *
 * Conventions:
 *   - Always "Turtle Island Power Inc." (never drop "Inc.").
 *   - Anything wrapped in [BRACKETS] is a placeholder awaiting client input.
 *   - `// VERIFY:` comments mark statements that need client confirmation.
 */

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type NavLink = { label: string; href: `#${string}` };

export type Cta = { label: string; href: string };

export type Card = { title: string; body: string };

export type PathStep = { title: string; body: string; icon: PathIcon };
export type PathIcon =
  | "electrolysis"
  | "compression"
  | "storage"
  | "transport"
  | "end-use";

export type OwnershipSegment = {
  label: string;
  /** Percent of equity at full external investment. */
  percent: number;
  /** "max" renders as "up to X%". */
  qualifier?: "max";
  indigenous: boolean;
};

export type TimelineItem = {
  year: string;
  title: string;
  body: string;
  /** True when the milestone is not in the approved FAQ and needs sign-off. */
  needsApproval?: boolean;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  /**
   * Path under /public, e.g. "/team/mark-mckellar.jpg".
   * Leave undefined to render the initials fallback.
   */
  photo?: string;
  /** True when the person has asked to approve their wording before publication. */
  needsApproval?: boolean;
};

export type FaqItem = { question: string; answer: string };

export type SelectOption = { value: string; label: string };

export type DisclaimerSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ImageSlot = {
  /** Path under /public. Leave undefined until the client supplies a photo. */
  src?: string;
  alt: string;
  /** Shown on the placeholder until a real photo is supplied. */
  placeholderNote: string;
};

/* -------------------------------------------------------------------------- */
/* Company & site                                                             */
/* -------------------------------------------------------------------------- */

export const company = {
  name: "Turtle Island Power Inc.",
  shortName: "TIPI",
  legalName: "14638093 Canada Inc.",
  legalOperatingName: "14638093 Canada Inc. operating as Turtle Island Power Inc.",
  project: "Kootenay Green Hydrogen Project",
  location: {
    locality: "Blewett",
    region: "British Columbia",
    regionCode: "BC",
    country: "CA",
  },
  contact: {
    // PLACEHOLDER: client to supply. Rendered as a visible placeholder until then.
    email: "[CONTACT EMAIL — TBC]",
    phone: "[PHONE — TBC]",
    /** Set to a real address to enable mailto links. */
    emailIsPlaceholder: true,
  },
  /** Add real profile URLs when available (used in JSON-LD sameAs). */
  sameAs: [] as string[],
} as const;

export const site = {
  url: "https://tipicanada.com",
  locale: "en_CA",
  title: "Turtle Island Power Inc. | Kootenay Green Hydrogen Project",
  description:
    "Turtle Island Power Inc. is a majority Indigenous-owned green hydrogen developer advancing the Kootenay Green Hydrogen Project, a proposed 100 MW facility in Blewett, BC.",
  keywords: [
    "Turtle Island Power Inc.",
    "Kootenay Green Hydrogen Project",
    "green hydrogen",
    "British Columbia",
    "Indigenous-owned",
    "Energy-as-a-Service",
    "Blewett",
    "clean energy investment",
  ],
  brandLines: {
    primary: "Powering Connection. Grounded in Identity.",
    secondary: "Indigenous Leadership. Clean Energy. Lasting Impact.",
  },
} as const;

/* -------------------------------------------------------------------------- */
/* Navigation                                                                 */
/* -------------------------------------------------------------------------- */

export const nav: { links: NavLink[]; investmentLink: NavLink; cta: Cta } = {
  links: [
    { label: "Our Story", href: "#story" },
    { label: "Opportunity", href: "#opportunity" },
    { label: "Our Path", href: "#path" },
    { label: "Community", href: "#community" },
    { label: "Timeline", href: "#timeline" },
    { label: "Team", href: "#team" },
    { label: "FAQ", href: "#faq" },
  ],
  // Only shown when SHOW_INVESTMENT_ASK is on.
  investmentLink: { label: "Investment", href: "#investment" },
  cta: { label: "Investor Inquiry", href: "#contact" },
};

/* -------------------------------------------------------------------------- */
/* 1. Hero                                                                    */
/* -------------------------------------------------------------------------- */

export const hero = {
  eyebrow: site.brandLines.secondary,
  // Client-requested line (tagline doc). Brand Guide V10 line is used in the footer & metadata.
  headline: ["Powered by Water.", "Driven by Vision."],
  valueStatement:
    "Turtle Island Power Inc. is a majority Indigenous-owned green hydrogen developer advancing the Kootenay Green Hydrogen Project, a proposed 100 MW facility powered by British Columbia's clean electricity grid.",
  primaryCta: { label: "Request Investor Information", href: "#contact" },
  secondaryCta: { label: "Explore the Project", href: "#path" },
  facts: [
    { value: "100 MW", label: "Proposed electrolysis facility" },
    { value: "Blewett, BC", label: "Kootenay region" },
    { value: "2030", label: "Target commercial operations" },
    { value: "51%+", label: "Indigenous ownership" },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* 2. Our Story  (Messaging Platform — Our Story, Vision; Brand Guide values)   */
/* -------------------------------------------------------------------------- */

export const story = {
  id: "story",
  eyebrow: "Our Story",
  heading: "Environmental responsibility and commercial success don't have to compete.",
  paragraphs: [
    "Canada's industrial and energy sectors are entering a period of transformation. Increasing environmental regulations, government incentives, and the growing demand for lower-carbon solutions are reshaping how organizations operate, creating a significant opportunity for commercially viable clean energy solutions.",
    "Turtle Island Power Inc. was founded to help organizations navigate that transition through a commercially sustainable business model that delivers practical green hydrogen production, storage, and transportation infrastructure while creating long-term value for investors, industry, and the communities we serve.",
    "As a majority Indigenous-owned, fully integrated green hydrogen supply chain, we're proving that environmental responsibility and commercial success can move forward together. Guided by Indigenous values of responsibility, respect, and long-term thinking, we're building a repeatable model that strengthens communities, supports industry, and creates lasting opportunity for future generations.",
  ],
  vision: {
    label: "Vision",
    text: "To restore balance between people, industry, and the land by using innovation and stewardship to leave every community stronger than we found it.",
  },
  values: [
    { title: "Trust", body: "Built on integrity and accountability." },
    { title: "Progress", body: "Advancing clean energy and opportunity." },
    { title: "Respect", body: "Honouring land, community, and partnership." },
  ],
  image: {
    alt: "The Kootenay River valley near Blewett, British Columbia",
    placeholderNote: "[PHOTO — Kootenay landscape near the project site. Client to supply.]",
  } satisfies ImageSlot,
} as const;

/* -------------------------------------------------------------------------- */
/* 3. The Opportunity  (FAQ Q2, Q6 + Messaging Platform value points)          */
/* -------------------------------------------------------------------------- */

export const opportunity = {
  id: "opportunity",
  eyebrow: "The Opportunity",
  heading: "Meeting growing demand for practical, clean energy.",
  intro:
    "Hard-to-decarbonize industries need reliable, lower-carbon fuel without taking on the cost and complexity of producing it themselves.",
  cards: [
    {
      title: "Strategic Regional Advantage",
      body: "The Blewett site offers a rare combination of no-zoning riverfront land, access to clean electricity from the regional hydroelectric system, and proximity to industrial and transportation corridors, with future connections along the Highway 3 corridor between Vancouver and Calgary.",
    },
    {
      title: "Energy-as-a-Service",
      body: "Instead of simply selling hydrogen as a commodity, the project offers long-term service contracts. Customers receive reliable hydrogen supply without having to build or finance their own production equipment, creating more stable, contracted revenue for the project.",
    },
    {
      title: "Regulatory Tailwinds",
      body: "Environmental regulations are reshaping heavy industry. Turtle Island Power Inc. helps industrial operators reduce emissions, avoid carbon penalties, and capitalize on emerging clean energy incentives, turning regulatory challenges into long-term competitive advantages.",
    },
    {
      title: "Commercial Sustainability",
      body: "Built on sound economics, strategic government incentives, and long-term planning, our business model is designed to deliver long-term returns by aligning financial performance with environmental responsibility.",
    },
  ] satisfies Card[],
} as const;

/* -------------------------------------------------------------------------- */
/* 4. Our Path  (value chain; FAQ Q1, Q5, Q8)                                  */
/* -------------------------------------------------------------------------- */

export const path = {
  id: "path",
  eyebrow: "Our Path",
  heading: "One integrated value chain, from clean power to clean fuel.",
  intro:
    "Turtle Island Power Inc. manages production, compression, storage, transport, and delivery under long-term Energy-as-a-Service contracts, giving customers a single, reliable pathway to cleaner energy.",
  steps: [
    {
      icon: "electrolysis",
      title: "Electrolysis",
      body: "Hydrogen is produced from water using electricity from BC's clean, primarily hydroelectric grid. No fossil fuels are used in production.",
    },
    {
      icon: "compression",
      title: "Compression",
      body: "Hydrogen is compressed to prepare it for safe storage and efficient transport.",
    },
    {
      icon: "storage",
      title: "Storage",
      body: "On-site storage maintains a reliable supply for customers who depend on continuous operations.",
    },
    {
      icon: "transport",
      title: "Transport",
      body: "Hydrogen is delivered to customers through an integrated, company-managed logistics operation.",
    },
    {
      icon: "end-use",
      title: "Clean Fuel End Use",
      body: "Local industry, commercial vehicles, and retail customers use clean hydrogen in place of higher-emission diesel fuels.",
    },
  ] satisfies PathStep[],
  power: {
    title: "Powered by BC's clean grid",
    body: "Electricity will come from the BC Hydro system, with the nearby Kootenay Canal Generating Station as a key regional source. The project is working with BC Hydro on formal transmission connection studies to establish a reliable, high-voltage supply to the site.",
  },
} as const;

/* -------------------------------------------------------------------------- */
/* 5. Key Differentiators  (Messaging Platform; "Canada's first" removed)       */
/* -------------------------------------------------------------------------- */

export const differentiators = {
  id: "differentiators",
  eyebrow: "Key Differentiators",
  heading: "What sets Turtle Island Power Inc. apart.",
  items: [
    {
      title: "A Majority Indigenous-Owned Green Hydrogen Supply Chain",
      body: "Indigenous stewardship shapes not only who we are, but how we make decisions, build partnerships, and create long-term value.",
    },
    {
      title: "End-to-End Energy-as-a-Service Model",
      body: "From hydrogen production and storage to transportation and delivery, we provide a fully integrated clean energy solution designed to help organizations transition with confidence.",
    },
    {
      title: "Financially Sustainable by Design",
      body: "Built on robust economics, government incentives, and commercial viability, our business model is designed to deliver long-term value while demonstrating that environmental responsibility and commercial success can move forward together.",
    },
    {
      title: "Repeatable Community Development Model",
      body: "Designed as a scalable blueprint, our approach can be adapted to strengthen Indigenous and rural communities across Canada.",
    },
    {
      // VERIFY: Messaging Platform adds "with no direct regional competition". Omitted pending verification.
      title: "Strategic Regional Advantage",
      body: "Located in British Columbia's Kootenay region, near hydroelectric resources and regional mining operations, our project is positioned to support Canada's decarbonization goals.",
    },
  ] satisfies Card[],
} as const;

/* -------------------------------------------------------------------------- */
/* 6. Community & Partnership  (FAQ wording only: Q3, Q4, Q9; Disclaimer §5)    */
/* -------------------------------------------------------------------------- */

export const community = {
  id: "community",
  eyebrow: "Community & Partnership",
  heading: "Indigenous ownership, built in from the start.",
  ownership: {
    title: "Who owns the project?",
    body: "The project is being developed by Turtle Island Power Inc., a majority Indigenous-owned company. Ownership is structured so that Indigenous partners retain at least 51 percent. At full external investment, residual ownership is shared equally between the Métis Founder and the Ktunaxa First Nation (27.5 percent each), with external investors limited to a maximum of 45 percent.",
    chartLabel: "Proposed ownership at full external investment",
    segments: [
      { label: "Métis Founder", percent: 27.5, indigenous: true },
      { label: "Ktunaxa First Nation", percent: 27.5, indigenous: true },
      { label: "External investors", percent: 45, qualifier: "max", indigenous: false },
    ] satisfies OwnershipSegment[],
    indigenousFloorLabel: "Indigenous partners retain at least 51%",
  },
  benefits: {
    title: "How the project benefits the Ktunaxa Nation and local communities",
    body: "The project is designed to deliver long-term equity ownership, employment, training, and procurement opportunities. Engagement with the Ktunaxa Nation is based on free, prior and informed processes through the Nation's own institutions. Local benefits also include construction and permanent jobs, support for regional supply chains, and reduced reliance on higher-emission diesel fuels.",
  },
  safeguards: {
    title: "Environmental and community safeguards",
    body: "The project requires environmental reviews, a Good Neighbour assessment of local road impacts, and ongoing engagement with the Ktunaxa Nation. Land acquisition itself is conditional on financing, feasibility, legal review, environmental assessment, Nation participation, and related due-diligence steps. The design prioritizes low-carbon production and long-term operational responsibility.",
  },
  // From the approved Legal Disclaimer, §5.
  consentNote:
    "The Project is located within ʔamakʔis Ktunaxa. Any participation by the Ktunaxa Nation, including any residual equity interest, is subject to the Nation's free, prior and informed decision-making processes conducted through its own institutions.",
} as const;

/* -------------------------------------------------------------------------- */
/* 7. Timeline  (FAQ Q7; 2026 entry derived from FAQ Q7–Q9)                    */
/* -------------------------------------------------------------------------- */

export const timeline = {
  id: "timeline",
  eyebrow: "Timeline",
  heading: "From development to regional hydrogen hubs.",
  items: [
    {
      year: "2026",
      title: "Development",
      body: "Land acquisition, BC Hydro transmission connection studies, engagement with the Ktunaxa Nation, and financing processes are underway.",
      // VERIFY: not a dated milestone in the FAQ. Client to confirm wording.
      needsApproval: true,
    },
    {
      year: "2030",
      title: "Commercial operations",
      body: "Target start of commercial operations at the main production facility in Blewett.",
    },
    {
      year: "2031",
      title: "Castlegar hub",
      body: "Planned retail commercial outlet in Castlegar.",
    },
    {
      year: "2033",
      title: "Trail hub",
      body: "Planned commercial vehicle hub and industrial terminal in Trail.",
    },
  ] satisfies TimelineItem[],
  caveat:
    "Timelines depend on successful completion of land acquisition, financing, permits, interconnection, and partnership processes. All timelines and projections are subject to change based on regulatory, partnership, and financing outcomes.",
} as const;

/* -------------------------------------------------------------------------- */
/* 8. The Investment  — hidden unless SHOW_INVESTMENT_ASK is on                 */
/* -------------------------------------------------------------------------- */

export const investment = {
  id: "investment",
  eyebrow: "The Investment",
  // PLACEHOLDER: figure from the content draft. Client approval required before enabling.
  amount: "$10M",
  amountLabel: "Seed capital sought",
  heading: "Seeking $10M in seed capital.",
  body: "Seed investment will fund the development activities required to advance the Kootenay Green Hydrogen Project toward a final investment decision. Detailed financials, the capital plan, and investor terms are shared with qualified investors under a mutual non-disclosure agreement.",
  cta: { label: "Request the Investor Package", href: "#contact" },
} as const;

/* -------------------------------------------------------------------------- */
/* 9. Team  (08/19/26 Core Team; individual bios)                              */
/* -------------------------------------------------------------------------- */

export const team = {
  id: "team",
  eyebrow: "Our Team",
  heading: "A focused team for a development-stage project.",
  intro:
    "Turtle Island Power Inc. brings together Indigenous leadership, financial oversight, hydrogen technology, safety, and logistics experience, with external engineering support engaged as the project advances.",
  members: [
    {
      name: "David J. Sedmak",
      initials: "DS",
      role: "Métis Founder & Project Lead",
      bio: "A Métis founder with hands-on leadership across oil and gas, mining, heavy construction, and large-scale industrial concrete construction. David leads strategy, capital formation, government relations, and Indigenous engagement for the Kootenay Green Hydrogen Project.",
      // PLACEHOLDER: headshot not supplied.
    },
    {
      name: "Johanna Jean (JJ) McKellar",
      initials: "JM",
      role: "Financial Department Oversight Officer",
      bio: "JJ brings 25 years of experience in financial services and automotive credit, including banking and loan structuring, and oversees the company's financial foundation, controls, and use of funds.",
      // PLACEHOLDER: headshot not supplied.
    },
    {
      name: "Dr. Mohammed M. Hussain, Ph.D.",
      initials: "MH",
      role: "Principal Independent Consultant — Technical, Techno-Economic & Project Development",
      bio: "A clean-energy scientist with more than 20 years of experience in hydrogen and fuel cell technologies across academia, national research, and industry. He is a former Ballard Power researcher with research experience at the National Research Council of Canada (NRC), and holds a Ph.D. in Engineering from the University of Waterloo.",
      // Headshot exists in Drive: add as /public/team/mohammed-hussain.jpg, then set photo.
      // photo: "/team/mohammed-hussain.jpg",
      needsApproval: true,
    },
    {
      name: "Mark William McKellar",
      initials: "MM",
      role: "Safety, Fire Prevention & Security Advisor",
      bio: "A retired Captain of the Vancouver Fire Department, where he served from 1990 to 2022. Mark advises on safety, fire prevention, and security for the project, including industrial and wildland-interface risk, perimeter protection, and prevention systems from development through operation.",
      // Headshot exists in Drive: add as /public/team/mark-mckellar.jpg, then set photo.
      // photo: "/team/mark-mckellar.jpg",
    },
    {
      name: "Russell Hunt",
      initials: "RH",
      role: "Logistics, Good Neighbour & Operations Advisor",
      bio: "Russell brings off-highway and on-road logistics experience across oil and gas, logging, and heavy haul, and supports construction logistics, road planning for the Good Neighbour assessment, and ongoing delivery operations.",
      // PLACEHOLDER: headshot and full bio not supplied.
    },
  ] satisfies TeamMember[],
} as const;

/* -------------------------------------------------------------------------- */
/* 10. FAQ  (approved FAQ, verbatim)                                           */
/* -------------------------------------------------------------------------- */

export const faq = {
  id: "faq",
  eyebrow: "FAQ",
  heading: "Frequently asked questions",
  items: [
    {
      question: "What is the Kootenay Green Hydrogen Project?",
      answer:
        "The Kootenay Green Hydrogen Project is a proposed 100-megawatt green hydrogen production facility in Blewett, British Columbia. It will produce clean hydrogen using renewable electricity and water, supplying local industry, commercial vehicles, and retail customers through an Energy-as-a-Service model. The project includes two future hubs: a retail commercial outlet in Castlegar and a commercial vehicle and industrial terminal in Trail.",
    },
    {
      question: "Why is this project located in the Kootenays?",
      answer:
        "The site offers a rare combination of no-zoning riverfront land, access to clean electricity from the regional hydroelectric system, proximity to industrial and transportation corridors, and a strong opportunity for meaningful Indigenous economic participation. The location supports both local supply and future connections along the Highway 3 corridor between Vancouver and Calgary.",
    },
    {
      question: "Who owns the project?",
      answer:
        "The project is being developed by Turtle Island Power Inc., a majority Indigenous-owned company. Ownership is structured so that Indigenous partners retain at least 51 percent. At full external investment, residual ownership is shared equally between the Métis Founder and the Ktunaxa First Nation (27.5 percent each), with external investors limited to a maximum of 45 percent.",
    },
    {
      question: "How does the project benefit the Ktunaxa Nation and local communities?",
      answer:
        "The project is designed to deliver long-term equity ownership, employment, training, and procurement opportunities. Engagement with the Ktunaxa Nation is based on free, prior and informed processes through the Nation's own institutions. Local benefits also include construction and permanent jobs, support for regional supply chains, and reduced reliance on higher-emission diesel fuels.",
    },
    {
      question: "Is the hydrogen truly green?",
      answer:
        "Yes. The facility will produce hydrogen through electrolysis powered by British Columbia's clean electricity grid, primarily hydroelectric resources. No fossil fuels are used in the production process. The project also plans for responsible water use drawn from the Kootenay River under applicable environmental reviews and permits.",
    },
    {
      question: "What is Energy-as-a-Service and why does it matter?",
      answer:
        "Instead of simply selling hydrogen as a commodity, the project offers long-term service contracts. Customers receive reliable hydrogen supply without having to build or finance their own production equipment. This model reduces barriers for industry and commercial users while creating more stable, contracted revenue for the project.",
    },
    {
      question: "When will the project be operational?",
      answer:
        "Current planning targets commercial operations at the main production facility in 2030. The Castlegar retail commercial outlet is planned for 2031, and the Trail commercial vehicle hub and industrial terminal for 2033. Timelines depend on successful completion of land acquisition, financing, permits, interconnection, and partnership processes.",
    },
    {
      question: "How will the project be powered?",
      answer:
        "Electricity will come from the BC Hydro system, with the nearby Kootenay Canal Generating Station as a key regional source. The project is working with BC Hydro on formal transmission connection studies to establish a reliable, high-voltage supply to the site.",
    },
    {
      question: "What environmental and community safeguards are in place?",
      answer:
        "The project requires environmental reviews, a Good Neighbour assessment of local road impacts, and ongoing engagement with the Ktunaxa Nation. Land acquisition itself is conditional on financing, feasibility, legal review, environmental assessment, Nation participation, and related due-diligence steps. The design prioritizes low-carbon production and long-term operational responsibility.",
    },
    {
      question: "How can interested parties learn more or get involved?",
      answer:
        "Qualified investors, partners, and stakeholders may request additional information under a mutual non-disclosure agreement. Media and general inquiries can be directed to Turtle Island Power Inc. The company is committed to transparent, respectful communication as the project advances through its development stages.",
    },
  ] satisfies FaqItem[],
} as const;

/* -------------------------------------------------------------------------- */
/* 11. Contact / Investor Inquiry  (FAQ Q10)                                   */
/* -------------------------------------------------------------------------- */

export const contact = {
  id: "contact",
  eyebrow: "Investor Inquiry",
  heading: "Request investor information.",
  body: "Qualified investors, partners, and stakeholders may request additional information under a mutual non-disclosure agreement. Media and general inquiries can be directed to Turtle Island Power Inc.",
  form: {
    fields: {
      name: "Full name",
      email: "Email",
      organization: "Organization",
      investorType: "I am a…",
      message: "Message",
      nda: "I would like to request a mutual non-disclosure agreement (NDA) to receive detailed project and financial information.",
    },
    investorTypes: [
      { value: "private-investor", label: "Private investor" },
      { value: "institutional-investor", label: "Institutional investor or fund" },
      { value: "industry-partner", label: "Industry or strategic partner" },
      { value: "indigenous-partner", label: "Indigenous Nation or organization" },
      { value: "government", label: "Government or agency" },
      { value: "media", label: "Media" },
      { value: "other", label: "Other" },
    ] satisfies SelectOption[],
    submit: "Send inquiry",
    submitting: "Sending…",
    successHeading: "Inquiry received",
    success:
      "Thank you. Your inquiry has been received and a member of the Turtle Island Power Inc. team will be in touch.",
    genericError: "Something went wrong sending your inquiry. Please try again.",
    privacyNote:
      "We use the information you provide only to respond to your inquiry. Submitting this form is not an offer or commitment to invest.",
  },
  directLabel: "Direct contact",
} as const;

/* -------------------------------------------------------------------------- */
/* 12. Footer & Legal Disclaimer  (verbatim)                                   */
/* -------------------------------------------------------------------------- */

export const footer = {
  tagline: site.brandLines.primary,
  shortNotice:
    "This website is provided for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities.",
  disclaimerToggle: "Legal disclaimer and disclosure",
  copyright: "© 2026 14638093 Canada Inc. operating as Turtle Island Power Inc. All rights reserved.",
} as const;

export const disclaimer = {
  title: "Legal Disclaimer and Disclosure",
  subtitle: "Kootenay Green Hydrogen Project",
  entity: "14638093 Canada Inc. operating as Turtle Island Power Inc.",
  important: "IMPORTANT – PLEASE READ CAREFULLY",
  intro:
    "This document, together with any related materials, presentations, financial models, website content, media statements, capital decks, or communications issued by or on behalf of 14638093 Canada Inc. operating as Turtle Island Power Inc. (“TIPI”, the “Company”, “we”, “us” or “our”) concerning the Kootenay Green Hydrogen Project (the “Project”), is provided for informational and discussion purposes only.",
  sections: [
    {
      heading: "1. No Offer or Solicitation",
      paragraphs: [
        // VERIFY (legal): confirm the "TIPI Coin" reference should appear on the public website.
        "Nothing contained herein constitutes an offer to sell, a solicitation of an offer to buy, or a recommendation regarding any securities, including any equity interests, debt instruments, or any tokenized or digital instruments (including any contemplated “TIPI Coin” or similar instrument). Any future offering of securities will be made only in compliance with applicable Canadian securities laws and solely to eligible investors under available prospectus exemptions or other lawful means. No securities regulatory authority has reviewed or approved the contents of this document.",
      ],
    },
    {
      heading: "2. Forward-Looking Information",
      paragraphs: [
        "This document contains forward-looking statements and information within the meaning of applicable securities laws. Forward-looking statements include, but are not limited to, statements regarding projected production volumes, capital and operating costs, revenues, EBITDA, free cash flow, internal rates of return, timelines (including commercial operation dates and hub deployment), offtake arrangements, interconnection outcomes, technology performance, incentive eligibility, ownership structures, and the potential participation of the Ktunaxa Nation.",
        "These statements are based on assumptions, estimates and expectations that management believes are reasonable as of the date hereof but that are inherently subject to significant business, technical, economic, regulatory, environmental, political and competitive uncertainties and contingencies. Actual results, performance, events or timelines may differ materially from those expressed or implied. TIPI undertakes no obligation to update or revise any forward-looking statements except as required by law.",
      ],
    },
    {
      heading: "3. Estimates and Assumptions Only",
      paragraphs: [
        "All financial figures, production estimates, cost projections, valuation references (including any pre-money valuation), efficiency metrics, and timelines are estimates only. They are based on currently available information, third-party data, vendor indications, and internal modelling. They are subject to change without notice as engineering, offtake, interconnection, permitting, partnership and financing work progresses.",
      ],
    },
    {
      heading: "4. No Guarantee of Project Outcomes",
      paragraphs: ["There is no assurance that:"],
      bullets: [
        "the Project will obtain required land rights, permits, environmental approvals or interconnection agreements on acceptable terms or at all;",
        "binding offtake contracts will be secured;",
        "financing (equity, debt or non-dilutive) will be obtained in the amounts or on the terms contemplated;",
        "the Ktunaxa Nation will determine to participate in the Project or will grant any form of consent or approval;",
        "technology performance, costs or timelines will meet current expectations; or",
        "the Project will reach final investment decision, construction or commercial operation.",
      ],
    },
    {
      heading: "5. Indigenous Rights and Engagement",
      paragraphs: [
        "The Project is located within ʔamakʔis Ktunaxa. Any participation by the Ktunaxa Nation, including any residual equity interest, is subject to the Nation’s free, prior and informed decision-making processes conducted through its own institutions. TIPI does not assume or represent that consent has been or will be given. References to Indigenous ownership structures describe the Company’s proposed framework only and do not constitute a determination of rights or a substitute for Nation-led processes.",
      ],
    },
    {
      heading: "6. Third-Party Information and Technology",
      paragraphs: [
        "Information concerning third-party technologies (including Quest One, Hydrogen Optimized or other vendors), government programs (including IRAP, Clean Fuels Fund, Clean Hydrogen Investment Tax Credit or PacifiCan), power rates, market data and comparable projects is drawn from publicly available sources or preliminary discussions and has not been independently verified in full. TIPI does not warrant the accuracy or completeness of such information.",
      ],
    },
    {
      heading: "7. No Reliance and Professional Advice",
      paragraphs: [
        "Recipients should not rely solely on this document when making any investment, partnership, contracting or other decision. Independent legal, financial, technical, tax, environmental and Indigenous-relations advice should be obtained. TIPI, its directors, officers, employees, agents and advisors accept no liability for any loss or damage arising from the use of or reliance on this document or any related materials.",
      ],
    },
    {
      heading: "8. Confidentiality",
      paragraphs: [
        "Where this document or related materials are marked confidential or provided under a non-disclosure agreement, the recipient agrees to maintain confidentiality and to use the information solely for the purpose for which it was provided.",
      ],
    },
    {
      heading: "9. Governing Law",
      paragraphs: [
        "This disclaimer shall be governed by the laws of the Province of British Columbia and the federal laws of Canada applicable therein.",
      ],
    },
    {
      heading: "10. Contact",
      paragraphs: [
        "For further information, authorized parties may contact Turtle Island Power Inc. under appropriate confidentiality arrangements.",
      ],
    },
  ] satisfies DisclaimerSection[],
} as const;
