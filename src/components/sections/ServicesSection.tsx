import Link from "next/link";
import { services } from "@/lib/content";

export function ServicesSection() {
  return (
    <section id="services" className="container section">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 20,
          marginBottom: 44,
        }}
      >
        <div>
          <span className="kicker">03 — Services</span>
          <h2 className="display" style={{ maxWidth: "16ch", margin: 0 }}>
            What we deliver
          </h2>
        </div>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.6,
            maxWidth: "36ch",
            margin: 0,
            color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
          }}
        >
          One accountable partner from feasibility through decades of operation.
          Every service is available under OPEX or CAPEX.
        </p>
      </div>

      <div
        className="grid-divider"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {services.map((service) => (
          <div key={service.num} className="service-card">
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span
                style={{
                  width: 10,
                  height: 10,
                  background: "var(--color-accent)",
                  display: "block",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: 12.5,
                  letterSpacing: "0.1em",
                  color: "var(--color-accent)",
                }}
              >
                {service.num}
              </span>
            </div>
            <h3 style={{ fontSize: 24, lineHeight: 1.15, margin: 0 }}>
              {service.title}
            </h3>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.6,
                margin: 0,
                flex: 1,
                color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
              }}
            >
              {service.body}
            </p>
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: 0,
                color: "color-mix(in srgb, var(--color-text) 55%, transparent)",
              }}
            >
              {service.tags}
            </p>
            <Link
              href="/contact"
              className="btn btn-ghost"
              style={{
                alignSelf: "flex-start",
                paddingLeft: 0,
                textDecoration: "none",
              }}
            >
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
