"use client";

import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { t, Locale } from "@/i18n/translations";

const locales: { key: Locale; label: string }[] = [
  { key: "en", label: "EN" },
  { key: "ua", label: "UA" },
];

const navLinks = [
  { href: "#services", key: "services" },
  { href: "#about", key: "about" },
  { href: "#tech", key: "tech" },
  { href: "#process", key: "process" },
  { href: "#contact", key: "contact" },
];

const navLabels: Record<string, { en: string; ua: string }> = {
  services: { en: "Services", ua: "Послуги" },
  about: { en: "About", ua: "Про нас" },
  tech: { en: "Tech Stack", ua: "Стек" },
  process: { en: "Process", ua: "Процес" },
  contact: { en: "Contact", ua: "Контакт" },
};

export default function Header() {
  const { locale, setLocale, theme, toggleTheme } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: theme === "dark" ? "rgba(13, 17, 23, 0.88)" : "rgba(250, 251, 254, 0.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="container-main" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <Image src="/logo.png" alt="studiocode.com.ua" width={160} height={40} style={{ objectFit: "contain", maxHeight: 40, width: "auto" }} priority />
        </a>

        <nav style={{ alignItems: "center", gap: 32 }} className="hidden md:flex">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              style={{
                fontSize: 14,
                color: "var(--color-text-secondary)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
            >
              {t(navLabels[link.key], locale)}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 4, fontSize: 13 }}>
            {locales.map((l, i) => (
              <span key={l.key} style={{ display: "flex", alignItems: "center" }}>
                {i > 0 && <span style={{ color: "var(--color-text-muted)", margin: "0 4px" }}>/</span>}
                <button
                  onClick={() => setLocale(l.key)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "4px 6px",
                    borderRadius: 4,
                    fontSize: 13,
                    fontWeight: locale === l.key ? 600 : 400,
                    color: locale === l.key ? "var(--color-accent)" : "var(--color-text-secondary)",
                  }}
                >
                  {l.label}
                </button>
              </span>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            style={{
              background: "none",
              border: "1px solid var(--color-border)",
              borderRadius: 8,
              padding: 8,
              cursor: "pointer",
              color: "var(--color-text-secondary)",
              display: "flex",
              alignItems: "center",
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "1px solid var(--color-border)",
              borderRadius: 8,
              padding: 8,
              cursor: "pointer",
              color: "var(--color-text-secondary)",
              alignItems: "center",
            }}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            background: "var(--color-bg-primary)",
            borderTop: "1px solid var(--color-border)",
            padding: "16px 24px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                fontSize: 16,
                color: "var(--color-text-secondary)",
                textDecoration: "none",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              {t(navLabels[link.key], locale)}
            </a>
          ))}
          <div style={{ display: "flex", gap: 8, paddingTop: 16 }}>
            {locales.map((l) => (
              <button
                key={l.key}
                onClick={() => { setLocale(l.key); setMobileOpen(false); }}
                style={{
                  background: locale === l.key ? "var(--color-accent)" : "transparent",
                  color: locale === l.key ? "#fff" : "var(--color-text-secondary)",
                  border: `1px solid ${locale === l.key ? "var(--color-accent)" : "var(--color-border)"}`,
                  borderRadius: 6,
                  padding: "6px 16px",
                  fontSize: 13,
                  cursor: "pointer",
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
