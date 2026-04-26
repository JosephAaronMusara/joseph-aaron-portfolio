"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project, ProjectCategory } from "@/lib/projects";

type Props = {
  projects: Project[];
  categories: ProjectCategory[];
};

export function ProjectsList({ projects, categories }: Props) {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active, projects],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-line pb-6">
        {(["All", ...categories] as const).map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={[
                "rounded-full border px-3 py-1.5 text-sm transition-colors",
                isActive
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-muted hover:text-ink hover:border-ink/40",
              ].join(" ")}
              aria-pressed={isActive}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} variant="compact" />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-sm text-muted">No projects in this category yet.</p>
      )}
    </div>
  );
}
