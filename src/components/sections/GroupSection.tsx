import { groupStats, sisterCompanies } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function GroupSection() {
  return (
    <section id="group" style={{ background: "var(--color-surface)" }}>
      <div className="container section">
        <Reveal>
          <span className="kicker">07 — Group &amp; affiliations</span>
          <h2 className="display" style={{ maxWidth: "18ch" }}>
            Part of a proven industrial group
          </h2>
          <p className="lede" style={{ maxWidth: "64ch", marginBottom: 44 }}>
            Solarhub is the renewable-energy arm of a group spanning garments,
            paper, roofing, real estate and chemicals — financial strength,
            procurement scale and operational discipline from day one.
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 170px), 1fr))",
            gap: "clamp(20px, 3vw, 40px)",
            paddingBottom: "clamp(32px, 4vw, 48px)",
            borderBottom: "2px solid var(--color-divider)",
            marginBottom: "clamp(32px, 4vw, 48px)",
          }}
        >
          {groupStats.map((stat) => (
            <Reveal key={stat.label}>
              <p
                className="stat-value"
                style={{ fontSize: "clamp(28px, 3vw, 42px)", marginBottom: 8 }}
              >
                {stat.value}
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
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(28px, 3.5vw, 48px)",
          }}
        >
          {sisterCompanies.map((company, i) => (
            <Reveal key={company.title} delay={i * 60}>
              <div className="group-card">
                <span
                  style={{
                    display: "block",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-accent-700)",
                    marginBottom: 12,
                  }}
                >
                  {company.tag}
                </span>
                <h3 style={{ fontSize: 24, lineHeight: 1.2, margin: "0 0 12px" }}>
                  {company.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.65,
                    margin: 0,
                    color:
                      "color-mix(in srgb, var(--color-text) 75%, transparent)",
                  }}
                >
                  {company.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
