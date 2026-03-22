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
      ua: "Вайрфрейми, UI-макети та технічна архітектура. Ви затверджуєте кожне візуальне та структурне рішення до початку розробки.",
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
            marginBottom: 64,
            maxWidth: 500,
          }}
        >
          {t(content.subtitle, locale)}
        </p>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical connecting line — desktop: center, mobile: left */}
          <div
            className="hidden md:block"
            style={{
              position: "absolute",
              top: 40,
              bottom: 40,
              left: "50%",
              width: 2,
              transform: "translateX(-50%)",
              background: "linear-gradient(180deg, var(--color-accent), #a78bfa, transparent)",
              opacity: 0.4,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: 24,
                    alignItems: "center",
                  }}
                >
                  {/* Desktop layout: alternating sides */}
                  <div
                    className="hidden md:grid"
                    style={{
                      gridTemplateColumns: "1fr 60px 1fr",
                      alignItems: "center",
                      gap: 0,
                    }}
                  >
                    {/* Left side */}
                    <div style={{ textAlign: isEven ? "right" : "left", padding: isEven ? "0 32px 0 0" : "0 0 0 32px" }}>
                      {isEven ? (
                        <StepContent step={step} locale={locale} Icon={Icon} />
                      ) : (
                        <div />
                      )}
                    </div>

                    {/* Center node */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 14,
                          background: "linear-gradient(135deg, var(--color-accent), #a78bfa)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 0 30px rgba(99,102,241,0.3), 0 0 60px rgba(99,102,241,0.1)",
                          position: "relative",
                          zIndex: 2,
                        }}
                      >
                        <Icon size={20} style={{ color: "#fff" }} />
                      </div>
                    </div>

                    {/* Right side */}
                    <div style={{ textAlign: isEven ? "left" : "right", padding: isEven ? "0 0 0 32px" : "0 32px 0 0" }}>
                      {!isEven ? (
                        <StepContent step={step} locale={locale} Icon={Icon} />
                      ) : (
                        <div />
                      )}
                    </div>
                  </div>

                  {/* Mobile layout */}
                  <div
                    className="flex md:hidden"
                    style={{
                      gap: 20,
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-cyan))",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={18} style={{ color: "#fff" }} />
                    </div>
                    <StepContent step={step} locale={locale} Icon={Icon} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepContent({
  step,
  locale,
}: {
  step: (typeof steps)[0];
  locale: "en" | "ua";
  Icon: React.ComponentType;
}) {
  return (
    <div>
      <span
        className="mono gradient-text"
        style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.05em", marginBottom: 8, display: "block" }}
      >
        STEP {step.num}
      </span>
      <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10 }}>{t(step.title, locale)}</h3>
      <p style={{ fontSize: 14, lineHeight: 1.8, color: "var(--color-text-secondary)", maxWidth: 380 }}>
        {t(step.desc, locale)}
      </p>
    </div>
  );
}
