import { headers } from "next/headers";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * Server-rendered JSON-LD with CSP nonce from proxy.
 * Browsers strip `nonce` from the live DOM after applying CSP, which would
 * otherwise look like a hydration mismatch — suppress that false positive.
 */
export async function JsonLd({ data }: JsonLdProps) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  const payload = Array.isArray(data) ? data : [data];

  return (
    <>
      {payload.map((item, i) => (
        <script
          // eslint-disable-next-line react/no-danger
          key={i}
          type="application/ld+json"
          nonce={nonce}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
