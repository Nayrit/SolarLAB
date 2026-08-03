import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { WhySection } from "@/components/sections/WhySection";
import { PosterCta } from "@/components/sections/PosterCta";
import { JsonLd } from "@/components/JsonLd";
import { SEO_PAGES, buildMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = buildMetadata(SEO_PAGES.about);

export default function AboutPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(SEO_PAGES.about)} />
      <PageHero
        kicker="About Solarhub"
        title="The energy company that carries the risk"
        description="A Bangladeshi renewable-energy company delivering rooftop solar under the OPEX model — we fund, design, install and operate; you pay only for the power you use."
        breadcrumbs={[{ name: "About", path: "/about" }]}
      />
      <AboutSection />
      <VisionSection />
      <LeadershipSection />
      <WhySection />
      <PosterCta />
    </>
  );
}
