import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page py-32">
      <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted">404</p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl text-ink">Not found.</h1>
      <p className="mt-4 text-base text-muted max-w-prose">
        The page you&rsquo;re looking for doesn&rsquo;t exist, or moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper hover:bg-accent transition-colors"
      >
        Back home
      </Link>
    </section>
  );
}
