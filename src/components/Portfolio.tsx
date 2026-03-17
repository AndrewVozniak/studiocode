"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { translations, t } from "@/i18n/translations";
import { portfolioItems, categories, PortfolioCategory } from "@/data/portfolio";

export default function Portfolio() {
  const { locale } = useApp();
  const [activeFilter, setActiveFilter] = useState<"All" | PortfolioCategory>("All");

  const filtered =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category.includes(activeFilter));

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="w-10 h-[1px]" style={{ background: "var(--color-accent)" }} />
              <span className="font-mono text-xs tracking-[0.15em] uppercase text-[var(--color-text-secondary)]">{t(translations.portfolio.title, locale)}</span>
            </motion.div>
            <motion.h2
              className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-[-0.035em] leading-[0.92]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {locale === "ua" ? "Вибрані" : "Selected"}<br />
              <span style={{ color: "var(--color-accent)" }}>{locale === "ua" ? "Проєкти" : "Projects"}</span>
            </motion.h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat as "All" | PortfolioCategory)}
                className={`tag transition-all ${
                  activeFilter === cat
                    ? "!border-[var(--color-accent)] !text-[var(--color-accent)]"
                    : ""
                }`}
              >
                {cat === "All" ? t(translations.portfolio.all, locale) : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="accent-rule mb-0" />

        <div>
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="border-b border-[var(--color-border)] group cursor-pointer relative"
              >
                <div className="absolute -inset-x-6 inset-y-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" style={{ background: "var(--color-accent-dim)" }} />

                <div className="relative py-7 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
                  <div className="flex items-center gap-6 flex-1">
                    <span className="font-mono text-xs text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors w-8">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-medium tracking-[-0.01em] group-hover:text-[var(--color-accent)] transition-colors">
                        {t(item.title, locale)}
                      </h3>
                      <p className="text-sm text-[var(--color-text-secondary)] mt-1.5 max-w-lg hidden sm:block leading-relaxed">
                        {t(item.description, locale)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 ml-14 md:ml-0">
                    <div className="hidden lg:flex flex-wrap gap-1.5 max-w-xs justify-end">
                      {item.tech.slice(0, 3).map((tech) => (
                        <span key={tech} className="tag">{tech}</span>
                      ))}
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] group-hover:rotate-45 transition-all shrink-0"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
