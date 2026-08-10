"use client";

import { ContactForm } from "@/components/ContactForm";
import { company } from "@/lib/content";

type ContactSectionProps = {
  /** Use page-level heading on /contact */
  asPage?: boolean;
};

export function ContactSection({ asPage = false }: ContactSectionProps) {
  const Title = asPage ? "h1" : "h2";
  const phone = company.phones[0];

  return (
    <section id="contact" className="contact-page">
      <div className="contact-page-inner">
        <div className="contact-info anim-rise">
          <span className="kicker kicker-light" style={{ marginBottom: 18 }}>
            {asPage ? "Contact" : "10 — Contact"}
          </span>
          <Title
            style={{
              fontSize: "clamp(36px, 5vw, 58px)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              margin: "0 0 18px",
              maxWidth: "12ch",
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
            }}
          >
            Tell us about your roof
          </Title>
          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.65,
              margin: "0 0 28px",
              maxWidth: "40ch",
              color: "color-mix(in srgb, var(--color-bg) 78%, transparent)",
            }}
          >
            Share location, rooftop area and monthly bill. We&apos;ll return an
            indicative capacity, tariff and savings estimate.
          </p>

          <div className="meta-row">
            <span className="label">Registered office</span>
            <span className="value" style={{ maxWidth: "28ch" }}>
              {company.officeShort}
            </span>
          </div>
          <div className="meta-row">
            <span className="label">Corporate office</span>
            <span className="value" style={{ maxWidth: "28ch" }}>
              {company.corporateOfficeShort}
            </span>
          </div>
          <div className="meta-row">
            <span className="label">Business address</span>
            <span className="value" style={{ maxWidth: "28ch" }}>
              {company.businessAddressShort}
            </span>
          </div>
          <div className="meta-row">
            <span className="label">Managing Director</span>
            <span className="value">{company.managingDirector}</span>
          </div>
          <div className="meta-row">
            <span className="label">Email</span>
            <span className="value">
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </span>
          </div>
          <div className="meta-row">
            <span className="label">Registered</span>
            <span className="value">
              {company.registered} · {company.regNo}
            </span>
          </div>

          <div className="contact-quick">
            <a href={phone.href}>
              <span className="q-label">Official phone</span>
              <span className="q-value">{phone.label}</span>
            </a>
            <a href={`mailto:${company.email}`}>
              <span className="q-label">Email</span>
              <span className="q-value">Write to us</span>
            </a>
            <a href={phone.href} className="contact-quick-cta">
              <span className="q-label">Call now</span>
              <span className="q-value">{phone.label}</span>
            </a>
            <a href="/about">
              <span className="q-label">Company profile</span>
              <span className="q-value">Offices &amp; registration</span>
            </a>
          </div>
        </div>

        <div
          className="contact-panel anim-rise"
          style={{ animationDelay: "0.1s" }}
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
