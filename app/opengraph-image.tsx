import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

// Route segment config
export const alt = "Noir & Bean — Coffee Worth Slowing Down For";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0A",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top — eyebrow */}
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#C9A96E",
            fontFamily: "sans-serif",
          }}
        >
          Single Origin · Small Batch · No Compromise
        </div>

        {/* Middle — wordmark + tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontSize: 128,
              color: "#FDFAF5",
              lineHeight: 1,
              letterSpacing: -2,
            }}
          >
            <span>Noir</span>
            <span style={{ color: "#C9A96E", margin: "0 24px" }}>&amp;</span>
            <span>Bean</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 40,
              color: "rgba(253, 250, 245, 0.65)",
            }}
          >
            Coffee Worth Slowing Down For.
          </div>
        </div>

        {/* Bottom — rule + meta */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ height: 1, background: "rgba(201, 169, 110, 0.35)", marginBottom: 24 }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 22,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "rgba(253, 250, 245, 0.4)",
              fontFamily: "sans-serif",
            }}
          >
            <span>{SITE_NAME}</span>
            <span>Roasted Weekly · Portland, OR</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
