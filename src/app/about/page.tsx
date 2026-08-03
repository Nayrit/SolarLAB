import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { WhySection } from "@/components/sections/WhySection";
import { PosterCta } from "@/components/sections/PosterCta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Solarhub Technology Ltd. — vision, mission, values, leadership and why partners choose zero-capital OPEX solar.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Solarhub"
        title="The energy company that carries the risk"
        description="A Bangladeshi renewable-energy company delivering rooftop solar under the OPEX model — we fund, design, install and operate; you pay only for the power you use."
      />
      <AboutSection />
      <VisionSection />
      <LeadershipSection />
      <WhySection />
      <PosterCta />
    </>
  );
}
