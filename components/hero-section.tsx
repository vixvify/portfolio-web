import Link from "next/link";

function LineSculpture() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 480 520" fill="none">
        <g className="sculpture-lines">
          {Array.from({ length: 44 }, (_, i) => {
            const phase = i / 43;
            const points = Array.from({ length: 121 }, (_, j) => {
              const angle = (j / 120) * Math.PI * 2;
              const radius = 130 + 30 * Math.sin(phase * Math.PI);
              const twist = phase * Math.PI * 0.85;
              const x = radius * Math.cos(angle);
              const y = 48 * Math.sin(angle);
              return `${(240 + x * Math.cos(twist) - y * Math.sin(twist)).toFixed(2)},${(92 + phase * 332 + x * Math.sin(twist) * 0.3 + y * Math.cos(twist)).toFixed(2)}`;
            }).join(" ");
            return <polyline key={i} points={points} stroke="currentColor" strokeWidth=".8" opacity={0.35 + Math.sin(phase * Math.PI) * 0.6} />;
          })}
        </g>
        <path d="M28 46h16M36 38v16M436 466h16M444 458v16" stroke="currentColor" opacity=".5" />
      </svg>
      <span className="art-caption">A little structure.<br />A different perspective.</span>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-topline">
        <span>Independent mind. Full stack developer.</span>
        <span className="hero-location">Bangkok, Thailand ↗</span>
      </div>
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-eyebrow">Thoughtfully designed.<br />Carefully engineered.</p>
          <h1 className="hero-title">Vixvify<span>.</span></h1>
          <p className="hero-statement">Turning complex ideas<br />into <em>things that work.</em></p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">Explore my work <span aria-hidden="true">↘</span></a>
            <Link href="/projects" className="hero-text-link">The full collection <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <LineSculpture />
      </div>
      <div className="hero-footer">
        <span className="hero-role">Code. Craft.<br />Curiosity.</span>
        <p className="hero-description">Full Stack Developer &amp; Applied Computer Science student at KMUTT. From the first interaction to the systems behind it.</p>
        <a href="#projects" className="scroll-cue"><span>Scroll to explore</span><span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}
