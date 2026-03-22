"use client";

import { useApp } from "@/context/AppContext";
import { t } from "@/i18n/translations";
import { ArrowRight, Shield, Zap, Clock } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const content = {
  badge: { en: "Software Development Studio", ua: "Студія розробки ПЗ" },
  title1: {
    en: "We build ",
    ua: "Ми створюємо ",
  },
  titleHighlight: {
    en: "digital products",
    ua: "цифрові продукти",
  },
  title2: {
    en: " that drive growth",
    ua: " для вашого бізнесу",
  },
  subtitle: {
    en: "Custom web development, automation, and design. Modern stack, clean code, measurable results.",
    ua: "Веб-розробка, автоматизація та дизайн на замовлення. Сучасний стек, чистий код, вимірні результати.",
  },
  cta: { en: "Start a Project", ua: "Почати проєкт" },
  ctaSecondary: { en: "Our Services", ua: "Наші послуги" },
  trustTitle: { en: "Why teams choose us", ua: "Чому обирають нас" },
  trust1: { en: "Production-grade code", ua: "Код продакшн-рівня" },
  trust2: { en: "Fast turnaround", ua: "Швидке виконання" },
  trust3: { en: "Ongoing support", ua: "Постійна підтримка" },
};

const terminalLines = [
  { type: "comment", text: "// Studio Code — your idea, our code" },
  { type: "code", parts: [
    { cls: "keyword", text: "const " },
    { cls: "variable", text: "project" },
    { cls: "", text: " = " },
    { cls: "keyword", text: "await " },
    { cls: "func", text: "createSolution" },
    { cls: "", text: "({" },
  ]},
  { type: "code", parts: [
    { cls: "", text: "  " },
    { cls: "variable", text: "stack" },
    { cls: "", text: ": " },
    { cls: "string", text: '"React + Next.js"' },
    { cls: "", text: "," },
  ]},
  { type: "code", parts: [
    { cls: "", text: "  " },
    { cls: "variable", text: "quality" },
    { cls: "", text: ": " },
    { cls: "string", text: '"production-ready"' },
    { cls: "", text: "," },
  ]},
  { type: "code", parts: [
    { cls: "", text: "  " },
    { cls: "variable", text: "deadline" },
    { cls: "", text: ": " },
    { cls: "string", text: '"on time"' },
    { cls: "", text: "," },
  ]},
  { type: "code", parts: [
    { cls: "", text: "});" },
  ]},
  { type: "empty" },
  { type: "code", parts: [
    { cls: "keyword", text: "console" },
    { cls: "", text: "." },
    { cls: "func", text: "log" },
    { cls: "", text: "(" },
    { cls: "variable", text: "project" },
    { cls: "", text: "." },
    { cls: "variable", text: "status" },
    { cls: "", text: ");" },
  ]},
  { type: "output", parts: [
    { cls: "accent", text: "→ ✓ deployed successfully" },
  ]},
];

export default function Hero() {
  const { locale } = useApp();
  const revealRef = useReveal();

  return (
    <section
      ref={revealRef}
      className="mesh-bg"
      style={{
        paddingTop: 140,
        paddingBottom: 80,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background orbs */}
      <div
        className="glow-orb pulse-glow"
        style={{
          top: -120,
          right: "-5%",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)",
        }}
      />
      <div
        className="glow-orb pulse-glow"
        style={{
          bottom: -80,
          left: "-10%",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, rgba(99,102,241,0.03) 40%, transparent 70%)",
          animationDelay: "2s",
        }}
      />

      <div className="container-main" style={{ position: "relative" }}>
        <div className="hero-grid">
          {/* Left — text content */}
          <div>
            <div
              className="reveal"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 16px 6px 6px",
                background: "var(--color-accent-dim)",
                border: "1px solid var(--color-border)",
                borderRadius: 999,
                marginBottom: 32,
              }}
            >
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--color-accent), #a78bfa)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                }}
              >
                ⚡
              </span>
              <span className="mono" style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
                {t(content.badge, locale)}
              </span>
            </div>

            <h1
              className="reveal reveal-delay-1"
              style={{
                fontSize: "clamp(36px, 5vw, 58px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                maxWidth: 600,
                marginBottom: 24,
              }}
            >
              {t(content.title1, locale)}
              <span className="gradient-text">{t(content.titleHighlight, locale)}</span>
              {t(content.title2, locale)}
            </h1>

            <p
              className="reveal reveal-delay-2"
              style={{
                fontSize: "clamp(16px, 1.8vw, 18px)",
                lineHeight: 1.7,
                color: "var(--color-text-secondary)",
                maxWidth: 480,
                marginBottom: 40,
              }}
            >
              {t(content.subtitle, locale)}
            </p>

            <div className="reveal reveal-delay-3" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#contact" className="btn-primary" style={{ textDecoration: "none" }}>
                {t(content.cta, locale)}
                <ArrowRight size={16} />
              </a>
              <a href="#services" className="btn-outline" style={{ textDecoration: "none" }}>
                {t(content.ctaSecondary, locale)}
              </a>
            </div>


          </div>

          {/* Right — terminal */}
          <div className="reveal reveal-delay-2 float hero-terminal">
            <div className="terminal" style={{ maxWidth: 440 }}>
              <div className="terminal-header">
                <div className="terminal-dot" style={{ background: "#FF5F56" }} />
                <div className="terminal-dot" style={{ background: "#FFBD2E" }} />
                <div className="terminal-dot" style={{ background: "#27C93F" }} />
                <span style={{ marginLeft: 12, fontSize: 12, color: "#484F58" }}>studio.ts</span>
              </div>
              <div className="terminal-body">
                {terminalLines.map((line, i) => {
                  if (line.type === "empty") return <div key={i} style={{ height: 8 }} />;
                  if (line.type === "comment") return <div key={i} className="comment">{line.text}</div>;
                  return (
                    <div key={i}>
                      {line.parts?.map((p, j) => (
                        <span key={j} className={p.cls || undefined}>{p.text}</span>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div
        className="container-main reveal reveal-delay-4"
        style={{ position: "relative", marginTop: 48, paddingBottom: 20 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              height: 1,
              flex: 1,
              maxWidth: 120,
              background: "linear-gradient(90deg, transparent, var(--color-border))",
            }}
          />
          <span
            className="mono"
            style={{ fontSize: 11, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}
          >
            {t(content.trustTitle, locale)}
          </span>
          <div
            style={{
              height: 1,
              flex: 1,
              maxWidth: 120,
              background: "linear-gradient(90deg, var(--color-border), transparent)",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: Shield, label: content.trust1 },
            { icon: Zap, label: content.trust2 },
            { icon: Clock, label: content.trust3 },
          ].map((item) => {
            const TrustIcon = item.icon;
            return (
              <div
                key={t(item.label, locale)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  borderRadius: 8,
                  border: "1px solid var(--color-border)",
                  background: "var(--color-bg-secondary)",
                }}
              >
                <TrustIcon size={15} style={{ color: "var(--color-accent)" }} />
                <span style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
                  {t(item.label, locale)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div
        className="gradient-line"
        style={{ position: "absolute", bottom: 0, left: "10%", right: "10%" }}
      />
    </section>
  );
}
