import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line mt-24">
      <div className="container-page py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="text-sm text-muted">
          <p className="text-ink">{site.name}</p>
          <p>
            {site.role} · {site.location}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a href={`mailto:${site.email}`} className="text-ink link-underline">
            Email
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-ink link-underline"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-ink link-underline"
          >
            LinkedIn
          </a>
          <Link href="/projects" className="text-ink link-underline">
            Projects
          </Link>
        </div>
      </div>

      <div className="container-page pb-8">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
