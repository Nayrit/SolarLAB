import Link from "next/link";
import { howItWorks, modelParties } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function ModelSection() {
  return (
    <section
      id="model"
      style={{
        background: "var(--color-neutral-900)",
        color: "var(--color-bg)",
        backgroundImage:
          "linear-gradient(color-mix(in srgb,var(--color-bg) 6%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--color-bg) 6%,transparent) 1px,transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    >
      <div className="container section">
        <Reveal>
          <span className="kicker kicker-light">02 — Our business model</span>
          <h2
            className="display"
            style={{ maxWidth: "16ch", color: "var(--color-bg)" }}
          >
            Three parties, one meter, one agreement
          </h2>
          <p
            className="lede lede-light"
            style={{ maxWidth: "62ch", marginBottom: 56 }}
          >
            Every project runs on a tripartite Power Purchase Agreement under the
            national net-metering framework, so responsibility, tariff and
            metering are unambiguous from day one.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ol className="model-flow-mobile" aria-label="Energy flow">
            {[
              "Sun",
              "Solarhub-owned array",
              "Inverter",
              "Client load",
              "Grid export",
            ].map((label, i) => (
              <li key={label}>
                <span className="flow-num">0{i + 1}</span>
                {label}
              </li>
            ))}
          </ol>
          <svg
            className="model-diagram"
            viewBox="0 0 1200 210"
            aria-label="Energy flow: sun to array to inverter to client load, with surplus exported to the grid"
          >
            <g fontFamily="Archivo,sans-serif" fill="var(--color-bg)">
              <circle
                className="model-node anim-pulse"
                cx="70"
                cy="105"
                r="28"
                fill="#e8b84a"
              />
              <text
                x="44"
                y="168"
                fontSize="12"
                letterSpacing="1.6"
                fill="color-mix(in srgb, var(--color-bg) 70%, transparent)"
              >
                SUN
              </text>
              <rect
                className="model-node"
                x="250"
                y="66"
                width="150"
                height="78"
                fill="none"
                stroke="var(--color-bg)"
                strokeWidth="2"
              />
              <text x="266" y="112" fontSize="19" fontWeight="800">
                ARRAY
              </text>
              <text
                x="250"
                y="168"
                fontSize="12"
                letterSpacing="1.6"
                fill="color-mix(in srgb, var(--color-bg) 70%, transparent)"
              >
                SOLARHUB-OWNED
              </text>
              <rect
                className="model-node"
                x="520"
                y="66"
                width="150"
                height="78"
                fill="none"
                stroke="var(--color-bg)"
                strokeWidth="2"
              />
              <text x="536" y="112" fontSize="19" fontWeight="800">
                INVERTER
              </text>
              <text
                x="520"
                y="168"
                fontSize="12"
                letterSpacing="1.6"
                fill="color-mix(in srgb, var(--color-bg) 70%, transparent)"
              >
                GRID-TIED
              </text>
              <rect
                className="model-node"
                x="790"
                y="66"
                width="150"
                height="78"
                fill="var(--color-accent)"
                stroke="var(--color-accent)"
                strokeWidth="2"
              />
              <text x="806" y="112" fontSize="19" fontWeight="800">
                YOUR LOAD
              </text>
              <text
                x="790"
                y="168"
                fontSize="12"
                letterSpacing="1.6"
                fill="color-mix(in srgb, var(--color-bg) 70%, transparent)"
              >
                BILLED PER UNIT
              </text>
              <rect
                className="model-node"
                x="1060"
                y="66"
                width="110"
                height="78"
                fill="none"
                stroke="var(--color-bg)"
                strokeWidth="2"
              />
              <text x="1076" y="112" fontSize="19" fontWeight="800">
                GRID
              </text>
              <text
                x="1040"
                y="168"
                fontSize="12"
                letterSpacing="1.6"
                fill="color-mix(in srgb, var(--color-bg) 70%, transparent)"
              >
                NET-METERED
              </text>
            </g>
            <g
              stroke="var(--color-accent)"
              strokeWidth="3"
              strokeDasharray="10 10"
              fill="none"
              className="anim-flow"
              style={{ animationDuration: "5s" }}
            >
              <path d="M100 105h150M400 105h120M670 105h120M940 105h120" />
            </g>
          </svg>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
            gap: 2,
            background: "color-mix(in srgb, var(--color-bg) 24%, transparent)",
            borderTop:
              "2px solid color-mix(in srgb, var(--color-bg) 24%, transparent)",
            borderBottom:
              "2px solid color-mix(in srgb, var(--color-bg) 24%, transparent)",
          }}
        >
          {modelParties.map((party, i) => (
            <Reveal key={party.role} delay={i * 90}>
              <div className="model-party">
                <span
                  style={{
                    display: "block",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--color-accent-500)",
                    marginBottom: 14,
                  }}
                >
                  {party.role}
                </span>
                <h3 style={{ fontSize: 24, lineHeight: 1.2, margin: "0 0 12px" }}>
                  {party.title}
                </h3>
                <p
                  style={{
                    fontSize: 15.5,
                    lineHeight: 1.65,
                    margin: 0,
                    color:
                      "color-mix(in srgb, var(--color-bg) 72%, transparent)",
                  }}
                >
                  {party.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <h3
            style={{
              fontSize: 13,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-accent-500)",
              margin: "56px 0 28px",
            }}
          >
            How it works
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
              gap: 2,
              background: "color-mix(in srgb, var(--color-bg) 24%, transparent)",
              borderTop:
                "2px solid color-mix(in srgb, var(--color-bg) 24%, transparent)",
              borderBottom:
                "2px solid color-mix(in srgb, var(--color-bg) 24%, transparent)",
            }}
          >
            {howItWorks.map((step) => (
              <div
                key={step.num}
                className="model-party"
                style={{ padding: "28px 24px" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: 14,
                    color: "var(--color-accent-500)",
                    margin: "0 0 12px",
                  }}
                >
                  {step.num}
                </p>
                <h4 style={{ fontSize: 20, lineHeight: 1.2, margin: "0 0 10px" }}>
                  {step.title}
                </h4>
                <p
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.55,
                    margin: 0,
                    color:
                      "color-mix(in srgb, var(--color-bg) 72%, transparent)",
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div style={{ marginTop: 40 }}>
            <Link
              href="/contact"
              className="btn"
              style={{
                textDecoration: "none",
                color: "var(--color-bg)",
                borderColor:
                  "color-mix(in srgb, var(--color-bg) 45%, transparent)",
                padding: "14px 24px",
              }}
            >
              Model your rooftop →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
