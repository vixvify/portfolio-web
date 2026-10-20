import { backend, database, frontend, infrastructure, tools } from "@/data/portfolio";
import { SkillGroup } from "./skill-group";

export function StackSection() {
  return (
    <section id="stack" className="section-block">
      <div className="section-heading">
        <div>
          <p className="section-kicker"><span>02</span> / toolkit</p>
          <h2>The tools behind it<span className="heading-dot">.</span></h2>
        </div>
        <p className="section-note">A practical stack for shipping<br className="hidden sm:block" /> from first sketch to production.</p>
      </div>
      <div className="stack-grid">
        <div className="stack-column">
          <SkillGroup title="Frontend" items={frontend} />
        </div>
        <div className="stack-column">
          <SkillGroup title="Backend" items={backend} />
        </div>
        <div className="stack-column">
          <SkillGroup title="Database" items={database} />
        </div>
        <div className="stack-column">
          <SkillGroup title="Infrastructure" items={infrastructure} />
        </div>
        <div className="stack-column">
          <SkillGroup title="Tools" items={tools} />
        </div>
      </div>
    </section>
  );
}
