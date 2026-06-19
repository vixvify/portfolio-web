import { backend, frontend, tools } from "@/data/portfolio";
import { SkillGroup } from "./skill-group";

export function StackSection() {
  return (
    <section id="stack" className="animate-fade-up delay-500">
      <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
        Tech Stack
      </p>
      <div className="grid grid-cols-1 gap-0 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <div className="pb-6 sm:pb-0 sm:pr-8">
          <SkillGroup title="Frontend" items={frontend} />
        </div>
        <div className="py-6 sm:px-8 sm:py-0">
          <SkillGroup title="Backend" items={backend} />
        </div>
        <div className="pt-6 sm:pl-8 sm:pt-0">
          <SkillGroup title="Tools" items={tools} />
        </div>
      </div>
    </section>
  );
}
