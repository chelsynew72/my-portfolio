"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";

export default function Navbar() {
  const { lang, setLang, tr } = useLang();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState("");

  const links = [
    { label: tr.nav.work,    href: "#work",    section: "work" },
    { label: tr.nav.skills,  href: "#skills",  section: "skills" },
    { label: tr.nav.about,   href: "#about",   section: "about" },
    { label: tr.nav.contact, href: "#contact", section: "contact" },
    { label: tr.nav.cv,      href: "/Chelsy_CV.pdf", section: "" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["work", "skills", "about", "contact"];
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const linkStyle = (section: string): React.CSSProperties => ({
    color: active === section ? "var(--text)" : "var(--text-muted)",
    textDecoration: "none",
    fontSize: "0.85rem",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    transition: "color 0.2s",
    fontFamily: "'DM Mono', monospace",
    position: "relative",
  });

  const LangToggle = () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid var(--border)",
        borderRadius: "4px",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {(["en", "fr"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          style={{
            padding: "0.3rem 0.65rem",
            background: lang === l ? "var(--accent)" : "transparent",
            color: lang === l ? "var(--bg)" : "var(--text-muted)",
            border: "none",
            cursor: "pointer",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.72rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            transition: "all 0.2s",
            fontWeight: lang === l ? 500 : 400,
          }}
        >
          {l}
        </button>
      ))}
    </div>
  );

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: "0 var(--px, 2rem)",
        height: "var(--nav-h)",
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
          zIndex: 101,
          flexShrink: 0,
        }}
      >
        chelsy<span style={{ color: "var(--accent)" }}>.</span>
      </a>

      {/* Desktop links + toggle */}
      <div className="nav-desktop" style={{ gap: "2rem", alignItems: "center" }}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.section === "" ? "_blank" : undefined}
            rel={link.section === "" ? "noopener noreferrer" : undefined}
            style={linkStyle(link.section)}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                active === link.section ? "var(--text)" : "var(--text-muted)")
            }
          >
            {link.label}
            {active === link.section && link.section !== "" && (
              <span
                style={{
                  position: "absolute",
                  bottom: "-4px", left: 0, right: 0,
                  height: "1px",
                  backgroundColor: "var(--accent)",
                  borderRadius: "1px",
                }}
              />
            )}
          </a>
        ))}
        <LangToggle />
      </div>

      {/* Hamburger + toggle (mobile) */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="hamburger">
        <LangToggle />
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            zIndex: 101,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                backgroundColor: "var(--text-muted)",
                borderRadius: "1px",
                transition: "all 0.25s",
                transform:
                  menuOpen && i === 0 ? "translateY(6.5px) rotate(45deg)"  :
                  menuOpen && i === 2 ? "translateY(-6.5px) rotate(-45deg)" :
                  menuOpen && i === 1 ? "scaleX(0)" : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`nav-mobile${menuOpen ? " open" : ""}`}>
        {links.map((link) => (
          <a
            key={link.href + "-m"}
            href={link.href}
            target={link.section === "" ? "_blank" : undefined}
            rel={link.section === "" ? "noopener noreferrer" : undefined}
            onClick={() => setMenuOpen(false)}
            style={{
              color: active === link.section ? "var(--accent)" : "var(--text-muted)",
              textDecoration: "none",
              fontSize: "1rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
