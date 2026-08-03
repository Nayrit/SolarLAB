import { ContactForm } from "@/components/ContactForm";
import { company } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

/** Compact contact block for the homepage — full page uses ContactPageView. */
export function ContactSection() {
  return (
    <section id="contact" className="container section">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "clamp(28px, 4vw, 56px)",
          alignItems: "start",
        }}
      >
        <Reveal>
          <span className="kicker">10 — Contact</span>
          <h2 className="display" style={{ maxWidth: "12ch" }}>
            Tell us about your roof
          </h2>
          <p className="lede" style={{ maxWidth: "48ch", marginBottom: 24 }}>
            Send location, rooftop area and monthly bill — we&apos;ll return an
            indicative capacity, tariff and savings estimate.
          </p>
          <div className="meta-row">
            <span className="label">Office</span>
            <span className="value">{company.officeShort}</span>
          </div>
          <div className="meta-row">
            <span className="label">Director</span>
            <span className="value">{company.director}</span>
          </div>
          <div className="meta-row">
            <span className="label">Phone</span>
            <span className="value">
              <a href={company.phones[0].href}>{company.phones[0].label}</a>
            </span>
          </div>
          <div className="meta-row">
            <span className="label">Email</span>
            <span className="value">
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </span>
          </div>
          <Link
            href="/contact"
            className="btn btn-ghost"
            style={{
              marginTop: 20,
              paddingLeft: 0,
              textDecoration: "none",
            }}
          >
            Open full contact page →
          </Link>
        </Reveal>

        <Reveal delay={100}>
          <div className="contact-panel">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
