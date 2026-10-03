type CurriculumCardProps = {
  number: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  subtitle: string;
  duration: string;
  lessons: string;
  lab: string;
  topics: string[];
};

export default function CurriculumCard({
  number,
  title,
  level,
  subtitle,
  duration,
  lessons,
  lab,
  topics,
}: CurriculumCardProps) {
  return (
  <div className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(6,182,212,.15)]">
    <div className="flex items-start gap-5">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-2xl font-bold text-white">
        {number}
      </div>

      <div className="flex-1">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-3xl font-bold">{title}</h3>
            <p className="mt-1 text-slate-400">{subtitle}</p>
          </div>

          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
            {level}
          </span>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {topics.map((topic) => (
            <div key={topic} className="flex items-center gap-3">
              <span className="text-cyan-400">✓</span>
              <span>{topic}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-8 border-t border-slate-800 pt-6 text-sm text-slate-300">
          <span>⏱ {duration}</span>
          <span>📚 {lessons}</span>
          <span>🧪 {lab}</span>
        </div>
      </div>
    </div>
  </div>
);
}