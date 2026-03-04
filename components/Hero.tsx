"use client";
import { useEffect, useState } from "react";

const roles = ["Full-Stack Developer", "React & Vue Engineer", "NestJS API Builder", "Open to Remote Work"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Subtle ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(212,168,83,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Tag line */}
      <div
        className="animate-fade-up delay-1"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "2rem",
        }}
      >
        <span
          style={{
            width: "32px",
            height: "1px",
            backgroundColor: "var(--accent)",
            display: "inline-block",
          }}
        />
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.78rem",
            color: "var(--accent)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Based in Yaoundé, Cameroon · Available for Remote
        </span>
      </div>

      {/* Name */}
      <h1
        className="animate-fade-up delay-2"
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(3rem, 8vw, 7rem)",
          lineHeight: 1.02,
          color: "var(--text)",
          letterSpacing: "-0.02em",
          marginBottom: "1.5rem",
        }}
      >
        Ameah Tem
        <br />
        <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>Chelsy</span>
      </h1>

      {/* Typewriter role */}
      <div
        className="animate-fade-up delay-3"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
          color: "var(--text-muted)",
          marginBottom: "2.5rem",
          minHeight: "2rem",
        }}
      >
        <span style={{ color: "var(--accent)" }}>› </span>
        {displayed}
        <span className="cursor-blink" style={{ color: "var(--accent)" }}>_</span>
      </div>

      {/* Bio */}
      <p
        className="animate-fade-up delay-4"
        style={{
          fontSize: "1.05rem",
          color: "var(--text-muted)",
          maxWidth: "540px",
          lineHeight: 1.75,
          marginBottom: "3rem",
        }}
      >
        I build full-stack web applications using React, NestJS, and TypeScript.
        Passionate about clean architecture, real-world projects, and continuous learning.
      </p>

      {/* CTAs */}
      <div
        className="animate-fade-up delay-5"
        style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
      >
        <a
          href="#work"
          style={{
            padding: "0.85rem 2rem",
            backgroundColor: "var(--accent)",
            color: "var(--bg)",
            textDecoration: "none",
            borderRadius: "4px",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.82rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontWeight: 500,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
        >
          View My Work
        </a>
        <a
          href="#contact"
          style={{
            padding: "0.85rem 2rem",
            border: "1px solid var(--border)",
            color: "var(--text)",
            textDecoration: "none",
            borderRadius: "4px",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.82rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--text-muted)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
        >
          Get In Touch
        </a>
      </div>

      {/* Scroll hint */}
      <div
        className="animate-fade-in delay-7"
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "48px",
            background: "linear-gradient(to bottom, transparent, var(--text-faint))",
          }}
        />
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.7rem",
            color: "var(--text-faint)",
            letterSpacing: "0.1em",
            writingMode: "vertical-rl",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}