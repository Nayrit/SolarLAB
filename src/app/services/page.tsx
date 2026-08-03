import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { PosterCta } from "@/components/sections/PosterCta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "EPC, OPEX and CAPEX rooftop solar, net metering, O&M, consultancy and proven technology stack.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="What we deliver"
        description="One accountable partner from feasibility through decades of operation — every service available under OPEX or CAPEX."
      />
      <ServicesSection />
      <ProcessSection />
      <TechnologySection />
      <PosterCta />
    </>
  );
}
