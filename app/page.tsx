"use client";

import { useState } from "react";
import FrozenKeyboard from "@/components/FrozenKeyboard";
import SmoothScroll from "@/components/smooth-scroll";
import Reveal from "@/components/Reveal";
import SectionNav from "@/components/SectionNav";
import CopyEmail from "@/components/CopyEmail";
import SeasonPicker from "@/components/SeasonPicker";

import ProjectModal, {
  type ProjectDetail,
} from "@/components/ProjectModal";
import AboutSection from "@/components/AboutSection";
import { useIsMobile } from "@/lib/useIsMobile";
import { SKILLS_FLAT, TAGLINES } from "@/lib/skills";

const EMAIL = "tirumalasureshmahimakumar@gmail.com";

type Project = ProjectDetail & {
  align: "left" | "right";
  section: "project1" | "project2" | "project3" | "project4" | "project5";
};

const projects: Project[] = [
  {
    num: "01",
    name: "Code Reviewer",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Express",
      "MySQL",
      "Groq API",
      "Gemini API",
      "Three.js",
      "Python",
    ],
    desc: "AI code review workspace for analyzing, refactoring, and simulating code snippets with focus areas for bugs, security, performance, and cleanliness.",
    details: "Full-stack application built with React 19, TypeScript, and Vite, backed by an Express API connected to MySQL. The workspace detects the code language, supports file uploads, and runs three main flows: structured review, rewrite/refactor, and output simulation. Groq powers review, refactor, chat, and simulation responses, while Gemini supports multimedia features such as speech and visual identity generation. It includes local session history, an assistant panel, severity-based findings, and an iframe preview for HTML, CSS, SVG, and XML.",
    github: "https://github.com/Suresh-Tirumala/code-reviewer",
    url: "https://code-reviewer-azure-eight.vercel.app/",
    media: [
      "/projects/code-reviewer/1.png",
      "/projects/code-reviewer/2.png",
      "/projects/code-reviewer/3.png"
    ],
    highlights: ["react", "typescript", "nodedotjs", "javascript", "python"],
    align: "left",
    section: "project1",
  },
  {
    num: "02",
    name: "MediCore HMS",
    stack: [
      "Java",
      "Spring Boot 3",
      "Spring Security",
      "JWT",
      "React 18",
      "Vite",
      "React Router",
      "Recharts",
      "Groq API",
      "WebSockets",
    ],
    desc: "Complete hospital management system with user roles, interactive dashboards, and an AI medical assistant (Groq).",
    details: "Full-stack application managing hospital workflows: patient registration, doctor profiles and availability, appointment booking, medical records, billing, and payments. The Spring Boot backend implements role-based access control with Spring Security and JWT for Admins, Doctors, Receptionists, and Patients. Features a smart virtual medical assistant using the Groq API to provide educational health advice and rehabilitation guidance.",
    github: "https://github.com/Suresh-Tirumala/hospital-management",
    url: "https://hms-frontend-mbt1.onrender.com",
    media: [
      "/projects/hms/1.png",
      "/projects/hms/2.png",
      "/projects/hms/3.png",
      "/projects/hms/4.png"
    ],
    highlights: ["react", "javascript", "docker", "git"],
    align: "right",
    section: "project2",
  },
  {
    num: "03",
    name: "HealthChat AI",
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Django",
      "Django REST Framework",
      "Python",
      "Groq (Llama 3.1)",
      "JWT",
      "SQLite",
      "Render",
    ],
    desc: "AI-powered health assistant to chat about symptoms, check medical conditions, upload health documents, and manage a personal health profile.",
    details: "Full-stack application with a React 18 + TypeScript + Vite frontend and Django REST Framework backend. Integrates the Llama 3.1 model via Groq for contextual health responses. Features include JWT authentication, structured symptom checker, medical document analysis, emergency detection, searchable conversation history, voice input, and light/dark theme. Deployed on Render with WhiteNoise for static assets.",
    github: "https://github.com/Suresh-Tirumala/infosys-project",
    url: "https://infosys-project-denm.onrender.com",
    media: [
      "/projects/gestor-gastos/landing.png",
      "/projects/gestor-gastos/dashboard.png",
      "/projects/gestor-gastos/chat.png",
      "/projects/gestor-gastos/symptoms.png",
    ],
    highlights: ["react", "typescript", "python", "django"],
    align: "left",
    section: "project3",
  },
  {
    num: "04",
    name: "PronounceAI",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "Whisper",
      "WhisperX",
      "Recharts",
      "Docker",
    ],
    desc: "AI English pronunciation platform that analyzes uploaded or recorded speech, scores fluency and clarity, and gives word-level feedback.",
    details: "Full-stack SaaS for practicing English pronunciation. The Next.js, React, and TypeScript frontend supports browser recording, MP3/WAV/M4A/WEBM uploads, speaking tips, interactive results, charts, transcript review, and downloadable reports. The FastAPI backend processes audio ephemerally, normalizes the file, transcribes with Whisper, aligns words with WhisperX, and calculates pronunciation, fluency, clarity, and confidence scores. It also returns personalized recommendations and practice words so learners know exactly what to improve.",
    github: "https://github.com/Suresh-Tirumala/ai-pronunciation",
    url: "https://ai-pronunciation-wcer.vercel.app",
    media: [
      "/projects/pronounce-ai/1.png",
      "/projects/pronounce-ai/2.png",
      "/projects/pronounce-ai/3.png",
      "/projects/pronounce-ai/4.png",
    ],
    highlights: ["nextdotjs", "react", "typescript", "tailwindcss", "python"],
    align: "right",
    section: "project4",
  },
  {
    num: "05",
    name: "GrowEasy (AI CSV Importer)",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Google Gemini AI",
      "shadcn/ui",
      "Framer Motion",
    ],
    desc: "AI-powered CSV importer for CRM platforms that uses Google Gemini to automatically extract and standardize unstructured spreadsheet records.",
    details: "Production-ready AI CSV importer built for the GrowEasy CRM platform. It allows users to upload any messy, unknown, or random CSV layout without predefined column mappings; the AI parses and extracts key CRM fields (first name, last name, email, phone, company, source) in seconds. The Next.js frontend features drag-and-drop uploads, interactive progress tracking, and full virtualization for massive files. The dedicated Express backend handles the communication with Gemini-2.5-Flash safely, preventing serverless execution timeout limits.",
    github: "https://github.com/Suresh-Tirumala/csv-ai",
    url: "https://csv-ai-azure.vercel.app",
    media: [
      "/projects/csv-ai/1.png",
      "/projects/csv-ai/2.png",
      "/projects/csv-ai/3.png",
    ],
    highlights: ["nextdotjs", "react", "typescript", "tailwindcss", "nodedotjs"],
    align: "left",
    section: "project5",
  },
];

