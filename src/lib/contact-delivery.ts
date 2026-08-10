import { company } from "@/lib/content";

type Enquiry = {
  name: string;
  email: string;
  org: string;
  message: string;
  model: string;
};

function buildBody(input: Enquiry) {
  return [
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Organisation: ${input.org || "—"}`,
    `Preferred model: ${input.model}`,
    "",
    input.message || "(No additional message)",
  ].join("\n");
}

async function deliverViaWeb3Forms(
  input: Enquiry,
  to: string,
  accessKey: string,
): Promise<boolean> {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Solarhub rooftop enquiry — ${input.name}`,
      from_name: input.name,
      email: input.email,
      replyto: input.email,
      to,
      message: buildBody(input),
    }),
    cache: "no-store",
  });
  const data = (await res.json().catch(() => null)) as {
    success?: boolean;
  } | null;
  return Boolean(res.ok && data?.success);
}

/**
 * Free forever FormSubmit delivery — no API key.
 * First submission sends an activation email to `to`; click Confirm once.
 * @see https://formsubmit.co
 */
async function deliverViaFormSubmit(
  input: Enquiry,
  to: string,
): Promise<boolean> {
  const res = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(to)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: input.name,
        email: input.email,
        organisation: input.org || "—",
        model: input.model,
        message: buildBody(input),
        _subject: `Solarhub rooftop enquiry — ${input.name}`,
        _template: "table",
        _captcha: "false",
        _replyto: input.email,
      }),
      cache: "no-store",
    },
  );

  const data = (await res.json().catch(() => null)) as {
    success?: boolean | string;
  } | null;

  return Boolean(
    res.ok && (data?.success === true || data?.success === "true"),
  );
}

/**
 * Delivers enquiries to Gmail for free (no paid plan).
 * Tries Web3Forms if configured, always falls back to FormSubmit.
 */
export async function deliverContactEnquiry(
  input: Enquiry,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const to = process.env.CONTACT_TO_EMAIL?.trim() || company.email;
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();

  try {
    if (accessKey) {
      const viaWeb3 = await deliverViaWeb3Forms(input, to, accessKey);
      if (viaWeb3) return { ok: true };
    }

    const viaFormSubmit = await deliverViaFormSubmit(input, to);
    if (viaFormSubmit) return { ok: true };

    return {
      ok: false,
      error:
        "Could not send your message. Please email solarhubtechnology@gmail.com directly.",
    };
  } catch {
    return {
      ok: false,
      error:
        "Could not send your message. Please email solarhubtechnology@gmail.com directly.",
    };
  }
}

/** Browser-side FormSubmit fallback (works on static / cPanel hosts). */
export async function deliverContactEnquiryClient(
  input: Enquiry,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const to =
    process.env.NEXT_PUBLIC_CONTACT_TO_EMAIL?.trim() || company.email;
  try {
    const ok = await deliverViaFormSubmit(input, to);
    if (ok) return { ok: true };
    return {
      ok: false,
      error:
        "Could not send your message. Please email solarhubtechnology@gmail.com directly.",
    };
  } catch {
    return {
      ok: false,
      error:
        "Could not send your message. Please email solarhubtechnology@gmail.com directly.",
    };
  }
}
