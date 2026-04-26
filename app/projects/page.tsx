import type { Metadata } from "next";
import { ProjectsList } from "./projects-list";
import { projects, categories } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work — full-stack SaaS, AI systems, real-time communication, and infrastructure.",
};

export default function ProjectsPage() {
  return (
    <section className="container-page pt-12 md:pt-20 pb-20">
      <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted">
        Projects
      </p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl leading-tight tracking-tightish text-ink max-w-3xl">
        Things I&rsquo;ve built &mdash; or designed end to end.
      </h1>
      <p className="mt-5 max-w-prose text-base md:text-lg leading-relaxed text-muted">
        Filter by area. Case studies cover architecture, trade-offs, and what I&rsquo;d do differently.
      </p>

      <div className="mt-10">
        <ProjectsList projects={projects} categories={categories} />
      </div>
    </section>
  );
}
