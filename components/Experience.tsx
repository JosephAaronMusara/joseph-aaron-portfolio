import { experience } from "@/lib/experience";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="container-page py-20 md:py-28 section-divider">
      <SectionHeader
        eyebrow="Track record"
        title="Experience"
        description="Where I've worked and what I focused on."
      />

      <ol className="mt-12 relative">
        {experience.map((entry, idx) => (
          <li
            key={`${entry.company}-${idx}`}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 border-t border-line py-8 md:py-10 first:border-t-0 first:pt-0"
          >
            <div className="md:col-span-3">
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted">
                {entry.period}
              </p>
              <p className="mt-2 text-sm text-ink">{entry.company}</p>
            </div>

            <div className="md:col-span-9">
              <h3 className="font-serif text-xl md:text-2xl text-ink">
                {entry.role}
              </h3>
              <p className="mt-2 text-base text-muted leading-relaxed max-w-prose">
                {entry.description}
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-ink/90">
                {entry.highlights.map((h) => (
                  <li key={h} className="flex gap-2 leading-relaxed">
                    <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
