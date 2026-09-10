type SkillGroupProps = {
  title: string;
  items: {
    name: string;
    icon?: string;
    iconUrl?: string;
    iconText?: string;
    color: string;
  }[];
};

export function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <div className="stack-group">
      <div className="stack-group-head">
        <p className="stack-group-title">{title}</p>
        <span className="stack-group-count">{String(items.length).padStart(2, "0")} skills</span>
      </div>
      <div className="skill-list">
        {items.map((item) => (
          <div key={item.name} className="skill-item group">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-white/10 bg-white/[0.03] transition-colors group-hover:border-[#c8ff6a]/40">
              {item.iconUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.iconUrl} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
              ) : item.iconText ? (
                <span aria-hidden="true" className="text-[0.45rem] font-bold leading-none" style={{ color: item.color }}>
                  {item.iconText}
                </span>
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
            <span className="text-[0.78rem] text-white/60 transition-colors group-hover:text-white">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
