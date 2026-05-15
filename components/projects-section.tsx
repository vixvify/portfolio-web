import Image from "next/image";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-4">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase text-cyan-300">
            Freelancer
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Projects</h2>
        </div>
      </div>
      <div className="grid gap-4">
        {projects.map((project) => (
          <article
            key={project.name}
            className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 md:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="space-y-4">
              <div className="relative aspect-video overflow-hidden rounded-md border border-white/10 bg-zinc-950">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    width={960}
                    height={540}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_48%,rgba(34,211,238,0.1)_100%)]" />
                )}
              </div>
              <div>
                <p className="text-sm text-zinc-500">{project.type}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {project.name}
                </h3>
              </div>
            </div>
            <div>
              <p className="leading-7 text-zinc-400">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
