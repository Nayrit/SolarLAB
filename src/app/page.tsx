import { HeroSection } from "@/components/sections/HeroSection";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { WhySection } from "@/components/sections/WhySection";
import { ModelSection } from "@/components/sections/ModelSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FlagshipSection } from "@/components/sections/FlagshipSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { GroupSection } from "@/components/sections/GroupSection";
import { PipelineSection } from "@/components/sections/PipelineSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { PosterCta } from "@/components/sections/PosterCta";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <AboutSection />
      <VisionSection />
      <LeadershipSection />
      <WhySection />
      <ModelSection />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <FlagshipSection />
      <TechnologySection />
      <GroupSection />
      <PipelineSection />
      <FaqSection />
      <PosterCta />
      <ContactSection />
    </>
  );
}
