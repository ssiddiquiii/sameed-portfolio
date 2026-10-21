export const PROFILE = {
  name: "Sameed Siddiqui",
  title: "Backend Engineer, Educator",
  bio: "I build software and teach people how to build software. Passionate about backend engineering, web applications, and building reliable digital products.",
  avatar: "https://avatars.githubusercontent.com/u/99004747?v=4",
  email: "sameedsiddiqui9@gmail.com",
  cv: "/Sameed_Siddiqui_CV.pdf",
  location: "Karachi, Pakistan",
};

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/ssiddiquiii" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ssiddiquii/" },
  { label: "YouTube", href: "https://www.youtube.com/playlist?list=PLXjq8fLUVIsI" },
  { label: "Email", href: "mailto:sameedsiddiqui9@gmail.com" },
];

export const NAV_LINKS = [
  { label: "stack", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "courses", href: "#courses" },
  { label: "contact", href: "#contact" },
];

export const SKILLS = [
  {
    category: "Backend & Systems",
    items: ["FastAPI", "Python", "Node.js", "Express", "REST APIs", "Stateless JWT"],
  },
  {
    category: "Generative AI & LLMs",
    items: [
      "SLM Fine-Tuning (QLoRA/LoRa)",
      "llama.cpp / GGUF (Local Inference)",
      "RAG Systems",
      "Azure AI Services",
      "Vector Embeddings",
      "Function Calling & Agents",
      "Small Language Models (SLMs)",
    ],
  },
  {
    category: "Databases & Storage",
    items: ["MongoDB", "Mongoose", "IndexedDB (Dexie.js)", "PostgreSQL"],
  },
  {
    category: "Frontend & Mobile",
    items: ["React 19", "Next.js", "React Native / Expo", "JavaScript (ES6+)", "Vite"],
  },
  {
    category: "Cloud & Tooling",
    items: ["Docker", "Git / GitHub", "Linux", "Azure AI Certified", "Jest", "Pino Logging"],
  },
];

export const PROJECTS = [
  {
    title: "Car Specialist",
    desc: "An offline automotive diagnostics system. Powered by a modular FastAPI backend, local C++ model inference via llama.cpp, and offline-first state synchronization with MongoDB Atlas.",
    domain: "github.com/ssiddiquiii/car-specialist-gpt",
    href: "https://github.com/ssiddiquiii/car-specialist-gpt",
    tags: ["FastAPI", "Python", "C++", "MongoDB Atlas"],
  },
  {
    title: "FocusFlow",
    desc: "Local-first learning dashboard for distraction-free YouTube study. Features Dexie.js (IndexedDB) client persistence, timestamped note-taking, Zod validation, and offline service worker caching.",
    domain: "focus-flow-puce.vercel.app",
    href: "https://focus-flow-puce.vercel.app",
    github: "https://github.com/ssiddiquiii/FocusFlow",
    tags: ["React 19", "Dexie.js", "IndexedDB", "Zod", "PWA"],
  },
  {
    title: "Fleure Beauty Monorepo",
    desc: "Unified full-stack monorepo combining a customer-facing React Native / Expo mobile application and Next.js 14 admin management portal backed by MongoDB.",
    domain: "zobia-monorepo.vercel.app",
    href: "https://zobia-monorepo.vercel.app",
    github: "https://github.com/ssiddiquiii/fleure-beauty-monorepo",
    tags: ["Next.js 14", "React Native", "Expo", "MongoDB"],
  },
  {
    title: "NoteFlow Management System",
    desc: "Production-ready notes platform engineered with stateless JWT authentication, Bcrypt password hashing, structured Pino logging, global exception handling, and automated unit testing.",
    domain: "noteflow-app-2nqm.onrender.com",
    href: "https://noteflow-app-2nqm.onrender.com/",
    github: "https://github.com/ssiddiquiii/note-management-system",
    tags: ["Node.js", "Express", "MongoDB", "Jest", "Pino"],
  },
];

export const COURSES = [
  {
    status: "Live Series",
    title: "AI-901: Microsoft Azure AI Fundamentals",
    desc: "Hands-on YouTube lecture series covering core machine learning principles, computer vision, NLP, and Azure cloud infrastructure with practical architectural walkthroughs.",
    domain: "youtube.com/playlist",
    href: "https://www.youtube.com/playlist?list=PLXjq8fLUVIsI",
  },
];

export const EXPERIENCE = [
  {
    role: "Generative AI Engineer",
    org: "AI SLM Project",
    type: "Contract",
    period: "2026 — Present",
    desc: "Fine-tuning domain-specific models with QLoRA/4-bit quantization and integrating offline C++ inference engines into FastAPI backend services.",
  },
  {
    role: "Azure AI Fundamentals Trainer",
    org: "Online Training",
    type: "Part-time",
    period: "2026 — Present",
    desc: "Delivering certification-oriented cloud curriculum, live architectural demonstrations, and YouTube educational modules.",
  },
  {
    role: "MERN Stack Developer Intern",
    org: "10Pearls Pakistan",
    type: "Internship",
    period: "2025 — 2026",
    desc: "Built full-stack applications with Node/Express APIs, MongoDB schemas, JWT authentication, and automated test suites.",
  },
  {
    role: "CMS Developer Intern",
    org: "Digital Auxilius",
    type: "Internship",
    period: "2024 — 2025",
    desc: "Engineered responsive frontend interfaces, integrated third-party REST endpoints, and resolved production bugs (promoted from Apprentice).",
  },
  {
    role: "Web Developer",
    org: "ITLytical Ltd (UK)",
    type: "Remote",
    period: "2024",
    desc: "Delivered frontend features and resolved UI issues asynchronously for a distributed engineering team in the UK.",
  },
];

export const EDUCATION = [
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    meta: "Microsoft · Credential ID: A272116E5864EA58",
    href: "https://www.linkedin.com/in/ssiddiquii/",
  },
  {
    title: "Higher National Diploma, Computer Software Engineering",
    meta: "Aptech Pakistan (2020 — 2023) · Grade B+",
    href: null,
  },
  {
    title: "Bachelor of Business Administration (BBA)",
    meta: "Iqra University (2022 — 2027) · CGPA 3.61",
    href: null,
  },
];
