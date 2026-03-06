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
    year: "2026",
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
    year: "2026",
    tag: "AI · Full-Stack",
  },

  
  
 
];

export const skills = {
  Frontend: ["React", "Next.js", "Vue 3", "TypeScript", "Tailwind CSS", "React Native", "Framer Motion"],
  Backend: ["Node.js", "NestJS", "Express", "Laravel", "REST APIs", "WebSockets"],
  Database: ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Firebase"],
  Tools: ["Git", "Docker", "Postman", "GitHub Actions", "Vercel", "Render"],
};