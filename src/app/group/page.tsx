import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GroupSection } from "@/components/sections/GroupSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { PosterCta } from "@/components/sections/PosterCta";

export const metadata: Metadata = {
  title: "Group & affiliations",
  description:
    "Solarhub is the renewable-energy arm of a group spanning garments, paper, roofing, real estate and chemicals.",
};

export default function GroupPage() {
  return (
    <>
      <PageHero
        kicker="Group & affiliations"
        title="Part of a proven industrial group"
        description="Financial strength, procurement scale and operational discipline from sister companies across five sectors."
      />
      <GroupSection />
      <IndustriesSection />
      <PosterCta />
    </>
  );
}
