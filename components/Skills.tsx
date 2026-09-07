import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="bg-blue-50/60 py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <span className="mx-auto block w-fit rounded-full bg-brand-gradient px-6 py-2 text-sm font-bold text-white shadow-md">
          My Skills
        </span>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-line bg-white p-6 shadow-sm"
            >
              <h3 className="text-sm font-bold uppercase tracking-wide text-blue-600">
                {group.label}
              </h3>
              <div className="mt-5 space-y-4">
                {group.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-ink">{item.name}</span>
                      <span className="text-muted">{item.level}%</span>
                    </div>
                    <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-line">
                      <div
                        className="h-full rounded-full bg-brand-gradient"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
