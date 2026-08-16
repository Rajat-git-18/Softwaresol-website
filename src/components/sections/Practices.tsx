"use client";

import {
  Gauge,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

interface BenefitCard {
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
}

const BENEFITS: BenefitCard[] = [
  {
    title: "Fast-Loading Websites",
    description:
      "Pages that open quickly so visitors stay, browse, and contact you — not bounce away.",
    points: [
      "Quick load on phone data",
      "Smooth browsing experience",
      "Fewer abandoned visits",
    ],
    icon: Gauge,
  },
  {
    title: "Mobile-Friendly Design",
    description:
      "Looks clear and easy to use on phones — where most of your customers will find you.",
    points: [
      "Works on all screen sizes",
      "Easy buttons and menus",
      "Built for real phone use",
    ],
    icon: Smartphone,
  },
  {
    title: "WhatsApp Integration",
    description:
      "Let customers message you, place orders, or ask questions in one tap.",
    points: [
      "Order / enquiry buttons",
      "Direct chat with your number",
      "Simple for your customers",
    ],
    icon: MessageCircle,
  },
  {
    title: "Secure & Reliable",
    description:
      "A dependable site that stays online and keeps your business information safe.",
    points: [
      "Secure contact forms",
      "Stable hosting setup",
      "Easy for you to update",
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
    <section id="what-you-get" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            What You Get
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            Practical features that help local businesses get found, get
            enquiries, and grow online.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.article
                key={benefit.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-[#12131A] p-5 transition-shadow duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_32px_rgba(34,211,238,0.08)] sm:p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-[#161822] transition-colors group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>

                <h3 className="text-base font-semibold text-zinc-100 sm:text-lg">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {benefit.description}
                </p>

                <ul className="mt-5 flex flex-1 flex-col gap-2 border-t border-zinc-800/80 pt-4">
                  {benefit.points.map((point) => (
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
