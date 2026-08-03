import { PageHero } from "@/components/PageHero";
import { GroupSection } from "@/components/sections/GroupSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { PosterCta } from "@/components/sections/PosterCta";
import { JsonLd } from "@/components/JsonLd";
import { SEO_PAGES, buildMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = buildMetadata(SEO_PAGES.group);

export default function GroupPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(SEO_PAGES.group)} />
      <PageHero
        kicker="Group & affiliations"
        title="Part of a proven industrial group"
        description="Financial strength, procurement scale and operational discipline from sister companies across five sectors."
        breadcrumbs={[{ name: "Group", path: "/group" }]}
      />
      <GroupSection />
      <IndustriesSection />
      <PosterCta />
    </>
  );
}
