import { processSteps } from "@/lib/content";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="container"
      style={{ paddingBottom: "clamp(48px, 6vw, 96px)" }}
    >
      <span className="kicker">06 — Delivery process</span>
      <h2 className="display" style={{ maxWidth: "18ch", marginBottom: 44 }}>
        From roof to running plant
      </h2>
      {processSteps.map((step, i) => (
        <div
          key={step.num}
          className="process-row"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(56px, 88px) minmax(0, 280px) minmax(0, 1fr)",
            gap: "10px clamp(20px, 4vw, 64px)",
            alignItems: "baseline",
            padding: "24px 0",
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
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: 15,
              margin: 0,
              color: "var(--color-accent)",
            }}
          >
            {step.num}
          </p>
          <h3 style={{ fontSize: 22, lineHeight: 1.2, margin: 0 }}>
            {step.title}
          </h3>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              margin: 0,
              maxWidth: "58ch",
              color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
            }}
          >
            {step.body}
          </p>
        </div>
      ))}
    </section>
  );
}
