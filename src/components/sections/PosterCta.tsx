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
          paddingBlock: "clamp(52px, 7vw, 104px)",
          zIndex: 1,
        }}
      >
        <Reveal>
          <span
            style={{
              display: "block",
              fontSize: 12.5,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 24,
              color: "color-mix(in srgb, var(--color-bg) 78%, transparent)",
            }}
          >
            Why partner with us
          </span>
          <h2
            style={{
              fontSize: "clamp(32px, 8vw, 72px)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              margin: "0 0 28px",
              maxWidth: "16ch",
              color: "var(--color-bg)",
            }}
          >
            <span style={{ display: "block" }}>Put your roof to work.</span>
            <span style={{ display: "block" }}>Zero capital, zero risk.</span>
          </h2>
          <p
            style={{
              fontSize: "clamp(16px, 1.4vw, 20px)",
              lineHeight: 1.6,
              maxWidth: "56ch",
              margin: "0 0 34px",
              color: "color-mix(in srgb, var(--color-bg) 90%, transparent)",
            }}
          >
            Everything you need to switch to cleaner, cheaper power — delivered
            and operated by a single accountable partner.
          </p>
        </Reveal>

        <div
          className="grid-cols-3"
          style={{
            gap: 2,
            background: "color-mix(in srgb, var(--color-bg) 35%, transparent)",
            borderTop:
              "2px solid color-mix(in srgb, var(--color-bg) 35%, transparent)",
            borderBottom:
              "2px solid color-mix(in srgb, var(--color-bg) 35%, transparent)",
            marginBottom: 34,
          }}
        >
          {partnerReasons.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 40}
              style={{
                background: "var(--color-bg)",
                color: "var(--color-text)",
                padding: "22px 20px",
              }}
            >
              <h3 style={{ fontSize: 17, lineHeight: 1.2, margin: "0 0 6px" }}>
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.5,
                  margin: 0,
                  color: "color-mix(in srgb, var(--color-text) 72%, transparent)",
                }}
              >
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <MagneticButton
            href="/contact"
            className="btn"
            style={{
              textDecoration: "none",
              background: "var(--color-bg)",
              color: "var(--color-accent-800)",
              padding: "15px 26px",
              fontSize: 16,
            }}
          >
            Start a conversation about your rooftop
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
