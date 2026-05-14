import { backend, frontend, tools } from "@/data/portfolio";
import { SkillGroup } from "./skill-group";

export function StackSection() {
  return (
    <section id="stack" className="grid gap-4 lg:grid-cols-3">
      <SkillGroup title="Frontend" items={frontend} />
      <SkillGroup title="Backend" items={backend} />
      <SkillGroup title="Tools" items={tools} />
    </section>
  );
}
