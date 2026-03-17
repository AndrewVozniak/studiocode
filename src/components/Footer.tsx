"use client";

import { ArrowUpRight } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { translations, t } from "@/i18n/translations";

export default function Footer() {
  const { locale } = useApp();

  return (
    <footer className="border-t border-[var(--color-border)] pt-16 pb-8 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          {/* Brand */}
          <div className="md:max-w-xs">
            <div className="text-sm font-medium tracking-[0.15em] uppercase mb-4">
              Studio<span style={{ color: "var(--color-accent)" }}>Code</span>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {t(translations.footer.tagline, locale)}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12 sm:gap-20">
            <div>
              <div className="mono mb-5" style={{ color: "var(--color-accent)" }}>Sitemap</div>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                {[
                  { href: "#services", label: "Services" },
                  { href: "#about", label: "About" },
                  { href: "#work", label: "Work" },
                  { href: "#process", label: "Process" },
                  { href: "#contact", label: "Contact" },
                ].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-[var(--color-text-primary)] transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mono mb-5" style={{ color: "var(--color-accent)" }}>Connect</div>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                {[
                  { label: "Email", href: "mailto:info@studiocode.com.ua" },
                  { label: "Telegram", href: "#" },
                  { label: "LinkedIn", href: "#" },
                  { label: "GitHub", href: "#" },
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="hover:text-[var(--color-text-primary)] transition-colors inline-flex items-center gap-1.5"
                    >
                      {l.label}
                      <ArrowUpRight size={11} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mono mb-5" style={{ color: "var(--color-accent)" }}>{t(translations.footer.legal, locale)}</div>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                <li>
                  <a href="/privacy" className="hover:text-[var(--color-text-primary)] transition-colors">
                    {t(translations.footer.privacy, locale)}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[var(--color-border)] pt-6 flex flex-col sm:flex-row justify-between gap-4 mono">
          <span>&copy; {new Date().getFullYear()} Studio Code</span>
          <span className="text-[var(--color-text-secondary)]">info@studiocode.com.ua</span>
        </div>
      </div>
    </footer>
  );
}
