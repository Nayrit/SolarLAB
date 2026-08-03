import { pipeline, pipelineFocus } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";

export function PipelineSection() {
  return (
    <section id="pipeline" className="container section">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,320px), 1fr))",
          gap: "clamp(40px, 6vw, 96px)",
          alignItems: "start",
        }}
      >
        <Reveal>
          <span className="kicker">Growth pipeline</span>
          <h2 className="display" style={{ maxWidth: "12ch" }}>
            Where we&apos;re headed
          </h2>
          <p className="lede" style={{ maxWidth: "52ch", marginBottom: 24 }}>
            What we pursue:
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 32px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {pipelineFocus.map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  fontSize: 15.5,
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    marginTop: 7,
                    background: "var(--color-accent)",
                    flex: "none",
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
          <MagneticButton
            href="/contact"
            className="btn btn-primary"
            style={{
              textDecoration: "none",
              padding: "16px 28px",
              fontSize: 16,
            }}
          >
            Discuss your site
          </MagneticButton>
        </Reveal>
        <div>
          {pipeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div
                className="pipeline-row"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                  padding: "26px 0",
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
                  <h3
                    style={{ fontSize: 22, lineHeight: 1.2, margin: "0 0 6px" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      margin: 0,
                      color:
                        "color-mix(in srgb, var(--color-text) 70%, transparent)",
                    }}
                  >
                    {item.body}
                  </p>
                </div>
                <span
                  className="tag tag-outline"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {item.status}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
