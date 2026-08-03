import { headers } from "next/headers";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/** Server-rendered JSON-LD with CSP nonce from proxy. */
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
