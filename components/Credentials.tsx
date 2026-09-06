import { certifications, education } from "@/lib/data";

export default function Credentials() {
  return (
    <section id="credentials" className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <h2 className="text-lg text-bone">Credentials</h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-9">
            <div>
              <p className="font-mono text-[13px] text-muted">
                Certifications
              </p>
              <ul className="mt-4 space-y-4">
                {certifications.map((cert) => (
                  <li key={cert.code} className="border-l-2 border-signal pl-4">
                    <p className="font-mono text-[13px] text-signal">
                      {cert.code}
                    </p>
                    <p className="mt-1 text-[14px] text-bone">{cert.name}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[13px] text-muted">Education</p>
              <div className="mt-4 border-l-2 border-hairline pl-4">
                <p className="font-mono text-[13px] text-muted">
                  {education.range}
                </p>
                <p className="mt-1 text-[14px] text-bone">
                  {education.degree}
                </p>
                <p className="mt-1 text-[14px] text-muted">
                  {education.school}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
