export function SiteHeader() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 pb-5">
      <a href="#top" className="font-mono text-sm text-zinc-300">
        vixvify
      </a>
      <nav className="hidden items-center gap-6 text-sm text-zinc-400 sm:flex">
        <a className="transition hover:text-emerald-300" href="#stack">
          Stack
        </a>
        <a className="transition hover:text-cyan-300" href="#projects">
          Projects
        </a>
        <a className="transition hover:text-amber-300" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
}
