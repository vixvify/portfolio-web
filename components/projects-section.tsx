"use client";

import Image from "next/image";
import Link from "next/link";
import { type MouseEvent, useRef, useState } from "react";
import { projects } from "@/data/portfolio";

function getGithubAvatarUrl(username: string) {
  return `https://github.com/${username}.png`;
}

function Collaborators({ index }: { index: number }) {
  const project = projects[index];
  if (!project.collaborators) return null;

  return (
    <div className="mt-5 flex items-center gap-3">
      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25">With</span>
      <div className="flex -space-x-2">
        {project.collaborators.map((collaborator) => {
          const name = collaborator.name ?? collaborator.username;
          const avatar = collaborator.avatarUrl || getGithubAvatarUrl(collaborator.username);
          return (
            <a
              key={collaborator.username}
              href={`https://github.com/${collaborator.username}`}
              target="_blank"
              rel="noreferrer"
              title={name}
              className="relative inline-block transition-transform hover:-translate-y-1"
            >
              <Image src={avatar} alt={name} width={28} height={28} unoptimized className="size-7 rounded-full border border-[#080909] bg-[#111]" />
            </a>
          );
        })}
      </div>
    </div>
  );
}

function PreviewPane({ index }: { index: number }) {
  const tiltRef = useRef<HTMLDivElement>(null);
  const project = projects[index];

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (hover: none)").matches) return;
    const element = tiltRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    element.style.transform = `perspective(1200px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`;
  };

  const onMouseLeave = () => {
    if (tiltRef.current) {
      tiltRef.current.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)";
    }
  };

  return (
    <div className="project-detail">
      <div ref={tiltRef} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className="project-preview preview-image">
        {project.image ? <Image key={project.image} src={project.image} alt={`${project.name} preview`} fill sizes="(min-width: 768px) 55vw, 100vw" className="object-cover" /> : <div className="h-full w-full bg-[#111]" />}
        <div className="project-preview-shade" />
        <div className="project-preview-top"><span>Selected / {String(index + 1).padStart(2, "0")}</span><span>↗</span></div>
        <div className="project-preview-bottom"><span>{project.type}</span><strong>{project.name}</strong></div>
      </div>

      <div key={project.name} className="preview-fade project-detail-copy">
        <p className="max-w-lg text-sm leading-7 text-white/50">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => <span key={item} className="tag">{item}</span>)}
        </div>
        <Collaborators index={index} />
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [hovered, setHovered] = useState(0);
  const [expanded, setExpanded] = useState(-1);

  return (
    <section id="projects" className="section-block">
      <div className="section-heading">
        <div>
          <p className="section-kicker"><span>01</span> / selected work</p>
          <h2>Ideas, made real<span className="heading-dot">.</span></h2>
        </div>
        <span className="section-count">0{projects.length} projects</span>
      </div>

      <div className="projects-layout hidden md:grid">
        <div className="project-list">
          {projects.map((project, index) => (
            <button
              key={project.name}
              type="button"
              className={`project-row group ${hovered === index ? "is-active" : ""}`}
              onMouseEnter={() => setHovered(index)}
              onFocus={() => setHovered(index)}
              onClick={() => setHovered(index)}
              aria-pressed={hovered === index}
            >
              <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="project-row-copy">
                <strong>{project.name}</strong>
                <small>{project.type}</small>
                <span className="project-tags">{project.stack.map((item) => <i key={item}>{item}</i>)}</span>
              </span>
              <span className="project-arrow">↗</span>
            </button>
          ))}
        </div>
        <PreviewPane index={hovered} />
      </div>

      <div className="flex flex-col gap-3 md:hidden">
        {projects.map((project, index) => {
          const isOpen = expanded === index;
          return (
            <div key={project.name} className="mobile-project-card">
              <button type="button" className="flex min-h-[5.75rem] w-full items-center gap-4 px-4 py-5 text-left" onClick={() => setExpanded(isOpen ? -1 : index)} aria-expanded={isOpen} aria-controls={`project-panel-${index}`}>
                <span className="shrink-0 text-[10px] font-semibold tabular-nums text-[#c8ff6a]/60">{String(index + 1).padStart(2, "0")}</span>
                <span className="min-w-0 flex-1"><span className="block pt-1 text-lg font-black leading-tight tracking-tight text-white">{project.name}</span><span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">{project.type}</span></span>
                <span className="shrink-0 text-lg text-[#c8ff6a]/70 transition-transform duration-300" style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
              </button>
              <div
                className="overflow-hidden px-4"
                aria-hidden={!isOpen}
                inert={!isOpen}
                id={`project-panel-${index}`}
                style={{
                  maxHeight: isOpen ? "62rem" : "0px",
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateY(0)" : "translateY(-0.75rem)",
                  transition: "max-height 500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 260ms ease, transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <div className="accordion-inner">
                  <div className="flex flex-col gap-4 pb-6">
                    <div className="project-preview relative">
                      {project.image ? <Image src={project.image} alt={`${project.name} preview`} fill sizes="100vw" className="object-cover" /> : <div className="h-full w-full bg-[#111]" />}
                    </div>
                    <p className="text-sm leading-7 text-white/50">{project.description}</p>
                    <div className="flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="tag">{item}</span>)}</div>
                    <Collaborators index={index} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Link href="/projects" className="see-all-projects">
        <span>See all projects</span>
        <span aria-hidden="true" className="see-all-projects-arrow">↗</span>
      </Link>
    </section>
  );
}
