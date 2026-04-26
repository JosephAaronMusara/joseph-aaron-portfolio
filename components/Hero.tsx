import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

const supporting = [
  "Next.js",
  "TypeScript",
  "Python",
  "Frappe",
  "AI Integrations",
  "LiveKit",
  "Docker",
  "Nginx",
];

export function Hero() {
  return (
    <section className="container-page pt-16 md:pt-24 pb-20 md:pb-28">
      <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-muted">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
        <span>{site.role} · {site.location}</span>
      </div>

      <Reveal>
        <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tightish text-ink">
          Software Engineer building{" "}
          <span className="text-accent">AI-powered systems</span> that work in production.
        </h1>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-6 max-w-prose text-base md:text-lg leading-relaxed text-muted">
          I work across frontend, backend, AI integrations, and infrastructure to build practical
          software for recruitment, health, agriculture, and business operations.
        </p>
      </Reveal>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper hover:bg-accent transition-colors"
        >
          View projects
          <ArrowUpRight size={16} />
        </Link>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink hover:border-ink transition-colors"
        >
          Contact me
        </Link>
      </div>

      <div className="mt-14 border-t border-line pt-6">
        <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted">
          Working with
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink">
          {supporting.map((tech) => (
            <li key={tech} className="font-mono">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted">
        <ArrowDown size={14} />
        Scroll
      </div>
    </section>
  );
}
