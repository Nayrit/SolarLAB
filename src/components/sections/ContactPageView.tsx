"use client";

import { ContactForm } from "@/components/ContactForm";
import { MagneticButton } from "@/components/MagneticButton";
import { company } from "@/lib/content";

export function ContactPageView() {
  return (
    <section className="contact-page">
      <div className="contact-page-inner">
        <div className="contact-info anim-rise">
          <span className="kicker kicker-light" style={{ marginBottom: 18 }}>
            Contact
          </span>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 58px)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              margin: "0 0 18px",
              maxWidth: "12ch",
            }}
          >
            Tell us about your roof
          </h1>
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
            <span className="label">Director</span>
            <span className="value">{company.director}</span>
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
            <a href={company.phones[0].href}>
              <span className="q-label">Phone</span>
              <span className="q-value">{company.phones[0].label}</span>
            </a>
            <a href={company.phones[1].href}>
              <span className="q-label">Head office</span>
              <span className="q-value">+88 01540-731004</span>
            </a>
            <a href={`mailto:${company.email}`}>
              <span className="q-label">Email</span>
              <span className="q-value">Write to us</span>
            </a>
            <MagneticButton
              href={`tel:+8801819251577`}
              className="btn btn-primary"
              style={{
                textDecoration: "none",
                padding: "16px 18px",
                height: "100%",
                alignItems: "flex-start",
                flexDirection: "column",
                gap: 6,
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: 10.5,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  opacity: 0.85,
                }}
              >
                Call now
              </span>
              <span style={{ fontSize: 14.5 }}>{company.phones[0].label}</span>
            </MagneticButton>
          </div>
        </div>

        <div className="contact-panel anim-rise" style={{ animationDelay: "0.1s" }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
