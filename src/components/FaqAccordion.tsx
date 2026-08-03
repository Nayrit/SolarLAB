"use client";

import { faqs } from "@/lib/content";

export function FaqAccordion() {
  return (
    <div style={{ maxWidth: 920 }}>
      {faqs.map((item, i) => (
        <details
          key={item.q}
          style={{
            borderTop:
              i === 0
                ? "2px solid var(--color-divider)"
                : "1px solid var(--color-divider)",
            borderBottom:
              i === faqs.length - 1
                ? "2px solid var(--color-divider)"
                : undefined,
          }}
        >
          <summary
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 24,
              padding: "22px 0",
              cursor: "pointer",
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: 20,
              lineHeight: 1.3,
              listStyle: "none",
            }}
          >
            <span>{item.q}</span>
            <span
              className="faq-plus"
              style={{
                color: "var(--color-accent)",
                fontSize: 26,
                lineHeight: 1,
                transition: "transform 0.2s",
              }}
            >
              +
            </span>
          </summary>
          <p
            style={{
              fontSize: 15.5,
              lineHeight: 1.65,
              margin: "0 0 24px",
              maxWidth: "62ch",
              color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
            }}
          >
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
