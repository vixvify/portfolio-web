type SkillGroupProps = {
  title: string;
  items: {
    name: string;
    icon?: string;
    iconUrl?: string;
    color: string;
  }[];
};

export function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
      <h2 className="text-sm font-medium text-zinc-400">{title}</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item.name}
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-zinc-950 px-3 py-1.5 text-sm text-zinc-200"
          >
            {item.iconUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.iconUrl}
                alt=""
                aria-hidden="true"
                className="h-4 w-4 shrink-0 object-contain"
              />
            ) : (
              <span
                aria-hidden="true"
                className="h-4 w-4 shrink-0 bg-current"
                style={{
                  color: item.color,
                  mask: `url(https://cdn.simpleicons.org/${item.icon}) center / contain no-repeat`,
                  WebkitMask: `url(https://cdn.simpleicons.org/${item.icon}) center / contain no-repeat`,
                }}
              />
            )}
            {item.name}
          </span>
        ))}
      </div>
    </section>
  );
}
