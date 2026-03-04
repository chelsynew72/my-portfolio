"use client";
import { useState } from "react";
import { projects } from "../data/data";

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="work"
      style={{
        padding: "8rem 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Section header */}
      <div style={{ marginBottom: "4rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              color: "var(--accent)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            02. Work
          </span>
          <div style={{ flex: 1, height: "1px", backgroundColor: "var(--border)" }} />
        </div>
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "var(--text)",
            letterSpacing: "-0.02em",
          }}
        >
          Selected Projects
        </h2>
      </div>

      {/* Featured projects */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "3rem" }}>
        {featured.map((project, i) => (
          <div
            key={project.title}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              padding: "2.5rem",
              backgroundColor: hovered === i ? "var(--bg-card)" : "transparent",
              border: "1px solid",
              borderColor: hovered === i ? "var(--border)" : "transparent",
              borderRadius: "6px",
              cursor: "default",
              transition: "all 0.25s ease",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Accent line on left */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "3px",
                backgroundColor: "var(--accent)",
                borderRadius: "3px 0 0 3px",
                opacity: hovered === i ? 1 : 0,
                transition: "opacity 0.25s",
              }}
            />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
              <div style={{ flex: 1, minWidth: "280px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.7rem",
                      color: "var(--accent)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "2px 8px",
                      border: "1px solid var(--accent-dim)",
                      borderRadius: "3px",
                    }}
                  >
                    {project.tag}
                  </span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "var(--text-faint)" }}>
                    {project.year}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "1.75rem",
                    color: "var(--text)",
                    letterSpacing: "-0.01em",
                    marginBottom: "0.35rem",
                  }}
                >
                  {project.title}
                  <span style={{ color: "var(--text-muted)", fontStyle: "italic", fontSize: "1.3rem" }}>
                    {" "}— {project.subtitle}
                  </span>
                </h3>

                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.95rem", maxWidth: "560px", marginBottom: "1.5rem" }}>
                  {project.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                        backgroundColor: "var(--bg-subtle)",
                        padding: "3px 10px",
                        borderRadius: "3px",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", paddingTop: "0.25rem" }}>
                {project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--text-muted)", transition: "color 0.2s", display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", fontFamily: "'DM Mono', monospace", textDecoration: "none" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
                  >
                    <GithubIcon /> Code
                  </a>
                )}
                {project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--accent)", transition: "opacity 0.2s", display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", fontFamily: "'DM Mono', monospace", textDecoration: "none" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                  >
                    <ExternalIcon /> Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other projects grid */}
      <div>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", color: "var(--text-faint)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
          Other Projects
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
          {rest.map((project) => (
            <div
              key={project.title}
              style={{
                padding: "1.75rem",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--text-faint)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  {project.tag}
                </span>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  {project.githubUrl !== "#" && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
                    >
                      <GithubIcon />
                    </a>
                  )}
                  {project.liveUrl !== "#" && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
                    >
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.15rem", color: "var(--text)", marginBottom: "0.5rem" }}>{project.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "1.25rem" }}>{project.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: "var(--text-faint)", backgroundColor: "var(--bg-subtle)", padding: "2px 8px", borderRadius: "3px" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}