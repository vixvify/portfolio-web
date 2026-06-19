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
    <div className="pt-5">
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
        {title}
      </p>
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-1 sm:gap-y-0">
        {items.map((item) => (
          <div key={item.name} className="flex items-center gap-3 py-1.5">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center">
              {item.iconUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.iconUrl}
                  alt=""
                  aria-hidden="true"
                  className="h-4 w-4 object-contain"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0"
                  style={{
                    background: item.color,
                    mask: `url(https://cdn.simpleicons.org/${item.icon}) center / contain no-repeat`,
                    WebkitMask: `url(https://cdn.simpleicons.org/${item.icon}) center / contain no-repeat`,
                  }}
                />
              )}
            </span>
            <span className="text-sm text-white/60">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
