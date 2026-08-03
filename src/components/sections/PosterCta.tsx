import Link from "next/link";

export function PosterCta() {
  return (
    <section
      style={{
        background: "var(--color-accent)",
        color: "var(--color-bg)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(color-mix(in srgb,var(--color-bg) 12%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--color-bg) 12%,transparent) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        className="container"
        style={{
          position: "relative",
          paddingBlock: "clamp(52px, 7vw, 104px)",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(36px, 5.4vw, 72px)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            margin: "0 0 28px",
            marginLeft: "-0.05em",
            maxWidth: "16ch",
          }}
        >
          <span style={{ display: "block" }}>Put your roof to work.</span>
          <span style={{ display: "block" }}>Zero capital, zero risk.</span>
        </h2>
        <p
          style={{
            fontSize: "clamp(16px, 1.4vw, 20px)",
            lineHeight: 1.6,
            maxWidth: "56ch",
            margin: "0 0 34px",
          }}
        >
          Cleaner, cheaper power from day one — financed, engineered and operated
          by a single accountable partner.
        </p>
        <Link
          href="/contact"
          className="btn"
          style={{
            textDecoration: "none",
            background: "var(--color-bg)",
            color: "var(--color-accent)",
            padding: "15px 26px",
            fontSize: 16,
          }}
        >
          Start a conversation about your rooftop
        </Link>
      </div>
    </section>
  );
}
