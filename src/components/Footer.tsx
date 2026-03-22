"use client";

import Link from "next/link";
import { useApp } from "@/context/AppContext";
import LogoSVG from "@/components/LogoSVG";
import { t } from "@/i18n/translations";

const content = {
  tagline: {
    en: "Building software that drives growth.",
    ua: "Створюємо софт, що рухає бізнес.",
  },
  quickLinks: { en: "Quick Links", ua: "Швидкі посилання" },
  servicesTitle: { en: "Services", ua: "Послуги" },
  legal: { en: "Legal", ua: "Правове" },
  privacy: { en: "Privacy Policy", ua: "Політика конфіденційності" },
  rights: { en: "All rights reserved.", ua: "Всі права захищені." },
};

const quickLinks = [
  { label: { en: "Services", ua: "Послуги" }, href: "#services" },
  { label: { en: "About", ua: "Про нас" }, href: "#about" },
  { label: { en: "Tech Stack", ua: "Стек" }, href: "#tech" },
  { label: { en: "Process", ua: "Процес" }, href: "#process" },
  { label: { en: "Contact", ua: "Контакт" }, href: "#contact" },
];

const serviceLinks = [
  { label: { en: "Web Development", ua: "Веб-розробка" }, href: "#services" },
  { label: { en: "Bots & Automation", ua: "Боти та автоматизація" }, href: "#services" },
  { label: { en: "UI/UX Design", ua: "UI/UX Дизайн" }, href: "#services" },
  { label: { en: "Backend & API", ua: "Backend та API" }, href: "#services" },
];

export default function Footer() {
  const { locale, theme } = useApp();
  const year = new Date().getFullYear();

  return (
    <footer style={{ position: "relative", background: "var(--color-bg-secondary)" }}>
      {/* Gradient top border */}
      <div className="gradient-line" />

      <div className="container-main" style={{ padding: "64px 24px 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 12 }}>
              <LogoSVG theme={theme} height={42} />
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--color-text-secondary)", maxWidth: 280 }}>
              {t(content.tagline, locale)}
            </p>
            <div style={{ marginTop: 16, fontSize: 14, color: "var(--color-text-secondary)" }}>
              info@studiocode.com.ua
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="mono"
              style={{
                fontSize: 12,
                fontWeight: 600,
                marginBottom: 20,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-text-muted)",
              }}
            >
              {t(content.quickLinks, locale)}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {quickLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  style={{
                    fontSize: 14,
                    color: "var(--color-text-secondary)",
                    textDecoration: "none",
                    transition: "color 0.2s, transform 0.2s",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-text-primary)";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {t(link.label, locale)}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="mono"
              style={{
                fontSize: 12,
                fontWeight: 600,
                marginBottom: 20,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-text-muted)",
              }}
            >
              {t(content.servicesTitle, locale)}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {serviceLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  style={{
                    fontSize: 14,
                    color: "var(--color-text-secondary)",
                    textDecoration: "none",
                    transition: "color 0.2s, transform 0.2s",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-text-primary)";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {t(link.label, locale)}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="mono"
              style={{
                fontSize: 12,
                fontWeight: 600,
                marginBottom: 20,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-text-muted)",
              }}
            >
              {t(content.legal, locale)}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Link
                href="/privacy"
                style={{
                  fontSize: 14,
                  color: "var(--color-text-secondary)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
              >
                {t(content.privacy, locale)}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ fontSize: 13, color: "var(--color-text-muted)" }}>
            &copy; {year} studiocode.com.ua. {t(content.rights, locale)}
          </p>
          <p style={{ fontSize: 13, color: "var(--color-text-muted)" }}>
            Made in Ukraine
          </p>
        </div>
      </div>
    </footer>
  );
}
