import { profile } from "@/lib/data";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <h2 className="text-lg text-bone">Get in touch</h2>
          </div>
          <div className="lg:col-span-9">
            <p className="max-w-prose text-[15px] leading-relaxed text-muted">
              Working on a Dynamics 365 implementation that's grown past
              what it was meant to do, or need Azure infrastructure built
              to hold up under audit? I take on engagements through Upwork
              and directly.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="border border-signal px-5 py-3 font-mono text-[13px] text-signal transition-colors hover:bg-signal hover:text-ink"
              >
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="border border-hairline px-5 py-3 font-mono text-[13px] text-bone transition-colors hover:border-muted"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-6 font-mono text-[12px] text-muted lg:px-10">
          <span>
            {profile.name} — {profile.location}
          </span>
          <span>&copy; {year}</span>
        </div>
      </div>
    </section>
  );
}
