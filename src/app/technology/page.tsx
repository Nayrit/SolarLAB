import { PageHero } from "@/components/PageHero";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { PosterCta } from "@/components/sections/PosterCta";
import { JsonLd } from "@/components/JsonLd";
import { SEO_PAGES, buildMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = buildMetadata(SEO_PAGES.technology);

export default function TechnologyPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(SEO_PAGES.technology)} />
      <PageHero
        kicker="Technology & solutions"
        title="Built on proven technology"
        description="Tier-one, internationally certified equipment specified per project — brand selections finalised at design stage to match each site."
        breadcrumbs={[
          { name: "Services", path: "/services" },
          { name: "Technology", path: "/technology" },
        ]}
      />
      <TechnologySection />
      <PosterCta />
    </>
  );
}
