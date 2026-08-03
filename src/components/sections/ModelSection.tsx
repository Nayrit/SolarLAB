import { modelParties } from "@/lib/content";

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
        <span className="kicker kicker-light">02 — Our business model</span>
        <h2 className="display" style={{ maxWidth: "18ch", color: "var(--color-bg)" }}>
          Three parties, one meter, one agreement
        </h2>
        <p className="lede lede-light" style={{ maxWidth: "62ch", marginBottom: 48 }}>
          Every project runs on a tripartite Power Purchase Agreement under the
          national net-metering framework, so responsibility, tariff and metering
          are unambiguous from day one.
        </p>

        <svg
          viewBox="0 0 1200 210"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            marginBottom: 48,
          }}
          aria-label="Energy flow: sun to array to inverter to client load, with surplus exported to the grid"
        >
          <g fontFamily="Archivo,sans-serif" fill="var(--color-bg)">
            <circle cx="70" cy="105" r="26" fill="var(--color-accent)" />
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
            style={{ animationDuration: "7s" }}
          >
            <path d="M100 105h150M400 105h120M670 105h120M940 105h120" />
          </g>
        </svg>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 2,
            background: "color-mix(in srgb, var(--color-bg) 24%, transparent)",
            borderTop:
              "2px solid color-mix(in srgb, var(--color-bg) 24%, transparent)",
            borderBottom:
              "2px solid color-mix(in srgb, var(--color-bg) 24%, transparent)",
          }}
        >
          {modelParties.map((party) => (
            <div
              key={party.role}
              style={{
                background: "var(--color-neutral-900)",
                padding: "30px 26px",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: 10.5,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-accent-500)",
                  marginBottom: 12,
                }}
              >
                {party.role}
              </span>
              <h3 style={{ fontSize: 21, lineHeight: 1.2, margin: "0 0 10px" }}>
                {party.title}
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  margin: 0,
                  color: "color-mix(in srgb, var(--color-bg) 72%, transparent)",
                }}
              >
                {party.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
