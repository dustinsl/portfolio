import { stats } from "@/lib/data";

export default function StatsBar() {
  return (
    <div className="relative z-10 mx-auto -mt-14 max-w-6xl px-6 lg:px-10">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-line bg-white p-5 text-center shadow-lg shadow-slate-900/5"
          >
            <p className="bg-brand-gradient bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
              {s.value}
            </p>
            <p className="mt-1 text-xs font-medium text-muted sm:text-sm">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
