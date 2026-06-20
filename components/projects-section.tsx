"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { projects } from "@/data/portfolio";

function getGithubAvatarUrl(username: string) {
  return `https://github.com/${username}.png`;
}

function PreviewPane({ index }: { index: number }) {
  const tiltRef = useRef<HTMLDivElement>(null);
  const project = projects[index];

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.02)`;
  };

  const onMouseLeave = () => {
    if (tiltRef.current) {
      tiltRef.current.style.transform =
        "perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)";
    }
  };

  return (
    <div className="sticky top-8 flex flex-col gap-5">
      <div
        key={index}
        ref={tiltRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="preview-image relative aspect-video overflow-hidden bg-[#0a0a0a]"
        style={{
          transition: "transform 0.18s ease",
          transformStyle: "preserve-3d",
        }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-[#111]" />
        )}
      </div>

      <div key={`desc-${index}`} className="preview-fade">
        <p className="text-sm leading-7 text-white/50">{project.description}</p>

        {project.collaborators ? (
          <div className="mt-4 flex items-center gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/20">
              With
            </span>
            <div className="flex -space-x-2">
              {project.collaborators.map((c) => {
                const name = c.name ?? c.username;
                const avatar = c.avatarUrl || getGithubAvatarUrl(c.username);
                return (
                  <a
                    key={c.username}
                    href={`https://github.com/${c.username}`}
                    target="_blank"
                    rel="noreferrer"
                    title={name}
                    className="relative inline-block transition-transform hover:-translate-y-0.5"
                  >
                    <Image
                      src={avatar}
                      alt={name}
                      width={28}
                      height={28}
                      unoptimized
                      className="size-7 rounded-full border border-black bg-[#111]"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [hovered, setHovered] = useState(0); // desktop sidebar preview
  const [expanded, setExpanded] = useState(0); // mobile accordion (-1 = all closed)

  return (
    <section id="projects" className="animate-fade-up delay-600">
      <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-6">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
            Selected Work
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
            Projects
          </h2>
        </div>
        <span className="text-xs text-white/20">
          {projects.length} projects
        </span>
      </div>

      <div className="hidden md:grid md:grid-cols-[1fr_1fr] md:gap-10">
        <div className="flex flex-col divide-y divide-white/10">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="project-row group cursor-pointer py-6 transition-all duration-300 first:pt-0"
              style={{ opacity: hovered === i ? 1 : 0.28 }}
              onMouseEnter={() => setHovered(i)}
            >
              <div className="flex items-start gap-5">
                <span className="mt-1.5 shrink-0 text-[10px] font-semibold tabular-nums text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-black leading-tight tracking-tight text-white transition-all group-hover:tracking-wide">
                    {project.name}
                  </h3>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                    {project.type}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="border border-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/30"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <PreviewPane index={hovered} />
      </div>

      <div className="flex flex-col divide-y divide-white/10 md:hidden">
        {projects.map((project, i) => {
          const isOpen = expanded === i;
          const name = project.name;

          return (
            <div key={name}>
              <button
                className="flex w-full items-center gap-4 py-5 text-left first:pt-0"
                onClick={() => setExpanded(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span className="shrink-0 text-[10px] font-semibold tabular-nums text-white/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-black tracking-tight text-white leading-tight pt-5">
                    {name}
                  </p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                    {project.type}
                  </p>
                </div>
                <span
                  className="shrink-0 text-white/30 text-lg transition-transform duration-300"
                  style={{
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              <div
                className="accordion-body overflow-hidden"
                style={{
                  display: "grid",
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  transition:
                    "grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <div className="min-h-0">
                  <div className="flex flex-col gap-4 pb-6">
                    <div className="relative aspect-video overflow-hidden bg-[#0a0a0a]">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={`${project.name} preview`}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="h-full w-full bg-[#111]" />
                      )}
                    </div>

                    <p className="text-sm leading-7 text-white/50">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="border border-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/40"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {project.collaborators ? (
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/20">
                          With
                        </span>
                        <div className="flex -space-x-2">
                          {project.collaborators.map((c) => {
                            const cName = c.name ?? c.username;
                            const avatar =
                              c.avatarUrl || getGithubAvatarUrl(c.username);
                            return (
                              <a
                                key={c.username}
                                href={`https://github.com/${c.username}`}
                                target="_blank"
                                rel="noreferrer"
                                title={cName}
                              >
                                <Image
                                  src={avatar}
                                  alt={cName}
                                  width={28}
                                  height={28}
                                  unoptimized
                                  className="size-7 rounded-full border border-black bg-[#111]"
                                />
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
