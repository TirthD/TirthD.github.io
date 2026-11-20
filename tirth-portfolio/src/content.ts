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

// Colored full stops are reserved for the two bookends: the hero name and
// "Say hello." in Contact. Other headings render as plain text.

export const now = {
  heading: "AI/ML Engineer at Sensata Technologies",
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

export type Stat = {
  value: string;
  label: string;
};

export type Project = {
  kind: string;
  title: string;
  body: string;
  stats: Stat[];
  stack: string[];
  /** Shown in the panel until `image` is set */
  placeholder: string;
  /** Path under public/, e.g. "/work/clinical-trials.png". Replaces the placeholder. */
  image?: { src: string; alt: string };
  github?: string;
  demo?: string;
};

export const work: { heading: string; projects: Project[] } = {
  heading: "Three things I've built, and what they proved.",
  projects: [
    {
      kind: "LLM agent",
      title: "Clinical Trial Finder",
      body: "A patient-facing agent on Llama 3.3 70B that turns plain-language questions into ranked, eligibility-filtered trials from ClinicalTrials.gov, with a function-calling loop, a medical synonym mapper, and two tiers of safety guardrails tested against adversarial prompts.",
      stats: [
        { value: "100%", label: "Relevant retrieval" },
        { value: "100%", label: "Trials cited by ID" },
        { value: "0%", label: "Medical advice given" },
      ],
      stack: ["Llama 3.3 70B", "Groq", "function calling", "Python"],
      placeholder: "Screenshot: the agent answering a patient question",
    },
    {
      kind: "Deep learning, audio",
      title: "Hearing depression in a voice",
      body: "A hybrid model pairing a pretrained CNN with a Transformer to detect depression and estimate its severity from raw speech, trained on the E-DAIC clinical corpus.",
      stats: [
        { value: "CNN + Transformer", label: "Hybrid architecture" },
        { value: "E-DAIC", label: "Clinical speech corpus" },
      ],
      stack: ["PyTorch", "audio processing"],
      placeholder: "Image: spectrogram of a speech sample",
    },
    {
      kind: "Classical ML",
      title: "Who defaults, and why",
      body: "Ten classifiers compared on 30,000 credit-card customers, with engineered behavioural features, SMOTE versus threshold tuning, and K-Means risk segments. One engineered feature, maximum payment delay, carried almost half the model.",
      stats: [
        { value: "0.782", label: "AUC-ROC, XGBoost" },
        { value: "0.547", label: "F1 score" },
        { value: "49%", label: "Importance from one feature" },
      ],
      stack: ["XGBoost", "scikit-learn", "SMOTE", "K-Means"],
      placeholder: "Chart: risk segments or feature importance",
    },
  ],
};

export type TextLink = {
  label: string;
  href: string;
  /** Opens in a new tab with rel="noopener noreferrer" */
  external?: boolean;
};

export type PathRow = {
  year: string;
  place: string;
  role: string;
  note: string;
  /** Optional link shown right after the note */
  link?: TextLink;
};

const ieeeDoi = "https://doi.org/10.1109/CSCITA55725.2023.10104985";
const resumeHref = "/Tirth_Dave_Resume.pdf";

export const path: {
  heading: string;
  subline: string;
  rows: PathRow[];
  links: TextLink[];
} = {
  heading: "From seeing, to scale, to reasoning.",
  subline: "How I got here, in order.",
  // Oldest first
  rows: [
    {
      year: "2022",
      place: "K.J. Somaiya College of Engineering",
      role: "Research Intern",
      note: "Compared YOLO, Faster R-CNN and CornerNet for finding cancerous lesions in dental X-rays. My start in computer vision.",
    },
    {
      year: "2023",
      place: "IEEE CSCITA",
      role: "Published paper",
      note: "Deep-learning recognition of Marathi sentences from Devanagari characters.",
      link: { label: "Read the paper ↗", href: ieeeDoi, external: true },
    },
    {
      year: "2024",
      place: "Somaiya University",
      role: "B.Tech, Electronics & Telecom",
      note: "Minor in Computer Engineering. Won J.P. Morgan's Code for Good hackathon along the way.",
    },
    {
      year: "2024–25",
      place: "LTIMindtree",
      role: "Data Engineer, Snowflake",
      note: "Built the company's FinOps framework for Snowflake across storage, compute and warehouses, with monitoring delivered through Streamlit.",
    },
    {
      year: "2025",
      place: "Northeastern University",
      role: "MS in Artificial Intelligence",
      note: "Khoury College of Computer Sciences. 4.0 GPA so far.",
    },
    {
      year: "2026",
      place: "Northeastern University",
      role: "Teaching Assistant, CS 5100",
      note: "Office hours, grading and walkthrough videos for Foundations of AI.",
    },
    {
      year: "2026",
      place: "Sensata Technologies",
      role: "AI/ML Intern, then Engineer",
      note: "Where the vision, data and AI threads come together.",
      link: { label: "See what I'm doing now ↑", href: "#now" },
    },
  ],
  links: [{ label: "Download the full résumé (PDF)", href: resumeHref }],
};

export type ContactButton = TextLink & { variant: "solid" | "outline" };

export const contact: {
  /** Bookend heading: the trailing "." renders in cream */
  heading: string;
  line: string;
  email: string;
  buttons: ContactButton[];
  footer: { left: string; right: string };
} = {
  heading: "Say hello.",
  line: "I'm open to AI/ML engineering roles and always happy to talk about agents, RAG, or data that won't behave.",
  email: "Dave.tir@northeastern.edu",
  buttons: [
    {
      label: "LinkedIn ↗",
      href: "https://www.linkedin.com/in/tirth-dave-43954121a/",
      variant: "outline",
      external: true,
    },
    {
      label: "GitHub ↗",
      href: "https://github.com/TirthD",
      variant: "outline",
      external: true,
    },
    { label: "Résumé (PDF)", href: resumeHref, variant: "solid" },
  ],
  footer: {
    left: "Designed and built by Tirth Dave",
    right: "Boston, 2026",
  },
};

export const nav: NavItem[] = [
  { id: "now", num: "01", label: "Now" },
  { id: "work", num: "02", label: "Work" },
  { id: "path", num: "03", label: "Path" },
  { id: "contact", num: "04", label: "Contact" },
];
