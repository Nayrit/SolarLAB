import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { PosterCta } from "@/components/sections/PosterCta";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Board and leadership of Solarhub Technology Ltd. — Dewan Ali Kabir, Md. Sazzad Amin, Muhammad Abu Hasan and Mohammad Nasimul Huq.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        kicker="Leadership"
        title="Board & leadership"
        description="Industrial heritage from Master Simex Paper and Peak Apparels, with marine engineering depth and a CEO who signed the Khulna Shipyard flagship."
      />
      <LeadershipSection />
      <PosterCta />
    </>
  );
}
