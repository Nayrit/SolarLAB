export const COOKIE_CONSENT_KEY = "solarhub-cookie-consent";
export const COOKIE_SETTINGS_EVENT = "solarhub:open-cookie-settings";

export type CookieConsent = "acknowledged" | "accepted" | "rejected";

export function readCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (value === "acknowledged" || value === "accepted" || value === "rejected") {
      return value;
    }
  } catch {
    /* private mode / blocked storage */
  }
  return null;
}

export function writeCookieConsent(value: CookieConsent) {
  try {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(
    new CustomEvent("solarhub:cookie-consent-changed", { detail: value }),
  );
}

export function openCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));
}
