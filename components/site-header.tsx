export function SiteHeader() {
  return (
    <header className="animate-fade-in delay-0 flex items-center justify-between border-b border-white/10 pb-6">
      <a
        href="#top"
        className="text-xs font-semibold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-60"
      >
        vixvify
      </a>
      <nav className="hidden items-center gap-8 sm:flex">
        {[
          { label: "Stack", href: "#stack" },
          { label: "Projects", href: "#projects" },
          { label: "Contact", href: "#contact" },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="nav-link text-xs font-medium uppercase tracking-[0.15em] text-white/50 transition-colors hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
