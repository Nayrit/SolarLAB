import { industries } from "@/lib/content";

export function IndustriesSection() {
  return (
    <section id="industries" className="container section">
      <span className="kicker">05 — Industries we serve</span>
      <h2 className="display" style={{ maxWidth: "16ch" }}>
        Who we power
      </h2>
      <p className="lede" style={{ maxWidth: "62ch", marginBottom: 44 }}>
        Energy-intensive industrial and institutional rooftops, with particular
        strength in government and defence-linked procurement.
      </p>
      <div
        className="grid-divider"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        {industries.map((item) => (
          <div key={item.title} style={{ padding: "24px 22px" }}>
            <h4 style={{ fontSize: 18, margin: "0 0 6px" }}>{item.title}</h4>
            <p
              style={{
                fontSize: 13.5,
                lineHeight: 1.5,
                margin: 0,
                color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
              }}
            >
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
