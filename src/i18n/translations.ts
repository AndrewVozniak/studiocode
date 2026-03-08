export type Locale = "en" | "ua" | "ru";

export const translations = {
  nav: {
    services: { en: "Services", ua: "Послуги", ru: "Услуги" },
    portfolio: { en: "Portfolio", ua: "Портфоліо", ru: "Портфолио" },
    process: { en: "Process", ua: "Процес", ru: "Процесс" },
    contact: { en: "Contact", ua: "Контакт", ru: "Контакт" },
  },
  hero: {
    title: {
      en: "Building Digital Products\nThat Scale",
      ua: "Створюємо Цифрові Продукти\nЯкі Масштабуються",
      ru: "Создаём Цифровые Продукты\nКоторые Масштабируются",
    },
    tagline: {
      en: "From MVP to Enterprise. Fast, Reliable, Global.",
      ua: "Від MVP до Enterprise. Швидко, Надійно, Глобально.",
      ru: "От MVP до Enterprise. Быстро, Надёжно, Глобально.",
    },
    cta: { en: "Get Started", ua: "Почати", ru: "Начать" },
    ctaSecondary: {
      en: "View Portfolio",
      ua: "Дивитись Портфоліо",
      ru: "Смотреть Портфолио",
    },
    stats: {
      years: { en: "4 Years", ua: "4 Роки", ru: "4 Года" },
      yearsLabel: { en: "On Market", ua: "На ринку", ru: "На рынке" },
      clients: { en: "200+", ua: "200+", ru: "200+" },
      clientsLabel: { en: "Projects Delivered", ua: "Проєктів здано", ru: "Проектов сдано" },
      continents: { en: "3 Continents", ua: "3 Континенти", ru: "3 Континента" },
      continentsLabel: { en: "Served", ua: "Обслуговуємо", ru: "Обслуживаем" },
    },
  },
  services: {
    title: { en: "What We Do", ua: "Що ми робимо", ru: "Что мы делаем" },
    subtitle: {
      en: "End-to-end digital solutions for ambitious businesses",
      ua: "Комплексні цифрові рішення для амбітного бізнесу",
      ru: "Комплексные цифровые решения для амбициозного бизнеса",
    },
  },
  techStack: {
    title: {
      en: "Technologies We Love",
      ua: "Технології які ми любимо",
      ru: "Технологии которые мы любим",
    },
  },
  portfolio: {
    title: { en: "Recent Work", ua: "Останні Роботи", ru: "Последние Работы" },
    all: { en: "All", ua: "Всі", ru: "Все" },
  },
  stats: {
    title: {
      en: "Trusted by startups and enterprises across",
      ua: "Нам довіряють стартапи та підприємства з",
      ru: "Нам доверяют стартапы и предприятия из",
    },
  },
  reviews: {
    title: {
      en: "What Clients Say",
      ua: "Що кажуть клієнти",
      ru: "Что говорят клиенты",
    },
  },
  process: {
    title: { en: "How We Work", ua: "Як ми працюємо", ru: "Как мы работаем" },
  },
  contact: {
    title: {
      en: "Let's Build Something Great",
      ua: "Давайте створимо щось велике",
      ru: "Давайте создадим что-то великое",
    },
    subtitle: {
      en: "Tell us about your project and we'll get back to you within 24 hours.",
      ua: "Розкажіть про ваш проєкт і ми зв'яжемось протягом 24 годин.",
      ru: "Расскажите о вашем проекте и мы свяжемся в течение 24 часов.",
    },
    name: { en: "Full Name", ua: "Повне ім'я", ru: "Полное имя" },
    email: { en: "Email", ua: "Email", ru: "Email" },
    projectType: { en: "Project Type", ua: "Тип проєкту", ru: "Тип проекта" },
    projectTypes: {
      webapp: { en: "Web Application", ua: "Веб-додаток", ru: "Веб-приложение" },
      bot: { en: "Bot / Automation", ua: "Бот / Автоматизація", ru: "Бот / Автоматизация" },
      design: { en: "UI/UX Design", ua: "UI/UX Дизайн", ru: "UI/UX Дизайн" },
      other: { en: "Other", ua: "Інше", ru: "Другое" },
    },
    budget: { en: "Budget Range", ua: "Діапазон бюджету", ru: "Диапазон бюджета" },
    budgets: {
      small: { en: "< $5,000", ua: "< $5,000", ru: "< $5,000" },
      medium: { en: "$5,000 - $15,000", ua: "$5,000 - $15,000", ru: "$5,000 - $15,000" },
      large: { en: "$15,000+", ua: "$15,000+", ru: "$15,000+" },
    },
    message: {
      en: "Tell us about your project",
      ua: "Розкажіть про ваш проєкт",
      ru: "Расскажите о вашем проекте",
    },
    submit: { en: "Send Message", ua: "Надіслати", ru: "Отправить" },
    success: {
      en: "Message sent! We'll get back to you soon.",
      ua: "Повідомлення надіслано! Ми зв'яжемось найближчим часом.",
      ru: "Сообщение отправлено! Мы свяжемся в ближайшее время.",
    },
  },
  footer: {
    tagline: {
      en: "Building Digital Products That Scale",
      ua: "Створюємо Цифрові Продукти Які Масштабуються",
      ru: "Создаём Цифровые Продукты Которые Масштабируются",
    },
    services: { en: "Services", ua: "Послуги", ru: "Услуги" },
    resources: { en: "Resources", ua: "Ресурси", ru: "Ресурсы" },
    legal: { en: "Legal", ua: "Правове", ru: "Правовое" },
    privacy: {
      en: "Privacy Policy",
      ua: "Політика конфіденційності",
      ru: "Политика конфиденциальности",
    },
    terms: {
      en: "Terms of Service",
      ua: "Умови використання",
      ru: "Условия использования",
    },
  },
} as const;

export function t(
  obj: Record<string, string> | { en: string; ua: string; ru: string },
  locale: Locale
): string {
  return (obj as Record<string, string>)[locale] || (obj as Record<string, string>)["en"];
}
