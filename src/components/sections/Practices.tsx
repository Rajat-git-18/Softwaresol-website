"use client";

import {
  Layers,
  Boxes,
  Gauge,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

interface PracticeCard {
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
}

const PRACTICES: PracticeCard[] = [
  {
    title: "SOLID Principles in Action",
    description:
      "Architecture grounded in proven software design principles for long-term maintainability.",
    points: [
      "Single Responsibility",
      "Clean Separation",
      "Decoupled logic",
    ],
    icon: Layers,
  },
  {
    title: "OOPs & Clean Architecture",
    description:
      "Domain-driven structure that keeps UI, business logic, and infrastructure clearly separated.",
    points: [
      "Modular component hierarchies",
      "Reusable UI & domain patterns",
      "Testable boundaries",
    ],
    icon: Boxes,
  },
  {
    title: "60fps Performance",
    description:
      "Smooth, responsive experiences engineered for real-world mobile and web constraints.",
    points: [
      "Memory leak prevention",
      "Optimized React Native state",
      "Render-path profiling",
    ],
    icon: Gauge,
  },
  {
    title: "Robust Security & Offline-First",
    description:
      "Resilient systems that stay secure and usable even when connectivity drops.",
    points: [
      "Secure API communications",
      "Offline data sync",
      "Reliable storage",
    ],
    icon: ShieldCheck,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Practices() {
  return (
    <section id="practices" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Our Engineering Standards &amp; Practices
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            How we write maintainable, enterprise-grade software.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PRACTICES.map((practice) => {
            const Icon = practice.icon;
            return (
              <motion.article
                key={practice.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-[#12131A] p-5 transition-shadow duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_32px_rgba(34,211,238,0.08)] sm:p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-[#161822] transition-colors group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>

                <h3 className="text-base font-semibold text-zinc-100 sm:text-lg">
                  {practice.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {practice.description}
                </p>

                <ul className="mt-5 flex flex-1 flex-col gap-2 border-t border-zinc-800/80 pt-4">
                  {practice.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-zinc-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-cyan-400 to-violet-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
