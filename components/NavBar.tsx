"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="flex items-center gap-2 text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gradient text-xs font-bold text-white">
            {profile.initials}
          </span>
          <span className="text-sm font-semibold">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 md:flex">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                i === 0
                  ? "bg-brand-gradient text-white"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-900/30 transition-transform hover:scale-105 md:block"
        >
          Contact
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-navy px-6 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-white/85 hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="mt-2 rounded-full bg-brand-gradient px-4 py-2 text-center text-sm font-semibold text-white"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
