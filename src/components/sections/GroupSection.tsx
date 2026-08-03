import { groupStats, sisterCompanies } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

export function GroupSection() {
  return (
    <section id="group" style={{ background: "var(--color-surface)" }}>
      <div className="container section">
        <Reveal>
          <span className="kicker">07 — Group &amp; affiliations</span>
          <h2 className="display" style={{ maxWidth: "16ch" }}>
            Part of a proven industrial group
          </h2>
          <p className="lede" style={{ maxWidth: "64ch", marginBottom: 52 }}>
            Solarhub is the renewable-energy arm of a group spanning garments,
            paper, roofing, real estate and chemicals — financial strength,
            procurement scale and operational discipline from day one.
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
            gap: "clamp(24px, 3vw, 48px)",
            paddingBottom: "clamp(36px, 5vw, 56px)",
            borderBottom: "2px solid var(--color-divider)",
            marginBottom: "clamp(36px, 5vw, 56px)",
          }}
        >
          {groupStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70}>
              <p
                className="stat-value"
                style={{ fontSize: "clamp(32px, 3.4vw, 52px)", marginBottom: 8 }}
              >
                {stat.value === "5" ? (
                  <CountUp end={5} />
                ) : stat.value === "20+ yrs" ? (
                  <>
                    <CountUp end={20} />+ yrs
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
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
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
