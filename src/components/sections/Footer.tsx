import Link from "next/link";

interface FooterNavLink {
  label: string;
  href: string;
}

const NAV_LINKS: FooterNavLink[] = [
  { label: "What You Get", href: "#what-you-get" },
  { label: "Projects", href: "#projects" },
  { label: "AI Standard", href: "#ai-standard" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const TECH_STACK: string[] = [
  "React",
  "React Native",
  "Node.js",
  "WhatsApp",
  "Next.js",
];

export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-800/80 bg-[#090A0F]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-zinc-400 sm:text-base">
          Software Solutions builds websites and apps that help local businesses
          grow online — restaurants, gyms, PGs, and shops. Simple, mobile-friendly,
          and focused on getting you more enquiries, orders, and bookings.
        </p>

        <div className="mt-12 grid gap-10 border-t border-zinc-800/80 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="group inline-flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/60 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
              </span>
              <span className="text-xs font-semibold tracking-[0.14em] text-zinc-100">
                SOFTWARE SOLUTIONS
              </span>
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-zinc-500">
              softwaresol.in — websites &amp; apps that help local businesses
              grow.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Navigate
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Tech Stack
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-zinc-800 bg-[#12131A] px-2.5 py-1 font-mono text-[11px] text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Connect
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="mailto:contact@softwaresol.in"
                  className="text-sm text-zinc-400 transition-colors hover:text-cyan-400"
                >
                  contact@softwaresol.in
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917015885212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 transition-colors hover:text-cyan-400"
                >
                  WhatsApp · 7015885212
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-zinc-800/80 pt-6 sm:flex-row">
          <p className="text-xs text-zinc-600">
            © 2026 Software Solutions. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">Helping local businesses grow.</p>
        </div>
      </div>
    </footer>
  );
}