const experiences: Array<{
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  stack: string[];
}> = [
  {
    role: "Tech Lead",
    company: "Activalink",
    period: "2023 — Present",
    location: "Alcoy, Spain",
    summary: "Activalink implements and customises ERPs for SMBs and large companies. I build custom modules and personalisations on top of Odoo, bespoke integrations, and end-to-end implementation projects. I lead a team of 3 developers: our work is measured in time saved and errors avoided.",
    bullets: [
      "Invoice OCR in Odoo — from 4 h/day down to 30 min (-87%).",
      "Interactive logistics map — -60% tracking errors.",
      "Automated reconciliation — monthly close from 3 days to half a day.",
      "Financial dashboards — early detection of uninvoiced orders.",
    ],
    stack: ["Odoo", "Python", "PostgreSQL", "Next.js", "TypeScript", "Docker"],
  },
];

function HeroWord({
  text,
  delay,
  className = "",
}: {
  text: string;
  delay: number;
  className?: string;
}) {
  return (
    <span className={`hero-word ${className}`}>
      <span style={{ animationDelay: `${delay}ms` }}>{text}</span>
    </span>
  );
}

export default function Home() {
  const isMobile = useIsMobile();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <SmoothScroll>
      <div className="relative">
        {/* Desktop: persistent 3D scene fullscreen behind content. On mobile
            the canvas lives inside the hero instead (see below) so it scrolls
            away and the rest of the page is clean, fast 2D. */}
        {!isMobile && (
          <div className="fixed inset-0 z-0">
            <FrozenKeyboard />
          </div>
        )}

        {/* Header */}
        
        {/* Header */}
        <header className="fixed top-0 inset-x-0 z-50 px-6 sm:px-10 md:px-14 py-5 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto">
            <span
              data-cursor="hover"
              className="text-sm font-semibold tracking-tight text-ice-100 whitespace-normal break-words"
            >
              Suresh Tirumala
            </span>
            <span className="hidden md:inline-flex">
              <span className="status-pill">Open to opportunities</span>
            </span>
          </div>
          <div className="flex items-center gap-2 pointer-events-auto">
            <SeasonPicker />
            <span className="hidden md:inline-flex">
            <a
              href="https://github.com/Suresh-Tirumala"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="frost-btn !py-1.5 !px-3 !text-xs"
            >
              <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden>
                <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <span>GitHub</span>
            </a>
            </span>
            
          </div>
        </header>

        <SectionNav />

        <main className="relative z-10 pointer-events-none">
          {/* Hero */}
          <section
            data-kb-section="hero"
            className="relative min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-14"
          >
            {/* Mobile-only 3D centerpiece. Lives inside the hero (scrolls away
                with it) and takes pointer events so keycaps are tappable. */}
            {isMobile && (
              <div className="w-full h-[34vh] mt-12 -mb-4 pointer-events-auto">
                <FrozenKeyboard mobile />
              </div>
            )}
            <div className="mt-2 md:mt-20">
              <p
                className="text-[11px] uppercase tracking-[0.3em] text-ice-300 mb-5 fade-in-up"
                style={{ ["--d" as string]: "0ms" }}
              >
                Hi, I am
              </p>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-bold tracking-[-0.03em] text-ice-50 leading-[0.92] whitespace-normal break-words">
                <HeroWord text="Suresh" delay={120} />
                <br />
                <HeroWord text="Mahima Kumar Tirumala" delay={260} className="text-ice-400" />
              </h1>
              <div
                className="mt-10 flex flex-wrap items-center gap-3 pointer-events-auto fade-in-up"
                style={{ ["--d" as string]: "700ms" }}
              >
                <a
                  href="/cv_en.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-btn frost-btn--primary"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
                    <path d="M14 3v5h5" />
                  </svg>
                  Download CV
                </a>
                <button
                  type="button"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-btn"
                  onClick={() =>
                    document
                      .querySelector<HTMLElement>(
                        '[data-kb-section="contact"]'
                      )
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  Contact me
                </button>
                {/* Mobile-only full-width break: forces the social icons onto
                    their own row below the two primary buttons. Hidden on md+
                    so desktop keeps everything on a single line. */}
                <div className="basis-full h-0 md:hidden" aria-hidden />
                <a
                  href="https://www.linkedin.com/in/suresh-mahima-kumar-tirumala"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-icon"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.59c0-1.57-.03-3.6-2.19-3.6-2.19 0-2.53 1.71-2.53 3.48V22H7.62V8z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Suresh-Tirumala"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-icon"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden>
                    <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Animated scroll indicator at bottom */}
            <div
              className="mt-10 md:mt-auto flex items-center gap-3 fade-in-up"
              style={{ ["--d" as string]: "900ms" }}
            >
              <span className="scroll-indicator">
                <span>Scroll to explore</span>
                <span className="scroll-indicator__rail" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-ice-400 hidden sm:inline">
                · hover over the keys
              </span>
            </div>
          </section>

          <AboutSection />

          {/* Stack — desktop relies on the 200vh scroll + sticky title while
              the keyboard does the talking on hover. On mobile (md:) that
              choreography is gone, so we drop the tall scroll and render a
              real, legible skills grid with the same taglines. */}
          <section
            data-kb-section="stack"
            className="relative md:min-h-[200vh] p-6 sm:p-10 md:p-14"
          >
            <div className="relative md:h-[150vh]">
              <div className="md:sticky md:top-28 text-center">
                <Reveal>
                  <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                    Tech Stack
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <p className="mt-3 text-sm sm:text-base text-ice-400">
                    <span className="hidden md:inline">(hint: hover over a key)</span>
                    <span className="md:hidden">The tools I build with.</span>
                  </p>
                </Reveal>
              </div>

              {/* Mobile skills grid (recovers the hover interaction as static
                  content the keyboard can't surface on touch). */}
              {isMobile && (
                <div className="md:hidden mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 pointer-events-auto">
                  {SKILLS_FLAT.map((s) => (
                    <div
                      key={s.slug}
                      className="flex items-start gap-3 rounded-xl bg-ink-1/70 backdrop-blur-sm border border-ink-3 p-4"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                        fill={`#${s.hex}`}
                        className="flex-none mt-0.5"
                        aria-hidden
                      >
                        <path d={s.path} />
                      </svg>
                      <div>
                        <p className="text-ice-50 font-medium text-sm">
                          {s.title}
                        </p>
                        <p className="text-ice-400 text-xs mt-0.5 leading-snug">
                          {TAGLINES[s.slug as keyof typeof TAGLINES] ?? ""}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Experience — title is sticky at top-24 (feels anchored) but sits
              BEHIND the cards (z-0 vs. card wrapper's z-10), so as you scroll
              the card slides over the title. The section has no extra filler
              beyond the cards, so when you scroll past the last card the
              section ends and the title un-pins and exits the viewport at the
              same time — giving the "anchored then both disappear" feel. */}
          <section
            data-kb-section="experience"
            className="relative p-6 sm:p-10 md:p-14 pb-24"
          >
            <div className="sticky top-24 sm:top-28 text-center mb-12 sm:mb-16 z-0">
              <Reveal>
                <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                  Experience
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-3 text-sm sm:text-base text-ice-300">
                  My professional journey.
                </p>
              </Reveal>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              {experiences.map((exp, idx) => (
                <Reveal
                  key={`${exp.company}-${idx}`}
                  delay={idx * 120}
                  as="article"
                  className="relative rounded-2xl bg-ink-1/75 backdrop-blur-md border border-ink-3 p-6 sm:p-8 md:p-10 pointer-events-auto shadow-[0_8px_40px_-20px_rgba(0,0,0,0.6)]"
                >
                  <header className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-ice-50 tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-ice-400 font-medium mt-1">
                        {exp.company}
                        <span className="text-ice-500/80 font-normal">
                          {" · "}
                          {exp.location}
                        </span>
                      </p>
                    </div>
                    <span className="font-mono text-xs text-ice-100 px-3 py-1 rounded-full border border-ice-700/70 bg-ink-2/60 whitespace-normal break-words">
                      {exp.period}
                    </span>
                  </header>

                  <p className="text-ice-200 leading-relaxed mb-5">
                    {exp.summary}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {exp.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-ice-100 leading-relaxed"
                      >
                        <span className="mt-[0.65em] flex-none w-1.5 h-1.5 rounded-full bg-ice-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        data-cursor="hover"
                        className="frost-chip"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Projects */}
          {projects.map((p) => (
            <section
              key={p.num}
              data-kb-section={p.section}
              data-kb-highlights={(p.highlights ?? []).join(",")}
              className="relative py-20 md:min-h-screen flex items-center p-6 sm:p-10 md:p-14 overflow-hidden"
            >
              <span
                aria-hidden
                className={`watermark hidden md:block top-1/2 -translate-y-1/2 ${
                  p.align === "left" ? "right-[-2vw]" : "left-[-2vw]"
                }`}
              >
                {p.num}
              </span>

              <div
                className={
                  p.align === "left"
                    ? "max-w-xl relative"
                    : "max-w-xl relative md:ml-auto md:text-right md:mr-16 lg:mr-24"
                }
              >
                <Reveal>
                  <p className="font-mono text-sm text-ice-400 mb-3">
                    {p.num} · project
                  </p>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-ice-50 leading-[1.05] mb-4">
                    {p.name}
                  </h2>
                </Reveal>
                {p.badge ? (
                  <Reveal delay={140}>
                    <span className="inline-block text-[10px] uppercase tracking-widest text-ice-300 border border-ice-700 rounded-full px-2 py-0.5 mb-4">
                      {p.badge}
                    </span>
                  </Reveal>
                ) : null}
                <Reveal delay={180}>
                  <p className="text-base sm:text-lg text-ice-200 leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </Reveal>
                <Reveal delay={260}>
                  <div
                    className={
                      p.align === "right"
                        ? "flex flex-wrap gap-1.5 md:justify-end pointer-events-auto mb-5"
                        : "flex flex-wrap gap-1.5 pointer-events-auto mb-5"
                    }
                  >
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        data-cursor="hover"
                        className="frost-chip"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={320}>
                  <div
                    className={
                      p.align === "right"
                        ? "flex md:justify-end pointer-events-auto"
                        : "flex pointer-events-auto"
                    }
                  >
                    <button
                      type="button"
                      onClick={() => setActiveProject(p)}
                      data-cursor="hover"
                      data-magnetic
                      className="frost-btn"
                    >
                      View more
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        aria-hidden
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </Reveal>
              </div>
            </section>
          ))}

          {/* Contact — copy pinned to the left so the (large, hero-posed)
              keyboard on the right has room to bob its random keys. */}
          <section
            data-kb-section="contact"
            className="relative py-24 md:min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-14 overflow-hidden"
          >
            <div className="max-w-xl relative">
              <Reveal>
                <p className="font-mono text-sm text-ice-400 mb-3">
                  contact
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-ice-50 mb-6">
                  Let&apos;s talk?
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-ice-200 mb-10">If what you&apos;ve seen interests you, the keyboard is ready for the first message.</p>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-wrap gap-3 pointer-events-auto">
                  <CopyEmail
                    email={EMAIL}
                    className="frost-btn frost-btn--primary"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                    Copy email
                  </CopyEmail>
                  <a
                    href={`mailto:${EMAIL}`}
                    data-cursor="hover"
                    className="frost-btn"
                  >
                    Open mailto
                  </a>
                  <a
                    href="https://github.com/Suresh-Tirumala"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="frost-btn"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/suresh-mahima-kumar-tirumala"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="frost-btn"
                  >
                    LinkedIn
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={320}>
              <p className="mt-14 text-[11px] uppercase tracking-[0.25em] text-ice-400">
                © 2026 Suresh Mahima Kumar Tirumala. All rights reserved.
              </p>
            </Reveal>
          </section>
        </main>

        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </SmoothScroll>
  );
}
