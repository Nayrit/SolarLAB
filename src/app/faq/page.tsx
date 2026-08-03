import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FaqSection } from "@/components/sections/FaqSection";
import { PosterCta } from "@/components/sections/PosterCta";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about OPEX rooftop solar, ownership, net metering and project timelines.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        kicker="Questions"
        title="Before you sign"
        description="How OPEX billing, ownership, surplus generation and timelines work for Solarhub clients."
      />
      <div style={{ paddingTop: "clamp(32px, 4vw, 48px)" }}>
        <FaqSection />
      </div>
      <PosterCta />
    </>
  );
}
