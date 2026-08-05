"use client";

import {
  Bot,
  BrainCircuit,
  Lock,
  Network,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

interface AiPoint {
  title: string;
  description: string;
  icon: LucideIcon;
}

const AI_SPEED: AiPoint[] = [
  {
    title: "Cursor AI & Copilot",
    description:
      "AI-assisted scaffolding, refactors, and boilerplate reduction across typed codebases.",
    icon: Bot,
  },
  {
    title: "10x Delivery Velocity",
    description:
      "Faster iteration on features without skipping reviews, tests, or architectural gates.",
    icon: Sparkles,
  },
  {
    title: "Pattern Amplification",
    description:
      "Reuse proven SOLID patterns at scale — AI drafts, engineers validate and harden.",
    icon: Workflow,
  },
];

const HUMAN_PRECISION: AiPoint[] = [
  {
    title: "System Design Ownership",
    description:
      "Humans define boundaries, data contracts, and trade-offs AI cannot safely invent.",
    icon: Network,
  },
  {
    title: "Edge-Case Engineering",
    description:
      "Race conditions, offline conflicts, and failure modes require deliberate human reasoning.",
    icon: BrainCircuit,
  },
  {
    title: "Security & Compliance",
    description:
      "Threat modeling, secret handling, and auth flows stay under expert human control.",
    icon: Lock,
  },
];

/** Robot hovering above the AI card, holding it with glowing ropes */
function RobotHoist() {
  return (
    <div className="pointer-events-none relative z-20 mx-auto mb-[-6px] flex w-full max-w-md flex-col items-center">
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 scale-150 rounded-full bg-purple-500/20 blur-2xl"
        />
        <svg
          width="120"
          height="100"
          viewBox="0 0 120 100"
          fill="none"
          aria-hidden
          className="drop-shadow-[0_0_24px_rgba(168,85,247,0.35)]"
        >
          {/* Antenna */}
          <line
            x1="60"
            y1="18"
            x2="60"
            y2="6"
            stroke="#22D3EE"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="60" cy="5" r="3" fill="#22D3EE">
            <animate
              attributeName="opacity"
              values="1;0.35;1"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Head */}
          <rect
            x="36"
            y="18"
            width="48"
            height="36"
            rx="10"
            fill="#1A1B26"
            stroke="#A78BFA"
            strokeWidth="1.75"
          />
          {/* Visor */}
          <rect
            x="42"
            y="28"
            width="36"
            height="14"
            rx="4"
            fill="#0F172A"
            stroke="#22D3EE"
            strokeOpacity="0.55"
          />
          <circle cx="52" cy="35" r="3" fill="#22D3EE" />
          <circle cx="68" cy="35" r="3" fill="#22D3EE" />
          <path
            d="M48 48 H72"
            stroke="#A78BFA"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* Ears / side pods */}
          <rect
            x="28"
            y="28"
            width="8"
            height="14"
            rx="3"
            fill="#161822"
            stroke="#A855F7"
            strokeWidth="1.2"
          />
          <rect
            x="84"
            y="28"
            width="8"
            height="14"
            rx="3"
            fill="#161822"
            stroke="#A855F7"
            strokeWidth="1.2"
          />

          {/* Body */}
          <rect
            x="44"
            y="54"
            width="32"
            height="22"
            rx="6"
            fill="#161822"
            stroke="#3F3F46"
            strokeWidth="1.4"
          />
          <rect
            x="52"
            y="60"
            width="16"
            height="8"
            rx="2"
            fill="#0F172A"
            stroke="#22D3EE"
            strokeOpacity="0.4"
          />

          {/* Arms holding ropes */}
          <path
            d="M44 60 C28 58 22 70 26 82"
            stroke="#A78BFA"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M76 60 C92 58 98 70 94 82"
            stroke="#A78BFA"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Hands / hooks */}
          <circle cx="26" cy="84" r="4" fill="#22D3EE" opacity="0.9" />
          <circle cx="94" cy="84" r="4" fill="#22D3EE" opacity="0.9" />
        </svg>
      </motion.div>

      {/* Twin glowing ropes from hooks down into the card */}
      <div className="relative flex w-[72%] justify-between px-2 sm:w-[68%]">
        <motion.div
          animate={{ opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-[2px] rounded-full bg-gradient-to-b from-cyan-400 via-purple-400/80 to-purple-500/30 shadow-[0_0_10px_rgba(34,211,238,0.55)] sm:h-12"
        />
        <motion.div
          animate={{ opacity: [0.55, 1, 0.55] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
          className="h-10 w-[2px] rounded-full bg-gradient-to-b from-cyan-400 via-purple-400/80 to-purple-500/30 shadow-[0_0_10px_rgba(34,211,238,0.55)] sm:h-12"
        />
      </div>
    </div>
  );
}

/** Human engineer below the card, lifting it from underneath */
function HumanLifter() {
  return (
    <div className="pointer-events-none relative z-20 mx-auto mt-[-8px] flex w-full max-w-md flex-col items-center">
      {/* Arms / lift beams coming up into the card */}
      <div className="relative mb-0 flex w-[70%] justify-between px-4 sm:w-[64%]">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[2px] rounded-full bg-gradient-to-t from-cyan-400 via-cyan-500/70 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.5)] sm:h-10"
        />
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.25,
          }}
          className="h-8 w-[2px] rounded-full bg-gradient-to-t from-cyan-400 via-cyan-500/70 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.5)] sm:h-10"
        />
      </div>

      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 scale-150 rounded-full bg-cyan-500/15 blur-2xl"
        />
        <svg
          width="140"
          height="110"
          viewBox="0 0 140 110"
          fill="none"
          aria-hidden
          className="drop-shadow-[0_0_20px_rgba(34,211,238,0.25)]"
        >
          {/* Raised arms lifting */}
          <path
            d="M48 42 C28 28 22 18 28 10"
            stroke="#3F3F46"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M92 42 C112 28 118 18 112 10"
            stroke="#3F3F46"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Hands under the card */}
          <ellipse cx="28" cy="8" rx="8" ry="4" fill="#22D3EE" opacity="0.85" />
          <ellipse cx="112" cy="8" rx="8" ry="4" fill="#22D3EE" opacity="0.85" />

          {/* Head */}
          <circle
            cx="70"
            cy="48"
            r="14"
            fill="#1A1B26"
            stroke="#3F3F46"
            strokeWidth="1.6"
          />
          <circle cx="64" cy="47" r="1.8" fill="#22D3EE" />
          <circle cx="76" cy="47" r="1.8" fill="#22D3EE" />
          {/* Soft smile */}
          <path
            d="M64 54 Q70 58 76 54"
            stroke="#52525B"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
          />

          {/* Torso */}
          <path
            d="M52 64 C52 78 58 92 70 92 C82 92 88 78 88 64"
            fill="#161822"
            stroke="#3F3F46"
            strokeWidth="1.4"
          />
          {/* Badge on chest */}
          <rect
            x="64"
            y="72"
            width="12"
            height="8"
            rx="2"
            fill="#0F172A"
            stroke="#22D3EE"
            strokeOpacity="0.5"
          />

          {/* Legs stance */}
          <path
            d="M60 92 L52 108"
            stroke="#3F3F46"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M80 92 L88 108"
            stroke="#3F3F46"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}

