import { PageHero } from "@/components/PageHero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { PosterCta } from "@/components/sections/PosterCta";
import { JsonLd } from "@/components/JsonLd";
import {
  SEO_PAGES,
  buildMetadata,
  servicesJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

export const metadata = buildMetadata(SEO_PAGES.services);

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[webPageJsonLd(SEO_PAGES.services), servicesJsonLd()]}
      />
      <PageHero
        kicker="Services"
        title="What we deliver"
        description="One accountable partner from feasibility through decades of operation — every service available under OPEX or CAPEX."
        breadcrumbs={[{ name: "Services", path: "/services" }]}
      />
      <ServicesSection />
      <ProcessSection />
      <TechnologySection />
      <PosterCta />
    </>
  );
}
