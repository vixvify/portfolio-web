import { contacts } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-topline">
        <p className="section-kicker"><span>04</span> / next chapter</p>
        <span><i className="status-dot" /> Open to conversations</span>
      </div>
      <a href="mailto:asnaweeezor@gmail.com" className="contact-invitation">
        <h2>Something<br /><em>in mind?</em></h2>
        <span className="contact-big-arrow" aria-hidden="true">↗</span>
      </a>
      <div className="contact-bottom">
        <p>Let&apos;s make it happen.<br /><span>Good ideas start with a conversation.</span></p>
        <div className="contact-links">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
              className="contact-link"
            >
              {contact.label}<span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>

      <footer className="site-footer"><span>© {new Date().getFullYear()} Vixvify</span><span>Built with curiosity.</span><a href="#top">Back to top ↑</a></footer>
    </section>
  );
}
