import {
  siCss,
  siDocker,
  siGit,
  siHtml5,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siOdoo,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
  siVuedotjs,
} from "simple-icons";

export type SkillIcon = {
  title: string;
  slug: string;
  path: string;
  hex: string;
};

// 3×5 grid — consumed by the 3D keyboard (one icon per keycap) and, on mobile,
// by the flat list below for the static skills grid that replaces the
// hover-driven keyboard interaction. Taglines live in the i18n dictionary
// under `keyboard.taglines.<slug>`.
export const SKILLS_GRID: readonly (readonly SkillIcon[])[] = [
  [siJavascript, siTypescript, siHtml5, siCss, siTailwindcss],
  [siPython, siReact, siNextdotjs, siVuedotjs, siNodedotjs],
  [siPhp, siOdoo, siPostgresql, siDocker, siGit],
] as const;

export const SKILLS_FLAT: readonly SkillIcon[] = SKILLS_GRID.flat();

export const TAGLINES: Record<string, string> = {
  javascript: "Where it all started. Still here, still in charge.",
  typescript: "Same JS, with a seatbelt.",
  html5: "The bones of any page.",
  css: "What separates good from beautiful.",
  tailwindcss: "Utility-first. Design inside the HTML.",
  python: "Reads like English, scales like a rocket.",
  react: "Components, components, components.",
  nextdotjs: "React all grown up: routing, SSR, edge.",
  vuedotjs: "The most relaxed frontend.",
  nodedotjs: "JavaScript on the server.",
  php: "Runs more of the web than you think.",
  odoo: "ERP that doesn't make you cry.",
  postgresql: "The boring database that always works.",
  docker: "Same on my machine, same in production.",
  git: "History and a time machine for your code.",
};