interface StandardCardProps {
  eyebrow: string;
  title: string;
  accent: "ai" | "human";
  points: AiPoint[];
  delay?: number;
}

function StandardCard({
  eyebrow,
  title,
  accent,
  points,
  delay = 0,
}: StandardCardProps) {
  const isAi = accent === "ai";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className={`relative flex h-full flex-col rounded-2xl border bg-[#12131A] p-6 transition-shadow duration-300 sm:p-8 ${
        isAi
          ? "border-purple-500/25 hover:border-purple-500/45 hover:shadow-[0_0_40px_rgba(168,85,247,0.12)]"
          : "border-cyan-500/25 hover:border-cyan-500/45 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]"
      }`}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br to-transparent ${
          isAi
            ? "from-purple-500/10 via-cyan-500/5"
            : "from-cyan-500/10 via-purple-500/5"
        }`}
      />

      {/* Rope attachment dots on top of AI card */}
      {isAi && (
        <div
          aria-hidden
          className="absolute -top-1.5 left-1/2 flex w-[72%] -translate-x-1/2 justify-between sm:w-[68%]"
        >
          <span className="h-3 w-3 rounded-full border border-cyan-400/60 bg-[#12131A] shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
          <span className="h-3 w-3 rounded-full border border-cyan-400/60 bg-[#12131A] shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
        </div>
      )}

      {/* Lift grip dots on bottom of Human card */}
      {!isAi && (
        <div
          aria-hidden
          className="absolute -bottom-1.5 left-1/2 flex w-[70%] -translate-x-1/2 justify-between px-4 sm:w-[64%]"
        >
          <span className="h-3 w-3 rounded-full border border-cyan-400/60 bg-[#12131A] shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
          <span className="h-3 w-3 rounded-full border border-cyan-400/60 bg-[#12131A] shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
        </div>
      )}

      <div className="relative">
        <div
          className={`mb-4 h-1 w-12 rounded-full bg-gradient-to-r ${
            isAi ? "from-purple-400 to-cyan-400" : "from-cyan-400 to-purple-400"
          }`}
        />
        <span
          className={`mb-4 inline-flex rounded-full border px-3 py-1 text-xs font-medium ${
            isAi
              ? "border-purple-500/30 bg-purple-500/10 text-purple-300"
              : "border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
          }`}
        >
          {eyebrow}
        </span>
        <h3 className="text-xl font-semibold text-zinc-50 sm:text-2xl">{title}</h3>
      </div>

      <ul className="relative mt-6 flex flex-1 flex-col gap-5">
        {points.map((point) => {
          const Icon = point.icon;
          return (
            <li key={point.title} className="flex gap-4">
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                  isAi
                    ? "border-purple-500/20 bg-purple-500/10 text-purple-300"
                    : "border-cyan-500/20 bg-cyan-500/10 text-cyan-300"
                }`}
              >
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <p className="font-medium text-zinc-100">{point.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                  {point.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </motion.article>
  );
}

export default function AiStandard() {
  return (
    <section id="ai-standard" className="relative scroll-mt-20 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            AI Acceleration + Human Engineering Precision
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            Leveraging modern AI dev tools without compromising code
            architecture or security.
          </p>
        </div>

        <div className="relative mt-10 sm:mt-12">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-8">
            {/* AI column — robot picks card from top */}
            <div className="flex flex-col">
              <RobotHoist />
              <StandardCard
                eyebrow="AI Acceleration"
                title="Tools that multiply shipping speed"
                accent="ai"
                points={AI_SPEED}
                delay={0}
              />
            </div>

            {/* Human column — engineer lifts card from bottom */}
            <div className="flex flex-col">
              <StandardCard
                eyebrow="Human Precision"
                title="Judgment AI cannot replace"
                accent="human"
                points={HUMAN_PRECISION}
                delay={0.1}
              />
              <HumanLifter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
