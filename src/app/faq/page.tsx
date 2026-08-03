import { PageHero } from "@/components/PageHero";
import { FaqSection } from "@/components/sections/FaqSection";
import { PosterCta } from "@/components/sections/PosterCta";
import { JsonLd } from "@/components/JsonLd";
import { SEO_PAGES, buildMetadata, faqJsonLd, webPageJsonLd } from "@/lib/seo";

export const metadata = buildMetadata(SEO_PAGES.faq);

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[webPageJsonLd(SEO_PAGES.faq), faqJsonLd()]} />
      <PageHero
        kicker="Questions"
        title="Before you sign"
        description="How OPEX billing, ownership, surplus generation and timelines work for Solarhub clients."
        breadcrumbs={[{ name: "FAQ", path: "/faq" }]}
      />
      <div style={{ paddingTop: "clamp(32px, 4vw, 48px)" }}>
        <FaqSection />
      </div>
      <PosterCta />
    </>
  );
}
