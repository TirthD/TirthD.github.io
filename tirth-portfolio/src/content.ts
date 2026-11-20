// All site copy lives here. Edit text without touching components.
// Section content is filled in as each section is built.

export type SectionId = "now" | "work" | "path" | "contact";

export type NavItem = {
  id: SectionId;
  num: string;
  label: string;
};

export const site = {
  name: "Tirth Dave",
  url: "https://tirth-dave.vercel.app",
  title: "Tirth Dave — AI/ML Engineer",
  description:
    "Tirth Dave started out teaching computers to see, spent two years making data move at scale, and now builds AI agents that read and reason.",
  ogImage: "/og.png",
};

export type LinkButton = {
  label: string;
  href: string;
};

export const hero = {
  /** Rendered with the full stop in accent */
  name: "Tirth Dave",
  line: "I started out teaching computers to see, spent two years making data move at scale, and now build AI agents that read and reason.",
  meta: "AI/ML Engineer at Sensata Technologies · MS in AI at Northeastern · Boston",
  primary: { label: "See my work", href: "#work" } satisfies LinkButton,
  secondary: { label: "Get in touch", href: "#contact" } satisfies LinkButton,
};

export const nav: NavItem[] = [
  { id: "now", num: "01", label: "Now" },
  { id: "work", num: "02", label: "Work" },
  { id: "path", num: "03", label: "Path" },
  { id: "contact", num: "04", label: "Contact" },
];
