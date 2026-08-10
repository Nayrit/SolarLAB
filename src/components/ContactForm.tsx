"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { MagneticButton } from "@/components/MagneticButton";
import { ALLOWED_MODELS, CONTACT_LIMITS } from "@/lib/validation";

type Model = "opex" | "capex" | "unsure";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [model, setModel] = useState<Model>("opex");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — leave empty; bots often fill every field.
    if (String(data.get("website") ?? "").trim()) {
      setSent(true);
      return;
    }

    const name = String(data.get("name") ?? "").trim().slice(0, CONTACT_LIMITS.name);
    const email = String(data.get("email") ?? "")
      .trim()
      .toLowerCase()
      .slice(0, CONTACT_LIMITS.email);
    const org = String(data.get("org") ?? "").trim().slice(0, CONTACT_LIMITS.org);
    const message = String(data.get("message") ?? "")
      .trim()
      .slice(0, CONTACT_LIMITS.message);

    if (name.length < 2) {
      setError("Please enter your name.");
      return;
    }
    if (!email.includes("@") || email.length < 5) {
      setError("Please enter a valid work email.");
      return;
    }
    if (!ALLOWED_MODELS.has(model)) {
      setError("Please choose a preferred model.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, org, message, model, website: "" }),
        credentials: "same-origin",
      });

      const payload = (await res.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!res.ok || !payload?.ok) {
        if (res.status === 429) {
          setError("Too many requests. Please wait a few minutes and try again.");
        } else {
          setError(payload?.error ?? "Something went wrong. Please try again.");
        }
        return;
      }

      setSent(true);
      form.reset();
      setModel("opex");
    } catch {
      setError("Network error. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div
        className="anim-rise"
        role="status"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "flex-start",
          minHeight: 360,
          justifyContent: "center",
        }}
      >
        <span
          className="anim-pulse"
          style={{
            width: 22,
            height: 22,
            background: "var(--color-accent)",
            display: "block",
          }}
        />
        <h3 style={{ fontSize: 26, lineHeight: 1.2, margin: 0 }}>
          Request received
        </h3>
        <p
          style={{
            fontSize: 15.5,
            lineHeight: 1.65,
            margin: 0,
            maxWidth: "40ch",
            color: "color-mix(in srgb, var(--color-bg) 75%, transparent)",
          }}
        >
          Thank you — a Solarhub engineer will reply within two working days to
          schedule the rooftop assessment.
        </p>
        <button
          type="button"
          className="btn"
          style={{
            color: "var(--color-bg)",
            borderColor: "color-mix(in srgb, var(--color-bg) 45%, transparent)",
          }}
          onClick={() => {
            setSent(false);
            setError(null);
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputStyle = {
    background: "color-mix(in srgb, var(--color-bg) 8%, transparent)",
    color: "var(--color-bg)",
    borderColor: "color-mix(in srgb, var(--color-bg) 30%, transparent)",
  } as const;

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
      autoComplete="on"
    >
      <h3 style={{ fontSize: 22, lineHeight: 1.2, margin: "0 0 4px" }}>
        Request a rooftop assessment
      </h3>

      {/* Honeypot — visually hidden, not display:none so some bots still fill it */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          top: "auto",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        <label htmlFor="sh-website">Website</label>
        <input
          id="sh-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="field">
        <label
          htmlFor="sh-name"
          style={{ color: "color-mix(in srgb, var(--color-bg) 70%, transparent)" }}
        >
          Full name
        </label>
        <input
          className="input"
          id="sh-name"
          name="name"
          type="text"
          required
          maxLength={CONTACT_LIMITS.name}
          autoComplete="name"
          placeholder="Your name"
          style={inputStyle}
        />
      </div>

      <div className="field">
        <label
          htmlFor="sh-email"
          style={{ color: "color-mix(in srgb, var(--color-bg) 70%, transparent)" }}
        >
          Work email
        </label>
        <input
          className="input"
          id="sh-email"
          name="email"
          type="email"
          required
          maxLength={CONTACT_LIMITS.email}
          autoComplete="email"
          inputMode="email"
          placeholder="name@company.com"
          style={inputStyle}
        />
      </div>

      <div className="field">
        <label
          htmlFor="sh-org"
          style={{ color: "color-mix(in srgb, var(--color-bg) 70%, transparent)" }}
        >
          Organisation &amp; site location
        </label>
        <input
          className="input"
          id="sh-org"
          name="org"
          type="text"
          maxLength={CONTACT_LIMITS.org}
          autoComplete="organization"
          placeholder="Company, district"
          style={inputStyle}
        />
      </div>

      <div className="field">
        <label
          style={{ color: "color-mix(in srgb, var(--color-bg) 70%, transparent)" }}
        >
          Preferred model
        </label>
        <div
          className="seg"
          role="radiogroup"
          aria-label="Preferred model"
          style={{
            borderColor: "color-mix(in srgb, var(--color-bg) 30%, transparent)",
          }}
        >
          {(
            [
              ["opex", "OPEX"],
              ["capex", "CAPEX"],
              ["unsure", "Not sure yet"],
            ] as const
          ).map(([value, label]) => (
            <label key={value} className="seg-opt">
              <input
                type="radio"
                name="sh-model"
                value={value}
                checked={model === value}
                onChange={() => setModel(value)}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="field">
        <label
          htmlFor="sh-msg"
          style={{ color: "color-mix(in srgb, var(--color-bg) 70%, transparent)" }}
        >
          Roof area, monthly bill, anything else
        </label>
        <textarea
          className="input"
          id="sh-msg"
          name="message"
          rows={4}
          maxLength={CONTACT_LIMITS.message}
          placeholder="e.g. 6,000 m² shed roof in Gazipur, ~BDT 18 lakh/month"
          style={inputStyle}
        />
      </div>

      {error ? (
        <p
          role="alert"
          style={{
            margin: 0,
            fontSize: 13.5,
            color: "#ffb4a8",
          }}
        >
          {error}
        </p>
      ) : null}

      <MagneticButton
        type="submit"
        className="btn btn-primary"
        style={{
          justifyContent: "flex-start",
          padding: "14px 22px",
          fontSize: 15,
          opacity: submitting ? 0.75 : 1,
          pointerEvents: submitting ? "none" : undefined,
        }}
      >
        {submitting ? "Sending…" : "Request assessment"}
      </MagneticButton>
      <p
        style={{
          fontSize: 12,
          lineHeight: 1.5,
          margin: 0,
          color: "color-mix(in srgb, var(--color-bg) 55%, transparent)",
        }}
      >
        Protected submission — rate-limited, validated server-side. We use your
        details only to respond to this enquiry. See our{" "}
        <Link
          href="/privacy"
          style={{ color: "var(--color-accent-400)", textDecoration: "underline" }}
        >
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
