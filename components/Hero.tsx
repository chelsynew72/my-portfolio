"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/context/LangContext";

export default function Hero() {
  const { tr } = useLang();
  const roles = tr.hero.roles as readonly string[];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Reset typewriter when language changes
  useEffect(() => {
    setRoleIndex(0);
    setDisplayed("");
    setDeleting(false);
  }, [roles]);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex, roles]);

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        maxWidth: "1100px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Ambient glow — contained, won't cause overflow */}
      <div
        style={{
          position: "absolute",
          top: "20%", left: "0",
          width: "40%", height: "500px",
          background: "radial-gradient(circle, rgba(212,168,83,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Tagline */}
      <div className="animate-fade-up delay-1" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem", position: "relative", zIndex: 1 }}>
        <span style={{ width: "32px", height: "1px", backgroundColor: "var(--accent)", display: "inline-block", flexShrink: 0 }} />
        <span
          className="hero-tagline"
          style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase" }}
        >
          {tr.hero.tagline}
        </span>
      </div>

      {/* Name */}
      <h1
        className="animate-fade-up delay-2"
        style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.6rem, 8vw, 7rem)", lineHeight: 1.02, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}
      >
        Ameah Tem
        <br />
        <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>Chelsy</span>
      </h1>

      {/* Typewriter */}
      <div
        className="animate-fade-up delay-3"
        style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(0.9rem, 2.5vw, 1.35rem)", color: "var(--text-muted)", marginBottom: "2.5rem", minHeight: "2rem" }}
      >
        <span style={{ color: "var(--accent)" }}>› </span>
        {displayed}
        <span className="cursor-blink" style={{ color: "var(--accent)" }}>_</span>
      </div>

      {/* Bio */}
      <p
        className="animate-fade-up delay-4"
        style={{ fontSize: "1.05rem", color: "var(--text-muted)", maxWidth: "540px", lineHeight: 1.75, marginBottom: "3rem" }}
      >
        {tr.hero.bio}
      </p>

      {/* CTAs */}
      <div className="animate-fade-up delay-5" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <a
          href="#work"
          style={{
            padding: "0.85rem 2rem",
            background: "linear-gradient(90deg, var(--accent), #e8c06a, var(--accent))",
            backgroundSize: "200% auto",
            color: "var(--bg)",
            textDecoration: "none",
            borderRadius: "4px",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.82rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontWeight: 500,
            animation: "shimmer 3s linear infinite",
          }}
        >
          {tr.hero.cta_work}
        </a>
        <a
          href="#contact"
          style={{ padding: "0.85rem 2rem", border: "1px solid var(--border)", color: "var(--text)", textDecoration: "none", borderRadius: "4px", fontFamily: "'DM Mono', monospace", fontSize: "0.82rem", letterSpacing: "0.06em", textTransform: "uppercase", transition: "border-color 0.2s" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--text-muted)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
        >
          {tr.hero.cta_contact}
        </a>
        <a
          href="/Chelsy_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: "0.85rem 2rem", border: "1px solid var(--border)", color: "var(--text)", textDecoration: "none", borderRadius: "4px", fontFamily: "'DM Mono', monospace", fontSize: "0.82rem", letterSpacing: "0.06em", textTransform: "uppercase", transition: "border-color 0.2s" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--text-muted)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
        >
          {tr.hero.cta_cv}
        </a>
      </div>

      {/* Scroll hint */}
      <div
        className="scroll-hint animate-fade-in delay-7"
        style={{ position: "absolute", bottom: "2.5rem", left: "2rem", display: "flex", alignItems: "center", gap: "0.6rem" }}
      >
        <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, transparent, var(--accent))" }} />
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "var(--text-faint)", letterSpacing: "0.1em", writingMode: "vertical-rl", textTransform: "uppercase" }}>
          {tr.hero.scroll}
        </span>
      </div>
    </section>
  );
}
