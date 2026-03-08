"use client";

import { useApp } from "@/context/AppContext";
import { translations, t } from "@/i18n/translations";

const allTech = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "FastAPI",
  "Django", "Node.js", "PostgreSQL", "Docker", "RabbitMQ", "Vercel",
  "Figma", "Framer Motion", "Redis", "Railway", "Zustand", "Git",
];

export default function TechStack() {
  const { locale } = useApp();
  const doubled = [...allTech, ...allTech];

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-10">
        <div className="flex items-center gap-3">
          <span className="w-10 h-[1px]" style={{ background: "var(--color-accent)" }} />
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-[var(--color-text-secondary)]">{t(translations.techStack.title, locale)}</span>
        </div>
      </div>

      {/* Marquee row 1 */}
      <div className="relative">
        <div className="flex whitespace-nowrap marquee">
          {doubled.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="inline-flex items-center mx-4 text-[clamp(1rem,2.5vw,1.4rem)] font-light text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-300 cursor-default"
            >
              {tech}
              <span className="mx-6 text-[var(--color-border)]">&bull;</span>
            </span>
          ))}
        </div>
      </div>

      {/* Marquee row 2 reversed */}
      <div className="relative mt-3">
        <div className="flex whitespace-nowrap marquee" style={{ animationDirection: "reverse", animationDuration: "40s" }}>
          {[...doubled].reverse().map((tech, i) => (
            <span
              key={`${tech}-r-${i}`}
              className="inline-flex items-center mx-4 text-[clamp(1rem,2.5vw,1.4rem)] font-light text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-300 cursor-default"
            >
              {tech}
              <span className="mx-6 text-[var(--color-border)]">&bull;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
