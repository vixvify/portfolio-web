export function SiteHeader() {
  return (
    <header className="site-header">
      <a href="#top" className="brand-mark">
        <span className="brand-symbol">V</span>
        <span>vixvify</span>
      </a>
      <nav
        className="site-navigation"
        aria-label="Main navigation"
      >
        {[
          { label: "Projects", href: "#projects" },
          { label: "Toolkit", href: "#stack" },
          { label: "About", href: "#experience" },
          { label: "Contact", href: "#contact" },
        ].map((item) => (
          <a key={item.href} href={item.href} className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-status">
        <span className="status-dot" />
        <span>Open to work</span>
      </div>
    </header>
  );
}
