import { experience } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-block">
      <div className="section-heading">
        <div>
          <p className="section-kicker"><span>03</span> / experience</p>
          <h2>Learning by building<span className="heading-dot">.</span></h2>
        </div>
        <p className="section-note">Small teams, ambitious briefs,<br className="hidden sm:block" /> lots of learning in public.</p>
      </div>

      <div className="experience-list">
        {experience.map((item) => (
          <div key={`${item.company}-${item.role}`} className="experience-item">
            <div className="experience-period">
              <span className="font-mono text-xs font-semibold text-white/35 tabular-nums">{item.period}</span>
              <span className="inline-flex w-fit items-center border border-white/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/35">{item.type}</span>
            </div>

            <div className="experience-content">
              <span className="experience-marker" />
              <div>
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-black tracking-tight text-white sm:text-2xl">{item.role}</h3>
                  {item.current && <span className="current-badge"><i /> now</span>}
                </div>
                <p className="text-sm font-medium text-white/50">{item.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
