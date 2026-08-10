import { PageHero } from "@/components/PageHero";
import { LegalDocument } from "@/components/LegalDocument";
import { JsonLd } from "@/components/JsonLd";
import { termsOfUse } from "@/lib/legal";
import { SEO_PAGES, buildMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = buildMetadata(SEO_PAGES.terms);

export default function TermsPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(SEO_PAGES.terms)} />
      <PageHero
        kicker="Legal"
        title={termsOfUse.title}
        description="Rules for using the Solarhub website. Site content is informational; project terms live in signed agreements."
        breadcrumbs={[{ name: "Terms of Use", path: "/terms" }]}
      />
      <LegalDocument
        updated={termsOfUse.updated}
        intro={termsOfUse.intro}
        sections={termsOfUse.sections}
      />
    </>
  );
}
