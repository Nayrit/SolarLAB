import Image from "next/image";
import { aboutMeta } from "@/lib/content";

export function AboutSection() {
  return (
    <section id="about" className="container section">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,320px), 1fr))",
          gap: "clamp(32px, 5vw, 80px)",
          alignItems: "start",
        }}
      >
        <div>
          <span className="kicker">01 — About Solarhub</span>
          <h2 className="display" style={{ maxWidth: "17ch" }}>
            The energy company that carries the risk
          </h2>
          <p className="lede">
            Solarhub Technology Ltd. delivers rooftop solar to industrial and
            institutional clients across Bangladesh under the OPEX model: we
            fund, design, install and operate the system, and the client pays
            only for the power consumed, at a discount to the grid tariff.
          </p>
          <p className="lede" style={{ marginBottom: 28 }}>
            Every plant is structured under the Renewable Energy Policy 2025 and
            the SREDA Net Metering Guideline 2025, as a tripartite agreement
            between producer, off-taker and distribution utility.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Fund", "Design", "Install", "Operate"].map((tag) => (
              <span key={tag} className="tag tag-outline">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div>
          {aboutMeta.map((row) => (
            <div key={row.label} className="meta-row">
              <span className="label">{row.label}</span>
              <span className="value">{row.value}</span>
            </div>
          ))}
          <figure
            className="grayscale"
            style={{
              margin: "26px 0 0",
              height: "clamp(200px, 22vw, 300px)",
              background: "var(--color-neutral-800)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80"
              alt="Rooftop photovoltaic array"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
