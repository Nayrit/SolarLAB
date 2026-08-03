"use client";

import { useEffect, useState } from "react";

function format(n: number, digits: number) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

export function TelemetryPanel() {
  const [kw, setKw] = useState(1412.6);
  const [kwh, setKwh] = useState(6218);
  const [co2, setCo2] = useState(3.1);

  useEffect(() => {
    const timer = setInterval(() => {
      setKw((prev) => {
        const next = Math.min(1498, Math.max(940, prev + (Math.random() - 0.42) * 34));
        setKwh((k) => {
          const updated = k + (next / 3600) * 1.4;
          setCo2(updated * 0.0005);
          return updated;
        });
        return next;
      });
    }, 1400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        border: "2px solid color-mix(in srgb, var(--color-bg) 22%, transparent)",
        padding: 18,
        background: "color-mix(in srgb, #000 22%, transparent)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: 12,
          paddingBottom: 14,
          borderBottom:
            "1px solid color-mix(in srgb, var(--color-bg) 22%, transparent)",
          marginBottom: 18,
        }}
      >
        <span
          style={{
            fontSize: 10.5,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "color-mix(in srgb, var(--color-bg) 62%, transparent)",
          }}
        >
          Live plant telemetry · simulated
        </span>
        <span
          style={{
            fontSize: 10.5,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--color-accent-500)",
          }}
        >
          ● Generating
        </span>
      </div>

      <svg
        viewBox="0 0 520 260"
        style={{ width: "100%", height: "auto", display: "block" }}
        aria-label="Schematic of a rooftop solar array feeding an inverter, the site load and the utility meter"
      >
        <g
          stroke="color-mix(in srgb, var(--color-bg) 16%, transparent)"
          strokeWidth="1"
        >
          <path d="M0 40h520M0 100h520M0 160h520M0 220h520" />
        </g>
        <path
          d="M40 60a120 120 0 0 1 240 0"
          fill="none"
          stroke="color-mix(in srgb, var(--color-bg) 40%, transparent)"
          strokeWidth="1.5"
          strokeDasharray="640"
          className="anim-sweep"
        />
        <circle cx="228" cy="26" r="13" fill="var(--color-accent)" />
        <g stroke="var(--color-accent)" strokeWidth="1.6" opacity=".8">
          <path d="M150 78 120 116M186 78 168 118M222 80 216 120M258 82 264 120" />
        </g>
        <g>
          <path
            d="M92 176 152 122h188l-60 54z"
            fill="color-mix(in srgb, var(--color-bg) 12%, transparent)"
            stroke="var(--color-bg)"
            strokeWidth="2"
          />
          <g
            stroke="color-mix(in srgb, var(--color-bg) 55%, transparent)"
            strokeWidth="1"
          >
            <path d="M112 158h188M132 140h188M152 122 92 176M191 122 131 176M230 122 170 176M269 122 209 176M308 122 248 176" />
          </g>
        </g>
        <rect
          x="378"
          y="120"
          width="58"
          height="44"
          fill="none"
          stroke="var(--color-bg)"
          strokeWidth="2"
        />
        <text
          x="382"
          y="146"
          fontFamily="Archivo,sans-serif"
          fontSize="13"
          fontWeight="800"
          fill="var(--color-bg)"
        >
          INV
        </text>
        <rect
          x="378"
          y="190"
          width="58"
          height="44"
          fill="none"
          stroke="var(--color-bg)"
          strokeWidth="2"
        />
        <text
          x="382"
          y="216"
          fontFamily="Archivo,sans-serif"
          fontSize="13"
          fontWeight="800"
          fill="var(--color-bg)"
        >
          kWh
        </text>
        <path
          d="M340 150h38"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2.5"
          strokeDasharray="8 8"
          className="anim-flow"
        />
        <path
          d="M407 164v26"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2.5"
          strokeDasharray="8 8"
          className="anim-flow"
        />
        <path
          d="M436 212h64"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2.5"
          strokeDasharray="8 8"
          className="anim-flow"
        />
        <text
          x="446"
          y="196"
          fontFamily="Archivo,sans-serif"
          fontSize="10.5"
          letterSpacing="1.6"
          fill="color-mix(in srgb, var(--color-bg) 65%, transparent)"
        >
          GRID
        </text>
      </svg>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 12,
          paddingTop: 18,
          borderTop:
            "1px solid color-mix(in srgb, var(--color-bg) 22%, transparent)",
          marginTop: 16,
        }}
      >
        <Metric value={`${format(kw, 1)} kW`} label="Instantaneous output" />
        <Metric value={format(kwh, 0)} label="kWh today" />
        <Metric value={`${format(co2, 2)} t`} label="CO₂ avoided today" />
      </div>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 800,
          fontSize: "clamp(20px, 2vw, 28px)",
          margin: "0 0 4px",
          color: "var(--color-bg)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </p>
      <p
        style={{
          fontSize: 10,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          margin: 0,
          color: "color-mix(in srgb, var(--color-bg) 58%, transparent)",
        }}
      >
        {label}
      </p>
    </div>
  );
}
