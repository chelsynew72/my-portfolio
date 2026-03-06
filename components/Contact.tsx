"use client";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText("chelsynew72@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <section
        id="contact"
        style={{
          padding: "8rem 2rem 6rem",
          backgroundColor: "var(--bg-subtle)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* Section label */}
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              color: "var(--accent)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1.5rem",
            }}
          >
            05. Contact
          </span>

          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "var(--text)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Let&apos;s work
            <br />
            <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>together.</span>
          </h2>

          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-muted)",
              lineHeight: 1.75,
              marginBottom: "3rem",
              maxWidth: "480px",
              margin: "0 auto 3rem",
            }}
          >
            I&apos;m currently open to remote full-stack roles. If you have an opportunity
            or just want to connect — my inbox is open.
          </p>

          {/* Email CTA */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "4rem",
            }}
          >
            <a
              href="mailto:chelsynew72@gmail.com"
              style={{
                padding: "1rem 2.25rem",
                backgroundColor: "var(--accent)",
                color: "var(--bg)",
                textDecoration: "none",
                borderRadius: "4px",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.82rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              Send me an email
            </a>
            <button
              onClick={copyEmail}
              style={{
                padding: "1rem 2.25rem",
                border: "1px solid var(--border)",
                backgroundColor: "transparent",
                color: copied ? "var(--accent)" : "var(--text-muted)",
                borderColor: copied ? "var(--accent-dim)" : "var(--border)",
                borderRadius: "4px",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.82rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {copied ? "✓ Copied!" : "Copy email"}
            </button>
          </div>

          {/* Social links */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2.5rem",
            }}
          >
            {[
              { label: "GitHub", href: "https://github.com/chelsynew72" },
              { label: "dev.to", href: "https://dev.to/chelsy" },
              { label: "LinkedIn", href: "#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.8rem",
                  color: "var(--text-faint)",
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--text)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--text-faint)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "1.75rem 2rem",
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          backgroundColor: "var(--bg)",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.75rem",
            color: "var(--text-faint)",
          }}
        >
          © 2026 Ameah Tem Chelsy
        </span>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.75rem",
            color: "var(--text-faint)",
          }}
        >
          Built with Next.js · Deployed on Vercel
        </span>
      </footer>
    </>
  );
}