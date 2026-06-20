"use client";

import { ScrambleText } from "@/components/scramble-text";

export function HeroSection() {
  return (
    <section id="top" className="flex flex-col gap-8 pb-10 pt-8 sm:gap-10 sm:pb-12 sm:pt-10">
      <p className="animate-fade-up delay-100 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40 sm:text-xs sm:tracking-[0.25em]">
        Full Stack Developer — ACS @ KMUTT
      </p>

      <div>
        <h1 className="animate-fade-up delay-200 pb-2 text-[clamp(3rem,10vw,7rem)] font-black leading-[0.9] tracking-tight text-white">
          <ScrambleText text="Vixvify" delay={1900} />
        </h1>
      </div>

      <div className="animate-fade-up delay-400 border-t border-white/10 pt-6 sm:pt-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-sm leading-7 text-white/50">
            Full Stack Developer
            <br />
            Applied Computer Science at KMUTT
          </p>

          <div className="flex gap-3">
            <a
              href="mailto:asnaweeezor@gmail.com"
              className="inline-flex h-10 items-center border border-white bg-white px-4 text-xs font-semibold uppercase tracking-[0.12em] text-black transition-all hover:bg-black hover:text-white sm:px-5"
            >
              Email me
            </a>
            <a
              href="https://github.com/vixvify"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center border border-white/20 px-4 text-xs font-semibold uppercase tracking-[0.12em] text-white/60 transition-all hover:border-white hover:text-white sm:px-5"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
