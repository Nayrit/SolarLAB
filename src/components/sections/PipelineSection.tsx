import Link from "next/link";
import { pipeline } from "@/lib/content";

export function PipelineSection() {
  return (
    <section id="pipeline" className="container section">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,300px), 1fr))",
          gap: "clamp(32px, 5vw, 80px)",
          alignItems: "start",
        }}
      >
        <div>
          <span className="kicker">08 — Growth pipeline</span>
          <h2 className="display" style={{ maxWidth: "14ch" }}>
            Where we&apos;re headed
          </h2>
          <p className="lede" style={{ maxWidth: "52ch" }}>
            We pursue large industrial and institutional rooftops, creditworthy
            long-horizon off-takers, and government and defence-linked
            institutions — with power purchase terms tailored to each customer.
          </p>
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{ textDecoration: "none", padding: "14px 24px", fontSize: 15 }}
          >
            Discuss your site
          </Link>
        </div>
        <div>
          {pipeline.map((item, i) => (
            <div
              key={item.title}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 16,
                padding: "22px 0",
                borderTop:
                  i === 0
                    ? "2px solid var(--color-divider)"
                    : "1px solid var(--color-divider)",
                borderBottom:
                  i === pipeline.length - 1
                    ? "2px solid var(--color-divider)"
                    : undefined,
              }}
            >
              <div>
                <h3 style={{ fontSize: 20, lineHeight: 1.2, margin: "0 0 4px" }}>
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    margin: 0,
                    color:
                      "color-mix(in srgb, var(--color-text) 70%, transparent)",
                  }}
                >
                  {item.body}
                </p>
              </div>
              <span className="tag tag-outline" style={{ whiteSpace: "nowrap" }}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
