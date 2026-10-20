"use client";

import Image from "next/image";
import { useState } from "react";
import { allProjects } from "@/data/portfolio";

const filters = ["All", ...new Set(allProjects.flatMap((project) => project.stack))];

export function ProjectArchive() {
  const [filter, setFilter] = useState("All");
  const visible = allProjects.filter((project) => filter === "All" || project.stack.includes(filter));

  return (
    <>
      <div className="archive-toolbar">
        <div className="archive-filters" role="group" aria-label="Filter projects by technology">
          {filters.map((item) => (
            <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)}>
              {item}{item === "All" && <span>{allProjects.length}</span>}
            </button>
          ))}
        </div>
        <p className="archive-results" aria-live="polite">{visible.length} projects</p>
      </div>
      <section className="projects-archive-grid" aria-label="Projects">
        {visible.map((project) => (
          <article key={project.name} className="projects-archive-card">
            <div className="projects-archive-card-media">
              {project.image ? <Image src={project.image} alt={`${project.name} preview`} fill sizes="(min-width: 1440px) 664px, (min-width: 768px) 46vw, 92vw" className="object-cover" /> : <div className="projects-archive-card-empty">Preview coming soon</div>}
              <span className="projects-archive-card-index">{String(allProjects.indexOf(project) + 1).padStart(2, "0")}</span>
            </div>
            <div className="projects-archive-card-body">
              <span className="projects-archive-card-type">{project.type}</span>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div className="projects-archive-card-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
