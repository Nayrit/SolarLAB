import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ModelSection } from "@/components/sections/ModelSection";
import { PosterCta } from "@/components/sections/PosterCta";

export const metadata: Metadata = {
  title: "Business model",
  description:
    "Tripartite Power Purchase Agreements under Bangladesh's net-metering framework.",
};

export default function ModelPage() {
  return (
    <>
      <PageHero
        kicker="Business model"
        title="Three parties, one meter, one agreement"
        description="Every project runs on a tripartite PPA — producer, off-taker and distribution utility — so tariff and metering are clear from day one."
      />
      <ModelSection />
      <PosterCta />
    </>
  );
}
