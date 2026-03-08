"use client";

import { motion } from "framer-motion";

const stats = [
  { val: "50+", label: "Happy Clients" },
  { val: "12", label: "Countries" },
  { val: "24/7", label: "Support" },
  { val: "100%", label: "Commitment" },
];

export default function Stats() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 border border-[var(--color-border)] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-12 md:py-16 text-center ${
                i < stats.length - 1 ? "border-r border-[var(--color-border)]" : ""
              } ${i < 2 ? "border-b md:border-b-0 border-[var(--color-border)]" : ""}`}
            >
              <div className="text-4xl md:text-5xl font-medium tracking-[-0.03em]" style={{ color: "var(--color-accent)" }}>
                {s.val}
              </div>
              <div className="font-mono text-xs tracking-[0.15em] uppercase text-[var(--color-text-secondary)] mt-3">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
