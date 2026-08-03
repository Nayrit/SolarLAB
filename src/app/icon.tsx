import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a7a4b",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 18,
            height: 14,
            borderLeft: "3px solid #f3f2f0",
            borderRight: "3px solid #f3f2f0",
            borderBottom: "3px solid #f3f2f0",
            transform: "rotate(180deg)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
