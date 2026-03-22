"use client";

import { useState, FormEvent } from "react";
import { useApp } from "@/context/AppContext";
import { t } from "@/i18n/translations";
import { Send, Mail, MapPin, Clock } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const content = {
  label: { en: "Contact", ua: "Контакт" },
  title: { en: "Let's start your project", ua: "Давайте почнемо ваш проєкт" },
  subtitle: {
    en: "Tell us about your idea and we'll get back to you within 24 hours.",
    ua: "Розкажіть про вашу ідею і ми зв'яжемось протягом 24 годин.",
  },
  name: { en: "Full Name", ua: "Повне ім'я" },
  email: { en: "Email", ua: "Email" },
  phone: { en: "Phone (optional)", ua: "Телефон (необов'язково)" },
  projectType: { en: "Project Type", ua: "Тип проєкту" },
  projectTypes: {
    webapp: { en: "Web Application", ua: "Веб-додаток" },
    bot: { en: "Bot / Automation", ua: "Бот / Автоматизація" },
    design: { en: "UI/UX Design", ua: "UI/UX Дизайн" },
    other: { en: "Other", ua: "Інше" },
  },
  message: { en: "Tell us about your project", ua: "Розкажіть про ваш проєкт" },
  submit: { en: "Send Message", ua: "Надіслати" },
  sending: { en: "Sending...", ua: "Надсилаємо..." },
  success: { en: "Message sent! We'll get back to you soon.", ua: "Повідомлення надіслано! Ми зв'яжемось найближчим часом." },
  error: { en: "Something went wrong. Please try again or email us directly.", ua: "Щось пішло не так. Спробуйте ще раз або напишіть нам напряму." },
  infoEmail: { en: "Email us", ua: "Напишіть нам" },
  infoLocation: { en: "Location", ua: "Локація" },
  infoLocationValue: { en: "Ukraine", ua: "Україна" },
  infoResponse: { en: "Response time", ua: "Час відповіді" },
  infoResponseValue: { en: "Within 24 hours", ua: "Протягом 24 годин" },
};

export default function Contact() {
  const { locale } = useApp();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const revealRef = useReveal();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    if (data.website) {
      setStatus("success");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          projectType: data.projectType,
          message: data.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section" ref={revealRef} style={{ position: "relative", overflow: "hidden" }}>
      {/* Decorative orb */}
      <div
        className="glow-orb"
        style={{
          top: "20%",
          right: "-10%",
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label reveal" style={{ justifyContent: "center" }}>{t(content.label, locale)}</span>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 12,
            }}
          >
            {t(content.title, locale)}
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{
              fontSize: 17,
              color: "var(--color-text-secondary)",
              maxWidth: 500,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            {t(content.subtitle, locale)}
          </p>
        </div>

        <div
          className="reveal reveal-delay-3"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 40,
            maxWidth: 960,
            margin: "0 auto",
          }}
        >
          {/* Info cards row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { icon: Mail, label: content.infoEmail, value: "info@studiocode.com.ua" },
              { icon: MapPin, label: content.infoLocation, value: t(content.infoLocationValue, locale) },
              { icon: Clock, label: content.infoResponse, value: t(content.infoResponseValue, locale) },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "18px 20px",
                    borderRadius: 14,
                    border: "1px solid var(--color-border)",
                    background: "var(--color-card)",
                    transition: "border-color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      background: "linear-gradient(135deg, var(--color-accent-dim), rgba(139,92,246,0.06))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 3, textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "var(--font-mono)" }}>
                      {t(item.label, locale)}
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>{item.value}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form */}
          <div
            style={{
              padding: "36px",
              borderRadius: 20,
              border: "1px solid var(--color-border)",
              background: "var(--color-card-glass)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Gradient top accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "10%",
                right: "10%",
                height: 1,
                background: "linear-gradient(90deg, transparent, var(--color-accent), #a78bfa, var(--color-accent-cyan), transparent)",
              }}
            />

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <input type="text" name="website" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

              <div style={{ display: "grid", gap: 16 }} className="grid-cols-1 sm:grid-cols-2">
                <div>
                  <label style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-primary)", marginBottom: 8, display: "block" }}>
                    {t(content.name, locale)} *
                  </label>
                  <input name="name" required className="form-input" placeholder={t(content.name, locale)} />
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-primary)", marginBottom: 8, display: "block" }}>
                    {t(content.email, locale)} *
                  </label>
                  <input name="email" type="email" required className="form-input" placeholder="email@example.com" />
                </div>
              </div>

              <div style={{ display: "grid", gap: 16 }} className="grid-cols-1 sm:grid-cols-2">
                <div>
                  <label style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-primary)", marginBottom: 8, display: "block" }}>
                    {t(content.phone, locale)}
                  </label>
                  <input name="phone" className="form-input" placeholder="+380..." />
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-primary)", marginBottom: 8, display: "block" }}>
                    {t(content.projectType, locale)}
                  </label>
                  <select name="projectType" className="form-input" style={{ cursor: "pointer" }}>
                    {Object.entries(content.projectTypes).map(([key, val]) => (
                      <option key={key} value={key}>{t(val, locale)}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 6, display: "block" }}>
                  {t(content.message, locale)} *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="form-input"
                  placeholder={t(content.message, locale)}
                  style={{ resize: "vertical", minHeight: 120 }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary"
                style={{
                  alignSelf: "flex-start",
                  opacity: status === "sending" ? 0.7 : 1,
                }}
              >
                {status === "sending" ? t(content.sending, locale) : t(content.submit, locale)}
                <Send size={16} />
              </button>

              {status === "success" && (
                <p style={{ fontSize: 14, color: "#22c55e", marginTop: 4 }}>{t(content.success, locale)}</p>
              )}
              {status === "error" && (
                <p style={{ fontSize: 14, color: "#ef4444", marginTop: 4 }}>{t(content.error, locale)}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
