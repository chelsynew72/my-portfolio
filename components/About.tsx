"use client";

const stats = [
  
  { value: "3+", label: "Years Learning" },
  
  { value: "∞", label: "Curiosity" },
];

export default function About() {
  return (
    <section
      id="about"
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
            04. About
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
          A bit about me
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "start",
        }}
      >
        {/* Left — bio */}
        <div>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-muted)",
              lineHeight: 1.85,
              marginBottom: "1.5rem",
            }}
          >
            I&apos;m <span style={{ color: "var(--text)" }}>Ameah Tem Chelsy</span>, a self-driven
            full-stack developer based in{" "}
            <span style={{ color: "var(--text)" }}>Yaoundé, Cameroon</span>. I build real-world
            web applications using modern JavaScript frameworks and backend technologies.
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-muted)",
              lineHeight: 1.85,
              marginBottom: "1.5rem",
            }}
          >
            My focus is on writing clean, maintainable code and building products that
            actually work. I care deeply about{" "}
            <span style={{ color: "var(--text)" }}>architecture, developer experience</span>, and
            shipping things that users find valuable.
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-muted)",
              lineHeight: 1.85,
            }}
          >
            I&apos;m actively seeking{" "}
            <span style={{ color: "var(--accent)" }}>remote full-stack roles</span> where I
            can contribute to meaningful products and grow with a great team.
          </p>

          {/* Links */}
          <div style={{ display: "flex", gap: "1.25rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
            {[
              { label: "GitHub", href: "https://github.com/chelsynew72" },
              { label: "dev.to", href: "https://dev.to/chelsy" },
              { label: "Email", href: "mailto:chelsynew72@gmail.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
                }
              >
                ↗ {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — stats */}
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  padding: "1.75rem",
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "2.5rem",
                    color: "var(--accent)",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.72rem",
                    color: "var(--text-faint)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Open to work badge */}
          <div
            style={{
              marginTop: "1rem",
              padding: "1rem 1.5rem",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              backgroundColor: "var(--bg-card)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#4ade80",
                boxShadow: "0 0 8px rgba(74,222,128,0.6)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.8rem",
                color: "var(--text-muted)",
              }}
            >
              Open to remote full-time roles
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}