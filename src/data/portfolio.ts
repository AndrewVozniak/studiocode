export type PortfolioCategory = "Web Apps" | "Automation" | "Bots" | "Design";

export interface PortfolioItem {
  id: string;
  title: { en: string; ua: string; ru: string };
  category: PortfolioCategory[];
  tech: string[];
  description: { en: string; ua: string; ru: string };
  metrics: string[];
  gradient: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "proxima-dev",
    title: {
      en: "Proxima — Autonomous Freelance Platform",
      ua: "Proxima — Автономна Фріланс Платформа",
      ru: "Proxima — Автономная Фриланс Платформа",
    },
    category: ["Web Apps", "Automation"],
    tech: ["Next.js", "FastAPI", "PostgreSQL", "RabbitMQ"],
    description: {
      en: "AI-powered freelance bidding automation with smart scoring and multi-platform support.",
      ua: "AI-автоматизація фріланс ставок з інтелектуальним скорингом та підтримкою багатьох платформ.",
      ru: "AI-автоматизация фриланс ставок с интеллектуальным скорингом и поддержкой нескольких платформ.",
    },
    metrics: ["3-layer architecture", "Claude AI integration", "Real-time notifications"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: "ecommerce-platform",
    title: {
      en: "E-commerce Platform",
      ua: "E-commerce Платформа",
      ru: "E-commerce Платформа",
    },
    category: ["Web Apps"],
    tech: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    description: {
      en: "Headless e-commerce with Stripe integration and real-time inventory management.",
      ua: "Headless e-commerce з інтеграцією Stripe та реал-тайм інвентаризацією.",
      ru: "Headless e-commerce с интеграцией Stripe и real-time инвентаризацией.",
    },
    metrics: ["99.9% uptime", "50k+ products", "Multi-currency"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "telegram-bot-ecosystem",
    title: {
      en: "Telegram Bot Ecosystem",
      ua: "Екосистема Telegram Ботів",
      ru: "Экосистема Telegram Ботов",
    },
    category: ["Bots", "Automation"],
    tech: ["Python", "Telegram API", "PostgreSQL", "Docker"],
    description: {
      en: "Suite of interconnected Telegram bots for business automation and customer engagement.",
      ua: "Набір взаємопов'язаних Telegram ботів для автоматизації бізнесу та залучення клієнтів.",
      ru: "Набор взаимосвязанных Telegram ботов для автоматизации бизнеса и вовлечения клиентов.",
    },
    metrics: ["10k+ daily users", "99.5% uptime", "Auto-scaling"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "saas-dashboard",
    title: {
      en: "SaaS Analytics Dashboard",
      ua: "SaaS Аналітична Панель",
      ru: "SaaS Аналитическая Панель",
    },
    category: ["Web Apps", "Design"],
    tech: ["React", "TypeScript", "D3.js", "FastAPI"],
    description: {
      en: "Real-time analytics dashboard with custom visualizations and data pipeline integration.",
      ua: "Реал-тайм аналітична панель з кастомними візуалізаціями та інтеграцією data pipeline.",
      ru: "Real-time аналитическая панель с кастомными визуализациями и интеграцией data pipeline.",
    },
    metrics: ["Sub-100ms queries", "Custom charts", "Role-based access"],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: "design-system",
    title: {
      en: "Enterprise Design System",
      ua: "Корпоративна Дизайн-Система",
      ru: "Корпоративная Дизайн-Система",
    },
    category: ["Design"],
    tech: ["Figma", "React", "Storybook", "Tailwind"],
    description: {
      en: "Comprehensive design system with 50+ components, theming, and documentation.",
      ua: "Комплексна дизайн-система з 50+ компонентами, темізацією та документацією.",
      ru: "Комплексная дизайн-система с 50+ компонентами, темизацией и документацией.",
    },
    metrics: ["50+ components", "Dark/Light themes", "Full documentation"],
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
  {
    id: "workflow-automation",
    title: {
      en: "CRM Workflow Automation",
      ua: "Автоматизація CRM Процесів",
      ru: "Автоматизация CRM Процессов",
    },
    category: ["Automation"],
    tech: ["Python", "FastAPI", "RabbitMQ", "PostgreSQL"],
    description: {
      en: "End-to-end CRM automation reducing manual work by 80% with smart routing and notifications.",
      ua: "Комплексна автоматизація CRM, що зменшує ручну роботу на 80% з розумною маршрутизацією.",
      ru: "Комплексная автоматизация CRM, сокращающая ручную работу на 80% с умной маршрутизацией.",
    },
    metrics: ["80% less manual work", "Smart routing", "Real-time alerts"],
    gradient: "from-red-500/20 to-orange-500/20",
  },
];

export const categories: PortfolioCategory[] = ["Web Apps", "Automation", "Bots", "Design"];
