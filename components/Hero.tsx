import { profile, heroIntro } from "@/lib/data";

const badges = ["C#", ".NET", "Azure", "SQL", "Power Platform", "Python"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-hero-gradient">
      {/* decorative faint code lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 select-none overflow-hidden font-mono text-[13px] leading-8 text-white/[0.06]"
      >
        <div className="whitespace-nowrap pt-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <p key={i}>
              const result = await context.request(&apos;dataverse/api&apos;) ;
              if (result.ok) &#123; deploy(config) &#125; expect(actual).toEqual(true)
            </p>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 lg:px-10 lg:pb-32 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-lg text-white/90 sm:text-xl">
              Hi, I&apos;m Dustin
              <span className="ml-1 inline-block w-[1ch] animate-pulse text-blue-300">
                |
              </span>
            </p>
            <h1 className="mt-3 text-[2.25rem] font-bold leading-[1.15] text-white sm:text-5xl">
              A results-driven{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
              {heroIntro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-transform hover:scale-105"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-brand-gradient p-1 shadow-2xl shadow-blue-950/50 sm:h-64 sm:w-64">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-navyLight">
                <span className="text-6xl font-bold text-white/90">
                  {profile.initials}
                </span>
              </div>
              <span className="absolute -bottom-2 right-4 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink shadow-md">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Open to work
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
