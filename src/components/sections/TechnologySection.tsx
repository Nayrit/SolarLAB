import { technology } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function TechnologySection() {
  return (
    <section id="technology" style={{ background: "var(--color-surface)" }}>
      <div className="container section">
        <Reveal>
          <span className="kicker">Technology &amp; solutions</span>
          <h2 className="display" style={{ maxWidth: "16ch" }}>
            Built on proven technology
          </h2>
          <p className="lede" style={{ maxWidth: "62ch", marginBottom: 52 }}>
            We specify tier-one, internationally certified equipment per project,
            with brand selections finalised at the design stage to match each
            site.
          </p>
        </Reveal>

        <div
          className="grid-divider"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          }}
        >
          {technology.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 50}
              style={{
                background: "var(--color-surface)",
                padding: "32px 26px",
              }}
            >
              <div className="tech-card">
                <h3 style={{ fontSize: 22, lineHeight: 1.2, margin: "0 0 10px" }}>
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.55,
                    margin: "0 0 16px",
                    color:
                      "color-mix(in srgb, var(--color-text) 78%, transparent)",
                  }}
                >
                  {item.body}
                </p>
                <span className="tag tag-outline">{item.tag}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
