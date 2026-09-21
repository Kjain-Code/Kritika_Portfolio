import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { skillCategories } from '../data/content';

export function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const category = skillCategories.find((c) => c.id === active)!;

  return (
    <section id="skills" className="relative bg-[#0C0C0C] px-5 py-24 sm:px-8 md:px-10">
      <FadeIn y={20}>
        <p className="text-center text-sm font-medium uppercase tracking-[0.3em] text-[#D7E2EA]/40">04 — Skills</p>
      </FadeIn>
      <FadeIn delay={0.1} y={30}>
        <h2 className="hero-heading mt-3 text-center text-[clamp(2.5rem,9vw,110px)] font-black uppercase leading-none tracking-tight">
          My Toolkit
        </h2>
      </FadeIn>

      <FadeIn delay={0.2} y={20} className="mt-12 flex flex-wrap justify-center gap-3">
        {skillCategories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-wider transition-colors sm:text-sm ${
              active === c.id
                ? 'border-[#D7E2EA] bg-[#D7E2EA] text-[#0C0C0C]'
                : 'border-[#D7E2EA]/25 text-[#D7E2EA]/60 hover:border-[#D7E2EA]/50'
            }`}
          >
            {c.icon} {c.label}
          </button>
        ))}
      </FadeIn>

      <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
        {category.skills.map((s, i) => (
          <FadeIn key={category.id + s.name} delay={i * 0.06} y={16}>
            <div className="rounded-2xl border border-[#D7E2EA]/15 p-5">
              <div className="mb-2 flex items-center justify-between text-sm font-medium text-[#D7E2EA]">
                <span>{s.name}</span>
                <span className="text-[#D7E2EA]/50">{s.level}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#D7E2EA]/10">
                <motion.div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#B600A8,#7621B0)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
