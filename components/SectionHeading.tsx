interface SectionHeadingProps {
  badge: string;
  title: string;
  description: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-cyan-300">
        {badge}
      </span>

      <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
        {title}
      </h2>

      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
        {description}
      </p>
    </div>
  );
}