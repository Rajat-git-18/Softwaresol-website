"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

interface ReviewCard {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

const REVIEWS: ReviewCard[] = [
  {
    name: "Ananya Mehta",
    role: "Founder, E-commerce Startup",
    quote:
      "They shipped our React Native app faster than we expected — and it still holds a smooth 60fps on mid-range devices. Delivery speed without cutting corners.",
    rating: 5,
  },
  {
    name: "Rahul Kapoor",
    role: "CTO / Tech Lead",
    quote:
      "The codebase is genuinely clean. SOLID boundaries, readable modules, and zero tech debt handoff. Rare to find engineers who treat architecture this seriously.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Product Manager",
    quote:
      "Reliable APIs and true cross-platform consistency made our release cycles predictable. Communication was crisp from kickoff through launch.",
    rating: 5,
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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-3.5 w-3.5 ${
            index < rating
              ? "fill-cyan-400 text-cyan-400"
              : "fill-transparent text-zinc-700"
          }`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative scroll-mt-20 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Trusted by Founders &amp; Teams
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            What clients say about our architecture quality, speed, and
            communication.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {REVIEWS.map((review) => (
            <motion.article
              key={review.name}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="group relative flex h-full flex-col rounded-2xl border border-zinc-800 bg-[#12131A] p-6 transition-shadow duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_32px_rgba(34,211,238,0.08)] sm:p-7"
            >
              <Quote className="mb-4 h-8 w-8 text-cyan-500/30 transition-colors group-hover:text-cyan-400/50" />

              <StarRating rating={review.rating} />

              <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
                &ldquo;{review.quote}&rdquo;
              </p>

              <div className="mt-6 border-t border-zinc-800/80 pt-5">
                <p className="font-medium text-zinc-100">{review.name}</p>
                <p className="mt-0.5 text-xs text-zinc-500 sm:text-sm">
                  {review.role}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
