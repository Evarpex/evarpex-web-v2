import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "EVARPEX - Commerce, AI & Financial Operating System for African Businesses";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// OpenGraph generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #020B36 0%, #07133F 60%, #0D1B54 100%)",
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Ambient background glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-50px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(212, 85, 0, 0.25)",
            filter: "blur(120px)",
          }}
        />

        {/* Top Header: Brand & Tagline */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* SVG Logo mark */}
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 6L8 16L18 24L34 14L24 6Z" fill="#D45500" />
              <path d="M8 16L24 26L18 24L8 16Z" fill="#B54300" />
              <path d="M24 42L40 32L30 24L14 34L24 42Z" fill="#3B50D9" />
              <path d="M40 32L24 22L30 24L40 32Z" fill="#1C2F9C" />
              <polygon points="18,24 24,18 30,24 24,30" fill="#FF8C42" />
            </svg>
            <span
              style={{
                fontSize: "36px",
                fontWeight: 900,
                letterSpacing: "2px",
                color: "white",
              }}
            >
              EVARPEX
            </span>
          </div>

          <div
            style={{
              padding: "8px 20px",
              borderRadius: "9999px",
              background: "rgba(212, 85, 0, 0.2)",
              border: "1px solid rgba(212, 85, 0, 0.4)",
              color: "#FF8C42",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Abuja Headquarters • Built for Africa
          </div>
        </div>

        {/* Main Content: Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: "-1px",
              margin: 0,
              color: "white",
            }}
          >
            Commerce, AI & Financial Operating System for African Businesses
          </h1>
          <p
            style={{
              fontSize: "22px",
              color: "#94A3B8",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Sell online and in-store, track inventory in real-time, accept instant bank payments, and automate operations from one unified platform.
          </p>
        </div>

        {/* Bottom Feature Badges */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          {["Online Store Builder", "Smart POS", "Inventory & Stock", "Instant Bank Payments", "AI Business Assistant", "Abuja HQ"].map(
            (label, idx) => (
              <div
                key={idx}
                style={{
                  padding: "10px 18px",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#E2E8F0",
                }}
              >
                {label}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
