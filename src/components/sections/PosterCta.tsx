import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import { partnerReasons } from "@/lib/content";

export function PosterCta() {
  return (
    <section className="poster-cta">
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(color-mix(in srgb,var(--color-bg) 12%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--color-bg) 12%,transparent) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        className="container"
        style={{
          position: "relative",
          paddingBlock: "clamp(72px, 10vw, 140px)",
          zIndex: 1,
        }}
      >
        <Reveal>
          <span
            style={{
              display: "block",
              fontSize: 13,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginBottom: 24,
              color: "color-mix(in srgb, var(--color-bg) 75%, transparent)",
            }}
          >
            Why partner with us
          </span>
          <h2
            style={{
              fontSize: "clamp(44px, 6.8vw, 92px)",
              lineHeight: 0.96,
              letterSpacing: "-0.035em",
              margin: "0 0 28px",
              marginLeft: "-0.04em",
              maxWidth: "14ch",
            }}
          >
            <span style={{ display: "block" }}>Put your roof to work.</span>
            <span style={{ display: "block" }}>Zero capital, zero risk.</span>
          </h2>
          <p
            style={{
              fontSize: "clamp(17px, 1.5vw, 22px)",
              lineHeight: 1.6,
              maxWidth: "56ch",
              margin: "0 0 40px",
            }}
          >
            Everything you need to switch to cleaner, cheaper power — delivered
            and operated by a single accountable partner.
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 2,
            background: "color-mix(in srgb, var(--color-bg) 28%, transparent)",
            borderTop:
              "2px solid color-mix(in srgb, var(--color-bg) 28%, transparent)",
            borderBottom:
              "2px solid color-mix(in srgb, var(--color-bg) 28%, transparent)",
            marginBottom: 44,
          }}
        >
          {partnerReasons.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 40}
              style={{
                background: "var(--color-accent)",
                padding: "24px 22px",
              }}
            >
              <h3 style={{ fontSize: 18, lineHeight: 1.2, margin: "0 0 8px" }}>
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.5,
                  margin: 0,
                  color: "color-mix(in srgb, var(--color-bg) 82%, transparent)",
                }}
              >
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <MagneticButton
            href="/contact"
            className="btn"
            style={{
              textDecoration: "none",
              background: "var(--color-bg)",
              color: "var(--color-accent)",
              padding: "18px 30px",
              fontSize: 17,
            }}
          >
            Start a conversation about your rooftop
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
