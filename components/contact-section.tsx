import { contacts } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="animate-fade-up delay-700 border-t border-white/10 py-10 sm:py-12"
    >
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="shrink-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Let&apos;s connect.
          </h2>
        </div>

        <div className="flex w-full flex-col gap-1 sm:max-w-xs">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center justify-between border-b border-white/10 py-4 last:border-none"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                {contact.label}
              </span>
              <span className="flex items-center gap-2 text-sm font-medium text-white/80">
                <span className="max-w-[180px] truncate sm:max-w-none">
                  {contact.value}
                </span>
                <span className="text-white/30">↗</span>
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-12 flex items-center justify-between sm:mt-16">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20">
          vixvify
        </span>
        <span className="text-[10px] text-white/20">
          © {new Date().getFullYear()}
        </span>
      </div>
    </section>
  );
}
