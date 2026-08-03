/** Shared contact field limits and pure validators (safe for client + server). */

export const CONTACT_LIMITS = {
  name: 100,
  email: 254,
  org: 200,
  message: 2000,
  model: 16,
} as const;

export const ALLOWED_MODELS = new Set(["opex", "capex", "unsure"]);

const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

/** Strip control characters and trim; never trust raw user text. */
export function sanitizeText(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(CONTROL_CHARS, "").normalize("NFKC").trim().slice(0, max);
}

const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function isValidEmail(email: string): boolean {
  if (!email || email.length > CONTACT_LIMITS.email) return false;
  if (email.includes("\n") || email.includes("\r")) return false;
  return EMAIL_RE.test(email);
}

/** Only same-origin relative paths — blocks open redirects / javascript: URLs. */
export function safeInternalHref(href: unknown): string | null {
  if (typeof href !== "string") return null;
  const value = href.trim();
  if (!value.startsWith("/") || value.startsWith("//")) return null;
  if (value.includes("\\") || value.includes("@")) return null;
  try {
    const url = new URL(value, "https://solarhub.invalid");
    if (url.origin !== "https://solarhub.invalid") return null;
    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return null;
  }
}
