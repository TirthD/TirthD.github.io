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

// Headings: a trailing "." is rendered as the colored full stop
// (accent on sky/cream, cream on orange). Drop it to remove the stop.

export const now = {
  heading: "AI/ML Engineer at Sensata Technologies.",
  body: "I joined Sensata's Engineering Excellence initiative as a summer intern and stayed on as a part-time engineer. I build RAG and agentic pipelines that pull knowledge out of engineering documents and contracts, and Copilot agents that extract and validate operational terms — then demo them to the teams who will use them.",
  timeline: [
    { when: "Jun — Aug 2026", role: "AI/ML Intern" },
    { when: "Aug 2026 — now", role: "AI/ML Engineer" },
  ],
  stackLabel: "Stack",
  stack: [
    "Azure OpenAI",
    "LangChain",
    "Azure AI Document Intelligence",
    "Azure Functions",
    "Copilot Studio",
    "SQL Server",
  ],
};

export const nav: NavItem[] = [
  { id: "now", num: "01", label: "Now" },
  { id: "work", num: "02", label: "Work" },
  { id: "path", num: "03", label: "Path" },
  { id: "contact", num: "04", label: "Contact" },
];
