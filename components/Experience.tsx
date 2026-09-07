import { experience, education, certifications } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-hero-gradient py-20"
    >
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
        <span className="mx-auto block w-fit rounded-full bg-brand-gradient px-6 py-2 text-sm font-bold text-white shadow-md">
          Work Experience
        </span>

        <div className="relative mt-14 space-y-8 border-l-2 border-white/15 pl-8 sm:pl-10">
          {experience.map((job) => (
            <article
              key={job.org}
              className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-7"
            >
              <span className="absolute -left-[2.55rem] top-7 h-4 w-4 rounded-full border-4 border-navy bg-blue-400 sm:-left-[3.05rem]" />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-300">
                  {job.type}
                </p>
                <p className="font-mono text-xs text-white/50">{job.range}</p>
              </div>
              <h3 className="mt-2 text-lg font-bold text-white">{job.title}</h3>
              <p className="text-sm font-medium text-white/60">{job.org}</p>

              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-[14px] leading-relaxed text-white/70"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] font-medium text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <span className="mx-auto mt-16 block w-fit rounded-full bg-brand-gradient px-6 py-2 text-sm font-bold text-white shadow-md">
          Education
        </span>

        <div className="relative mt-10 space-y-6 border-l-2 border-white/15 pl-8 sm:pl-10">
          {education.map((ed) => (
            <div
              key={ed.school}
              className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm"
            >
              <span className="absolute -left-[2.55rem] top-7 h-4 w-4 rounded-full border-4 border-navy bg-orange-400 sm:-left-[3.05rem]" />
              <p className="font-mono text-xs text-white/50">{ed.range}</p>
              <h3 className="mt-1 text-lg font-bold text-white">{ed.degree}</h3>
              <p className="text-sm font-medium text-white/60">{ed.school}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {certifications.map((cert) => (
            <div
              key={cert.code}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2"
            >
              <span className="rounded-full bg-brand-gradient px-2 py-0.5 text-[11px] font-bold text-white">
                {cert.code}
              </span>
              <span className="text-xs font-medium text-white/70">
                {cert.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
