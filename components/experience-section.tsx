import { experience } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="animate-fade-up delay-500">
      <div className="mb-8 border-b border-white/10 pb-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
          Experience
        </p>
        <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
          Work
        </h2>
      </div>

      <div className="flex flex-col divide-y divide-white/10">
        {experience.map((item) => (
          <div
            key={`${item.company}-${item.role}`}
            className="grid gap-4 py-7 sm:grid-cols-[160px_1fr] sm:gap-8 first:pt-0"
          >
            <div className="flex flex-row items-center gap-3 sm:flex-col sm:items-start sm:gap-2">
              <span className="font-mono text-xs font-semibold text-white/30 tabular-nums">
                {item.period}
              </span>
              <span className="inline-flex items-center border border-white/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/30">
                {item.type}
              </span>
              {item.current && (
                <span className="flex items-center gap-1.5 sm:mt-1">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/50" />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/30">
                    Now
                  </span>
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-black tracking-tight text-white sm:text-2xl">
                {item.role}
              </h3>
              <p className="text-sm font-medium text-white/50">
                {item.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
