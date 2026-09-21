import React from 'react';
import { Briefcase } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { experience } from '../data/content';

export function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-24 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <FadeIn y={20}>
        <p className="text-center text-sm font-medium uppercase tracking-[0.3em] text-[#D7E2EA]/40">
          02 — Experience
        </p>
      </FadeIn>
      <FadeIn delay={0.1} y={30}>
        <h2 className="hero-heading mt-3 text-center text-[clamp(2.5rem,9vw,110px)] font-black uppercase leading-none tracking-tight">
          Where I&apos;ve Worked
        </h2>
      </FadeIn>

      <div className="mx-auto mt-16 max-w-3xl">
        {experience.map((job, i) => (
          <FadeIn key={job.company} delay={0.1 + i * 0.15} y={25}>
            <div className="relative border-l-2 border-[#D7E2EA]/15 py-2 pl-8 pb-14 last:pb-0">
              <span className="absolute -left-[11px] top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#0C0C0C] ring-2 ring-[#B600A8]">
                <Briefcase size={11} className="text-[#D7E2EA]" />
              </span>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-[clamp(1.1rem,2.4vw,1.6rem)] font-medium uppercase text-[#D7E2EA]">
                  {job.role}
                </h3>
                <span className="text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/40 sm:text-sm">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-[#B600A8] sm:text-base">
                {job.company} <span className="text-[#D7E2EA]/40">· {job.type}</span>
              </p>
              <ul className="mt-4 space-y-2">
                {job.points.map((pt) => (
                  <li key={pt} className="text-sm font-light leading-relaxed text-[#D7E2EA]/60 sm:text-base">
                    — {pt}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
