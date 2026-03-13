"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function OpenHousePopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show if not dismissed this session
    if (!sessionStorage.getItem("oh-popup-dismissed")) {
      const timer = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem("oh-popup-dismissed", "1");
  };

  if (!show) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={dismiss}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(6px)",
          zIndex: 9998,
          animation: "ohPopupFadeIn 0.3s ease",
        }}
      />

      {/* Popup */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          width: "90%",
          maxWidth: 420,
          borderRadius: 24,
          overflow: "hidden",
          animation: "ohPopupSlideIn 0.4s cubic-bezier(.22,.61,.36,1)",
        }}
      >
        {/* Gradient top bar */}
        <div
          style={{
            height: 5,
            background:
              "linear-gradient(90deg, #fb923c, #f472b6, #a78bfa, #38bdf8)",
          }}
        />

        <div
          style={{
            background:
              "linear-gradient(160deg, #0f0f2a 0%, #1a1035 50%, #0d1525 100%)",
            padding: "36px 28px 32px",
            textAlign: "center",
            position: "relative",
            border: "1px solid rgba(255,255,255,0.1)",
            borderTop: "none",
            borderRadius: "0 0 24px 24px",
          }}
        >
          {/* Close button */}
          <button
            onClick={dismiss}
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              width: 32,
              height: 32,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.06)",
              color: "rgba(255,255,255,0.5)",
              cursor: "pointer",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.12)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.color = "rgba(255,255,255,0.5)";
            }}
          >
            ✕
          </button>

          {/* Decorative glow */}
          <div
            style={{
              position: "absolute",
              top: -60,
              left: "50%",
              transform: "translateX(-50%)",
              width: 200,
              height: 200,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(251,146,60,0.15), transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Emoji */}
          <div style={{ fontSize: "3rem", marginBottom: 16 }}>🚀</div>

          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(251,146,60,0.12)",
              border: "1px solid rgba(251,146,60,0.25)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 16,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#fb923c",
                display: "inline-block",
                animation: "ohPulse 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "#fb923c",
                letterSpacing: "0.04em",
              }}
            >
              TODAY
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: "#f1f0f5",
              margin: "0 0 8px",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
            }}
          >
            Open House 2026
          </h2>

          <p
            style={{
              fontSize: "0.92rem",
              color: "rgba(241,240,245,0.6)",
              lineHeight: 1.6,
              margin: "0 0 8px",
            }}
          >
            March 13th &middot; IIITDM Kancheepuram
          </p>

          <p
            style={{
              fontSize: "0.85rem",
              color: "rgba(241,240,245,0.45)",
              lineHeight: 1.6,
              margin: "0 0 24px",
              maxWidth: 320,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            16+ technical bodies. Live demos, real machines, meet the builders —
            all under one roof.
          </p>

          {/* CTA */}
          <Link
            href="/open-house"
            onClick={dismiss}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "linear-gradient(135deg, #fb923c, #f59e0b)",
              color: "#0a0a1a",
              fontWeight: 700,
              fontSize: "0.88rem",
              padding: "12px 28px",
              borderRadius: 100,
              textDecoration: "none",
              letterSpacing: "-0.01em",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 24px -4px rgba(251,146,60,0.35)",
            }}
          >
            View Details →
          </Link>
        </div>
      </div>

      <style>{`
                @keyframes ohPopupFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes ohPopupSlideIn {
                    from { opacity: 0; transform: translate(-50%, -45%) scale(0.95); }
                    to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                }
                @keyframes ohPulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.3); }
                }
            `}</style>
    </>
  );
}
