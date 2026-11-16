"use client";

import {
  ArrowUpRight,
  Dumbbell,
  Home,
  Stethoscope,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCard {
  name: string;
  businessType: string;
  focus: string;
  href: string;
  icon: LucideIcon;
  badge: "Live" | "Concept";
  ctaLabel: string;
}

const PROJECTS: ProjectCard[] = [
  {
    name: "Maximum Healthcare",
    businessType: "Orthopaedic clinic",
    focus:
      "Full clinic website with appointments, services, gallery, reviews, and WhatsApp contact — live for Jammu, Srinagar & Rajouri.",
    href: "https://www.maximumhealthcare.co.in/",
    icon: Stethoscope,
    badge: "Live",
    ctaLabel: "Open live website →",
  },
  {
    name: "Momo Junction",
    businessType: "Restaurant / food business",
    focus: "Menu browsing and WhatsApp ordering for street-style momos.",
    href: "https://momo-junction.netlify.app/",
    icon: Utensils,
    badge: "Concept",
    ctaLabel: "Open live demo →",
  },
  {
    name: "UrbanFit Gym",
    businessType: "Fitness business",
    focus: "Membership plans, training highlights, and enquiry-ready CTAs.",
    href: "https://urbanfit-gym.netlify.app/",
    icon: Dumbbell,
    badge: "Concept",
    ctaLabel: "Open live demo →",
  },
  {
    name: "UrbanBites",
    businessType: "Restaurant",
    focus: "Fine-dining style site with table reservations and contact flow.",
    href: "https://urbanbitesresturant.netlify.app/",
    icon: Utensils,
    badge: "Concept",
    ctaLabel: "Open live demo →",
  },
  {
    name: "UrbanNest Living",
    businessType: "PG / co-living",
    focus: "Room showcases, amenities, and enquiry-focused booking interest.",
    href: "https://urbanstayzz.netlify.app/",
    icon: Home,
    badge: "Concept",
    ctaLabel: "Open live demo →",
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

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-20 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            Live client work and concept demos for local businesses. Click any
            card to open the site.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2"
        >
          {PROJECTS.map((project) => {
            const Icon = project.icon;
            const isLive = project.badge === "Live";

            return (
              <motion.a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className={`group flex h-full flex-col rounded-2xl border bg-[#12131A] p-6 transition-shadow duration-300 sm:p-7 ${
                  isLive
                    ? "border-cyan-500/25 hover:border-cyan-500/45 hover:shadow-[0_0_32px_rgba(34,211,238,0.12)] sm:col-span-2"
                    : "border-zinc-800 hover:border-cyan-500/30 hover:shadow-[0_0_32px_rgba(34,211,238,0.08)]"
                }`}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-[#161822] transition-colors group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${
                      isLive
                        ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                        : "border-zinc-800 bg-[#161822] text-zinc-400"
                    }`}
                  >
                    {project.badge}
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-zinc-100 sm:text-xl">
                  {project.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-cyan-400/90 sm:text-sm">
                  {project.businessType}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.focus}
                </p>
                <p className="mt-5 text-xs font-medium text-zinc-500 transition-colors group-hover:text-cyan-400">
                  {project.ctaLabel}
                </p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
