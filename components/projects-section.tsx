import Image from "next/image";
import { projects } from "@/data/portfolio";

function getGithubAvatarUrl(username: string) {
  return `https://github.com/${username}.png`;
}

export function ProjectsSection() {
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

      <div className="flex flex-col divide-y divide-white/10">
        {projects.map((project, i) => (
          <article
            key={project.name}
            className="grid gap-4 py-6 first:pt-0 sm:gap-6 sm:py-8 md:grid-cols-[2fr_3fr]"
          >
            <div className="flex flex-col gap-3">
              <div className="relative aspect-video overflow-hidden bg-[#0a0a0a]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    width={960}
                    height={540}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-[#111]" />
                )}
              </div>

              <span className="text-[10px] font-semibold text-white/20">
                {String(i + 1).padStart(2, "0")} / {project.type}
              </span>
            </div>

            <div className="flex flex-col justify-between gap-4">
              <div>
                <h3 className="text-xl font-black tracking-tight text-white sm:text-2xl">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/50 sm:mt-3 sm:leading-7">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
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
                      {project.collaborators.map((collaborator) => {
                        const displayName =
                          collaborator.name ?? collaborator.username;
                        const avatarUrl =
                          collaborator.avatarUrl ||
                          getGithubAvatarUrl(collaborator.username);

                        return (
                          <a
                            key={collaborator.username}
                            href={`https://github.com/${collaborator.username}`}
                            target="_blank"
                            rel="noreferrer"
                            title={displayName}
                            className="relative inline-block transition-transform hover:z-10 hover:-translate-y-0.5"
                          >
                            <Image
                              src={avatarUrl}
                              alt={displayName}
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
          </article>
        ))}
      </div>
    </section>
  );
}
