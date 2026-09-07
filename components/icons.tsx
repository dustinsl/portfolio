type IconProps = { className?: string };

export function IconLayers({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 3 2 8l10 5 10-5-10-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m2 13 10 5 10-5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m2 18 10 5 10-5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCloud({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M7 18a4.5 4.5 0 0 1-.6-8.96A5.5 5.5 0 0 1 17.2 8.1 4 4 0 0 1 17 16H7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconDatabase({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse cx="12" cy="5.5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 5.5V12c0 1.66 3.58 3 8 3s8-1.34 8-3V5.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 12v6.5c0 1.66 3.58 3 8 3s8-1.34 8-3V12" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconSparkles({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconArrowUpRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const iconMap: Record<string, (p: IconProps) => JSX.Element> = {
  layers: IconLayers,
  cloud: IconCloud,
  database: IconDatabase,
  sparkles: IconSparkles,
};
