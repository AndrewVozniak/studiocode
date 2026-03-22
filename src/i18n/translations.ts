export type Locale = "en" | "ua";

export const translations = {
  nav: {
    services: { en: "Services", ua: "Послуги" },
    about: { en: "About", ua: "Про нас" },
    portfolio: { en: "Portfolio", ua: "Портфоліо" },
    process: { en: "Process", ua: "Процес" },
    contact: { en: "Contact", ua: "Контакт" },
  },
  hero: {
    title: {
      en: "We Build Software\nThat Drives Growth",
      ua: "Ми створюємо софт\nЩо рухає бізнес",
    },
    tagline: {
      en: "Custom web development, automation & design. From idea to production.",
      ua: "Веб-розробка, автоматизація та дизайн на замовлення. Від ідеї до продакшну.",
    },
    cta: { en: "Start a Project", ua: "Почати проєкт" },
    ctaSecondary: {
      en: "Our Services",
      ua: "Наші послуги",
    },
  },
  services: {
    title: { en: "What We Do", ua: "Що ми робимо" },
    subtitle: {
      en: "End-to-end digital solutions for ambitious businesses",
      ua: "Комплексні цифрові рішення для амбітного бізнесу",
    },
  },
  techStack: {
    title: {
      en: "Technologies We Use",
      ua: "Технології які ми використовуємо",
    },
  },
  process: {
    title: { en: "How We Work", ua: "Як ми працюємо" },
  },
  about: {
    title: { en: "About Us", ua: "Про нас" },
    heading: {
      en: "A Team That\nDelivers Results",
      ua: "Команда яка\nДає результат",
    },
    description: {
      en: "studiocode.com.ua is a Ukrainian software development company focused on building clean, efficient digital products. We work with startups, SMBs, and enterprises — delivering solutions that are fast, reliable, and built to scale.",
      ua: "studiocode.com.ua — українська компанія з розробки програмного забезпечення, яка створює чисті та ефективні цифрові продукти. Ми працюємо зі стартапами, малим та середнім бізнесом та підприємствами — створюючи рішення, які швидкі, надійні та масштабовані.",
    },
    values: [
      {
        title: { en: "Quality First", ua: "Якість понад усе" },
        description: {
          en: "Clean code, best practices, thorough testing. We don't cut corners.",
          ua: "Чистий код, кращі практики, ретельне тестування. Ми не зрізаємо кути.",
        },
      },
      {
        title: { en: "Transparency", ua: "Прозорість" },
        description: {
          en: "Regular updates, clear communication, no surprises. You always know where your project stands.",
          ua: "Регулярні оновлення, чітка комунікація, без сюрпризів. Ви завжди знаєте статус проєкту.",
        },
      },
      {
        title: { en: "Result-Oriented", ua: "Орієнтація на результат" },
        description: {
          en: "We focus on business outcomes, not just features. Every line of code serves a purpose.",
          ua: "Ми фокусуємось на бізнес-результатах, а не просто фічах. Кожен рядок коду має мету.",
        },
      },
    ],
  },
  contact: {
    title: {
      en: "Let's Build Something Great",
      ua: "Давайте створимо щось велике",
    },
    subtitle: {
      en: "Tell us about your project and we'll get back to you within 24 hours.",
      ua: "Розкажіть про ваш проєкт і ми зв'яжемось протягом 24 годин.",
    },
    name: { en: "Full Name", ua: "Повне ім'я" },
    email: { en: "Email", ua: "Email" },
    phone: { en: "Phone", ua: "Телефон" },
    projectType: { en: "Project Type", ua: "Тип проєкту" },
    projectTypes: {
      webapp: { en: "Web Application", ua: "Веб-додаток" },
      bot: { en: "Bot / Automation", ua: "Бот / Автоматизація" },
      design: { en: "UI/UX Design", ua: "UI/UX Дизайн" },
      other: { en: "Other", ua: "Інше" },
    },
    budget: { en: "Budget Range", ua: "Діапазон бюджету" },
    budgets: {
      small: { en: "< $5,000", ua: "< $5,000" },
      medium: { en: "$5,000 - $15,000", ua: "$5,000 - $15,000" },
      large: { en: "$15,000+", ua: "$15,000+" },
    },
    message: {
      en: "Tell us about your project",
      ua: "Розкажіть про ваш проєкт",
    },
    submit: { en: "Send Message", ua: "Надіслати" },
    success: {
      en: "Message sent! We'll get back to you soon.",
      ua: "Повідомлення надіслано! Ми зв'яжемось найближчим часом.",
    },
    error: {
      en: "Something went wrong. Please try again or email us directly.",
      ua: "Щось пішло не так. Спробуйте ще раз або напишіть нам напряму.",
    },
  },
  footer: {
    tagline: {
      en: "We Build Software That Drives Growth",
      ua: "Ми створюємо софт що рухає бізнес",
    },
    services: { en: "Services", ua: "Послуги" },
    resources: { en: "Resources", ua: "Ресурси" },
    legal: { en: "Legal", ua: "Правове" },
    privacy: {
      en: "Privacy Policy",
      ua: "Політика конфіденційності",
    },
    terms: {
      en: "Terms of Service",
      ua: "Умови використання",
    },
  },
} as const;

export function t(
  obj: Record<string, string> | { en: string; ua: string },
  locale: Locale
): string {
  return (obj as Record<string, string>)[locale] || (obj as Record<string, string>)["en"];
}
