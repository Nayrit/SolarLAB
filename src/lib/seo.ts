import type { Metadata } from "next";
import { company, faqs, leadership, services } from "@/lib/content";

/** Public site origin — set NEXT_PUBLIC_SITE_URL in production. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://solarhubtechnology.com"
).replace(/\/$/, "");

export const SITE = {
  name: company.name,
  shortName: "Solarhub",
  tagline: "OPEX rooftop solar for industry in Bangladesh",
  description:
    "Solarhub Technology Ltd. funds, builds and operates rooftop solar under the zero-capital OPEX model. Industrial and institutional clients across Bangladesh pay only for clean power at an agreed discount to the grid tariff under the PPA.",
  locale: "en_BD",
  language: "en",
  email: company.email,
  phone: "+8801540731004",
  address: {
    street: "Sena Kalayan Trade Center (SKTC), Level 4, 29 Agrabad C/A",
    locality: "Chattogram",
    region: "Chattogram",
    postalCode: "4100",
    country: "BD",
  },
  additionalAddresses: [
    {
      street: "House No. 13/B, Road No. 99, Gulshan-2",
      locality: "Dhaka",
      postalCode: "1212",
      country: "BD",
    },
    {
      street: "62/221, Box Culvert Road, Purana Paltan (16th Floor)",
      locality: "Dhaka",
      postalCode: "1000",
      country: "BD",
    },
  ],
  geo: {
    // Agrabad, Chattogram approximate
    latitude: 22.3239,
    longitude: 91.8117,
  },
  sameAs: [] as string[],
} as const;

export type SeoPage = {
  path: string;
  title: string;
  /** Absolute document title when set (homepage). */
  absoluteTitle?: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
};

