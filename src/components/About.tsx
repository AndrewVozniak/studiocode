"use client";

import { useApp } from "@/context/AppContext";
import { t } from "@/i18n/translations";
import { useReveal } from "@/hooks/useReveal";

const content = {
  label: { en: "About Us", ua: "Про нас" },
  title: { en: "A team that delivers results", ua: "Команда, яка дає результат" },
  description: {
    en: "studiocode.com.ua is a Ukrainian software development company focused on building clean, efficient digital products. We work with startups, SMBs, and enterprises — delivering solutions that are fast, reliable, and built to scale.",
    ua: "studiocode.com.ua — українська компанія з розробки ПЗ, яка створює чисті та ефективні цифрові продукти. Ми працюємо зі стартапами, малим та середнім бізнесом — створюючи рішення, які швидкі, надійні та масштабовані.",
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
      className="section"
      ref={revealRef}
      style={{ background: "var(--color-bg-secondary)", position: "relative" }}
    >
      {/* Top divider */}
      <div className="gradient-line" style={{ position: "absolute", top: 0, left: "5%", right: "5%" }} />

      <div className="container-main" style={{ position: "relative" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 64,
            alignItems: "start",
          }}
          className="lg:grid-cols-[1.3fr_0.7fr]"
        >
          {/* Left — text */}
          <div>
            <span className="section-label reveal">{t(content.label, locale)}</span>
            <h2
              className="reveal reveal-delay-1"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: 28,
                lineHeight: 1.15,
              }}
            >
              {t(content.title, locale)}
            </h2>
            <p
              className="reveal reveal-delay-2"
              style={{
                fontSize: 17,
                lineHeight: 1.85,
                color: "var(--color-text-secondary)",
                marginBottom: 20,
              }}
            >
              {t(content.description, locale)}
            </p>
            <p
              className="reveal reveal-delay-3"
              style={{
                fontSize: 17,
                lineHeight: 1.85,
                color: "var(--color-text-secondary)",
              }}
            >
              {t(content.description2, locale)}
            </p>
          </div>

          {/* Right — value cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {values.map((v, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  padding: "24px 28px",
                  borderRadius: 14,
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderLeft: "3px solid var(--color-accent)",
                  position: "relative",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(6px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px -8px rgba(99,102,241,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span
                    className="mono"
                    style={{ fontSize: 13, fontWeight: 700, color: "var(--color-accent)", letterSpacing: "0.05em" }}
                  >
                    {v.num}
                  </span>
                  <div style={{ width: 1, height: 14, background: "var(--color-border)" }} />
                  <h3 style={{ fontSize: 15, fontWeight: 650, letterSpacing: "-0.01em" }}>{t(v.title, locale)}</h3>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--color-text-secondary)" }}>
                  {t(v.desc, locale)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="gradient-line" style={{ position: "absolute", bottom: 0, left: "5%", right: "5%" }} />
    </section>
  );
}
