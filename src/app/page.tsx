import { HeroSection } from "@/components/sections/HeroSection";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { ModelSection } from "@/components/sections/ModelSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FlagshipSection } from "@/components/sections/FlagshipSection";
import { GroupSection } from "@/components/sections/GroupSection";
import { PipelineSection } from "@/components/sections/PipelineSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { PosterCta } from "@/components/sections/PosterCta";
import { JsonLd } from "@/components/JsonLd";
import {
  SEO_PAGES,
  buildMetadata,
  faqJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

export const metadata = buildMetadata(SEO_PAGES.home);

export default function HomePage() {
  return (
    <>
      <JsonLd data={[webPageJsonLd(SEO_PAGES.home), faqJsonLd()]} />
      <HeroSection />
      <StatsStrip />
      <AboutSection />
      <ModelSection />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <FlagshipSection showPhoto={false} />
      <GroupSection />
      <PipelineSection />
      <FaqSection />
      <ContactSection />
      <PosterCta />
    </>
  );
}
