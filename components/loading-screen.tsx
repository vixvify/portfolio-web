"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [phase, setPhase] = useState<"visible" | "leaving" | "done">("visible");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("leaving"), 1000);
    const t2 = setTimeout(() => setPhase("done"), 1750);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        transform: phase === "leaving" ? "translateY(-100%)" : "translateY(0)",
        transition:
          phase === "leaving"
            ? "transform 0.75s cubic-bezier(0.76, 0, 0.24, 1)"
            : "none",
        pointerEvents: "none",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-inter), Arial, sans-serif",
          fontSize: "clamp(1rem, 5vw, 2rem)",
          fontWeight: 900,
          letterSpacing: "0.45em",
          color: "#fff",
          opacity: phase === "visible" ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        Loading...
      </span>

      <div
        style={{
          width: "120px",
          height: "1px",
          background: "rgba(255,255,255,0.12)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#fff",
            transform:
              phase === "leaving" ? "translateX(100%)" : "translateX(-100%)",
            transition:
              phase === "visible"
                ? "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s"
                : "transform 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}
