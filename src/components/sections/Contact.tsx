"use client";

import { FormEvent, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MessageSquare,
  Send,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

type ProjectType = "Mobile App" | "Web Platform" | "Architecture Audit" | "";
type SubmitStatus = "idle" | "loading" | "success" | "error";

interface ContactFormState {
  fullName: string;
  email: string;
  projectType: ProjectType;
  message: string;
}

interface ContactFormErrors {
  fullName?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

interface Web3FormsResponse {
  success: boolean;
  message?: string;
}

const PROJECT_TYPES: Exclude<ProjectType, "">[] = [
  "Mobile App",
  "Web Platform",
  "Architecture Audit",
];

const INITIAL_FORM: ContactFormState = {
  fullName: "",
  email: "",
  projectType: "",
  message: "",
};

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

function ContactMascot() {
  return (
    <div className="relative mx-auto mb-8 h-44 w-full max-w-xs sm:h-48">
      <div
        aria-hidden
        className="absolute inset-[10%] rounded-full bg-gradient-to-br from-cyan-500/20 via-violet-500/10 to-transparent blur-2xl"
      />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-6 z-10 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-2xl border border-cyan-500/30 bg-[#161822] shadow-[0_0_36px_rgba(34,211,238,0.18)]"
      >
        <div
          aria-hidden
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent"
        />
        <MessageSquare className="relative h-10 w-10 text-cyan-400" />
        <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-lg border border-purple-500/30 bg-[#12131A] text-purple-300 shadow-[0_0_14px_rgba(168,85,247,0.3)]">
          <Sparkles className="h-3.5 w-3.5" />
        </span>
        <span className="absolute -bottom-2 -left-2 flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/30 bg-[#12131A] text-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.3)]">
          <Send className="h-3.5 w-3.5" />
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
        className="absolute bottom-4 left-2 flex items-center gap-1.5 rounded-lg border border-zinc-700/80 bg-[#0c0d12]/90 px-2.5 py-1.5 backdrop-blur-sm sm:left-4"
      >
        <Mail className="h-3 w-3 text-cyan-400" />
        <span className="text-[10px] font-medium text-zinc-300 sm:text-xs">
          Inbox open
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        className="absolute bottom-8 right-2 rounded-lg border border-zinc-700/80 bg-[#0c0d12]/90 px-2.5 py-1.5 text-[10px] font-medium text-zinc-300 backdrop-blur-sm sm:right-4 sm:text-xs"
      >
        Reply &lt; 24h
      </motion.div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function validate(values: ContactFormState): ContactFormErrors {
    const next: ContactFormErrors = {};

    if (!values.fullName.trim()) {
      next.fullName = "Full name is required.";
    }
    if (!values.email.trim()) {
      next.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!values.projectType) {
      next.projectType = "Select a project type.";
    }
    if (!values.message.trim()) {
      next.message = "Tell us a bit about your project.";
    }

    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);
    setStatusMessage("");

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setStatusMessage(
        "Form is not configured yet. Please email contact@softwaresol.in directly.",
      );
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New inquiry — ${form.projectType} from ${form.fullName}`,
          from_name: "Software Solutions Website",
          name: form.fullName,
          email: form.email,
          project_type: form.projectType,
          message: form.message,
        }),
      });

      const result = (await response.json()) as Web3FormsResponse;

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed.");
      }

      setStatus("success");
      setStatusMessage("Message sent successfully!");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
      setStatusMessage(
        "Something went wrong. Please try again or reach us on WhatsApp.",
      );
    }
  }

  function updateField<K extends keyof ContactFormState>(
    key: K,
    value: ContactFormState[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));

    if (status === "success" || status === "error") {
      setStatus("idle");
      setStatusMessage("");
    }
  }

  const isLoading = status === "loading";

  return (
    <section id="contact" className="relative scroll-mt-20 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Let&apos;s Build Something Scalable
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            Have a mobile app concept, web platform, or code audit in mind?
            Reach out directly.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col rounded-2xl border border-zinc-800 bg-[#12131A] p-6 sm:p-8"
          >
            <ContactMascot />

            <h3 className="text-lg font-semibold text-zinc-50">
              Prefer a direct line?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Drop us an email or ping WhatsApp — we respond within one business
              day.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:contact@softwaresol.in"
                className="group flex items-center gap-3 rounded-xl border border-zinc-800 bg-[#161822] px-4 py-3 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.1)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-[#12131A] text-cyan-400 transition-colors group-hover:border-cyan-500/30">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-zinc-500">Email</p>
                  <p className="text-sm font-medium text-zinc-100">
                    contact@softwaresol.in
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/917015885212"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-300 transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-500/15 hover:shadow-[0_0_24px_rgba(16,185,129,0.15)]"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp Quick Connect
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-2xl border border-zinc-800 bg-[#12131A] p-6 sm:p-8"
          >
            {status === "success" && (
              <div
                role="status"
                className="mb-5 flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{statusMessage || "Message sent successfully!"}</span>
              </div>
            )}

            {status === "error" && (
              <div
                role="alert"
                className="mb-5 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
              >
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{statusMessage}</span>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              noValidate
            >
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-1.5 block text-sm font-medium text-zinc-300"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  value={form.fullName}
                  disabled={isLoading}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  className="w-full rounded-xl border border-zinc-800 bg-[#0c0d12] px-4 py-2.5 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 disabled:opacity-60"
                  placeholder="Jane Doe"
                />
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-zinc-300"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  disabled={isLoading}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="w-full rounded-xl border border-zinc-800 bg-[#0c0d12] px-4 py-2.5 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 disabled:opacity-60"
                  placeholder="jane@company.com"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="mb-1.5 block text-sm font-medium text-zinc-300"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={form.projectType}
                  disabled={isLoading}
                  onChange={(e) =>
                    updateField("projectType", e.target.value as ProjectType)
                  }
                  className="w-full appearance-none rounded-xl border border-zinc-800 bg-[#0c0d12] px-4 py-2.5 text-sm text-zinc-100 outline-none transition-colors focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 disabled:opacity-60"
                >
                  <option value="" disabled>
                    Select a project type
                  </option>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="mt-1.5 text-xs text-red-400">
                    {errors.projectType}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-zinc-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  disabled={isLoading}
                  onChange={(e) => updateField("message", e.target.value)}
                  className="w-full resize-y rounded-xl border border-zinc-800 bg-[#0c0d12] px-4 py-2.5 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 disabled:opacity-60"
                  placeholder="Tell us about your product, timeline, and goals..."
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:bg-white hover:shadow-[0_0_28px_rgba(255,255,255,0.16)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
