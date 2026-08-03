import { ContactSection } from "@/components/sections/ContactSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import {
  SEO_PAGES,
  buildMetadata,
  contactPageJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

export const metadata = buildMetadata(SEO_PAGES.contact);

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[webPageJsonLd(SEO_PAGES.contact), contactPageJsonLd()]}
      />
      <div className="container" style={{ paddingTop: 20, paddingBottom: 0 }}>
        <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
      </div>
      <ContactSection asPage />
    </>
  );
}
