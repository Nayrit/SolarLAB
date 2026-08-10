"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  COOKIE_SETTINGS_EVENT,
  type CookieConsent as ConsentValue,
  readCookieConsent,
  writeCookieConsent,
} from "@/lib/cookies";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showIfNeeded = () => {
      if (readCookieConsent() === null) setVisible(true);
    };

    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const openFromFooter = () => setVisible(true);
    window.addEventListener(COOKIE_SETTINGS_EVENT, openFromFooter);

    // Migrate old "acknowledged" (no analytics) → ask again for GA choice
    const existing = readCookieConsent();
    if (existing === "acknowledged") {
      try {
        window.localStorage.removeItem("solarhub-cookie-consent");
      } catch {
        /* ignore */
      }
    }

    if (readCookieConsent() !== null) {
      return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, openFromFooter);
    }

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(showIfNeeded, { timeout: 3500 });
    } else {
      timeoutId = setTimeout(showIfNeeded, 2500);
    }

    return () => {
      window.removeEventListener(COOKIE_SETTINGS_EVENT, openFromFooter);
      if (idleId !== undefined && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  const choose = (value: Extract<ConsentValue, "accepted" | "rejected">) => {
    writeCookieConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="region" aria-label="Cookie notice">
      <div className="cookie-banner-inner">
        <div className="cookie-banner-copy">
          <p className="cookie-banner-title">Cookies</p>
          <p>
            We use a preference cookie and, if you accept, Google Analytics to
            understand visits (works on any host including cPanel).{" "}
            <Link href="/privacy">Privacy Policy</Link>
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button
            type="button"
            className="btn btn-secondary cookie-btn-reject"
            onClick={() => choose("rejected")}
          >
            Reject
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => choose("accepted")}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
