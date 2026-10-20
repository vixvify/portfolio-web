"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function PageMotion() {
  const progress = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      const amount = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
      if (progress.current) progress.current.style.transform = `scaleX(${amount})`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        element.removeAttribute("data-reveal");
        if (!reduced.matches) {
          element.animate(
            [{ opacity: 0, transform: "translateY(24px)" }, { opacity: 1, transform: "translateY(0)" }],
            { duration: 750, easing: "cubic-bezier(.16,1,.3,1)" },
          );
        }
        observer.unobserve(element);
      }
    }, { threshold: 0.08 });
    const elements = document.querySelectorAll<HTMLElement>(".section-heading, .stack-column, .experience-item, .contact-section, .projects-archive-hero");
    for (const element of elements) {
      if (!reduced.matches && element.getBoundingClientRect().top > window.innerHeight) {
        element.setAttribute("data-reveal", "");
        observer.observe(element);
      }
    }
    const onPreferenceChange = () => {
      if (reduced.matches) elements.forEach((element) => element.removeAttribute("data-reveal"));
    };
    reduced.addEventListener("change", onPreferenceChange);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resize.disconnect();
      elements.forEach((element) => element.removeAttribute("data-reveal"));
      reduced.removeEventListener("change", onPreferenceChange);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  return <div ref={progress} className="reading-progress" aria-hidden="true" />;
}
