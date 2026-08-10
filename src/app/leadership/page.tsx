import { PageHero } from "@/components/PageHero";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { PosterCta } from "@/components/sections/PosterCta";
import { JsonLd } from "@/components/JsonLd";
import { SEO_PAGES, buildMetadata, leadershipJsonLd, webPageJsonLd } from "@/lib/seo";

export const metadata = buildMetadata(SEO_PAGES.leadership);

export default function LeadershipPage() {
  return (
    <>
      <JsonLd
        data={[webPageJsonLd(SEO_PAGES.leadership), leadershipJsonLd()]}
      />
      <PageHero
        kicker="Leadership"
        title="Board & leadership"
        description="Industrial heritage from Master Simex Paper and Peak Apparels, with marine engineering depth led by Managing Director Muhammad Abu Hasan."
        breadcrumbs={[
          { name: "About", path: "/about" },
          { name: "Leadership", path: "/leadership" },
        ]}
      />
      <LeadershipSection />
      <PosterCta />
    </>
  );
}
