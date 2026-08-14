"use client";

import {
  Briefcase,
  Code2,
  Landmark,
  Target,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

interface WhyPoint {
  title: string;
  description: string;
  icon: LucideIcon;
}

const WHY_POINTS: WhyPoint[] = [
  {
    title: "3+ Years of Hands-On Experience",
    description: "Building production-grade mobile and web applications.",
    icon: Briefcase,
  },
  {
    title: "Currently Building a Live Fintech App",
    description:
      "Real-world experience with secure payments, APIs, and scalable systems.",
    icon: Landmark,
  },
  {
    title: "Full-Stack Expertise",
    description:
      "React Native, React, Node.js, AWS — we handle frontend to backend.",
    icon: Code2,
  },
  {
    title: "Business-First Approach",
    description:
      "We focus on what actually gets you more customers, not just good-looking code.",
    icon: Target,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
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

export default function WhyUs() {
  return (
    <section id="why-us" className="relative scroll-mt-20 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Why Work With Us
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            Honest experience, practical skills, and a focus on growing your
            business online.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {WHY_POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <motion.article
                key={point.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="group relative flex h-full flex-col rounded-2xl border border-zinc-800 bg-[#12131A] p-6 transition-shadow duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_32px_rgba(34,211,238,0.08)] sm:p-7"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-[#161822] transition-colors group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>

                <h3 className="text-base font-semibold text-zinc-100 sm:text-lg">
                  {point.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {point.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
