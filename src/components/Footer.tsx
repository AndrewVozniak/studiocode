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
            <div className="text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Oria<span style={{ color: "var(--color-accent)" }}>.</span>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {t(translations.footer.tagline, locale)}
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-20">
            <div>
              <div className="mono mb-5" style={{ color: "var(--color-accent)" }}>Sitemap</div>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                {[
                  { href: "#work", label: "Work" },
                  { href: "#services", label: "Services" },
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
                  { label: "GitHub", href: "#" },
                  { label: "LinkedIn", href: "#" },
                  { label: "Telegram", href: "#" },
                  { label: "Email", href: "mailto:hello@oria.agency" },
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
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[var(--color-border)] pt-6 flex flex-col sm:flex-row justify-between gap-4 mono">
          <span>&copy; {new Date().getFullYear()} Oria Agency</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">
              {t(translations.footer.privacy, locale)}
            </a>
            <a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">
              {t(translations.footer.terms, locale)}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
