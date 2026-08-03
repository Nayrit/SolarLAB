import { leadership } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function LeadershipSection() {
  return (
    <section id="leadership" style={{ background: "var(--color-surface)" }}>
      <div className="container section">
        <Reveal>
          <span className="kicker">Leadership</span>
          <h2 className="display" style={{ maxWidth: "14ch", marginBottom: 52 }}>
            Board &amp; leadership
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,320px), 1fr))",
            gap: "clamp(28px, 4vw, 48px)",
          }}
        >
          {leadership.map((person, i) => (
            <Reveal key={person.name} delay={i * 70}>
              <article className="leader-card">
                <span
                  style={{
                    display: "block",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--color-accent-700)",
                    marginBottom: 10,
                  }}
                >
                  {person.role}
                </span>
                <h3 style={{ fontSize: 28, lineHeight: 1.15, margin: "0 0 8px" }}>
                  {person.name}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    letterSpacing: "0.04em",
                    margin: "0 0 16px",
                    color: "color-mix(in srgb, var(--color-text) 65%, transparent)",
                  }}
                >
                  {person.highlight}
                </p>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.65,
                    margin: 0,
                    color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
                  }}
                >
                  {person.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
