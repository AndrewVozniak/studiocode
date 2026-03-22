"use client";

import { useApp } from "@/context/AppContext";
import { t } from "@/i18n/translations";
import { useReveal } from "@/hooks/useReveal";

const content = {
  label: { en: "Tech Stack", ua: "Технології" },
  title: { en: "Technologies we use", ua: "Технології, які ми використовуємо" },
  subtitle: {
    en: "Modern, battle-tested tools for reliable results",
    ua: "Сучасні, перевірені інструменти для надійних результатів",
  },
};

const categories = [
  {
    name: { en: "Frontend", ua: "Frontend" },
    color: "#6366F1",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: { en: "Backend", ua: "Backend" },
    color: "#22D3EE",
    techs: ["Python", "FastAPI", "Node.js", "Express", "Django"],
  },
  {
    name: { en: "Database", ua: "Бази даних" },
    color: "#A78BFA",
    techs: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    name: { en: "DevOps & Tools", ua: "DevOps та інструменти" },
    color: "#34D399",
    techs: ["Docker", "Nginx", "GitHub Actions", "Vercel", "Linux"],
  },
];

// All techs for the marquee
const allTechs = [
  "React", "Next.js", "TypeScript", "Python", "FastAPI", "Node.js",
  "PostgreSQL", "Docker", "Nginx", "Redis", "MongoDB", "Tailwind",
  "Django", "Express", "Prisma", "Vercel", "Linux", "GitHub Actions",
];

export default function TechStack() {
  const { locale } = useApp();
  const revealRef = useReveal();

  return (
    <section id="tech" className="section" ref={revealRef} style={{ overflow: "hidden" }}>
      <div className="container-main">
        <span className="section-label reveal">{t(content.label, locale)}</span>
        <h2
          className="reveal reveal-delay-1"
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: 12,
          }}
        >
          {t(content.title, locale)}
        </h2>
        <p
          className="reveal reveal-delay-2"
          style={{
            fontSize: 17,
            color: "var(--color-text-secondary)",
            marginBottom: 56,
            maxWidth: 520,
            lineHeight: 1.7,
          }}
        >
          {t(content.subtitle, locale)}
        </p>
      </div>

      {/* Marquee strip */}
      <div
        className="reveal reveal-delay-2"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "20px 0",
          marginBottom: 56,
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          background: "var(--color-bg-secondary)",
        }}
      >
        <div className="marquee-track">
          {[...allTechs, ...allTechs].map((tech, i) => (
            <span
              key={i}
              className="mono"
              style={{
                fontSize: 13,
                padding: "6px 28px",
                color: "var(--color-text-secondary)",
                whiteSpace: "nowrap",
                transition: "color 0.2s",
                borderRight: "1px solid var(--color-border)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
            >
              {tech}
            </span>
          ))}
        </div>
        {/* Fade edges */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: 80,
            background: "linear-gradient(90deg, var(--color-bg-primary), transparent)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: 80,
            background: "linear-gradient(270deg, var(--color-bg-primary), transparent)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Category cards */}
      <div className="container-main">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}
              style={{
                padding: "28px 28px 24px",
                borderRadius: 16,
                border: "1px solid var(--color-border)",
                background: "var(--color-card)",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = cat.color;
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: cat.color,
                  opacity: 0.7,
                }}
              />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <h3
                  className="mono"
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: cat.color,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {t(cat.name, locale)}
                </h3>
                <span
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: "var(--color-text-muted)",
                    background: "var(--color-bg-secondary)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 6,
                    padding: "2px 8px",
                  }}
                >
                  {cat.techs.length}
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: 13,
                      padding: "6px 14px",
                      borderRadius: 8,
                      background: "var(--color-bg-secondary)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-secondary)",
                      transition: "color 0.2s, border-color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = cat.color;
                      e.currentTarget.style.borderColor = `${cat.color}55`;
                      e.currentTarget.style.background = `${cat.color}10`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--color-text-secondary)";
                      e.currentTarget.style.borderColor = "var(--color-border)";
                      e.currentTarget.style.background = "var(--color-bg-secondary)";
                    }}
                  >
                    {tech}
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
