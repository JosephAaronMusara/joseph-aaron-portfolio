import { education, site } from "@/lib/site";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="container-page py-20 md:py-28 section-divider">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <SectionHeader eyebrow="About" title="Brief background." />

          <div className="mt-10 rounded-xl border border-line p-5">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted">
              Education
            </p>
            <p className="mt-3 text-base text-ink leading-snug">{education.degree}</p>
            <p className="mt-1 text-sm text-muted">{education.institution}</p>
            <p className="mt-1 text-sm text-muted">
              Graduated {education.graduated} &middot; {education.classification}
            </p>

            <p className="mt-5 text-xs font-mono uppercase tracking-[0.18em] text-muted">
              Award
            </p>
            <p className="mt-3 text-sm text-ink leading-relaxed">{education.award}</p>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="space-y-5 text-base md:text-lg leading-relaxed text-ink/90 max-w-prose">
            <p>
              I am a Software Engineer based in {site.location}, and a First Class graduate of the
              Harare Institute of Technology, where I received Baker Tilly&rsquo;s Prize for the
              Best Graduating Student in Computer Programming.
            </p>
            <p>
              My work sits where full-stack engineering meets data. I build the whole system:
              the data model, the secure backend APIs, the analytics and business-intelligence
              layer on top, the frontend people actually use, and the deployment that keeps it
              alive. Recent work includes a security-first business-intelligence dashboard, an HR
              platform with a natural-language analytics layer, and AI-powered SaaS products with
              integrated payments.
            </p>
            <p>
              I care about correctness and security more than most &mdash; auditable analytics
              rather than opaque model output, permissions and audit trails designed into the
              schema rather than added later. I prefer to own the path from feature idea to
              shipped, running code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
