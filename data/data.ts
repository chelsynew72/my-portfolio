export type Project = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  year: string;
  tag: string;
};

export const projects: Project[] = [
  {
    title: "FitPro",
    subtitle: "Fitness Coaching Platform",
    description:
      "Full-stack platform connecting coaches and clients. Real-time WebSocket chat, workout plan builder, nutrition logging with 1M+ food database, progress analytics, and subscription billing.",
    tech: ["Next.js 14", "NestJS", "MongoDB", "Socket.io", "TypeScript", "Firebase Auth", "Recharts"],
    liveUrl: "https://fitness-coaching-platform-frontend.vercel.app",
    githubUrl: "https://github.com/chelsynew72/Fitness-Coaching-Platform",
    featured: true,
    year: "2024",
    tag: "Full-Stack",
  },
  {
    title: "FlashcardApp",
    subtitle: "AI Spaced Repetition System",
    description:
      "AI-powered learning platform using the SM-2 spaced repetition algorithm. Groq LLaMA card generation, community deck sharing, 3D flip animations, and streak tracking.",
    tech: ["Vue 3", "TypeScript", "Laravel 12", "MySQL", "Groq AI", "Pinia"],
    liveUrl: "https://flashcard-app-five-gamma.vercel.app",
    githubUrl: "https://github.com/chelsynew72/flashcard-app",
    featured: true,
    year: "2024",
    tag: "AI · Full-Stack",
  },
  {
    title: "Finance Tracker",
    subtitle: "Personal Finance Dashboard",
    description:
      "Dashboard for tracking income, expenses, and budgets. Category-based expense tracking with visual charts, Supabase Auth, and real-time data updates.",
    tech: ["React", "TypeScript", "Supabase", "Recharts", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/chelsynew72/-Personal-Finance-Tracker-",
    featured: false,
    year: "2024",
    tag: "Full-Stack",
  },
  {
    title: "Form Builder",
    subtitle: "Drag & Drop Form Creator",
    description:
      "Visual form builder with drag-and-drop interface, multiple field types, form preview, and shareable form links.",
    tech: ["TypeScript", "React", "Node.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/chelsynew72/form-builder-client",
    featured: false,
    year: "2024",
    tag: "Frontend",
  },
  {
    title: "E-Commerce Platform",
    subtitle: "Full-Stack Shop",
    description:
      "Full e-commerce solution with product listings, cart management, order tracking, and a separate NestJS backend API.",
    tech: ["JavaScript", "React", "NestJS", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/chelsynew72/e-commerce",
    featured: false,
    year: "2024",
    tag: "Full-Stack",
  },
];

export const skills = {
  Frontend: ["React", "Next.js", "Vue 3", "TypeScript", "Tailwind CSS", "React Native", "Framer Motion"],
  Backend: ["Node.js", "NestJS", "Express", "Laravel", "REST APIs", "WebSockets"],
  Database: ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Firebase"],
  Tools: ["Git", "Docker", "Postman", "GitHub Actions", "Vercel", "Render"],
};