import { coreValues, visionMission } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function VisionSection() {
  return (
    <section id="vision" className="container section">
      <Reveal>
        <span className="kicker">Vision · Mission · Values</span>
        <h2 className="display" style={{ maxWidth: "12ch", marginBottom: 52 }}>
          What drives us
        </h2>
      </Reveal>

      <div
        className="grid-cols-2"
        style={{
          gap: 2,
          background: "var(--color-divider)",
          borderTop: "2px solid var(--color-divider)",
          borderBottom: "2px solid var(--color-divider)",
          marginBottom: 52,
        }}
      >
        <Reveal style={{ background: "var(--color-bg)", padding: "36px 32px" }}>
          <span
            style={{
              display: "block",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-accent-700)",
              marginBottom: 14,
            }}
          >
            Vision
          </span>
          <p style={{ fontSize: 18, lineHeight: 1.55, margin: 0 }}>
            {visionMission.vision}
          </p>
        </Reveal>
        <Reveal
          delay={80}
          style={{ background: "var(--color-bg)", padding: "36px 32px" }}
        >
          <span
            style={{
              display: "block",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-accent-700)",
              marginBottom: 14,
            }}
          >
            Mission
          </span>
          <p style={{ fontSize: 18, lineHeight: 1.55, margin: 0 }}>
            {visionMission.mission}
          </p>
        </Reveal>
      </div>

      <div className="grid-divider grid-cols-3">
        {coreValues.map((value, i) => (
          <Reveal
            key={value.title}
            delay={i * 50}
            style={{ padding: "28px 24px" }}
          >
            <h3 style={{ fontSize: 20, lineHeight: 1.2, margin: "0 0 10px" }}>
              {value.title}
            </h3>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.55,
                margin: 0,
                color: "color-mix(in srgb, var(--color-text) 75%, transparent)",
              }}
            >
              {value.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
