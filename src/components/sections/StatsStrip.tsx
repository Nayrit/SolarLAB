import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

const stats = [
  { end: 1.788, decimals: 3, suffix: " MWp", label: "Flagship in construction" },
  { end: 22, decimals: 0, suffix: " YRS", label: "Power purchase term" },
  { end: 18, decimals: 0, suffix: " %", label: "Off-peak tariff discount" },
  { end: 0, decimals: 0, suffix: " BDT", label: "Capital from the client" },
];

export function StatsStrip() {
  return (
    <section className="container section-tight">
      <div className="grid-divider grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 70} style={{ padding: "26px 22px" }}>
            <p className="stat-value">
              <CountUp
                end={stat.end}
                decimals={stat.decimals}
                suffix={stat.suffix}
              />
            </p>
            <p className="stat-label">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
