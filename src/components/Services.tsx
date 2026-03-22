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
            fontSize: "clamp(28px, 4vw, 42px)",
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
            maxWidth: 500,
          }}
        >
          {t(content.subtitle, locale)}
        </p>

        {/* Bento grid */}
        <div className="bento-grid">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className={`gradient-border-card reveal reveal-delay-${Math.min(i + 1, 5)}`}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "linear-gradient(135deg, var(--color-accent-dim), rgba(139,92,246,0.06))",
                      border: "1px solid var(--color-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{t(s.title, locale)}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--color-text-secondary)" }}>
                      {t(s.desc, locale)}
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "auto" }}>
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
                        color: "var(--color-text-muted)",
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
