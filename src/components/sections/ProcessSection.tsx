import { processSteps } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="container"
      style={{ paddingBottom: "clamp(72px, 10vw, 140px)" }}
    >
      <Reveal>
        <span className="kicker">06 — Delivery process</span>
        <h2 className="display" style={{ maxWidth: "16ch", marginBottom: 52 }}>
          From roof to running plant
        </h2>
      </Reveal>
      {processSteps.map((step, i) => (
        <Reveal key={step.num} delay={i * 60}>
          <div
            className="process-row process-step"
            style={{
              display: "grid",
              gridTemplateColumns:
                "minmax(56px, 88px) minmax(0, 280px) minmax(0, 1fr)",
              gap: "10px clamp(20px, 4vw, 64px)",
              alignItems: "baseline",
              padding: "28px 0",
              borderTop:
                i === 0
                  ? "2px solid var(--color-divider)"
                  : "1px solid var(--color-divider)",
              borderBottom:
                i === processSteps.length - 1
                  ? "2px solid var(--color-divider)"
                  : undefined,
            }}
          >
            <p
              className="step-num"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: 16,
                margin: 0,
                color: "var(--color-accent)",
              }}
            >
              {step.num}
            </p>
            <h3 style={{ fontSize: 24, lineHeight: 1.2, margin: 0 }}>
              {step.title}
            </h3>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.65,
                margin: 0,
                maxWidth: "58ch",
                color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
              }}
            >
              {step.body}
            </p>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
