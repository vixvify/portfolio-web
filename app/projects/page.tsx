import Link from "next/link";
import { ProjectArchive } from "@/components/project-archive";

export default function ProjectsPage() {
  return (
    <main className="projects-archive">
      <div className="projects-archive-shell">
        <header className="projects-archive-header">
          <Link href="/" className="brand-mark"><span className="brand-symbol">V</span><span>vixvify</span></Link>
          <Link href="/" className="projects-archive-back">Back to home <span aria-hidden="true">↗</span></Link>
        </header>
        <section className="projects-archive-hero">
          <p className="section-kicker"><span>Index</span> / the collection</p>
          <div className="projects-archive-hero-grid">
            <h1>Work<span className="heading-dot">.</span></h1>
            <p>Useful tools. Curious experiments.<br />A collection of things I&apos;ve built,<br />and things I&apos;ve learned along the way.</p>
          </div>
        </section>
        <ProjectArchive />
        <footer className="projects-archive-footer">
          <span>Have something in mind?</span>
          <a href="mailto:asnaweeezor@gmail.com">Let&apos;s talk <span aria-hidden="true">↗</span></a>
          <Link href="/">Back to portfolio ↑</Link>
        </footer>
      </div>
    </main>
  );
}
