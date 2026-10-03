import { ReactNode } from "react";

interface StatsCardProps {
  icon: ReactNode;
  value: string;
  label: string;
}

export default function StatsCard({
  icon,
  value,
  label,
}: StatsCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-700 bg-slate-900/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]">
      <div className="mb-4 text-cyan-400">
        {icon}
      </div>

      <h3 className="text-3xl font-bold text-white">
        {value}
      </h3>

      <p className="mt-2 text-slate-400">
        {label}
      </p>
    </div>
  );
}
