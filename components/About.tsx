import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="container-page py-20 md:py-28 section-divider">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <SectionHeader eyebrow="About" title="Brief background." />
        </div>

        <div className="md:col-span-7">
          <div className="space-y-5 text-base md:text-lg leading-relaxed text-ink/90 max-w-prose">
            <p>
              I am a Software Engineer based in Zimbabwe, currently completing a BTech Honours
              in Software Engineering at the Harare Institute of Technology.
            </p>
            <p>
              My work focuses on building practical systems that combine strong full-stack
              engineering with AI, automation, analytics, and deployment. I am especially
              interested in software that solves real business and community problems —
              recruitment, health, agriculture, and operations.
            </p>
            <p>
              I prefer to own the path from feature idea to shipped, running code: data model,
              backend, frontend, and the deployment that keeps it alive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
