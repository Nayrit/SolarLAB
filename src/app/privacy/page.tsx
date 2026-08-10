import { PageHero } from "@/components/PageHero";
import { LegalDocument } from "@/components/LegalDocument";
import { JsonLd } from "@/components/JsonLd";
import { privacyPolicy } from "@/lib/legal";
import { SEO_PAGES, buildMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = buildMetadata(SEO_PAGES.privacy);

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(SEO_PAGES.privacy)} />
      <PageHero
        kicker="Legal"
        title={privacyPolicy.title}
        description="How Solarhub Technology Ltd. collects, uses and protects information on this website."
        breadcrumbs={[{ name: "Privacy Policy", path: "/privacy" }]}
      />
      <LegalDocument
        updated={privacyPolicy.updated}
        intro={privacyPolicy.intro}
        sections={privacyPolicy.sections}
      />
    </>
  );
}
