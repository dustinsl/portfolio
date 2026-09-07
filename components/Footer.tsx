import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 text-xs text-white/50 lg:px-10">
        <span>
          {profile.name} — {profile.location}
        </span>
        <span>&copy; {year} All rights reserved.</span>
      </div>
    </footer>
  );
}
