import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
  index?: number;
  variant?: "featured" | "compact";
};

export function ProjectCard({ project, index, variant = "featured" }: Props) {
  const href = project.hasCaseStudy ? `/projects/${project.slug}` : "/projects";

  if (variant === "compact") {
    return (
      <Link
        href={href}
        className="group block rounded-2xl border border-line bg-paper p-6 hover:border-ink/40 hover:shadow-[0_1px_0_0_rgba(22,22,19,0.06)] transition-all"
      >
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-muted">
            {project.category}
          </span>
          <span className="text-xs font-mono text-muted">{project.year}</span>
        </div>
        <h3 className="mt-3 font-serif text-xl text-ink leading-snug">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3">
          {project.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="rounded-full border border-line px-2 py-0.5 text-[11px] font-mono text-muted"
            >
              {s}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="text-[11px] font-mono text-muted self-center">
              +{project.stack.length - 4}
            </span>
          )}
        </div>
        <div className="mt-5 inline-flex items-center gap-1.5 text-sm text-ink">
          <span className="link-underline">{project.cta}</span>
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group block border-t border-line py-10 md:py-14 first:border-t-0 first:pt-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
        <div className="md:col-span-1 text-xs font-mono text-muted">
          {typeof index === "number" ? String(index + 1).padStart(2, "0") : ""}
        </div>

        <div className="md:col-span-4">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted">
            {project.category}
          </p>
          <h3 className="mt-3 font-serif text-2xl md:text-3xl text-ink leading-tight">
            {project.title}
          </h3>
          {project.hero ? (
            <div className="mt-5 relative aspect-[4/3] rounded-lg border border-line overflow-hidden bg-line/30">
              <Image
                src={project.hero.src}
                alt={project.hero.alt}
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          ) : (
            <div className="mt-5 aspect-[4/3] rounded-lg border border-line bg-gradient-to-br from-line/40 to-paper relative overflow-hidden">
              <div className="absolute inset-0 grid place-items-center">
                <span className="text-[11px] font-mono text-muted">
                  Screenshot · {project.slug}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="md:col-span-7">
          <p className="text-base md:text-lg leading-relaxed text-ink/90 max-w-prose">
            {project.summary}
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted">
                Stack
              </p>
              <p className="mt-2 text-sm text-ink">
                {project.stack.slice(0, 6).join(" · ")}
              </p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted">
                Year
              </p>
              <p className="mt-2 text-sm text-ink">{project.year}</p>
            </div>
          </div>

          <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-ink">
            <span className="link-underline">{project.cta}</span>
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
