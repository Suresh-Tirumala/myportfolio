"use client";

import { useEffect, useState } from "react";

export default function SectionNav() {
  const [active, setActive] = useState<string>("hero");

  const SECTIONS = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "stack", label: "Stack" },
    { id: "project1", label: "Project 01" },
    { id: "project2", label: "Project 02" },
    { id: "project3", label: "Project 03" },
    { id: "project4", label: "Project 04" },
    { id: "project5", label: "Project 05" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const ids = [
      "hero",
      "about",
      "stack",
      "project1",
      "project2",
      "project3",
      "project4",
      "project5",
      "contact",
    ];
    const els = ids.map((id) =>
      document.querySelector<HTMLElement>(`[data-kb-section="${id}"]`)
    );
    const obs = new IntersectionObserver(
      (entries) => {
        let best: { id: string; ratio: number } | null = null;
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).dataset.kbSection;
          if (!id) continue;
          const ratio = entry.intersectionRatio;
          if (!best || ratio > best.ratio) best = { id, ratio };
        }
        if (best && best.ratio > 0) setActive(best.id);
      },
      { threshold: [0.25, 0.5, 0.75] }
    );
    for (const el of els) if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const goTo = (id: string) => {
    const target = document.querySelector<HTMLElement>(
      `[data-kb-section="${id}"]`
    );
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Sections"
      className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3 pointer-events-auto"
    >
      {SECTIONS.map((s) => {
        const isActive = active === s.id;
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => goTo(s.id)}
            data-cursor="hover"
            className="group relative flex items-center gap-3"
            aria-label={s.label}
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`text-[10px] uppercase tracking-[0.25em] text-ice-200 transition-all duration-300 ${
                isActive
                  ? "opacity-100 -translate-x-1"
                  : "opacity-0 translate-x-2 group-hover:opacity-80 group-hover:translate-x-0"
              }`}
            >
              {s.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "w-2.5 h-2.5 bg-ice-100 shadow-[0_0_12px_rgba(234,242,251,0.6)]"
                  : "w-1.5 h-1.5 bg-ice-500/60 group-hover:bg-ice-200"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
