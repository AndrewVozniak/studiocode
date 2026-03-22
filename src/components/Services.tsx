"use client";

import { useApp } from "@/context/AppContext";
import { t } from "@/i18n/translations";
import { Globe, Bot, Palette, Server, Smartphone, BarChart3 } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const content = {
  label: { en: "Services", ua: "Послуги" },
  title: { en: "What we do", ua: "Що ми робимо" },
  subtitle: {
    en: "End-to-end digital solutions tailored to your business goals",
    ua: "Комплексні цифрові рішення під ваші бізнес-цілі",
  },
};

const services = [
  {
    icon: Globe,
    title: { en: "Web Development", ua: "Веб-розробка" },
    desc: {
      en: "Full-stack web applications with React, Next.js, and Node.js. Fast, responsive, and SEO-optimized.",
      ua: "Повноцінні веб-додатки на React, Next.js та Node.js. Швидкі, адаптивні та SEO-оптимізовані.",
    },
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: Bot,
    title: { en: "Bots & Automation", ua: "Боти та автоматизація" },
    desc: {
      en: "Telegram bots, workflow automation, and integrations that save time and reduce manual work.",
      ua: "Telegram-боти, автоматизація процесів та інтеграції, що економлять час і зменшують ручну роботу.",
    },
    tags: ["Python", "Telegram API", "Webhooks"],
  },
  {
    icon: Palette,
    title: { en: "UI/UX Design", ua: "UI/UX Дизайн" },
    desc: {
      en: "Clean, user-centered interfaces designed in Figma. From wireframes to polished prototypes.",
      ua: "Чисті, орієнтовані на користувача інтерфейси в Figma. Від вайрфреймів до готових прототипів.",
    },
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
  {
    icon: Server,
    title: { en: "Backend & API", ua: "Backend та API" },
    desc: {
      en: "Robust backends with Python, FastAPI, and PostgreSQL. RESTful APIs and microservices architecture.",
      ua: "Надійні бекенди на Python, FastAPI та PostgreSQL. RESTful API та мікросервісна архітектура.",
    },
    tags: ["FastAPI", "PostgreSQL", "Docker"],
  },
  {
    icon: Smartphone,
    title: { en: "MVP Development", ua: "Розробка MVP" },
    desc: {
      en: "Rapid prototyping and MVP delivery. Launch fast, validate your idea, iterate based on feedback.",
      ua: "Швидке прототипування та розробка MVP. Запускайте швидко, валідуйте ідею, ітеруйте за фідбеком.",
    },
    tags: ["Lean", "Agile", "Rapid Delivery"],
  },
  {
    icon: BarChart3,
    title: { en: "Consulting", ua: "Консалтинг" },
    desc: {
      en: "Technical audits, architecture planning, and strategic advice for your tech decisions.",
      ua: "Технічні аудити, планування архітектури та стратегічні поради для ваших технічних рішень.",
    },
    tags: ["Architecture", "Code Review", "Strategy"],
  },
];

const nums = ["01", "02", "03", "04", "05", "06"];

export default function Services() {
  const { locale } = useApp();
  const revealRef = useReveal();

  return (
    <section id="services" className="section" ref={revealRef}>
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

        {/* Uniform 3-col grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}
                style={{
                  padding: "32px",
                  borderRadius: 16,
                  border: "1px solid var(--color-border)",
                  background: "var(--color-card)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 16px 48px -12px rgba(99,102,241,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Top accent line on hover via gradient */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: "linear-gradient(90deg, var(--color-accent), #a78bfa)",
                    opacity: 0.5,
                  }}
                />

                {/* Number + Icon row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.08))",
                      border: "1px solid var(--color-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={22} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <span
                    className="mono"
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--color-text-muted)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {nums[i]}
                  </span>
                </div>

                <h3 style={{ fontSize: 18, fontWeight: 650, marginBottom: 10, letterSpacing: "-0.01em" }}>
                  {t(s.title, locale)}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--color-text-secondary)", marginBottom: 24 }}>
                  {t(s.desc, locale)}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="mono"
                      style={{
                        fontSize: 11,
                        padding: "4px 10px",
                        borderRadius: 6,
                        background: "var(--color-bg-secondary)",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-text-secondary)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
