import Link from "next/link";
import { TelemetryPanel } from "@/components/TelemetryPanel";

export function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        background: "var(--color-neutral-900)",
        color: "var(--color-bg)",
        overflow: "hidden",
        backgroundImage:
          "linear-gradient(color-mix(in srgb,var(--color-bg) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--color-bg) 7%,transparent) 1px,transparent 1px)",
        backgroundSize: "72px 72px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(120% 80% at 78% 20%,color-mix(in srgb,var(--color-accent) 22%,transparent),transparent 60%)",
        }}
      />
      <div
        className="container"
        style={{
          position: "relative",
          paddingBlock: "clamp(40px,6vw,84px) clamp(48px,6vw,88px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
          gap: "clamp(32px,5vw,64px)",
          alignItems: "center",
        }}
      >
        <div className="anim-rise">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 26,
            }}
          >
            <span
              className="anim-pulse"
              style={{
                width: 8,
                height: 8,
                background: "var(--color-accent)",
                display: "block",
              }}
            />
            <span
              style={{
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "color-mix(in srgb, var(--color-bg) 72%, transparent)",
              }}
            >
              Rooftop solar · OPEX · Bangladesh
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(44px,7.4vw,92px)",
              lineHeight: 0.98,
              letterSpacing: "-0.035em",
              margin: "0 0 28px",
              marginLeft: "-0.05em",
            }}
          >
            <span style={{ display: "block" }}>Clean power,</span>
            <span style={{ display: "block", color: "var(--color-accent-500)" }}>
              zero capital.
            </span>
          </h1>
          <p
            style={{
              fontSize: "clamp(16.5px,1.4vw,20px)",
              lineHeight: 1.6,
              maxWidth: "52ch",
              margin: "0 0 36px",
              color: "color-mix(in srgb, var(--color-bg) 80%, transparent)",
            }}
          >
            We finance, engineer, install and operate the solar plant on your
            roof. You invest nothing — and buy only the power you use,
            permanently below the grid tariff.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link
              href="/contact"
              className="btn btn-primary"
              style={{ textDecoration: "none", padding: "14px 24px", fontSize: 15 }}
            >
              Get a rooftop assessment
            </Link>
            <Link
              href="/flagship"
              className="btn"
              style={{
                textDecoration: "none",
                padding: "14px 24px",
                fontSize: 15,
                color: "var(--color-bg)",
                borderColor:
                  "color-mix(in srgb, var(--color-bg) 45%, transparent)",
              }}
            >
              See the 1.788 MWp flagship
            </Link>
          </div>
        </div>
        <TelemetryPanel />
      </div>

      <div
        style={{
          position: "relative",
          borderTop:
            "2px solid color-mix(in srgb, var(--color-bg) 25%, transparent)",
        }}
      >
        <div
          className="container"
          style={{
            paddingBlock: 22,
            display: "flex",
            flexWrap: "wrap",
            gap: "14px 40px",
            alignItems: "center",
            fontSize: 12,
            letterSpacing: "0.13em",
            textTransform: "uppercase",
            color: "color-mix(in srgb, var(--color-bg) 70%, transparent)",
          }}
        >
          <span>Reg. CH-16658</span>
          <span>RE Policy 2025</span>
          <span>SREDA Net Metering 2025</span>
          <span>Tripartite PPA · WZPDCL</span>
          <span style={{ color: "var(--color-accent-500)" }}>
            Khulna Shipyard · signed 13 May 2026
          </span>
        </div>
      </div>
    </section>
  );
}
