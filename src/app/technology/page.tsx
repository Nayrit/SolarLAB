import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { PosterCta } from "@/components/sections/PosterCta";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Tier-1 PV modules, SREDA-approved inverters, optional storage, SCADA monitoring and bi-directional net metering.",
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        kicker="Technology & solutions"
        title="Built on proven technology"
        description="Tier-one, internationally certified equipment specified per project — brand selections finalised at design stage to match each site."
      />
      <TechnologySection />
      <PosterCta />
    </>
  );
}
