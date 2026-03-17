"use client";

import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { translations, t } from "@/i18n/translations";

export default function Hero() {
  const { locale } = useApp();

  return (
    <section className="min-h-screen flex flex-col justify-between relative pt-14">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "var(--color-accent)", opacity: 0.015, filter: "blur(120px)" }}
        />
        <svg className="absolute top-24 right-[10%] opacity-[0.06]" width="200" height="200" viewBox="0 0 200 200">
          <line x1="0" y1="200" x2="200" y2="0" stroke="currentColor" strokeWidth="1" />
          <line x1="40" y1="200" x2="200" y2="40" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-40 left-[5%] opacity-[0.04]" width="150" height="150" viewBox="0 0 150 150">
          <line x1="0" y1="150" x2="150" y2="0" stroke="currentColor" strokeWidth="1" />
        </svg>
        <div className="absolute top-1/3 right-[15%] grid grid-cols-5 gap-4 opacity-[0.06]">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-current" />
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 w-full flex-1 flex flex-col justify-center">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="w-10 h-[1px]" style={{ background: "var(--color-accent)" }} />
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-[var(--color-text-secondary)]">Software Development Studio</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-[clamp(3rem,8vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.035em] max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {t(translations.hero.title, locale).split("\n").map((line, i) => (
            <span key={i} className="block">
              {i === 1 ? (
                <span style={{ color: "var(--color-accent)" }}>{line}</span>
              ) : (
                line
              )}
            </span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-10 text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-lg leading-relaxed font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t(translations.hero.tagline, locale)}
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-14 flex items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="#contact"
            className="px-9 py-4 text-sm font-medium text-black rounded-full transition-all hover:scale-105"
            style={{ background: "var(--color-accent)" }}
          >
            {t(translations.hero.cta, locale)}
          </a>
          <a
            href="#services"
            className="text-sm tracking-wide text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-2 group font-mono uppercase text-xs"
          >
            {t(translations.hero.ctaSecondary, locale)}
            <span className="inline-block group-hover:translate-y-0.5 transition-transform">&darr;</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        className="border-t border-[var(--color-border)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="max-w-[1400px] mx-auto px-6 py-7 flex flex-wrap gap-x-16 gap-y-4">
          {[
            { val: "2022", label: { en: "Since", ua: "З" } },
            { val: "200+", label: { en: "Projects", ua: "Проєктів" } },
            { val: "Ukraine", label: { en: "Based", ua: "Базуємось" } },
            { val: "Full-cycle", label: { en: "Delivery", ua: "Доставка" } },
          ].map((s) => (
            <div key={s.val} className="flex items-center gap-3 font-mono text-xs tracking-wide uppercase">
              <span className="text-[var(--color-text-primary)] font-medium">{s.val}</span>
              <span className="text-[var(--color-text-muted)]">/</span>
              <span className="text-[var(--color-text-secondary)]">{t(s.label, locale)}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
