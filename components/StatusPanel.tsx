"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

function useCountUp(target: number, durationMs = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setValue(target);
      return;
    }

    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);

  return value;
}

const rows = [
  { label: "location", value: profile.location },
  { label: "focus", value: "Dynamics 365 / Azure / Applied AI" },
  { label: "engagement", value: "Open — Upwork" },
];

export default function StatusPanel() {
  const years = useCountUp(10);

  return (
    <div className="border border-hairline bg-panel p-6 font-mono text-[13px]">
      <div className="flex items-center justify-between border-b border-hairline pb-4">
        <span className="text-muted">status</span>
        <span className="flex items-center gap-2 text-signal">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          available
        </span>
      </div>

      <div className="flex items-baseline gap-2 py-6">
        <span className="text-5xl leading-none text-bone">{years}+</span>
        <span className="pb-1 text-muted">years, Dynamics / Azure / Power Platform</span>
      </div>

      <dl className="space-y-3 border-t border-hairline pt-4">
        {rows.map((row) => (
          <div key={row.label} className="flex items-baseline justify-between gap-4">
            <dt className="text-muted">{row.label}</dt>
            <dd className="text-right text-bone">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
