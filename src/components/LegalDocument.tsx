import type { LegalSection } from "@/lib/legal";

type LegalDocumentProps = {
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalDocument({ updated, intro, sections }: LegalDocumentProps) {
  return (
    <article className="legal-doc container section">
      <p className="legal-updated">Last updated: {updated}</p>
      <p className="legal-intro">{intro}</p>
      {sections.map((section) => (
        <section key={section.heading} className="legal-section">
          <h2>{section.heading}</h2>
          {section.paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
          {section.bullets ? (
            <ul>
              {section.bullets.map((item) => (
                <li key={item.slice(0, 48)}>{item}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </article>
  );
}
