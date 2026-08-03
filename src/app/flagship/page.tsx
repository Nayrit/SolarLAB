import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FlagshipSection } from "@/components/sections/FlagshipSection";
import { PipelineSection } from "@/components/sections/PipelineSection";
import { PosterCta } from "@/components/sections/PosterCta";

export const metadata: Metadata = {
  title: "Flagship project",
  description:
    "1.788 MWp rooftop solar at Khulna Shipyard Limited under a 22-year OPEX PPA.",
};

export default function FlagshipPage() {
  return (
    <>
      <PageHero
        kicker="Flagship project"
        title="Khulna Shipyard Limited"
        description="A 1.788 MWp defence-grade rooftop plant — signed 13 May 2026, now in construction."
      />
      <FlagshipSection />
      <PipelineSection />
      <PosterCta />
    </>
  );
}
