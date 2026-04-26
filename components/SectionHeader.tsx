type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "between";
  action?: React.ReactNode;
};

export function SectionHeader({ eyebrow, title, description, align = "left", action }: Props) {
  return (
    <div
      className={
        align === "between"
          ? "flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          : ""
      }
    >
      <div className="max-w-prose">
        <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl leading-tight tracking-tightish text-ink">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base md:text-lg leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
