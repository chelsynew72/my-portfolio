"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "fr";

export type Translations = {
  nav: { work: string; skills: string; about: string; contact: string; cv: string };
  hero: { tagline: string; bio: string; cta_work: string; cta_contact: string; cta_cv: string; scroll: string; roles: string[] };
  projects: { label: string; heading: string; other: string; code: string; live: string };
  skills: { label: string; heading: string; learning_label: string; learning_items: string };
  about: {
    label: string; heading: string;
    p1: string; p1_name: string; p1_location: string; p1_school: string;
    p2: string; p2_highlight: string;
    p3_prefix: string; p3_stack: string; p3_mid: string; p3_langs: string;
    p3_suffix: string; p3_cta: string; p3_end: string;
    cert_label: string; cert_title: string; cert_desc: string; cert_btn: string;
    stats: { value: string; label: string }[];
    lang_label: string; langs: string[]; open: string;
    github: string; devto: string; email: string;
  };
  contact: { label: string; heading_1: string; heading_2: string; body: string; send: string; copy: string; copied: string };
  footer: { copy: string; built: string };
};

const t: Record<Lang, Translations> = {
  en: {
    // Navbar
    nav: { work: "Work", skills: "Skills", about: "About", contact: "Contact", cv: "CV" },

    // Hero
    hero: {
      tagline: "Based in Yaoundé, Cameroon · Available for Remote",
      bio: "I build full-stack web applications using React, NestJS, and TypeScript. Passionate about clean architecture, real-world projects, and continuous learning.",
      cta_work: "View My Work",
      cta_contact: "Get In Touch",
      cta_cv: "View CV",
      scroll: "Scroll",
      roles: ["Full-Stack Developer", "React & Vue Engineer", "NestJS API Builder", "Open to Remote Work"],
    },

    // Projects
    projects: {
      label: "02. Work",
      heading: "Selected Projects",
      other: "Other Projects",
      code: "Code",
      live: "Live",
    },

    // Skills
    skills: {
      label: "03. Skills",
      heading: "Technical Stack",
      learning_label: "Currently Learning:",
      learning_items: "Laravel (PHP) · GraphQL · CI/CD with GitHub Actions",
    },

    // About
    about: {
      label: "04. About",
      heading: "A bit about me",
      p1: "I'm Ameah Tem Chelsy, a self-driven full-stack developer based in Yaoundé, Cameroon. Trained at Rebase Code Camp, an international-standard coding institution, where I spent two years building real-world applications across the full stack.",
      p1_name: "Ameah Tem Chelsy",
      p1_location: "Yaoundé, Cameroon",
      p1_school: "Rebase Code Camp",
      p2: "My focus is on writing clean, maintainable code and building products that actually work. I care deeply about architecture, system design, and shipping things that users find genuinely valuable — from real-time platforms to AI-powered learning tools.",
      p2_highlight: "architecture, system design",
      p3_prefix: "I work across the full stack with",
      p3_stack: "React, Next.js, NestJS, Vue 3, Flutter, and TypeScript",
      p3_mid: ", and I'm fluent in both",
      p3_langs: "English and French",
      p3_suffix: ". I'm actively seeking",
      p3_cta: "remote full-stack roles",
      p3_end: "where I can contribute to meaningful products and grow with a great team.",
      cert_label: "Certification",
      cert_title: "Claude-code",
      cert_desc: "Verified completion proof (PDF).",
      cert_btn: "View certification",
      stats: [
        { value: "4+", label: "Projects Shipped" },
        { value: "10+", label: "Technologies" },
        { value: "2yrs", label: "Training" },
        { value: "∞", label: "Curiosity" },
      ],
      lang_label: "Languages",
      langs: ["English — Fluent", "French — Fluent"],
      open: "Open to remote full-time roles",
      github: "GitHub",
      devto: "dev.to",
      email: "Email",
    },

    // Contact
    contact: {
      label: "05. Contact",
      heading_1: "Let's work",
      heading_2: "together.",
      body: "I'm currently open to remote full-stack roles. If you have an opportunity or just want to connect — my inbox is open.",
      send: "Send me an email",
      copy: "Copy email",
      copied: "✓ Copied!",
    },

    // Footer
    footer: {
      copy: "© 2025 Ameah Tem Chelsy",
      built: "Built with Next.js · Deployed on Vercel",
    },
  },

  fr: {
    nav: { work: "Projets", skills: "Compétences", about: "À propos", contact: "Contact", cv: "CV" },

    hero: {
      tagline: "Basé à Yaoundé, Cameroun · Disponible à distance",
      bio: "Je développe des applications web full-stack avec React, NestJS et TypeScript. Passionné par l'architecture propre, les projets concrets et l'apprentissage continu.",
      cta_work: "Voir mes projets",
      cta_contact: "Me contacter",
      cta_cv: "Voir le CV",
      scroll: "Défiler",
      roles: ["Développeur Full-Stack", "Ingénieur React & Vue", "Créateur d'API NestJS", "Disponible à distance"],
    },

    projects: {
      label: "02. Projets",
      heading: "Projets sélectionnés",
      other: "Autres projets",
      code: "Code",
      live: "Démo",
    },

    skills: {
      label: "03. Compétences",
      heading: "Stack technique",
      learning_label: "En cours d'apprentissage :",
      learning_items: "Laravel (PHP) · GraphQL · CI/CD avec GitHub Actions",
    },

    about: {
      label: "04. À propos",
      heading: "Un peu sur moi",
      p1: "Je suis Ameah Tem Chelsy, développeur full-stack autodidacte basé à Yaoundé, au Cameroun. Formé au Rebase Code Camp, une institution de formation aux standards internationaux, où j'ai passé deux ans à construire des applications réelles sur toute la pile.",
      p1_name: "Ameah Tem Chelsy",
      p1_location: "Yaoundé, Cameroun",
      p1_school: "Rebase Code Camp",
      p2: "Mon objectif est d'écrire du code propre et maintenable, et de créer des produits qui fonctionnent vraiment. Je me soucie profondément de l'architecture, de la conception des systèmes, et de livrer des choses que les utilisateurs trouvent vraiment utiles.",
      p2_highlight: "l'architecture, la conception des systèmes",
      p3_prefix: "Je travaille sur toute la pile avec",
      p3_stack: "React, Next.js, NestJS, Vue 3, Flutter et TypeScript",
      p3_mid: ", et je maîtrise",
      p3_langs: "l'anglais et le français",
      p3_suffix: ". Je recherche activement des",
      p3_cta: "postes full-stack à distance",
      p3_end: "où je peux contribuer à des produits significatifs et évoluer avec une excellente équipe.",
      cert_label: "Certification",
      cert_title: "Claude-code",
      cert_desc: "Preuve de complétion vérifiée (PDF).",
      cert_btn: "Voir la certification",
      stats: [
        { value: "4+", label: "Projets livrés" },
        { value: "10+", label: "Technologies" },
        { value: "2ans", label: "Formation" },
        { value: "∞", label: "Curiosité" },
      ],
      lang_label: "Langues",
      langs: ["Anglais — Courant", "Français — Courant"],
      open: "Disponible pour des postes à temps plein à distance",
      github: "GitHub",
      devto: "dev.to",
      email: "E-mail",
    },

    contact: {
      label: "05. Contact",
      heading_1: "Travaillons",
      heading_2: "ensemble.",
      body: "Je suis actuellement disponible pour des postes full-stack à distance. Si vous avez une opportunité ou souhaitez simplement échanger — ma boîte mail est ouverte.",
      send: "M'envoyer un e-mail",
      copy: "Copier l'e-mail",
      copied: "✓ Copié !",
    },

    footer: {
      copy: "© 2025 Ameah Tem Chelsy",
      built: "Construit avec Next.js · Déployé sur Vercel",
    },
  },
} satisfies Record<Lang, Translations>;

type LangContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: Translations;
};

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  tr: t.en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LangContext.Provider value={{ lang, setLang, tr: t[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
