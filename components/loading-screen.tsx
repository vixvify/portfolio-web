"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [phase, setPhase] = useState<"visible" | "leaving" | "done">("visible");

  useEffect(() => {
    const leaveTimer = setTimeout(() => setPhase("leaving"), 900);
    const doneTimer = setTimeout(() => setPhase("done"), 1650);
    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="loading-screen"
      style={{
        transform: phase === "leaving" ? "translateY(-100%)" : "translateY(0)",
        transition: phase === "leaving" ? "transform 0.75s cubic-bezier(0.76, 0, 0.24, 1)" : "none",
      }}
    >
      <div className="loading-spinner" role="status" aria-label="Loading" />
    </div>
  );
}
