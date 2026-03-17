"use client";

import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { translations, t } from "@/i18n/translations";
import { services } from "@/data/services";

export default function Services() {
  const { locale } = useApp();

  return (
    <section id="services" className="py-24 px-6 relative">
      <svg className="absolute top-16 right-[8%] opacity-[0.04] pointer-events-none" width="120" height="120" viewBox="0 0 120 120">
        <line x1="0" y1="120" x2="120" y2="0" stroke="currentColor" strokeWidth="1" />
        <line x1="30" y1="120" x2="120" y2="30" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="w-10 h-[1px]" style={{ background: "var(--color-accent)" }} />
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-[var(--color-text-secondary)]">{t(translations.services.title, locale)}</span>
        </motion.div>

        <motion.h2
          className="text-5xl sm:text-6xl font-medium tracking-[-0.035em] leading-[0.92] mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          More Than Just<br />
          <span style={{ color: "var(--color-accent)" }}>Code</span>
        </motion.h2>

        <div className="accent-rule mb-0" />

        <div className="grid md:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="p-8 md:p-10 border-b border-[var(--color-border)] md:odd:border-r group hover:bg-[var(--color-accent-dim)] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-start gap-5">
                <span className="font-mono text-xs shrink-0 mt-0.5" style={{ color: "var(--color-accent)" }}>
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-medium mb-3 tracking-[-0.01em]">
                    {t(service.title, locale)}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed mb-5 text-sm">
                    {t(service.description, locale)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.stack.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
