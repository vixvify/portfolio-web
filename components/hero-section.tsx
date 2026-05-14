export function HeroSection() {
  return (
    <section
      id="top"
      className="grid min-h-[72vh] items-center gap-10 py-8 lg:grid-cols-[1.08fr_0.92fr]"
    >
      <div>
        <p className="text-sm font-medium uppercase text-emerald-300">
          Full Stack Developer
        </p>
        <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.05] text-white sm:text-7xl">
          Hi, I&apos;m Vixvify
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
          สวัสดีครับ ผมเป็น Full Stack Developer และกำลังเรียนสาขา Applied
          Computer Science ที่ KMUTT
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="mailto:asnaweeezor@gmail.com"
            className="inline-flex h-12 items-center justify-center rounded-md bg-white px-5 text-sm font-semibold text-black transition hover:bg-emerald-200"
          >
            Email me
          </a>
          <a
            href="https://github.com/vixvify"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-md border border-white/15 px-5 text-sm font-semibold text-zinc-100 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            View GitHub
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-zinc-950 p-6 shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 border-b border-white/10 pb-4">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-300" />
          </div>
          <div className="mt-6 font-mono text-sm leading-7 text-zinc-300">
            <p>
              <span className="text-cyan-300">const</span>{" "}
              <span className="text-white">profile</span> = {"{"}
            </p>
            <p className="pl-4">
              role:{" "}
              <span className="text-emerald-300">
                &quot;Full Stack Developer&quot;
              </span>
              ,
            </p>
            <p className="pl-4">
              school:{" "}
              <span className="text-amber-200">&quot;ACS @ KMUTT&quot;</span>,
            </p>
            <p className="pl-4">
              focus:{" "}
              <span className="text-rose-200">&quot;Web Development&quot;</span>,
            </p>
            <p>{"}"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
