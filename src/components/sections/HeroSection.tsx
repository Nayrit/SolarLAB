"use client";

import Link from "next/link";
import { type MouseEvent, useCallback, useState } from "react";
import { TelemetryPanel } from "@/components/TelemetryPanel";
import { CredentialMarquee } from "@/components/CredentialMarquee";
import { MagneticButton } from "@/components/MagneticButton";

export function HeroSection() {
  const [spot, setSpot] = useState({ x: "72%", y: "28%" });

  const onMove = useCallback((e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpot({
      x: `${((e.clientX - rect.left) / rect.width) * 100}%`,
      y: `${((e.clientY - rect.top) / rect.height) * 100}%`,
    });
  }, []);

  return (
    <section className="hero-shell" onMouseMove={onMove}>
      <div className="hero-spotlight" style={{ left: spot.x, top: spot.y }} />
      <div className="hero-scan" />

      <div
        className="container"
        style={{
          position: "relative",
          paddingBlock: "clamp(56px, 8vw, 120px) clamp(56px, 7vw, 100px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "center",
        }}
      >
        <div className="anim-rise">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 32,
            }}
          >
            <span
              className="anim-pulse"
              style={{
                width: 10,
                height: 10,
                background: "var(--color-accent)",
                display: "block",
              }}
            />
            <span
              style={{
                fontSize: 13,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "color-mix(in srgb, var(--color-bg) 72%, transparent)",
              }}
            >
              Rooftop solar · OPEX · Bangladesh
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(52px, 8.5vw, 108px)",
              lineHeight: 0.94,
              letterSpacing: "-0.04em",
              margin: "0 0 32px",
              marginLeft: "-0.04em",
            }}
          >
            <span style={{ display: "block" }}>Clean power,</span>
            <span
              style={{
                display: "block",
                color: "var(--color-accent-500)",
                position: "relative",
              }}
            >
              zero capital.
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(17px, 1.55vw, 22px)",
              lineHeight: 1.65,
              maxWidth: "52ch",
              margin: "0 0 40px",
              color: "color-mix(in srgb, var(--color-bg) 82%, transparent)",
            }}
          >
            We finance, engineer, install and operate the solar plant on your
            roof. You invest nothing — and buy only the power you use,
            permanently below the grid tariff.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <MagneticButton
              href="/contact"
              className="btn btn-primary"
              style={{
                textDecoration: "none",
                padding: "16px 28px",
                fontSize: 16,
              }}
            >
              Get a rooftop assessment
            </MagneticButton>
            <Link
              href="/flagship"
              className="btn"
              style={{
                textDecoration: "none",
                padding: "16px 28px",
                fontSize: 16,
                color: "var(--color-bg)",
                borderColor:
                  "color-mix(in srgb, var(--color-bg) 45%, transparent)",
              }}
            >
              See the 1.788 MWp flagship
            </Link>
          </div>
        </div>

        <div className="anim-rise anim-float" style={{ animationDelay: "0.12s" }}>
          <TelemetryPanel />
        </div>
      </div>

      <CredentialMarquee />
    </section>
  );
}
