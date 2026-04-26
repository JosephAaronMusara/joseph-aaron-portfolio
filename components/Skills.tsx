import { skillGroups } from "@/lib/skills";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="container-page py-20 md:py-28 section-divider">
      <SectionHeader
        eyebrow="Stack"
        title="Technical skills"
        description="The tools I reach for in real work. Grouped by where they sit in the stack."
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
        {skillGroups.map((group) => (
          <div key={group.name}>
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted">
              {group.name}
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-base text-ink border-b border-line pb-2 last:border-b-0 last:pb-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
