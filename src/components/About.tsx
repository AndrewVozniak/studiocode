"use client";

import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { translations, t } from "@/i18n/translations";

export default function About() {
  const { locale } = useApp();
  const a = translations.about;

  return (
    <section id="about" className="py-24 px-6" style={{ background: "var(--color-bg-secondary)" }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left */}
          <div className="lg:w-1/2">
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="w-10 h-[1px]" style={{ background: "var(--color-accent)" }} />
              <span className="font-mono text-xs tracking-[0.15em] uppercase text-[var(--color-text-secondary)]">
                {t(a.title, locale)}
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl sm:text-6xl font-medium tracking-[-0.035em] leading-[0.92] mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t(a.heading, locale).split("\n").map((line, i) => (
                <span key={i} className="block">
                  {i === 1 ? (
                    <span style={{ color: "var(--color-accent)" }}>{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </motion.h2>

            <motion.p
              className="text-[var(--color-text-secondary)] leading-relaxed max-w-lg text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {t(a.description, locale)}
            </motion.p>
          </div>

          {/* Right - Values */}
          <div className="lg:w-1/2">
            <div className="accent-rule mb-0" />
            {a.values.map((value, i) => (
              <motion.div
                key={i}
                className="py-8 border-b border-[var(--color-border)] group hover:bg-[var(--color-accent-dim)] transition-colors duration-300 -mx-4 px-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-start gap-6">
                  <span className="font-mono text-xs shrink-0 mt-0.5" style={{ color: "var(--color-accent)" }}>
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{t(value.title, locale)}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-md">
                      {t(value.description, locale)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
