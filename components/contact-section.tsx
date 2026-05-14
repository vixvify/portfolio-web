import { contacts } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="grid gap-6 border-t border-white/10 py-8 md:grid-cols-[0.8fr_1.2fr]"
    >
      <div>
        <p className="text-sm font-medium uppercase text-amber-200">Contact</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">
          Let&apos;s connect.
        </h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
            className="rounded-lg border border-white/10 bg-white/[0.03] p-4 transition hover:border-emerald-300/60 hover:bg-emerald-300/5"
          >
            <p className="text-sm text-zinc-500">{contact.label}</p>
            <p className="mt-2 break-words font-medium text-zinc-100">
              {contact.value}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
