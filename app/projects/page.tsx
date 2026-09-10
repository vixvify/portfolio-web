import Image from "next/image";
import Link from "next/link";
import { allProjects } from "@/data/portfolio";

function ProjectArchiveCard({
  index,
  project,
}: {
  index: number;
  project: (typeof allProjects)[number];
}) {
  return (
    <article className="projects-archive-card">
      <div className="projects-archive-card-media">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="projects-archive-card-empty">No preview yet</div>
        )}
        <div className="projects-archive-card-shade" />
        <span className="projects-archive-card-index">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="projects-archive-card-type">{project.type}</span>
      </div>

      <div className="projects-archive-card-body">
        <div className="projects-archive-card-title">
          <h2>{project.name}</h2>
          <span aria-hidden="true">↗</span>
        </div>
        <p>{project.description}</p>
        {project.stack.length > 0 && (
          <div className="projects-archive-card-tags">
            {project.stack.map((item) => <span key={item}>{item}</span>)}
          </div>
        )}
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <main className="projects-archive">
      <div className="projects-archive-shell mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <header className="projects-archive-header">
          <Link href="/" className="projects-archive-back">
            <span aria-hidden="true">←</span>
            Back to home
          </Link>
          <span className="projects-archive-label">vixvify / project archive</span>
        </header>

        <section className="projects-archive-hero">
          <p className="projects-archive-kicker">All projects / 2026</p>
          <div className="projects-archive-hero-grid">
            <h1>
              Every project,
              <br />
              <em>in one place.</em>
            </h1>
            <p>
              A collection of shipped work, experiments, simulations, and
              stories built across different parts of the stack.
            </p>
          </div>
          <div className="projects-archive-meta">
            <span>{String(allProjects.length).padStart(2, "0")} projects</span>
            <span>Selected work + archive</span>
          </div>
        </section>

        <section className="projects-archive-grid" aria-label="All projects">
          {allProjects.map((project, index) => (
            <ProjectArchiveCard key={project.name} index={index} project={project} />
          ))}
        </section>

        <footer className="projects-archive-footer">
          <span>More details coming soon.</span>
          <Link href="/">Return to portfolio <span aria-hidden="true">↗</span></Link>
        </footer>
      </div>
    </main>
  );
}
