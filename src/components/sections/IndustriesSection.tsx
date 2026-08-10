import { industries } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function IndustriesSection() {
  return (
    <section id="industries" className="container section">
      <Reveal>
        <span className="kicker">05 — Industries we serve</span>
        <h2 className="display" style={{ maxWidth: "14ch" }}>
          Who we power
        </h2>
        <p className="lede" style={{ maxWidth: "62ch", marginBottom: 52 }}>
          Energy-intensive industrial and institutional rooftops, with particular
          strength in government and defence-linked procurement.
        </p>
      </Reveal>
      <div className="grid-divider grid-cols-4">
        {industries.map((item, i) => (
          <Reveal key={item.title} delay={i * 50}>
            <div className="industry-tile">
              <h4 style={{ fontSize: 20, margin: "0 0 8px" }}>{item.title}</h4>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.5,
                  margin: 0,
                  color:
                    "color-mix(in srgb, var(--color-text) 70%, transparent)",
                }}
              >
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
