import { whySolarhub } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function WhySection() {
  return (
    <section id="why" className="container section">
      <Reveal>
        <span className="kicker">Why Solarhub</span>
        <h2 className="display" style={{ maxWidth: "14ch" }}>
          The case for Solarhub
        </h2>
        <p className="lede" style={{ maxWidth: "64ch", marginBottom: 52 }}>
          We combine capital, engineering, and regulatory expertise so our
          clients get clean power with none of the cost, risk, or complexity of
          owning a solar plant.
        </p>
      </Reveal>

      <div
        className="grid-divider"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
        }}
      >
        {whySolarhub.map((item, i) => (
          <Reveal key={item.title} delay={i * 60}>
            <div className="service-card">
              <h3 style={{ fontSize: 24, lineHeight: 1.15, margin: 0 }}>
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.6,
                  margin: 0,
                  flex: 1,
                  color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
                }}
              >
                {item.body}
              </p>
              <span className="tag tag-outline">{item.tag}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: "clamp(22px, 2.8vw, 34px)",
            letterSpacing: "-0.02em",
            margin: "48px 0 0",
            maxWidth: "22ch",
          }}
        >
          No capital. No risk. Just cleaner power at a lower cost.
        </p>
      </Reveal>
    </section>
  );
}
