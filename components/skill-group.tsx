type SkillGroupProps = {
  title: string;
  items: string[];
};

export function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
      <h2 className="text-sm font-medium text-zinc-400">{title}</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-white/10 bg-zinc-950 px-3 py-1.5 text-sm text-zinc-200"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
