import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { aboutTechMarquee, achievements, education, personal, stats } from '../data/content';

// Same four decorative corner PNGs as the original template (generic ambient
// 3D-render decoration, not tied to any person/brand) — identical URLs,
// positions, sizes and FadeIn timings.
const decor = {
  moon: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  object: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  lego: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  group: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
};

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#0C0C0C] px-5 py-24 sm:px-8 md:px-10">
      <FadeIn delay={0.1} duration={0.9} x={-80} className="pointer-events-none absolute left-[1%] top-[4%] sm:left-[2%] md:left-[4%]">
        <img src={decor.moon} alt="" className="w-[80px] sm:w-[120px] md:w-[160px]" />
      </FadeIn>
      <FadeIn delay={0.25} duration={0.9} x={-80} className="pointer-events-none absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]">
        <img src={decor.object} alt="" className="w-[70px] sm:w-[100px] md:w-[135px]" />
      </FadeIn>
      <FadeIn delay={0.15} duration={0.9} x={80} className="pointer-events-none absolute right-[1%] top-[4%] sm:right-[2%] md:right-[4%]">
        <img src={decor.lego} alt="" className="w-[80px] sm:w-[120px] md:w-[160px]" />
      </FadeIn>
      <FadeIn delay={0.3} duration={0.9} x={80} className="pointer-events-none absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]">
        <img src={decor.group} alt="" className="w-[85px] sm:w-[125px] md:w-[165px]" />
      </FadeIn>

      <FadeIn y={20}>
        <p className="text-center text-sm font-medium uppercase tracking-[0.3em] text-[#D7E2EA]/40">01 — About</p>
      </FadeIn>
      <FadeIn delay={0.1} y={30}>
        <h2 className="hero-heading mt-3 text-center text-[clamp(2.5rem,9vw,110px)] font-black uppercase leading-none tracking-tight">
          Who I Am
        </h2>
      </FadeIn>

      <div className="mx-auto mt-14 grid max-w-5xl gap-14 md:grid-cols-[1.3fr_1fr] md:gap-16">
        <div>
          {personal.bioParagraphs.map((p, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.1} y={20}>
              <p className="mb-5 text-[clamp(0.95rem,1.6vw,1.2rem)] font-light leading-relaxed text-[#D7E2EA]/80">
                {p}
              </p>
            </FadeIn>
          ))}

          <FadeIn delay={0.4} y={20} className="mt-6 flex flex-wrap gap-3">
            {aboutTechMarquee.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[#D7E2EA]/20 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/70 sm:text-sm"
              >
                {t}
              </span>
            ))}
          </FadeIn>
        </div>

        <div className="flex flex-col gap-6">
          <FadeIn delay={0.2} y={20} className="grid grid-cols-2 gap-5 rounded-3xl border border-[#D7E2EA]/15 p-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="hero-heading text-3xl font-black sm:text-4xl">{s.value}</div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-[#D7E2EA]/50 sm:text-xs">
                  {s.label}
                </div>
              </div>
            ))}
          </FadeIn>

          <FadeIn delay={0.3} y={20} className="rounded-3xl border border-[#D7E2EA]/15 p-6">
            <div className="mb-3 flex items-center gap-2 text-[#D7E2EA]">
              <GraduationCap size={20} />
              <h3 className="text-sm font-semibold uppercase tracking-wider">Education</h3>
            </div>
            <p className="text-sm font-medium text-[#D7E2EA]/90">{education.degree}</p>
            <p className="mt-1 text-xs text-[#D7E2EA]/50">{education.school}</p>
            <p className="mt-1 text-xs text-[#D7E2EA]/50">{education.period}</p>
          </FadeIn>

          <FadeIn delay={0.4} y={20} className="rounded-3xl border border-[#D7E2EA]/15 p-6">
            <div className="mb-3 flex items-center gap-2 text-[#D7E2EA]">
              <Award size={20} />
              <h3 className="text-sm font-semibold uppercase tracking-wider">Achievements</h3>
            </div>
            <ul className="space-y-2">
              {achievements.map((a) => (
                <li key={a} className="text-xs leading-relaxed text-[#D7E2EA]/60 sm:text-sm">
                  {a}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
