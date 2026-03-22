"use client";

import { useApp } from "@/context/AppContext";
import { t } from "@/i18n/translations";
import { useReveal } from "@/hooks/useReveal";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const content = {
  label: { en: "Process", ua: "Процес" },
  title: { en: "How we work", ua: "Як ми працюємо" },
  subtitle: {
    en: "A structured approach from first call to final delivery",
    ua: "Структурований підхід від першого дзвінка до фінальної здачі",
  },
};

const steps = [
  {
    icon: Search,
    num: "01",
    title: { en: "Discovery", ua: "Знайомство" },
    desc: {
      en: "We learn about your business, goals, and target audience. Together we define the scope, timeline, and key requirements.",
      ua: "Ми дізнаємось про ваш бізнес, цілі та цільову аудиторію. Разом визначаємо обсяг, терміни та ключові вимоги.",
    },
  },
  {
    icon: PenTool,
    num: "02",
    title: { en: "Design & Planning", ua: "Дизайн і планування" },
    desc: {
      en: "Wireframes, UI mockups, and technical architecture. You approve every visual and structural decision before development starts.",
      ua: "Вайрфрейми, UI-макети та технічна архітектура. Ви затверджуєте кожне рішення до початку розробки.",
    },
  },
  {
    icon: Code2,
    num: "03",
    title: { en: "Development", ua: "Розробка" },
    desc: {
      en: "Sprint-based development with regular demos. Clean code, automated testing, and transparent progress tracking.",
      ua: "Спринтова розробка з регулярними демо. Чистий код, автоматичне тестування та прозорий трекінг прогресу.",
    },
  },
  {
    icon: Rocket,
    num: "04",
    title: { en: "Launch & Support", ua: "Запуск та підтримка" },
    desc: {
      en: "Deployment, performance optimization, and knowledge transfer. We provide post-launch support and maintenance.",
      ua: "Деплоймент, оптимізація швидкодії та передача знань. Ми забезпечуємо підтримку та обслуговування після запуску.",
    },
  },
];

export default function Process() {
  const { locale } = useApp();
  const revealRef = useReveal();

  return (
    <section
      id="process"
      className="section"
      ref={revealRef}
      style={{ background: "var(--color-bg-secondary)" }}
    >
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
            marginBottom: 64,
            maxWidth: 520,
            lineHeight: 1.7,
          }}
        >
          {t(content.subtitle, locale)}
        </p>

        {/* 2×2 cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}
                style={{
                  padding: "32px",
                  borderRadius: 16,
                  border: "1px solid var(--color-border)",
                  background: "var(--color-card)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.35)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Step number — large watermark in corner */}
                <span
                  className="mono"
                  style={{
                    position: "absolute",
                    top: 20,
                    right: 24,
                    fontSize: 42,
                    fontWeight: 800,
                    color: "var(--color-border)",
                    lineHeight: 1,
                    userSelect: "none",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {step.num}
                </span>

                {/* Icon */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "linear-gradient(135deg, rgba(99,102,241,0.14), rgba(167,139,250,0.08))",
                    border: "1px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <Icon size={22} style={{ color: "var(--color-accent)" }} />
                </div>

                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 650,
                    letterSpacing: "-0.01em",
                    marginBottom: 12,
                  }}
                >
                  {t(step.title, locale)}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {t(step.desc, locale)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
