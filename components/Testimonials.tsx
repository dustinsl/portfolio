import { testimonials } from "@/lib/data";

function Star() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
      <path d="M10 1.5 12.6 7l6 .9-4.3 4.2 1 6-5.3-2.8L4.7 18l1-6L1.4 7.9l6-.9L10 1.5Z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-navy py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <span className="mx-auto block w-fit rounded-full bg-brand-gradient px-6 py-2 text-sm font-bold text-white shadow-md">
          What Clients Say
        </span>
        <p className="mx-auto mt-5 max-w-xl text-center text-sm text-white/60">
          Feedback from people I have worked with directly on production
          systems.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm"
            >
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/75">
                &quot;{t.quote}&quot;
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-white/50">{t.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
