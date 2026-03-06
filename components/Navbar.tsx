"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 2rem",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: scrolled ? "rgba(12,12,11,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "1.25rem",
          color: "var(--text)",
          textDecoration: "none",
          letterSpacing: "-0.01em",
        }}
      >
        chelsy<span style={{ color: "var(--accent)" }}>.</span>
      </a>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              color: "var(--text-muted)",
              textDecoration: "none",
              fontSize: "0.85rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              transition: "color 0.2s",
              fontFamily: "'DM Mono', monospace",
              fontWeight: 400,
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
          >
            {link.label}
          </a>
        ))}
      </div>
        
    </nav>
  );
}