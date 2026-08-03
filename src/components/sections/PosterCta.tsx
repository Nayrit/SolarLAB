import Link from "next/link";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";

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
          <h2
            style={{
              fontSize: "clamp(44px, 6.8vw, 92px)",
              lineHeight: 0.96,
              letterSpacing: "-0.035em",
              margin: "0 0 32px",
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
            Cleaner, cheaper power from day one — financed, engineered and
            operated by a single accountable partner.
          </p>
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
