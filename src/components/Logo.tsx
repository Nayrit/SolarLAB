import Link from "next/link";

type LogoProps = {
  href?: string;
  light?: boolean;
  showSubtitle?: boolean;
  size?: number;
};

export function Logo({
  href = "/",
  light = false,
  showSubtitle = true,
  size = 26,
}: LogoProps) {
  const stroke = light ? "var(--color-neutral-900)" : "var(--color-bg)";

  return (
    <Link
      href={href}
      className="nav-brand"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 11,
        textDecoration: "none",
        color: light ? "var(--color-bg)" : "var(--color-text)",
        marginRight: "auto",
        letterSpacing: "-0.02em",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 26 26"
        aria-hidden="true"
      >
        <rect width="26" height="26" fill="var(--color-accent)" />
        <path
          d="M4 17.5 13 6l9 11.5"
          fill="none"
          stroke={stroke}
          strokeWidth="2"
        />
        {!light && (
          <path
            d="M8 17.5h10M13 6v11.5"
            stroke={stroke}
            strokeWidth="1.5"
          />
        )}
      </svg>
      <span>SOLARHUB</span>
      {showSubtitle && (
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: 10.5,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: light
              ? "color-mix(in srgb, var(--color-bg) 65%, transparent)"
              : "color-mix(in srgb, var(--color-text) 55%, transparent)",
          }}
        >
          Technology Ltd.
        </span>
      )}
    </Link>
  );
}
