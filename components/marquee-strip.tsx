const ITEMS = [
  "Full Stack Developer",
  "Applied Computer Science",
  "ACS @ KMUTT",
  "Next.js",
  "Golang",
  "Spring Boot",
  "React",
  "Docker",
  "Elysia",
  "NestJS",
  "Vixvify",
];

const SEP = <span className="mx-5 text-white/20">✦</span>;

export function MarqueeStrip() {
  const repeated = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee-wrap overflow-hidden border-y border-white/8 py-3">
      <div className="marquee-track flex w-max">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30"
          >
            {item}
            {SEP}
          </span>
        ))}
      </div>
    </div>
  );
}
