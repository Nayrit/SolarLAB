import { pipeline, pipelineFocus } from "@/lib/content";
import Link from "next/link";

export function PipelineSection() {
  return (
    <section id="pipeline" className="container section">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "clamp(32px, 5vw, 80px)",
          alignItems: "start",
        }}
      >
        <div>
          <span className="kicker">Growth focus</span>
          <h2 className="display" style={{ maxWidth: "14ch" }}>
            Where we&apos;re headed
          </h2>
          <p className="lede" style={{ maxWidth: "52ch", marginBottom: 20 }}>
            Segments we prioritise:
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 28px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {pipelineFocus.map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  fontSize: 15,
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    marginTop: 6,
                    background: "var(--color-accent)",
                    flex: "none",
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{
              textDecoration: "none",
              padding: "14px 24px",
              fontSize: 15,
            }}
          >
            Discuss your site
          </Link>
        </div>
        <div>
          {pipeline.map((item, i) => (
            <div
              key={item.title}
              className="pipeline-row"
              style={{
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
              <div style={{ minWidth: 0 }}>
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
              <span className="tag tag-outline" style={{ flexShrink: 0 }}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
