import { projects } from "@/lib/data";

const patterns = [
  "from-blue-500 to-indigo-600",
  "from-orange-400 to-rose-500",
  "from-emerald-500 to-teal-600",
  "from-violet-500 to-purple-600",
  "from-cyan-500 to-blue-600",
  "from-amber-500 to-orange-600",
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
      <span className="mx-auto block w-fit rounded-full bg-brand-gradient px-6 py-2 text-sm font-bold text-white shadow-md">
        Featured Projects
      </span>
      <p className="mx-auto mt-5 max-w-xl text-center text-sm text-muted">
        Real engagements from client work — enterprise consulting projects,
        not public repos, so most details live behind NDAs.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-shadow hover:shadow-lg"
          >
            <div
              className={`flex h-32 items-center justify-center bg-gradient-to-br ${patterns[i % patterns.length]}`}
            >
              <span className="text-3xl font-bold text-white/25">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-blue-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
