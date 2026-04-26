import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/lib/projects";
import { SectionHeader } from "./SectionHeader";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section id="projects" className="container-page py-20 md:py-28 section-divider">
      <SectionHeader
        eyebrow="Selected work"
        title="Projects I've shipped or designed end to end."
        description="A few systems where I owned the path from idea to running production code. Click through for the architecture, the trade-offs, and the things that broke along the way."
        align="between"
        action={
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-ink"
          >
            <span className="link-underline">All projects</span>
            <ArrowUpRight size={14} />
          </Link>
        }
      />

      <div className="mt-12">
        {featured.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
