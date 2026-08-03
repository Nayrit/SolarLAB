import { ImageResponse } from "next/og";

export const alt =
  "Solarhub Technology Ltd. — OPEX rooftop solar for industry in Bangladesh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#222421",
          color: "#f3f2f0",
          padding: "64px 72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#2aad68",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              background: "#0a7a4b",
              display: "flex",
            }}
          />
          Solarhub Technology
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              maxWidth: 920,
            }}
          >
            Clean power, zero capital.
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.35,
              color: "rgba(243,242,240,0.78)",
              maxWidth: 820,
            }}
          >
            OPEX rooftop solar for industry and institutions across Bangladesh.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "rgba(243,242,240,0.55)",
            letterSpacing: "0.04em",
          }}
        >
          <span>1.788 MWp flagship · 22-year PPA</span>
          <span>Chattogram, Bangladesh</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
