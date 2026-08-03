import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { PosterCta } from "@/components/sections/PosterCta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Solarhub Technology Ltd. funds, designs, installs and operates rooftop solar under the OPEX model.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Solarhub"
        title="The energy company that carries the risk"
        description="We finance, engineer, install and operate rooftop solar for industrial and institutional clients across Bangladesh."
      />
      <AboutSection />
      <PosterCta />
    </>
  );
}
