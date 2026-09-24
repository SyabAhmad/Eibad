import { ImageResponse } from "next/og";

export const alt = "Eibad Hassan Shah — Architectural Engineer";
export const size = {
  width: 1200,
  height: 630,
};
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
          padding: "72px 80px",
          background: "#111111",
          color: "#f1efea",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#b79a80",
            fontSize: 22,
            letterSpacing: 4,
          }}
        >
          <span>EIBAD HASSAN SHAH</span>
          <span>ARCHITECTURAL ENGINEER</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, lineHeight: 0.9, letterSpacing: -6 }}>
            ARCHITECTURE
          </div>
          <div style={{ color: "#b79a80", fontSize: 92, lineHeight: 0.9, letterSpacing: -6 }}>
            WITH PURPOSE.
          </div>
        </div>
        <div style={{ display: "flex", color: "#a6a19a", fontSize: 22 }}>
          DESIGN / DOCUMENTATION / COORDINATION / DELIVERY
        </div>
      </div>
    ),
    { ...size },
  );
}
