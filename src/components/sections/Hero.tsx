"use client";

import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Smartphone,
  Store,
  Utensils,
  Dumbbell,
} from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ConceptBubble {
  label: string;
  icon: LucideIcon;
  className: string;
  delay: number;
  duration: number;
}

const CONCEPT_BUBBLES: ConceptBubble[] = [
  {
    label: "Restaurants",
    icon: Utensils,
    className: "left-0 top-[8%] sm:-left-4",
    delay: 0,
    duration: 4.2,
  },
  {
    label: "Gyms & Studios",
    icon: Dumbbell,
    className: "right-0 top-[2%] sm:-right-2",
    delay: 0.4,
    duration: 3.8,
  },
  {
    label: "Local Shops",
    icon: Store,
    className: "bottom-[18%] left-0 sm:-left-6",
    delay: 0.8,
    duration: 4.5,
  },
  {
    label: "Mobile Ready",
    icon: Smartphone,
    className: "bottom-[8%] right-0 sm:-right-4",
    delay: 1.2,
    duration: 3.6,
  },
];
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function DeveloperVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg">
      {/* Ambient glow behind the visual */}
      <div
        aria-hidden
        className="absolute inset-[15%] rounded-full bg-gradient-to-br from-cyan-500/20 via-violet-500/10 to-transparent blur-3xl"
      />

      {/* Floating concept bubbles */}
      {CONCEPT_BUBBLES.map((bubble) => {
        const Icon = bubble.icon;
        return (
          <motion.div
            key={bubble.label}
            className={`absolute z-20 ${bubble.className}`}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bubble.delay,
            }}
          >
            <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-[#12131A]/95 px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-colors hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.12)]">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 ring-1 ring-zinc-800">
                <Icon className="h-3.5 w-3.5 text-cyan-400" />
              </span>
              <span className="whitespace-nowrap text-xs font-medium text-zinc-200 sm:text-sm">
                {bubble.label}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* Main visual card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="absolute inset-[12%] overflow-hidden rounded-2xl border border-zinc-800 bg-[#161822] shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-zinc-800/80 bg-[#12131A] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="ml-3 font-mono text-[10px] text-zinc-500">
            your-business.web
          </span>
        </div>

        {/* Preview + character area */}
        <div className="relative flex h-[calc(100%-2.5rem)] flex-col justify-between p-4 sm:p-5">
          <pre className="font-mono text-[10px] leading-5 text-zinc-500 sm:text-xs sm:leading-6">
            <code>
              <span className="text-zinc-500">// Built for local businesses</span>
              {"\n"}
              <span className="text-violet-400">const</span>{" "}
              <span className="text-zinc-100">site</span> = {"{"}
              {"\n"}
              {"  "}
              <span className="text-cyan-400">mobile</span>:{" "}
              <span className="text-emerald-400">true</span>,
              {"\n"}
              {"  "}
              <span className="text-cyan-400">whatsapp</span>:{" "}
              <span className="text-emerald-400">true</span>,
              {"\n"}
              {"  "}
              <span className="text-cyan-400">orders</span>:{" "}
              <span className="text-emerald-400">"easy"</span>,
              {"\n"}
              {"}"}
            </code>
          </pre>

          {/* Developer character (SVG) */}
          <div className="pointer-events-none absolute bottom-3 right-3 sm:bottom-4 sm:right-5">
            <svg
              width="120"
              height="140"
              viewBox="0 0 120 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
              className="drop-shadow-[0_0_20px_rgba(34,211,238,0.15)]"
            >
              {/* Desk */}
              <rect x="8" y="118" width="104" height="6" rx="2" fill="#27272A" />
              {/* Laptop */}
              <rect x="28" y="96" width="64" height="22" rx="3" fill="#18181B" stroke="#3F3F46" />
              <rect x="34" y="100" width="52" height="12" rx="1.5" fill="#0F172A" />
              <rect x="38" y="103" width="18" height="2" rx="1" fill="#22D3EE" opacity="0.8" />
              <rect x="38" y="107" width="28" height="2" rx="1" fill="#A78BFA" opacity="0.6" />
              {/* Body */}
              <path
                d="M42 96 C42 78 50 68 60 68 C70 68 78 78 78 96"
                fill="#1E1F2B"
                stroke="#3F3F46"
              />
              {/* Arms */}
              <path d="M42 82 C30 88 28 98 34 102" stroke="#3F3F46" strokeWidth="4" strokeLinecap="round" />
              <path d="M78 82 C90 88 92 98 86 102" stroke="#3F3F46" strokeWidth="4" strokeLinecap="round" />
              {/* Head */}
              <circle cx="60" cy="52" r="16" fill="#1E1F2B" stroke="#3F3F46" strokeWidth="1.5" />
              {/* Headphones */}
              <path
                d="M44 52 C44 40 52 34 60 34 C68 34 76 40 76 52"
                stroke="#22D3EE"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.7"
              />
              <rect x="40" y="48" width="6" height="10" rx="2" fill="#A78BFA" opacity="0.8" />
              <rect x="74" y="48" width="6" height="10" rx="2" fill="#A78BFA" opacity="0.8" />
              {/* Eyes */}
              <circle cx="54" cy="52" r="1.5" fill="#22D3EE" />
              <circle cx="66" cy="52" r="1.5" fill="#22D3EE" />
              {/* Cursor blink */}
              <motion.rect
                x="44"
                y="111"
                width="2"
                height="6"
                rx="0.5"
                fill="#22D3EE"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.1, repeat: Infinity }}
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-glow" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="flex flex-col items-start">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-[#12131A]/80 px-3.5 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-sm sm:text-sm"
          >
            <span aria-hidden>✨</span>
            <span>Websites &amp; apps for local businesses</span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-xl text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
          >
            Websites &amp; Apps That Help Your Business{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Grow Online
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-5 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            Simple, mobile-friendly websites for restaurants, gyms, PGs, and
            local shops — built to get you more enquiries, orders, and bookings.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="https://wa.me/917015885212"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:bg-white hover:shadow-[0_0_28px_rgba(255,255,255,0.18)]"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <Link
              href="#projects"
              className="border-glow inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-[#12131A] px-5 py-2.5 text-sm font-semibold text-zinc-100 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]"
            >
              See Examples
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <DeveloperVisual />
      </div>
    </section>
  );
}
