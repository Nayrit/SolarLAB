import { groupStats, sisterCompanies } from "@/lib/content";

export function GroupSection() {
  return (
    <section id="group" style={{ background: "var(--color-surface)" }}>
      <div className="container section">
        <span className="kicker">07 — Group &amp; affiliations</span>
        <h2 className="display" style={{ maxWidth: "18ch" }}>
          Part of a proven industrial group
        </h2>
        <p className="lede" style={{ maxWidth: "64ch", marginBottom: 44 }}>
          Solarhub is the renewable-energy arm of a group spanning garments,
          paper, roofing, real estate and chemicals — financial strength,
          procurement scale and operational discipline from day one.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
            gap: "clamp(20px, 3vw, 40px)",
            paddingBottom: "clamp(32px, 4vw, 48px)",
            borderBottom: "2px solid var(--color-divider)",
            marginBottom: "clamp(32px, 4vw, 48px)",
          }}
        >
          {groupStats.map((stat) => (
            <div key={stat.label}>
              <p
                className="stat-value"
                style={{ fontSize: "clamp(28px, 3vw, 42px)", marginBottom: 8 }}
              >
                {stat.value}
              </p>
              <p className="stat-label" style={{ fontSize: 11 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(26px, 3vw, 44px)",
          }}
        >
          {sisterCompanies.map((company) => (
            <div key={company.title}>
              <span
                style={{
                  display: "block",
                  fontSize: 10.5,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  marginBottom: 10,
                }}
              >
                {company.tag}
              </span>
              <h3 style={{ fontSize: 21, lineHeight: 1.2, margin: "0 0 10px" }}>
                {company.title}
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  margin: 0,
                  color:
                    "color-mix(in srgb, var(--color-text) 75%, transparent)",
                }}
              >
                {company.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
