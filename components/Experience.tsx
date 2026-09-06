import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="work" className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <h2 className="text-lg text-bone">Work history</h2>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">
              Fourteen years, five roles, one throughline: fix what's
              actually broken, not what's easiest to rebuild.
            </p>
          </div>

          <div className="lg:col-span-9">
            {experience.map((job, i) => (
              <article
                key={job.org}
                className="group grid gap-2 border-b border-hairline py-7 pl-5 transition-colors hover:border-l-2 hover:border-l-signal hover:pl-[18px] first:pt-0 sm:grid-cols-[9rem,1fr]"
              >
                <p className="font-mono text-[13px] text-muted">
                  {job.range}
                </p>
                <div>
                  <h3 className="text-[17px] text-bone">{job.title}</h3>
                  <p className="mt-0.5 font-mono text-[13px] text-signal">
                    {job.org}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="max-w-prose text-[14px] leading-relaxed text-muted"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-hairline px-2 py-1 font-mono text-[11px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
