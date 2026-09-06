import { summary } from "@/lib/data";

export default function Summary() {
  return (
    <section className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <h2 className="text-lg text-bone">Approach</h2>
          </div>
          <p className="max-w-prose text-[15px] leading-[1.75] text-muted lg:col-span-8">
            {summary}
          </p>
        </div>
      </div>
    </section>
  );
}
