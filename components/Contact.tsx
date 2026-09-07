import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="bg-hero-gradient py-20">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
        <span className="mx-auto block w-fit rounded-full bg-brand-gradient px-6 py-2 text-sm font-bold text-white shadow-md">
          Get In Touch
        </span>
        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
          Let&apos;s talk about your project
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-white/70">
          Working on a Dynamics 365 implementation that&apos;s grown past
          what it was meant to do, or need Azure infrastructure built to
          hold up under audit? I take on engagements through Upwork and
          directly.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-gradient px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-transform hover:scale-105"
          >
            Connect on LinkedIn
          </a>
        </div>

        <p className="mt-6 text-sm text-white/50">{profile.location}</p>
      </div>
    </section>
  );
}
