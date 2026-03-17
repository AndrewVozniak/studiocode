"use client";

import { useApp } from "@/context/AppContext";

const content = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: March 2026",
    sections: [
      {
        title: "1. Introduction",
        text: 'Studio Code ("we", "us", "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website studiocode.com.ua.',
      },
      {
        title: "2. Information We Collect",
        text: "We collect information you provide directly through our contact form: name, email address, phone number (optional), project type, budget range, and project description. We also automatically collect certain technical data: IP address, browser type, device information, and pages visited — through standard server logs.",
      },
      {
        title: "3. How We Use Your Information",
        text: "We use your information to: respond to your inquiries and provide requested services; communicate with you about your project; improve our website and services; comply with legal obligations. We do not sell, trade, or rent your personal data to third parties.",
      },
      {
        title: "4. Data Storage and Security",
        text: "Your data is stored on secure servers. We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Contact form submissions are transmitted via encrypted SMTP.",
      },
      {
        title: "5. Cookies",
        text: "Our website uses minimal cookies for essential functionality only: language preference and theme preference. These are stored in your browser's local storage and are not shared with any third parties. We do not use tracking cookies or analytics services that collect personal data.",
      },
      {
        title: "6. Your Rights",
        text: "You have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your data; withdraw consent at any time. To exercise these rights, contact us at info@studiocode.com.ua.",
      },
      {
        title: "7. Third-Party Links",
        text: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.",
      },
      {
        title: "8. Changes to This Policy",
        text: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.",
      },
      {
        title: "9. Contact Us",
        text: "If you have questions about this Privacy Policy or our data practices, please contact us at: info@studiocode.com.ua",
      },
    ],
  },
  ua: {
    title: "Політика конфіденційності",
    lastUpdated: "Останнє оновлення: березень 2026",
    sections: [
      {
        title: "1. Вступ",
        text: 'Studio Code ("ми", "нас", "наш") поважає вашу конфіденційність та зобов\'язується захищати ваші персональні дані. Ця Політика конфіденційності пояснює, як ми збираємо, використовуємо та захищаємо інформацію, коли ви відвідуєте наш вебсайт studiocode.com.ua.',
      },
      {
        title: "2. Інформація, яку ми збираємо",
        text: "Ми збираємо інформацію, яку ви надаєте через контактну форму: ім'я, електронну адресу, номер телефону (за бажанням), тип проєкту, діапазон бюджету та опис проєкту. Також ми автоматично збираємо певні технічні дані: IP-адресу, тип браузера, інформацію про пристрій та відвідані сторінки — через стандартні серверні логи.",
      },
      {
        title: "3. Як ми використовуємо вашу інформацію",
        text: "Ми використовуємо вашу інформацію для: відповіді на ваші запити та надання послуг; комунікації щодо вашого проєкту; покращення нашого вебсайту та послуг; виконання юридичних зобов'язань. Ми не продаємо, не обмінюємо та не передаємо ваші персональні дані третім особам.",
      },
      {
        title: "4. Зберігання та безпека даних",
        text: "Ваші дані зберігаються на захищених серверах. Ми впроваджуємо відповідні технічні та організаційні заходи для захисту ваших персональних даних від несанкціонованого доступу, зміни, розкриття або знищення. Дані контактної форми передаються через зашифрований SMTP.",
      },
      {
        title: "5. Файли cookie",
        text: "Наш вебсайт використовує мінімальні cookie лише для основної функціональності: збереження мовних налаштувань та теми оформлення. Вони зберігаються в локальному сховищі вашого браузера і не передаються третім сторонам. Ми не використовуємо відстежуючі cookie або аналітичні сервіси, які збирають персональні дані.",
      },
      {
        title: "6. Ваші права",
        text: "Ви маєте право: отримати доступ до персональних даних, які ми зберігаємо; вимагати виправлення неточних даних; вимагати видалення ваших даних; відкликати згоду в будь-який час. Для реалізації цих прав зв'яжіться з нами за адресою info@studiocode.com.ua.",
      },
      {
        title: "7. Посилання на треті сторони",
        text: "Наш вебсайт може містити посилання на вебсайти третіх сторін. Ми не несемо відповідальності за практики конфіденційності цих зовнішніх сайтів. Рекомендуємо ознайомитися з їхніми політиками конфіденційності.",
      },
      {
        title: "8. Зміни до цієї політики",
        text: "Ми можемо час від часу оновлювати цю Політику конфіденційності. Зміни будуть опубліковані на цій сторінці з оновленою датою.",
      },
      {
        title: "9. Зв'яжіться з нами",
        text: "Якщо у вас є запитання щодо цієї Політики конфіденційності або наших практик обробки даних, зв'яжіться з нами: info@studiocode.com.ua",
      },
    ],
  },
};

export default function PrivacyContent() {
  const { locale } = useApp();
  const c = content[locale];

  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--color-bg-primary)", color: "var(--color-text-primary)" }}
    >
      <div className="max-w-[800px] mx-auto px-6 py-24">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors mb-12 font-mono"
        >
          &larr; {locale === "ua" ? "На головну" : "Back to home"}
        </a>

        <h1 className="text-4xl sm:text-5xl font-medium tracking-[-0.03em] mb-4">
          {c.title}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] font-mono mb-12">
          {c.lastUpdated}
        </p>

        <div className="space-y-10">
          {c.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl font-medium mb-3">{section.title}</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-border)]">
          <p className="text-sm text-[var(--color-text-secondary)] font-mono">
            &copy; {new Date().getFullYear()} Studio Code — studiocode.com.ua
          </p>
        </div>
      </div>
    </div>
  );
}
