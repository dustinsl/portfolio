import Image from "next/image";
import { aboutBlocks, services } from "@/lib/data";
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

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white shadow-xl shadow-blue-900/10 sm:p-10">
          <h3 className="text-2xl font-bold">Building Digital Excellence</h3>

          <div className="mt-4 space-y-4">
            {aboutBlocks.map((block) => (
              <div key={block.image}>
                <p className="text-[15px] leading-relaxed text-blue-50/90">
                  {block.text}
                </p>
                <div className="relative mt-3 h-[220px] w-full overflow-hidden rounded-xl border border-white/15">
                  <Image
                    src={block.image}
                    alt="Dustin's work in practice"
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-line bg-white p-8 shadow-sm sm:p-10">
          <h3 className="text-lg font-bold text-ink">What I Do</h3>
          <div className="mt-5 space-y-5">
            {services.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <div key={s.title}>
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-white">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <p className="text-[15px] font-semibold text-ink">
                      {s.title}
                    </p>
                  </div>
                  <p className="mt-1.5 text-[13px] leading-snug text-muted">
                    {s.description}
                  </p>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {s.images.map((src) => (
                      <div
                        key={src}
                        className="relative aspect-square overflow-hidden rounded-lg border border-line"
                      >
                        <Image
                          src={src}
                          alt={s.title}
                          fill
                          sizes="120px"
                          className="object-cover"
                        />
                      </div>
                    ))}
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
