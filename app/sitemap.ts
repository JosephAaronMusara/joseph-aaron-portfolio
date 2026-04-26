import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...projects
      .filter((p) => p.hasCaseStudy)
      .map((p) => ({
        url: `${base}/projects/${p.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
  ];
}
