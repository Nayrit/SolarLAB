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
          paddingBlock: "clamp(48px, 7vw, 100px) clamp(48px, 6vw, 88px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "clamp(32px, 5vw, 64px)",
          alignItems: "center",
        }}
      >
        <div className="anim-rise">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 26,
            }}
          >
            <span
              className="anim-pulse"
              style={{
                width: 8,
                height: 8,
                background: "var(--color-accent)",
                display: "block",
              }}
            />
            <span
              style={{
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "color-mix(in srgb, var(--color-bg) 72%, transparent)",
              }}
            >
              Rooftop solar · OPEX · Bangladesh
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(36px, 9vw, 92px)",
              lineHeight: 0.98,
              letterSpacing: "-0.035em",
              margin: "0 0 28px",
            }}
          >
            <span style={{ display: "block" }}>Clean power,</span>
            <span
              style={{ display: "block", color: "var(--color-accent-500)" }}
            >
              zero capital.
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(16.5px, 1.4vw, 20px)",
              lineHeight: 1.6,
              maxWidth: "52ch",
              margin: "0 0 36px",
              color: "color-mix(in srgb, var(--color-bg) 80%, transparent)",
            }}
          >
            We finance, engineer, install and operate the solar plant on your
            roof. You invest nothing — and buy only the power you use,
            permanently below the grid tariff.
          </p>

          <div className="hero-actions">
            <MagneticButton
              href="/contact"
              className="btn btn-primary"
              style={{
                textDecoration: "none",
                padding: "14px 24px",
                fontSize: 15,
              }}
            >
              Get a rooftop assessment
            </MagneticButton>
            <Link
              href="/flagship"
              className="btn"
              style={{
                textDecoration: "none",
                padding: "14px 24px",
                fontSize: 15,
                color: "var(--color-bg)",
                borderColor:
                  "color-mix(in srgb, var(--color-bg) 45%, transparent)",
              }}
            >
              See the 1.788 MWp flagship
            </Link>
          </div>
        </div>

        <div className="anim-rise anim-float" style={{ animationDelay: "0.1s" }}>
          <TelemetryPanel />
        </div>
      </div>

      <CredentialMarquee />
    </section>
  );
}
