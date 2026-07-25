"use client";
import { useLang } from "@/context/LangContext";

export default function About() {
  const { tr } = useLang();
  const a = tr.about;

  return (
    <section
      id="about"
      className="section-pad"
      style={{ maxWidth: "1100px", margin: "0 auto" }}
    >
      {/* Section header */}
      <div style={{ marginBottom: "4rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            {a.label}
          </span>
          <div style={{ flex: 1, height: "1px", backgroundColor: "var(--border)" }} />
        </div>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text)", letterSpacing: "-0.02em" }}>
          {a.heading}
        </h2>
      </div>

      <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
        {/* Left — bio */}
        <div>
          <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.85, marginBottom: "1.5rem" }}>
            {a.p1}
          </p>
          <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.85, marginBottom: "1.5rem" }}>
            {a.p2}
          </p>
          <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.85 }}>
            {a.p3_prefix}{" "}
            <span style={{ color: "var(--text)" }}>{a.p3_stack}</span>
            {a.p3_mid}{" "}
            <span style={{ color: "var(--text)" }}>{a.p3_langs}</span>
            {a.p3_suffix}{" "}
            <span style={{ color: "var(--accent)" }}>{a.p3_cta}</span>{" "}
            {a.p3_end}
          </p>

          {/* Links */}
          <div style={{ display: "flex", gap: "1.25rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
            {[
              { label: a.github, href: "https://github.com/chelsynew72" },
              { label: a.devto,  href: "https://dev.to/chelsy" },
              { label: a.email,  href: "mailto:chelsynew72@gmail.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", color: "var(--text-muted)", textDecoration: "none", letterSpacing: "0.06em", display: "flex", alignItems: "center", gap: "0.4rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
              >
                ↗ {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — stats + badges */}
        <div>
          {/* Certification */}
          <div style={{ marginBottom: "1.5rem", padding: "1.25rem 1.5rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-card)" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              {a.cert_label}
            </div>
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.35rem", color: "var(--text)", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
              {a.cert_title}
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              {a.cert_desc}
            </p>
            <a
              href="/certificate-vxcbagkhg88x-1777039216.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.55rem", padding: "0.85rem 1.1rem", border: "1px solid var(--accent-dim)", borderRadius: "4px", color: "var(--accent)", textDecoration: "none", fontFamily: "'DM Mono', monospace", fontSize: "0.82rem", letterSpacing: "0.06em", textTransform: "uppercase", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              {a.cert_btn} <span aria-hidden>↗</span>
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {a.stats.map((stat) => (
              <div key={stat.label} style={{ padding: "1.75rem", backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "6px" }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2.5rem", color: "var(--accent)", lineHeight: 1, marginBottom: "0.5rem" }}>
                  {stat.value}
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "var(--text-faint)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Languages badge */}
          <div style={{ marginTop: "1rem", padding: "1rem 1.5rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-card)", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "var(--text-faint)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              {a.lang_label}
            </span>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {a.langs.map((lang) => (
                <span key={lang} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Open to work */}
          <div style={{ marginTop: "1rem", padding: "1rem 1.5rem", border: "1px solid var(--border)", borderRadius: "6px", display: "flex", alignItems: "center", gap: "0.75rem", backgroundColor: "var(--bg-card)" }}>
            <span className="pulse-dot" style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#4ade80", flexShrink: 0 }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", color: "var(--text-muted)" }}>
              {a.open}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
