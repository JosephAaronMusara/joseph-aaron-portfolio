import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/CaseStudy";
import { getProject, projects } from "@/lib/projects";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.filter((p) => p.hasCaseStudy).map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
    },
  };
}

export default function ProjectPage({ params }: { params: Params }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return <CaseStudy project={project} />;
}
