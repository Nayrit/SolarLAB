"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [model, setModel] = useState("opex");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div
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
          onClick={() => setSent(false)}
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
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
    >
      <h3 style={{ fontSize: 22, lineHeight: 1.2, margin: "0 0 4px" }}>
        Request a rooftop assessment
      </h3>

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
          placeholder="e.g. 6,000 m² shed roof in Gazipur, ~BDT 18 lakh/month"
          style={inputStyle}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{
          justifyContent: "flex-start",
          padding: "14px 22px",
          fontSize: 15,
        }}
      >
        Request assessment
      </button>
      <p
        style={{
          fontSize: 12,
          lineHeight: 1.5,
          margin: 0,
          color: "color-mix(in srgb, var(--color-bg) 55%, transparent)",
        }}
      >
        Demo form — submissions stay in this browser session.
      </p>
    </form>
  );
}
