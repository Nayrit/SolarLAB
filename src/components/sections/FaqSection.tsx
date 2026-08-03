import { FaqAccordion } from "@/components/FaqAccordion";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="container"
      style={{ paddingBottom: "clamp(48px, 6vw, 96px)" }}
    >
      <span className="kicker">09 — Questions</span>
      <h2 className="display" style={{ maxWidth: "18ch", marginBottom: 44 }}>
        Before you sign
      </h2>
      <FaqAccordion />
    </section>
  );
}
