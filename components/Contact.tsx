import { Mail, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="container-page py-24 md:py-32 section-divider">
      <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted">
        Contact
      </p>

      <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-tight tracking-tightish text-ink max-w-3xl">
        Let&rsquo;s build something useful.
      </h2>

      <p className="mt-5 max-w-prose text-base md:text-lg leading-relaxed text-muted">
        Open to software engineering roles, freelance projects, AI integrations, SaaS builds,
        and technical collaborations. Reach me by email or WhatsApp.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper hover:bg-accent transition-colors"
        >
          <Mail size={16} />
          Email me
        </a>

        <a
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink hover:border-ink transition-colors"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>

        <a
          href={site.github}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink hover:border-ink transition-colors"
        >
          GitHub
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink hover:border-ink transition-colors"
        >
          LinkedIn
        </a>
        <a
          href={site.cvUrl}
          download
          className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink hover:border-ink transition-colors"
        >
          Download CV
        </a>
      </div>

      <p className="mt-10 text-sm text-muted">
        Based in {site.location}. Available for remote work.
      </p>
    </section>
  );
}
