"use client";
import { skills } from "../data/data";

const categoryIcons: Record<string, string> = {
  Frontend: "◈",
  Backend: "◉",
  Database: "◍",
  Tools: "◎",
};

export default function Skills() { 
  return (
    <section
      id="skills"
      style={{
        padding: "8rem 2rem",
        backgroundColor: "var(--bg-subtle)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
              03. Skills
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
            Technical Stack
          </h2>
        </div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              style={{
                padding: "2rem",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "var(--text-faint)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
              }
            >
              {/* Category header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "1.5rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span style={{ color: "var(--accent)", fontSize: "1rem" }}>
                  {categoryIcons[category]}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.78rem",
                    color: "var(--text)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {category}
                </span>
              </div>

              {/* Skills list */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                {items.map((skill) => (
                  <div
                    key={skill}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                    }}
                  >
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        backgroundColor: "var(--accent)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently learning banner */}
        <div
          style={{
            marginTop: "2rem",
            padding: "1.25rem 1.75rem",
            border: "1px solid var(--accent-dim)",
            borderRadius: "6px",
            backgroundColor: "var(--accent-glow)",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span style={{ color: "var(--accent)", fontSize: "1rem" }}>⟳</span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.82rem",
              color: "var(--accent)",
              letterSpacing: "0.04em",
            }}
          >
            Currently Learning:
          </span>
          <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
            Laravel (PHP) · GraphQL · CI/CD with GitHub Actions
          </span>
        </div>
      </div>
    </section>
  );
}