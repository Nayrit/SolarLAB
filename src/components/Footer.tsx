import Link from "next/link";
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
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
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
                Registered: {company.officeShort}
              </span>
              <span
                style={{
                  color: "color-mix(in srgb, var(--color-bg) 65%, transparent)",
                  lineHeight: 1.5,
                }}
              >
                Corporate: {company.corporateOfficeShort}
              </span>
              <span
                style={{
                  color: "color-mix(in srgb, var(--color-bg) 65%, transparent)",
                  lineHeight: 1.5,
                }}
              >
                Business: {company.businessAddressShort}
              </span>
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
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
              <a
                href={company.phones[0].href}
                aria-label="Call Solarhub"
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.35a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.75.34 1.54.57 2.35.7A2 2 0 0 1 22 16.92z" />
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
            © 2026 Solarhub Technology Ltd. · {company.legalStatus} · Reg. No.{" "}
            {company.regNo}
          </span>
          <span>
            Trade licence {company.tradeLicense} · Incorporated{" "}
            {company.registered}
          </span>
        </div>
      </div>
    </footer>
  );
}
