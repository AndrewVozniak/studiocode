"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { translations, t } from "@/i18n/translations";
import { reviews } from "@/data/reviews";

export default function Reviews() {
  const { locale } = useApp();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div
        className="absolute -top-8 left-[3%] text-[22rem] font-serif leading-none select-none pointer-events-none"
        style={{ color: "var(--color-accent)", opacity: 0.03 }}
      >
        &ldquo;
      </div>

      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="w-10 h-[1px]" style={{ background: "var(--color-accent)" }} />
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-[var(--color-text-secondary)]">{t(translations.reviews.title, locale)}</span>
        </motion.div>

        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.25] tracking-[-0.02em]">
                &ldquo;{t(reviews[current].text, locale)}&rdquo;
              </blockquote>

              <div className="mt-10 flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-medium text-black"
                  style={{ background: "var(--color-accent)" }}
                >
                  {reviews[current].author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium">{reviews[current].author}</div>
                  <div className="font-mono text-xs tracking-wider uppercase text-[var(--color-text-secondary)] mt-0.5">{reviews[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-2 mt-12">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="h-[3px] rounded-full transition-all duration-500"
                style={{
                  width: i === current ? 40 : 16,
                  background: i === current ? "var(--color-accent)" : "var(--color-border)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
