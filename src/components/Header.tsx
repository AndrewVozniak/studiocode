"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { translations, t, Locale } from "@/i18n/translations";

const locales: { key: Locale; label: string }[] = [
  { key: "en", label: "EN" },
  { key: "ua", label: "UA" },
];

const navLinks = [
  { href: "#services", key: "services" as const },
  { href: "#about", key: "about" as const },
  { href: "#work", key: "portfolio" as const },
  { href: "#process", key: "process" as const },
  { href: "#contact", key: "contact" as const },
];

export default function Header() {
  const { locale, setLocale, theme, toggleTheme } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ background: "var(--color-bg-primary)", opacity: 0.97 }}>
      <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="text-sm font-medium tracking-[0.15em] uppercase">
          Studio<span style={{ color: "var(--color-accent)" }}>Code</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="mono hover:text-[var(--color-text-primary)] transition-colors"
            >
              {t(translations.nav[link.key], locale)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1 mono">
            {locales.map((l, i) => (
              <span key={l.key} className="flex items-center">
                <button
                  onClick={() => setLocale(l.key)}
                  className={`transition-colors ${
                    locale === l.key ? "text-[var(--color-accent)]" : "hover:text-[var(--color-text-primary)]"
                  }`}
                >
                  {l.label}
                </button>
                {i < locales.length - 1 && <span className="mx-1.5 text-[var(--color-text-muted)]">/</span>}
              </span>
            ))}
          </div>

          <button onClick={toggleTheme} className="p-1.5 hover:text-[var(--color-accent)] transition-colors" aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-1.5">
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div className="divider" />

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: "var(--color-bg-primary)" }}
          >
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a key={link.key} href={link.href} onClick={() => setMobileOpen(false)} className="mono text-sm">
                  {t(translations.nav[link.key], locale)}
                </a>
              ))}
              <div className="flex gap-3 pt-4 border-t border-[var(--color-border)] mono">
                {locales.map((l) => (
                  <button
                    key={l.key}
                    onClick={() => setLocale(l.key)}
                    className={locale === l.key ? "text-[var(--color-accent)]" : ""}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
