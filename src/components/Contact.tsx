"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { translations, t } from "@/i18n/translations";

export default function Contact() {
  const { locale } = useApp();
  const c = translations.contact;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  const inputClass =
    "w-full px-4 py-4 bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] text-sm focus:border-[var(--color-accent)] focus:outline-none transition-colors placeholder:text-[var(--color-text-secondary)]";

  return (
    <>
      {/* CTA Banner */}
      <section className="relative overflow-hidden" style={{ background: "var(--color-accent)" }}>
        <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28 text-center relative">
          <svg className="absolute top-4 left-8 opacity-10" width="100" height="100" viewBox="0 0 100 100">
            <line x1="0" y1="100" x2="100" y2="0" stroke="#000" strokeWidth="1.5" />
            <line x1="20" y1="100" x2="100" y2="20" stroke="#000" strokeWidth="1.5" />
          </svg>
          <svg className="absolute bottom-4 right-8 opacity-10" width="100" height="100" viewBox="0 0 100 100">
            <line x1="0" y1="100" x2="100" y2="0" stroke="#000" strokeWidth="1.5" />
            <line x1="20" y1="100" x2="100" y2="20" stroke="#000" strokeWidth="1.5" />
          </svg>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.03em] text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            READY TO BUILD<br />SOMETHING GREAT?
          </motion.h2>
          <motion.a
            href="#contact"
            className="inline-block mt-8 px-8 py-3.5 text-sm font-medium border-2 border-black text-black rounded-full hover:bg-black hover:text-[var(--color-accent)] transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            START A PROJECT
          </motion.a>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="py-24 px-6" style={{ background: "var(--color-bg-secondary)" }}>
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
                <span className="font-mono text-xs tracking-[0.15em] uppercase text-[var(--color-text-secondary)]">Contact</span>
              </motion.div>

              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.05]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Got a project?<br />
                <span style={{ color: "var(--color-accent)" }}>Let&apos;s talk.</span>
              </motion.h2>

              <motion.p
                className="mt-6 text-[var(--color-text-secondary)] leading-relaxed max-w-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {t(c.subtitle, locale)}
              </motion.p>

              <motion.div
                className="mt-10 space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <a
                  href="mailto:hello@oria.agency"
                  className="flex items-center gap-4 group hover:text-[var(--color-accent)] transition-colors"
                >
                  <span className="font-mono text-xs tracking-wider uppercase text-[var(--color-text-secondary)] w-20">Email</span>
                  <span className="text-sm font-medium">hello@oria.agency</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all" />
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 group hover:text-[var(--color-accent)] transition-colors"
                >
                  <span className="font-mono text-xs tracking-wider uppercase text-[var(--color-text-secondary)] w-20">Telegram</span>
                  <span className="text-sm font-medium">@oria_agency</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all" />
                </a>
              </motion.div>
            </div>

            {/* Right - Form */}
            <div className="lg:w-1/2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-16 text-center"
                >
                  <div className="text-5xl mb-4" style={{ color: "var(--color-accent)" }}>&check;</div>
                  <p className="text-lg">{t(c.success, locale)}</p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono tracking-wider uppercase text-[var(--color-text-secondary)] mb-2">
                        {t(c.name, locale)} <span style={{ color: "var(--color-accent)" }}>*</span>
                      </label>
                      <input required type="text" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs font-mono tracking-wider uppercase text-[var(--color-text-secondary)] mb-2">
                        {t(c.email, locale)} <span style={{ color: "var(--color-accent)" }}>*</span>
                      </label>
                      <input required type="email" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono tracking-wider uppercase text-[var(--color-text-secondary)] mb-2">
                        {t(c.projectType, locale)} <span style={{ color: "var(--color-accent)" }}>*</span>
                      </label>
                      <select required className={`${inputClass} cursor-pointer`} defaultValue="">
                        <option value="" disabled>&mdash;</option>
                        <option value="webapp">{t(c.projectTypes.webapp, locale)}</option>
                        <option value="bot">{t(c.projectTypes.bot, locale)}</option>
                        <option value="design">{t(c.projectTypes.design, locale)}</option>
                        <option value="other">{t(c.projectTypes.other, locale)}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono tracking-wider uppercase text-[var(--color-text-secondary)] mb-2">
                        {t(c.budget, locale)}
                      </label>
                      <select className={`${inputClass} cursor-pointer`} defaultValue="">
                        <option value="" disabled>&mdash;</option>
                        <option value="small">{t(c.budgets.small, locale)}</option>
                        <option value="medium">{t(c.budgets.medium, locale)}</option>
                        <option value="large">{t(c.budgets.large, locale)}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-wider uppercase text-[var(--color-text-secondary)] mb-2">
                      {t(c.message, locale)} <span style={{ color: "var(--color-accent)" }}>*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="px-9 py-4 text-sm font-medium text-black rounded-full transition-all hover:scale-105 disabled:opacity-50 flex items-center gap-2 mt-2"
                    style={{ background: "var(--color-accent)" }}
                  >
                    {t(c.submit, locale)}
                    <ArrowUpRight size={16} />
                  </button>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
