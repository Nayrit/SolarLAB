import { flagshipParties, flagshipStats } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

export function FlagshipSection() {
  return (
    <section id="flagship" style={{ background: "var(--color-surface)" }}>
      <div className="container section">
        <Reveal>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 14,
              marginBottom: 28,
            }}
          >
            <span className="kicker" style={{ margin: 0 }}>
              04 — Flagship project
            </span>
            <span
              className="tag anim-blink"
              style={{
                background: "var(--color-accent)",
                color: "var(--color-bg)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: 11,
              }}
            >
              Signed · in construction
            </span>
          </div>
          <h2 className="display" style={{ maxWidth: "18ch" }}>
            Khulna Shipyard Limited
          </h2>
          <p className="lede" style={{ maxWidth: "64ch", marginBottom: 52 }}>
            A 22-year tripartite Power Purchase Agreement with Khulna Shipyard
            Ltd., a Bangladesh Navy installation, and West Zone Power
            Distribution Company Ltd. — rooftop solar under the OPEX model,
            signed 13 May 2026 in Khulna.
          </p>
        </Reveal>

        <div
          className="grid-divider"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            marginBottom: 52,
          }}
        >
          {flagshipStats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 70}
              style={{
                background: "var(--color-surface)",
                padding: "28px 22px",
              }}
            >
              <p
                className="stat-value"
                style={{ fontSize: "clamp(32px, 3.4vw, 48px)", marginBottom: 8 }}
              >
                {stat.value.includes("MWp") ? (
                  <>
                    <CountUp end={1.788} decimals={3} /> MWp
                  </>
                ) : stat.value.includes("yrs") ? (
                  <>
                    <CountUp end={22} /> yrs
                  </>
                ) : stat.value.includes("%") ? (
                  <>
                    <CountUp end={18} /> %
                  </>
                ) : (
                  stat.value
                )}
              </p>
              <p className="stat-label" style={{ fontSize: 11 }}>
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,320px), 1fr))",
            gap: "clamp(36px, 5vw, 72px)",
            alignItems: "start",
          }}
        >
          <Reveal>
            <h3
              style={{
                fontSize: 13,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                margin: "0 0 20px",
              }}
            >
              Roof plan · capacity by shed
            </h3>
            <svg
              viewBox="0 0 520 250"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                border: "2px solid var(--color-divider)",
                background: "var(--color-bg)",
              }}
              aria-label="Scaled roof plan: Shed-1 Platter Shop 7,865 m², Shed-2 Machine Shop 913 m²"
            >
              <g stroke="var(--color-divider)" strokeWidth="1" opacity=".5">
                <path d="M0 50h520M0 100h520M0 150h520M0 200h520M80 0v250M160 0v250M240 0v250M320 0v250M400 0v250" />
              </g>
              <rect
                x="30"
                y="40"
                width="330"
                height="170"
                fill="color-mix(in srgb, var(--color-accent) 14%, transparent)"
                stroke="var(--color-accent)"
                strokeWidth="2"
                className="model-node"
              />
              <g stroke="var(--color-accent)" strokeWidth="1" opacity=".55">
                <path d="M30 74h330M30 108h330M30 142h330M30 176h330" />
              </g>
              <text
                x="44"
                y="70"
                fontFamily="Archivo,sans-serif"
                fontSize="15"
                fontWeight="800"
                fill="var(--color-text)"
              >
                SHED-1 · PLATTER SHOP
              </text>
              <text
                x="44"
                y="196"
                fontFamily="Archivo,sans-serif"
                fontSize="13"
                fill="var(--color-text)"
              >
                7,865 m² · 1,608.9 kWp
              </text>
              <rect
                x="386"
                y="150"
                width="104"
                height="60"
                fill="color-mix(in srgb, var(--color-accent) 14%, transparent)"
                stroke="var(--color-accent)"
                strokeWidth="2"
                className="model-node"
              />
              <g stroke="var(--color-accent)" strokeWidth="1" opacity=".55">
                <path d="M386 170h104M386 190h104" />
              </g>
              <text
                x="386"
                y="140"
                fontFamily="Archivo,sans-serif"
                fontSize="13"
                fontWeight="800"
                fill="var(--color-text)"
              >
                SHED-2
              </text>
              <text
                x="386"
                y="228"
                fontFamily="Archivo,sans-serif"
                fontSize="12"
                fill="var(--color-text)"
              >
                913 m² · 185.9 kWp
              </text>
              <text
                x="30"
                y="24"
                fontFamily="Archivo,sans-serif"
                fontSize="11"
                letterSpacing="1.8"
                fill="color-mix(in srgb, var(--color-text) 55%, transparent)"
              >
                SCALED PLAN · TOTAL 8,778 m² · 1,788.8 kWp
              </text>
            </svg>
          </Reveal>
          <Reveal delay={120}>
            <h3
              style={{
                fontSize: 13,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                margin: "0 0 20px",
              }}
            >
              Agreement parties
            </h3>
            {flagshipParties.map((row, i) => (
              <div
                key={row.label}
                className="meta-row"
                style={{
                  borderTop:
                    i === 0 ? "2px solid var(--color-divider)" : undefined,
                }}
              >
                <span className="label" style={{ fontSize: 14, letterSpacing: 0, textTransform: "none" }}>
                  {row.label}
                </span>
                <span className="value">{row.value}</span>
              </div>
            ))}
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.65,
                margin: "24px 0 0",
                color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
              }}
            >
              A defence-grade reference: it proves Solarhub can fund, build and
              operate at scale for the most demanding institutional clients —
              with zero client capital.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
