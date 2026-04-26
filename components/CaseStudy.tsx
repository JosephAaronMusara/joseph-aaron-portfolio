import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/projects";

type Props = { project: Project };

export function CaseStudy({ project }: Props) {
  const cs = project.caseStudy;

  return (
    <article className="container-page pt-10 md:pt-16 pb-20">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink"
      >
        <ArrowLeft size={14} />
        All projects
      </Link>

      {/* Header */}
      <header className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
        <div className="md:col-span-8">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted">
            {project.category} · {project.year}
          </p>
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tightish text-ink">
            {project.title}
          </h1>
          <p className="mt-5 max-w-prose text-base md:text-lg leading-relaxed text-ink/90">
            {project.summary}
          </p>
        </div>

        <aside className="md:col-span-4">
          <div className="rounded-xl border border-line p-5">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted">
              Stack
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-line px-2 py-0.5 text-[11px] font-mono text-ink"
                >
                  {s}
                </li>
              ))}
            </ul>

            {(project.links?.repo || project.links?.live) && (
              <div className="mt-5 flex flex-col gap-2">
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-sm text-ink"
                  >
                    <ExternalLink size={14} />
                    <span className="link-underline">Live</span>
                  </a>
                )}
                {project.links?.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-sm text-ink"
                  >
                    <Github size={14} />
                    <span className="link-underline">Repository</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </aside>
      </header>

      {/* Hero screenshot */}
      {project.hero ? (
        <div className="mt-12 relative aspect-[16/9] rounded-2xl border border-line overflow-hidden bg-line/30">
          <Image
            src={project.hero.src}
            alt={project.hero.alt}
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      ) : (
        <div className="mt-12 aspect-[16/9] rounded-2xl border border-line bg-gradient-to-br from-line/40 to-paper relative overflow-hidden">
          <div className="absolute inset-0 grid place-items-center">
            <span className="text-xs font-mono text-muted">
              Screenshot · {project.slug}
            </span>
          </div>
        </div>
      )}

      {/* Body */}
      {cs ? (
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-16">
          <Section title="Overview">
            <p>{cs.overview}</p>
          </Section>

          <Section title="Problem">
            <p>{project.problem}</p>
          </Section>

          <Section title="Solution">
            <p>{project.solution}</p>
          </Section>

          <Section title="My role">
            <p>{cs.role}</p>
          </Section>

          <Section title="System architecture">
            <ul className="space-y-6">
              {cs.architecture.map((a) => (
                <li key={a.title}>
                  <h4 className="font-serif text-lg text-ink">{a.title}</h4>
                  <p className="mt-1 text-base leading-relaxed text-muted">{a.body}</p>
                </li>
              ))}
            </ul>
            {project.architectureDiagram ? (
              <figure className="mt-8 space-y-2">
                <div className="relative aspect-[16/9] rounded-xl border border-line overflow-hidden bg-line/20">
                  <Image
                    src={project.architectureDiagram.src}
                    alt={project.architectureDiagram.alt}
                    fill
                    sizes="(min-width: 1024px) 800px, 100vw"
                    className="object-contain bg-paper"
                  />
                </div>
                {project.architectureDiagram.caption && (
                  <figcaption className="text-xs text-muted">
                    {project.architectureDiagram.caption}
                  </figcaption>
                )}
              </figure>
            ) : (
              <div className="mt-8 aspect-[16/9] rounded-xl border border-dashed border-line grid place-items-center">
                <span className="text-xs font-mono text-muted">
                  Architecture diagram placeholder
                </span>
              </div>
            )}
          </Section>

          <Section title="Key features">
            <ul className="space-y-5">
              {cs.features.map((f) => (
                <li key={f.title}>
                  <h4 className="font-serif text-lg text-ink">{f.title}</h4>
                  <p className="mt-1 text-base leading-relaxed text-muted">{f.body}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Engineering challenges">
            <ul className="space-y-5">
              {cs.challenges.map((c) => (
                <li key={c.title}>
                  <h4 className="font-serif text-lg text-ink">{c.title}</h4>
                  <p className="mt-1 text-base leading-relaxed text-muted">{c.body}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="What I learned">
            <ul className="list-disc pl-5 space-y-2 text-base leading-relaxed text-muted marker:text-accent">
              {cs.learnings.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </Section>

          <Section title="Screenshots">
            {project.screenshots && project.screenshots.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.screenshots.map((shot) => (
                  <figure key={shot.src} className="space-y-2">
                    <div className="relative aspect-[4/3] rounded-lg border border-line overflow-hidden bg-line/20">
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        sizes="(min-width: 768px) 480px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    {shot.caption && (
                      <figcaption className="text-xs text-muted">
                        {shot.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="aspect-[4/3] rounded-lg border border-line bg-gradient-to-br from-line/30 to-paper grid place-items-center"
                  >
                    <span className="text-[11px] font-mono text-muted">
                      Screenshot {n}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </Section>

          <Section title="Links">
            <ul className="space-y-2 text-base">
              {project.links?.live ? (
                <li>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-ink"
                  >
                    <span className="link-underline">Live deployment</span>
                    <ArrowUpRight size={14} />
                  </a>
                </li>
              ) : (
                <li className="text-muted">
                  Live deployment — To be added soon.
                </li>
              )}
            </ul>
          </Section>
        </div>
      ) : (
        <div className="mt-16 max-w-prose space-y-6 text-base md:text-lg leading-relaxed text-ink/90">
          <p>{project.problem}</p>
          <p>{project.solution}</p>
          <ul className="list-disc pl-5 space-y-1 text-muted marker:text-accent">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-20 border-t border-line pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-ink"
        >
          <ArrowLeft size={14} />
          <span className="link-underline">Back to all projects</span>
        </Link>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
      <header className="md:col-span-3">
        <h3 className="text-xs font-mono uppercase tracking-[0.18em] text-muted">
          {title}
        </h3>
      </header>
      <div className="md:col-span-9 max-w-prose text-base md:text-lg leading-relaxed text-ink/90">
        {children}
      </div>
    </section>
  );
}
