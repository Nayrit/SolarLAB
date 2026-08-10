"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  COOKIE_SETTINGS_EVENT,
  readCookieConsent,
  writeCookieConsent,
} from "@/lib/cookies";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showIfNeeded = () => {
      if (readCookieConsent() === null) setVisible(true);
    };

    // Defer so the banner is not the LCP element on first paint.
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const openFromFooter = () => setVisible(true);
    window.addEventListener(COOKIE_SETTINGS_EVENT, openFromFooter);

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

  const dismiss = () => {
    writeCookieConsent("acknowledged");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="cookie-banner"
      role="region"
      aria-label="Cookie notice"
    >
      <div className="cookie-banner-inner">
        <div className="cookie-banner-copy">
          <p className="cookie-banner-title">Cookies</p>
          <p>
            We only store a small preference in your browser so this notice does
            not reappear. We do not use analytics or advertising cookies.{" "}
            <Link href="/privacy">Privacy Policy</Link>
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button type="button" className="btn btn-primary" onClick={dismiss}>
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
