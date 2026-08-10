import { NextResponse } from "next/server";
import { deliverContactEnquiry } from "@/lib/contact-delivery";
import {
  ALLOWED_MODELS,
  CONTACT_LIMITS,
  isValidEmail,
  sanitizeText,
} from "@/lib/validation";
import {
  clientIp,
  isSameOriginRequest,
  rateLimit,
} from "@/lib/security";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 8_192;

type ContactBody = {
  name?: unknown;
  email?: unknown;
  org?: unknown;
  message?: unknown;
  model?: unknown;
  website?: unknown; // honeypot
};

function jsonError(status: number, error: string, extra?: HeadersInit) {
  return NextResponse.json(
    { ok: false, error },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
        ...extra,
      },
    },
  );
}

export async function POST(request: Request) {
  if (!isSameOriginRequest(request)) {
    return jsonError(403, "Forbidden");
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return jsonError(415, "Unsupported media type");
  }

  const ip = clientIp(request);
  const limited = rateLimit(`contact:${ip}`, { limit: 5, windowMs: 15 * 60_000 });
  if (!limited.ok) {
    return jsonError(429, "Too many requests", {
      "Retry-After": String(limited.retryAfterSec),
    });
  }

  const raw = await request.arrayBuffer();
  if (raw.byteLength > MAX_BODY_BYTES) {
    return jsonError(413, "Payload too large");
  }

  let body: ContactBody;
  try {
    body = JSON.parse(new TextDecoder().decode(raw)) as ContactBody;
  } catch {
    return jsonError(400, "Invalid JSON");
  }

  // Honeypot — bots fill hidden fields; humans leave empty.
  const honeypot = sanitizeText(body.website, 100);
  if (honeypot) {
    return NextResponse.json(
      { ok: true },
      { status: 200, headers: { "Cache-Control": "no-store" } },
    );
  }

  const name = sanitizeText(body.name, CONTACT_LIMITS.name);
  const email = sanitizeText(body.email, CONTACT_LIMITS.email).toLowerCase();
  const org = sanitizeText(body.org, CONTACT_LIMITS.org);
  const message = sanitizeText(body.message, CONTACT_LIMITS.message);
  const model = sanitizeText(body.model, CONTACT_LIMITS.model).toLowerCase();

  if (name.length < 2) {
    return jsonError(400, "Name is required");
  }
  if (!isValidEmail(email)) {
    return jsonError(400, "Valid email is required");
  }
  if (!ALLOWED_MODELS.has(model)) {
    return jsonError(400, "Invalid model");
  }

  const delivered = await deliverContactEnquiry({
    name,
    email,
    org,
    message,
    model,
  });

  if (!delivered.ok) {
    return jsonError(503, delivered.error);
  }

  return NextResponse.json(
    { ok: true },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    },
  );
}

export function GET() {
  return jsonError(405, "Method not allowed", { Allow: "POST" });
}
