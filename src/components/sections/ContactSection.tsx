import { ContactForm } from "@/components/ContactForm";
import { company } from "@/lib/content";

export function ContactSection() {
  return (
    <section id="contact" className="container section">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,320px), 1fr))",
          gap: "clamp(32px, 5vw, 80px)",
          alignItems: "start",
        }}
      >
        <div>
          <span className="kicker">10 — Contact</span>
          <h2 className="display" style={{ maxWidth: "14ch" }}>
            Tell us about your roof
          </h2>
          <p className="lede" style={{ maxWidth: "50ch", marginBottom: 32 }}>
            Send your location, approximate rooftop area and monthly electricity
            bill. We&apos;ll return an indicative capacity, tariff and savings
            estimate.
          </p>

          <div
            style={{
              borderTop: "2px solid var(--color-divider)",
              padding: "16px 0",
              borderBottom: "1px solid var(--color-divider)",
            }}
          >
            <p
              style={{
                fontSize: 11.5,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: "0 0 6px",
                color: "color-mix(in srgb, var(--color-text) 60%, transparent)",
              }}
            >
              Registered office
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.6, margin: 0 }}>
              {company.office}
            </p>
          </div>
          <div
            style={{
              padding: "16px 0",
              borderBottom: "1px solid var(--color-divider)",
            }}
          >
            <p
              style={{
                fontSize: 11.5,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: "0 0 6px",
                color: "color-mix(in srgb, var(--color-text) 60%, transparent)",
              }}
            >
              Director
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.6, margin: 0 }}>
              {company.director}
            </p>
          </div>
          <div
            style={{
              padding: "16px 0",
              borderBottom: "1px solid var(--color-divider)",
            }}
          >
            <p
              style={{
                fontSize: 11.5,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: "0 0 6px",
                color: "color-mix(in srgb, var(--color-text) 60%, transparent)",
              }}
            >
              Phone
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.6, margin: 0 }}>
              {company.phones.map((phone, i) => (
                <span key={phone.href}>
                  {i > 0 && " · "}
                  <a href={phone.href}>{phone.label}</a>
                </span>
              ))}
            </p>
          </div>
          <div
            style={{
              padding: "16px 0",
              borderBottom: "2px solid var(--color-divider)",
            }}
          >
            <p
              style={{
                fontSize: 11.5,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: "0 0 6px",
                color: "color-mix(in srgb, var(--color-text) 60%, transparent)",
              }}
            >
              Email
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.6, margin: 0 }}>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
          </div>
        </div>

        <div
          style={{
            background: "var(--color-neutral-900)",
            color: "var(--color-bg)",
            padding: "clamp(24px, 3vw, 40px)",
          }}
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
