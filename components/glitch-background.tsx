"use client";

import { useEffect, useRef } from "react";

const GLITCH_STYLE: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  zIndex: 3,
  pointerEvents: "none",
  opacity: 0,
  background:
    "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(255,255,255,0.08) 3px, rgba(255,255,255,0.08) 4px)",
};

function scheduleGlitch(
  el: HTMLDivElement,
  baseInterval: number,
  initialDelay: number,
) {
  const fire = () => {
    const slices = [
      { top: 5 + Math.random() * 70, h: 3 + Math.random() * 18 },
      { top: 5 + Math.random() * 70, h: 2 + Math.random() * 10 },
      { top: 5 + Math.random() * 70, h: 4 + Math.random() * 14 },
    ];
    const dx = () => ((Math.random() - 0.5) * 22).toFixed(1) + "px";

    const show = (i: number) => {
      const s = slices[i % slices.length];
      el.style.opacity = "1";
      el.style.clipPath = `inset(${s.top.toFixed(1)}% 0 ${(100 - s.top - s.h).toFixed(1)}% 0)`;
      el.style.transform = `translateX(${dx()})`;
    };

    show(0);
    const t1 = setTimeout(() => show(1), 60);
    const t2 = setTimeout(() => show(2), 110);
    const t3 = setTimeout(() => {
      el.style.opacity = "0";
      el.style.transform = "translateX(0)";
    }, 160);

    const next = baseInterval * (0.7 + Math.random() * 0.9);
    const t4 = setTimeout(fire, next);

    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  };

  const t = setTimeout(fire, initialDelay);
  return () => clearTimeout(t);
}

export function GlitchBackground() {
  const a = useRef<HTMLDivElement>(null);
  const b = useRef<HTMLDivElement>(null);
  const c = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cleanups: (() => void)[] = [];

    const init = setTimeout(() => {
      if (a.current) cleanups.push(scheduleGlitch(a.current, 7000, 300));
      if (b.current) cleanups.push(scheduleGlitch(b.current, 11000, 2500));
      if (c.current) cleanups.push(scheduleGlitch(c.current, 5000, 4800));
    }, 2000);

    return () => {
      clearTimeout(init);
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <>
      <div ref={a} style={GLITCH_STYLE} />
      <div ref={b} style={GLITCH_STYLE} />
      <div ref={c} style={GLITCH_STYLE} />
    </>
  );
}
