"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Practices", href: "#practices" },
  { label: "Products", href: "#products" },
  { label: "AI Standard", href: "#ai-standard" },
  { label: "Reviews", href: "#reviews" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/60 bg-[#090A0F]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/60 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
          </span>
          <span className="text-sm font-semibold tracking-[0.14em] text-zinc-100 transition-colors group-hover:text-white">
            SOFTWARE SOLUTIONS
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="border-glow inline-flex items-center rounded-lg border border-zinc-700 bg-[#12131A] px-4 py-2 text-sm font-medium text-zinc-100 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.15)]"
          >
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md border border-zinc-800 bg-[#12131A] p-2 text-zinc-300 transition-colors hover:text-white md:hidden"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-zinc-800/60 bg-[#090A0F] md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="border-glow flex w-full items-center justify-center rounded-lg border border-zinc-700 bg-[#12131A] px-4 py-2.5 text-sm font-medium text-zinc-100"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
