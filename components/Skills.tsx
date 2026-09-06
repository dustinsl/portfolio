import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="capabilities" className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <h2 className="text-lg text-bone">Capabilities</h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-9">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="font-mono text-[13px] text-signal">
                  {group.label}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-hairline pb-2.5 text-[14px] leading-snug text-muted last:border-b-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
