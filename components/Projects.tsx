import Image from "next/image";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
      <span className="mx-auto block w-fit rounded-full bg-brand-gradient px-6 py-2 text-sm font-bold text-white shadow-md">
        Featured Projects
      </span>
      <p className="mx-auto mt-5 max-w-xl text-center text-sm text-muted">
        Real engagements from client work. These are enterprise consulting
        projects, not public repos, so most details live behind NDAs.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group relative aspect-square overflow-hidden rounded-2xl border border-line shadow-sm transition-shadow hover:shadow-xl"
          >
            <Image
              src={p.image}
              alt={p.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
