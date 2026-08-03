import { PageHero } from "@/components/PageHero";
import { FlagshipSection } from "@/components/sections/FlagshipSection";
import { PipelineSection } from "@/components/sections/PipelineSection";
import { PosterCta } from "@/components/sections/PosterCta";
import { JsonLd } from "@/components/JsonLd";
import { SEO_PAGES, absoluteUrl, buildMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = buildMetadata(SEO_PAGES.flagship);

export default function FlagshipPage() {
  const projectLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Khulna Shipyard Limited 1.788 MWp rooftop solar plant",
    description: SEO_PAGES.flagship.description,
    url: absoluteUrl("/flagship"),
    brand: { "@id": absoluteUrl("/#organization") },
    category: "Rooftop solar photovoltaic plant",
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Capacity",
        value: "1.788 MWp",
      },
      {
        "@type": "PropertyValue",
        name: "Contract term",
        value: "22 years",
      },
    ],
  };

  return (
    <>
      <JsonLd data={[webPageJsonLd(SEO_PAGES.flagship), projectLd]} />
      <PageHero
        kicker="Flagship project"
        title="Khulna Shipyard Limited"
        description="A 1.788 MWp defence-grade rooftop plant — signed 13 May 2026, now in construction."
        breadcrumbs={[{ name: "Flagship", path: "/flagship" }]}
      />
      <FlagshipSection />
      <PipelineSection />
      <PosterCta />
    </>
  );
}
