"use client";

import { Check, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

interface ProductFeature {
  label: string;
}

interface TechBadge {
  name: string;
}

interface ShowcaseProduct {
  name: string;
  tagline: string;
  description: string;
  techStack: TechBadge[];
  features: ProductFeature[];
}

const PRODUCTS: ShowcaseProduct[] = [
  {
    name: "Cross-Platform Mobile Suite",
    tagline: "Enterprise mobile delivery",
    description:
      "Production-ready React Native applications with shared domain layers, offline sync, and native performance targets.",
    techStack: [
      { name: "React Native" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "SQL" },
    ],
    features: [
      { label: "Modular feature modules with clear ownership" },
      { label: "Offline-first sync with conflict resolution" },
      { label: "Secure token-based API communication" },
      { label: "Instrumented performance budgets (60fps)" },
    ],
  },
  {
    name: "Full-Stack Web Platform",
    tagline: "Clean architecture web apps",
    description:
      "End-to-end platforms built from scratch — typed APIs, resilient data models, and interfaces engineered for scale.",
    techStack: [
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "SQL" },
      { name: "React Native" },
    ],
    features: [
      { label: "Domain-driven service boundaries" },
      { label: "Role-based access & audit trails" },
      { label: "Horizontal-ready API design" },
      { label: "Design-system-aligned UI surfaces" },
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="relative scroll-mt-20 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Delivered Products &amp; Architecture Showcase
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            Cross-platform mobile applications &amp; full-stack web platforms
            built from scratch.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#12131A] transition-shadow duration-300 hover:border-cyan-500/25 hover:shadow-[0_0_40px_rgba(34,211,238,0.07)]"
            >
              <div
                className={`grid items-stretch lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Content */}
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <span className="mb-3 inline-flex w-fit items-center rounded-full border border-zinc-800 bg-[#161822] px-3 py-1 text-xs font-medium text-cyan-400">
                    {product.tagline}
                  </span>

                  <h3 className="text-xl font-semibold text-zinc-50 sm:text-2xl">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                    {product.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.techStack.map((tech) => (
                      <span
                        key={tech.name}
                        className="rounded-md border border-zinc-800 bg-[#161822] px-2.5 py-1 font-mono text-xs text-zinc-300"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-6 space-y-2.5">
                    {product.features.map((feature) => (
                      <li
                        key={feature.label}
                        className="flex items-start gap-2.5 text-sm text-zinc-300"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-cyan-500/10 text-cyan-400">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {feature.label}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mockup preview */}
                <div className="relative flex items-center justify-center border-t border-zinc-800 bg-[#0c0d12] p-6 sm:p-8 lg:border-t-0 lg:border-l lg:border-zinc-800 lg:p-10">
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_65%)]"
                  />

                  <div className="relative w-full max-w-xs">
                    {/* Phone / app mockup frame */}
                    <div className="overflow-hidden rounded-[1.75rem] border border-zinc-700 bg-[#161822] shadow-[0_24px_64px_rgba(0,0,0,0.55)]">
                      <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Smartphone className="h-3.5 w-3.5 text-cyan-400" />
                          <span className="font-mono text-[10px] text-zinc-500">
                            softwaresol.app
                          </span>
                        </div>
                        <div className="flex gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                          <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                          <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                        </div>
                      </div>

                      <div className="space-y-3 p-4">
                        <div className="h-3 w-2/3 rounded bg-zinc-700/80" />
                        <div className="h-20 rounded-xl border border-zinc-800 bg-gradient-to-br from-cyan-500/15 via-violet-500/10 to-transparent" />
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-14 rounded-lg border border-zinc-800 bg-[#12131A]" />
                          <div className="h-14 rounded-lg border border-zinc-800 bg-[#12131A]" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-2.5 w-full rounded bg-zinc-800" />
                          <div className="h-2.5 w-4/5 rounded bg-zinc-800" />
                          <div className="h-2.5 w-3/5 rounded bg-zinc-800" />
                        </div>
                        <div className="flex gap-2 pt-1">
                          <div className="h-8 flex-1 rounded-lg bg-zinc-100/90" />
                          <div className="h-8 flex-1 rounded-lg border border-zinc-700 bg-[#12131A]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
