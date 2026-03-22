"use client";

import { useApp } from "@/context/AppContext";
import { t } from "@/i18n/translations";
import { useReveal } from "@/hooks/useReveal";

const content = {
  label: { en: "About Us", ua: "Про нас" },
  title: { en: "A team that delivers results", ua: "Команда, яка дає результат" },
  description: {
    en: "Studio Code is a Ukrainian software development company focused on building clean, efficient digital products. We work with startups, SMBs, and enterprises — delivering solutions that are fast, reliable, and built to scale.",
    ua: "Studio Code — українська компанія з розробки ПЗ, яка створює чисті та ефективні цифрові продукти. Ми працюємо зі стартапами, малим та середнім бізнесом — створюючи рішення, які швидкі, надійні та масштабовані.",
  },
  description2: {
    en: "Our approach is simple: understand the problem deeply, choose the right technology, and deliver clean code on time. No unnecessary complexity, no wasted budget.",
    ua: "Наш підхід простий: глибоко зрозуміти проблему, обрати правильну технологію та поставити чистий код вчасно. Без зайвої складності, без зайвих витрат.",
  },
};

const values = [
  {
    num: "01",
    title: { en: "Quality First", ua: "Якість понад усе" },
    desc: {
      en: "Clean code, best practices, thorough testing. We don't cut corners.",
      ua: "Чистий код, кращі практики, ретельне тестування. Ми не зрізаємо кути.",
    },
  },
  {
    num: "02",
    title: { en: "Transparency", ua: "Прозорість" },
    desc: {
      en: "Regular updates, clear communication. You always know where your project stands.",
      ua: "Регулярні оновлення, чітка комунікація. Ви завжди знаєте статус проєкту.",
    },
  },
  {
    num: "03",
    title: { en: "Result-Oriented", ua: "Орієнтація на результат" },
    desc: {
      en: "We focus on business outcomes, not just features. Every line of code serves a purpose.",
      ua: "Ми фокусуємось на бізнес-результатах, а не просто фічах. Кожен рядок коду має мету.",
    },
  },
];

export default function About() {
  const { locale } = useApp();
  const revealRef = useReveal();

  return (
    <section
      id="about"
      className="section noise-overlay"
      ref={revealRef}
      style={{ background: "var(--color-bg-secondary)", position: "relative" }}
    >
      <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: 56, alignItems: "start" }}
          className="lg:grid-cols-[1.2fr_0.8fr]"
        >
          {/* Left — text */}
          <div>
            <span className="section-label reveal">{t(content.label, locale)}</span>
            <h2
              className="reveal reveal-delay-1"
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: 24,
              }}
            >
              {t(content.title, locale)}
            </h2>
            <p
              className="reveal reveal-delay-2"
              style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: "var(--color-text-secondary)",
                marginBottom: 16,
              }}
            >
              {t(content.description, locale)}
            </p>
            <p
              className="reveal reveal-delay-3"
              style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: "var(--color-text-secondary)",
              }}
            >
              {t(content.description2, locale)}
            </p>
          </div>

          {/* Right — value cards with accent left border */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {values.map((v, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  padding: "24px 28px",
                  borderRadius: 14,
                  background: "var(--color-card)",
                  borderLeft: "3px solid transparent",
                  borderImage: "linear-gradient(180deg, var(--color-accent), #a78bfa) 1",
                  position: "relative",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(4px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateX(0)")}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
                  <span
                    className="mono gradient-text"
                    style={{ fontSize: 22, fontWeight: 700, lineHeight: 1 }}
                  >
                    {v.num}
                  </span>
                  <h3 style={{ fontSize: 16, fontWeight: 600 }}>{t(v.title, locale)}</h3>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--color-text-secondary)" }}>
                  {t(v.desc, locale)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
