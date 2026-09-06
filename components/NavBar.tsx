import { profile } from "@/lib/data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <header className="border-b border-hairline">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="text-sm tracking-tight text-bone">
          {profile.name}
        </a>
        <nav className="hidden gap-8 font-mono text-[13px] text-muted md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-signal"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="hidden font-mono text-[13px] text-signal transition-opacity hover:opacity-80 sm:block"
        >
          {profile.email}
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-[13px] text-signal transition-opacity hover:opacity-80 sm:hidden"
        >
          Email
        </a>
      </div>
    </header>
  );
}