export const SEO_PAGES: Record<string, SeoPage> = {
  home: {
    path: "/",
    title: "Home",
    absoluteTitle:
      "OPEX Rooftop Solar in Bangladesh | Zero Capital · Solarhub",
    description:
      "Zero-capital OPEX rooftop solar for industry and institutions in Bangladesh. Solarhub funds, installs and operates the plant — you pay only for clean power below the grid tariff.",
    keywords: [
      "OPEX rooftop solar Bangladesh",
      "zero capital solar",
      "industrial solar Chattogram",
      "industrial solar Dhaka",
      "net metering SREDA",
      "Power Purchase Agreement solar",
      "Solarhub Technology",
      "Khulna Shipyard solar",
    ],
    changeFrequency: "weekly",
    priority: 1,
  },
  about: {
    path: "/about",
    title: "About",
    absoluteTitle: "About Solarhub Technology | OPEX Solar Company Bangladesh",
    description:
      "Meet Solarhub Technology Ltd. — vision, mission, values and leadership behind Bangladesh’s zero-capital OPEX rooftop solar company, registered in Chattogram.",
    keywords: [
      "Solarhub Technology Ltd",
      "about Solarhub",
      "OPEX solar company Bangladesh",
      "renewable energy Chattogram",
    ],
    changeFrequency: "monthly",
    priority: 0.9,
  },
  model: {
    path: "/model",
    title: "Business model",
    absoluteTitle: "OPEX Solar Model & Tripartite PPA | Solarhub Bangladesh",
    description:
      "How Solarhub’s OPEX model works: tripartite Power Purchase Agreements between producer, off-taker and utility under Bangladesh net-metering rules.",
    keywords: [
      "OPEX solar model",
      "tripartite PPA Bangladesh",
      "net metering rooftop solar",
      "zero capital solar agreement",
    ],
    changeFrequency: "monthly",
    priority: 0.9,
  },
  services: {
    path: "/services",
    title: "Services",
    absoluteTitle: "Rooftop Solar EPC, OPEX, CAPEX & O&M Services | Solarhub",
    description:
      "Full-stack rooftop solar services: feasibility, EPC, OPEX and CAPEX delivery, net metering, operations & maintenance, and consultancy across Bangladesh.",
    keywords: [
      "rooftop solar EPC Bangladesh",
      "solar O&M",
      "CAPEX solar installation",
      "net metering services",
      "industrial solar consultancy",
    ],
    changeFrequency: "monthly",
    priority: 0.9,
  },
  flagship: {
    path: "/flagship",
    title: "Flagship",
    absoluteTitle: "1.788 MWp Khulna Shipyard Solar Flagship | Solarhub",
    description:
      "Solarhub’s 1.788 MWp defence-grade rooftop solar flagship at Khulna Shipyard Limited: 22-year OPEX PPA, signed May 2026, now in construction.",
    keywords: [
      "Khulna Shipyard solar",
      "1.788 MWp rooftop solar",
      "defence solar Bangladesh",
      "OPEX PPA flagship",
    ],
    changeFrequency: "monthly",
    priority: 0.85,
  },
  group: {
    path: "/group",
    title: "Group",
    absoluteTitle: "Solarhub Group & Industrial Affiliations | Bangladesh",
    description:
      "Solarhub is the renewable-energy arm of a proven industrial group spanning garments, paper, roofing, real estate and chemicals in Bangladesh.",
    keywords: [
      "Emerging Group Bangladesh",
      "Peak Apparels",
      "Master Simex Paper",
      "Solarhub group companies",
    ],
    changeFrequency: "monthly",
    priority: 0.75,
  },
  faq: {
    path: "/faq",
    title: "FAQ",
    absoluteTitle: "OPEX Rooftop Solar FAQ | Ownership, Billing & Net Metering",
    description:
      "Frequently asked questions about OPEX billing, plant ownership, surplus generation, net metering, project timelines and CAPEX alternatives.",
    keywords: [
      "OPEX solar FAQ",
      "who owns rooftop solar",
      "net metering surplus",
      "solar project timeline Bangladesh",
    ],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  contact: {
    path: "/contact",
    title: "Contact",
    absoluteTitle: "Contact Solarhub | Request a Rooftop Solar Assessment",
    description:
      "Contact Solarhub Technology Ltd. in Bangladesh. Share roof details and reach the team by email or phone to discuss an OPEX rooftop solar assessment.",
    keywords: [
      "contact Solarhub",
      "rooftop solar assessment Bangladesh",
      "solar quote Chattogram",
      "industrial solar enquiry",
    ],
    changeFrequency: "yearly",
    priority: 0.95,
  },
  leadership: {
    path: "/leadership",
    title: "Leadership",
    absoluteTitle: "Solarhub Board & Leadership | Kabir, Hasan, Huq, Amin",
    description:
      "Board of Solarhub Technology Ltd.: Chairman Dewan Ali Kabir, Managing Director Muhammad Abu Hasan, and Directors Mohammad Nasimul Huq and Md. Sazzad Amin.",
    keywords: [
      "Solarhub leadership",
      "Dewan Ali Kabir",
      "Muhammad Abu Hasan",
      "solar company board Bangladesh",
    ],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  technology: {
    path: "/technology",
    title: "Technology",
    absoluteTitle: "Solar Tech Stack — PV, Inverters & SCADA | Solarhub",
    description:
      "Tier-1 PV modules, SREDA-approved inverters, optional storage, SCADA monitoring and bi-directional net metering specified per industrial rooftop.",
    keywords: [
      "tier-1 solar modules Bangladesh",
      "SREDA approved inverters",
      "solar SCADA monitoring",
      "net metering meter",
    ],
    changeFrequency: "monthly",
    priority: 0.75,
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy",
    absoluteTitle: "Privacy Policy | Solarhub Technology Ltd.",
    description:
      "How Solarhub Technology Ltd. collects and uses personal information from website visitors and contact form enquiries in Bangladesh.",
    keywords: [
      "Solarhub privacy policy",
      "website data protection Bangladesh",
      "cookie policy Solarhub",
    ],
    changeFrequency: "yearly",
    priority: 0.3,
  },
  terms: {
    path: "/terms",
    title: "Terms of Use",
    absoluteTitle: "Terms of Use | Solarhub Technology Ltd.",
    description:
      "Terms for using the Solarhub Technology Ltd. website. Content is informational; OPEX and PPA commitments require signed agreements.",
    keywords: [
      "Solarhub terms of use",
      "website terms Bangladesh",
      "OPEX solar disclaimer",
    ],
    changeFrequency: "yearly",
    priority: 0.3,
  },
};

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata(page: SeoPage): Metadata {
  const url = absoluteUrl(page.path);
  const title = page.absoluteTitle
    ? { absolute: page.absoluteTitle }
    : page.title;
  const ogTitle = page.ogTitle ?? page.absoluteTitle ?? page.title;

  return {
    title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: page.path === "/" ? "website" : "article",
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title: ogTitle,
      description: page.description,
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${SITE.shortName} — ${SITE.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: page.description,
      images: [absoluteUrl("/opengraph-image")],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": absoluteUrl("/#organization"),
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE_URL,
    logo: absoluteUrl("/icon"),
    image: absoluteUrl("/opengraph-image"),
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phone,
    foundingDate: "2026-05-11",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    location: [
      {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.locality,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postalCode,
        addressCountry: SITE.address.country,
      },
      ...SITE.additionalAddresses.map((addr) => ({
        "@type": "PostalAddress",
        streetAddress: addr.street,
        addressLocality: addr.locality,
        postalCode: addr.postalCode,
        addressCountry: addr.country,
      })),
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: {
      "@type": "Country",
      name: "Bangladesh",
    },
    knowsAbout: [
      "Rooftop solar",
      "OPEX solar",
      "Net metering",
      "Power Purchase Agreements",
      "Solar EPC",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "sales",
        areaServed: "BD",
        availableLanguage: ["English", "Bengali"],
        email: SITE.email,
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: SITE_URL,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": absoluteUrl("/#organization") },
    inLanguage: SITE.language,
    potentialAction: {
      "@type": "ReadAction",
      target: absoluteUrl("/faq"),
    },
  };
}

export function webPageJsonLd(page: SeoPage) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl(`${page.path}#webpage`),
    url: absoluteUrl(page.path),
    name: page.absoluteTitle ?? page.title,
    description: page.description,
    isPartOf: { "@id": absoluteUrl("/#website") },
    about: { "@id": absoluteUrl("/#organization") },
    inLanguage: SITE.language,
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function servicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Solarhub rooftop solar services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.body,
        provider: { "@id": absoluteUrl("/#organization") },
        areaServed: "BD",
        serviceType: "Rooftop solar",
      },
    })),
  };
}

export function leadershipJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Solarhub Technology Ltd. board",
    itemListElement: leadership.map((person, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        name: person.name,
        jobTitle: person.role,
        description: person.body,
        image: absoluteUrl(person.image),
        worksFor: { "@id": absoluteUrl("/#organization") },
      },
    })),
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": absoluteUrl("/contact#webpage"),
    url: absoluteUrl("/contact"),
    name: "Contact Solarhub Technology",
    description: SEO_PAGES.contact.description,
    mainEntity: { "@id": absoluteUrl("/#organization") },
  };
}
