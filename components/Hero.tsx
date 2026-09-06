import { profile } from "@/lib/data";
import StatusPanel from "./StatusPanel";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="font-mono text-[13px] text-muted">{profile.role}</p>
          <h1 className="mt-5 max-w-xl text-[2.5rem] font-medium leading-[1.08] text-bone sm:text-[3.25rem]">
            I get called in after Dynamics 365 has drifted from what the
            business actually needs.
          </h1>
          <p className="mt-7 max-w-md text-[15px] leading-relaxed text-muted">
            Then I decide what genuinely needs custom C#, and what a
            Power Platform fix can handle without over-building it. Azure
            infrastructure, ASP.NET backends, and — increasingly — applied
            AI wired into the systems I already know how to fix.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="border border-signal px-5 py-3 font-mono text-[13px] text-signal transition-colors hover:bg-signal hover:text-ink"
            >
              Send an email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="border border-hairline px-5 py-3 font-mono text-[13px] text-bone transition-colors hover:border-muted"
            >
              View on LinkedIn
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 lg:pt-2">
          <StatusPanel />
        </div>
      </div>
    </section>
  );
}
