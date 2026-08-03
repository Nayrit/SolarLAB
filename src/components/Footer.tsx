import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "./Logo";
import { company, footerNav, navCta } from "@/lib/content";

const linkStyle = {
  color: "var(--color-bg)",
  textDecoration: "none",
} as const;

export function Footer() {
  return (
    <footer
      style={{ background: "var(--color-neutral-900)", color: "var(--color-bg)" }}
    >
      <div
        className="container"
        style={{ paddingBlock: "clamp(40px, 5vw, 72px)" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "clamp(28px, 4vw, 56px)",
            paddingBottom: 32,
            borderBottom:
              "2px solid color-mix(in srgb, var(--color-bg) 25%, transparent)",
          }}
        >
          <div>
            <div style={{ marginBottom: 14 }}>
              <Logo light showSubtitle={false} size={22} />
            </div>
            <p
              style={{
                fontSize: 13.5,
                lineHeight: 1.6,
                margin: "0 0 16px",
                color: "color-mix(in srgb, var(--color-bg) 65%, transparent)",
              }}
            >
              Rooftop solar under the zero-capital OPEX model, for industry and
              institutions across Bangladesh.
            </p>
            <Link href={navCta.href} className="btn btn-primary" style={linkStyle}>
              {navCta.label}
            </Link>
          </div>

          <div>
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                margin: "0 0 12px",
                color: "color-mix(in srgb, var(--color-bg) 55%, transparent)",
              }}
            >
              Explore
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                fontSize: 14,
              }}
            >
              {footerNav.explore.map((link) => (
                <Link key={link.href} href={link.href} style={linkStyle}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                margin: "0 0 12px",
                color: "color-mix(in srgb, var(--color-bg) 55%, transparent)",
              }}
            >
              More
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                fontSize: 14,
              }}
            >
              {footerNav.more.map((link) => (
                <Link key={link.href} href={link.href} style={linkStyle}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                margin: "0 0 12px",
                color: "color-mix(in srgb, var(--color-bg) 55%, transparent)",
              }}
            >
              Contact
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                fontSize: 14,
              }}
            >
              <a href={`mailto:${company.email}`} style={linkStyle}>
                {company.email}
              </a>
              <a href={company.phones[0].href} style={linkStyle}>
                {company.phones[0].label}
              </a>
              <span
                style={{
                  color: "color-mix(in srgb, var(--color-bg) 65%, transparent)",
                  lineHeight: 1.5,
                }}
              >
                {company.officeShort}
              </span>
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
              <SocialLink href="/contact" label="LinkedIn">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H9z" />
              </SocialLink>
              <SocialLink href="/contact" label="Facebook">
                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.25-1.5 1.5-1.5H16.7V4a20 20 0 0 0-2.3-.12c-2.3 0-3.9 1.4-3.9 4v2.1H8v3h2.5v8z" />
              </SocialLink>
              <a
                href={`mailto:${company.email}`}
                aria-label="Email"
                style={{
                  width: 34,
                  height: 34,
                  display: "grid",
                  placeItems: "center",
                  border:
                    "1px solid color-mix(in srgb, var(--color-bg) 35%, transparent)",
                  color: "var(--color-bg)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" />
                  <path d="m2 6 10 7 10-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 12,
            paddingTop: 22,
            fontSize: 12,
            color: "color-mix(in srgb, var(--color-bg) 55%, transparent)",
          }}
        >
          <span>
            © 2026 Solarhub Technology Ltd. · Reg. under the Companies Act 1994 ·
            No. {company.regNo}
          </span>
          <span>Registered {company.registered} · Chattogram, Bangladesh</span>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      style={{
        width: 34,
        height: 34,
        display: "grid",
        placeItems: "center",
        border: "1px solid color-mix(in srgb, var(--color-bg) 35%, transparent)",
        color: "var(--color-bg)",
      }}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        {children}
      </svg>
    </Link>
  );
}
