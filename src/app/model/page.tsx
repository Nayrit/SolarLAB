import { PageHero } from "@/components/PageHero";
import { ModelSection } from "@/components/sections/ModelSection";
import { PosterCta } from "@/components/sections/PosterCta";
import { JsonLd } from "@/components/JsonLd";
import { SEO_PAGES, buildMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = buildMetadata(SEO_PAGES.model);

export default function ModelPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(SEO_PAGES.model)} />
      <PageHero
        kicker="Business model"
        title="Three parties, one meter, one agreement"
        description="Every project runs on a tripartite PPA — producer, off-taker and distribution utility — so tariff and metering are clear from day one."
        breadcrumbs={[{ name: "Business model", path: "/model" }]}
      />
      <ModelSection />
      <PosterCta />
    </>
  );
}
