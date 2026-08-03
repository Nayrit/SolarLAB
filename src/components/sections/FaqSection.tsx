import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="container"
      style={{ paddingBottom: "clamp(72px, 10vw, 140px)" }}
    >
      <Reveal>
        <span className="kicker">09 — Questions</span>
        <h2 className="display" style={{ maxWidth: "16ch", marginBottom: 52 }}>
          Before you sign
        </h2>
      </Reveal>
      <FaqAccordion />
    </section>
  );
}
