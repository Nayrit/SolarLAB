import Image from "next/image";
import { aboutMeta, company } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function AboutSection() {
  return (
    <section id="about" className="container section">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,340px), 1fr))",
          gap: "clamp(40px, 6vw, 96px)",
          alignItems: "start",
        }}
      >
        <Reveal>
          <span className="kicker">01 — About Solarhub</span>
          <h2 className="display" style={{ maxWidth: "15ch" }}>
            The energy company that carries the risk
          </h2>
          <p className="lede" style={{ marginBottom: 20 }}>
            Solarhub Technology Ltd. is a Bangladeshi renewable-energy company
            delivering rooftop solar power to industrial and institutional
            clients under the OPEX (zero-capital) model, in which Solarhub
            funds, designs, installs, and operates the solar system, and the
            client pays only for the power consumed, at a discount to the grid
            tariff.
          </p>
          <p className="lede" style={{ marginBottom: 20 }}>
            The company operates under Bangladesh&apos;s Renewable Energy Policy
            2025 and the SREDA Net Metering Guideline 2025, structuring
            tripartite agreements between the power producer, the off-taker, and
            the relevant distribution utility.
          </p>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: 18,
              lineHeight: 1.4,
              margin: "0 0 28px",
              maxWidth: "42ch",
            }}
          >
            {company.opexLine}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Fund", "Design", "Install", "Operate"].map((tag) => (
              <span key={tag} className="tag tag-outline">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          {aboutMeta.map((row) => (
            <div key={row.label} className="meta-row">
              <span className="label">{row.label}</span>
              <span className="value">{row.value}</span>
            </div>
          ))}
          <figure
            className="grayscale"
            style={{
              margin: "28px 0 0",
              height: "clamp(220px, 26vw, 360px)",
              background: "var(--color-neutral-800)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80"
              alt="Industrial rooftop solar photovoltaic array generating clean power for a factory in Bangladesh"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
