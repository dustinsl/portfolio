import { summary, services } from "@/lib/data";
import { iconMap } from "./icons";

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="mx-auto block w-fit rounded-full bg-brand-gradient px-6 py-2 text-sm font-bold text-white shadow-md shadow-orange-900/10">
      {children}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
      <SectionTag>About Me</SectionTag>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white shadow-xl shadow-blue-900/10 sm:p-10">
          <h3 className="text-2xl font-bold">Building Digital Excellence</h3>
          <p className="mt-5 text-[15px] leading-relaxed text-blue-50/90">
            {summary}
          </p>
        </div>

        <div className="rounded-3xl border border-line bg-white p-8 shadow-sm sm:p-10">
          <h3 className="text-lg font-bold text-ink">What I Do</h3>
          <div className="mt-6 space-y-6">
            {services.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <div key={s.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink">{s.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {s.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
