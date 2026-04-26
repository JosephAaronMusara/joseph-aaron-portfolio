import { technicalDepth } from "@/lib/experience";
import { SectionHeader } from "./SectionHeader";

export function TechnicalDepth() {
  return (
    <section className="container-page py-20 md:py-28 section-divider">
      <SectionHeader
        eyebrow="Focus areas"
        title="What I work on."
        description="The kinds of problems I take on, and the constraints I design around."
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
        {technicalDepth.map((item, i) => (
          <article
            key={item.title}
            className="bg-paper p-6 md:p-8"
          >
            <p className="text-xs font-mono text-muted">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 font-serif text-xl md:text-2xl text-ink leading-snug">
              {item.title}
            </h3>
            <p className="mt-3 text-base text-muted leading-relaxed">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
