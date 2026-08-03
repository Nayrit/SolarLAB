import { heroStats } from "@/lib/content";

export function StatsStrip() {
  return (
    <section className="container section-tight">
      <div
        className="grid-divider"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
        }}
      >
        {heroStats.map((stat) => (
          <div key={stat.label} style={{ padding: "26px 22px" }}>
            <p className="stat-value">
              {stat.value}
              <span>{stat.unit}</span>
            </p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
