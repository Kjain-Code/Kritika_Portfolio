import React from 'react';
import { FadeIn } from './FadeIn';
import { services } from '../data/content';

/** Same white-panel "Services" section as the original template — number, name, description in a bordered vertical list. */
export function Services() {
  return (
    <section className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn>
        <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28">
          Services
        </h2>
      </FadeIn>
      <div className="mx-auto max-w-5xl">
        {services.map(([num, name, desc], i) => (
          <FadeIn key={num} delay={i * 0.1} y={25}>
            <div className="grid grid-cols-[auto_1fr] items-start gap-5 border-t border-[rgba(12,12,12,.15)] py-8 sm:gap-8 sm:py-10 md:gap-12 md:py-12">
              <div className="text-[clamp(3rem,10vw,140px)] font-black leading-[.8] text-[#0C0C0C]">{num}</div>
              <div>
                <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase text-[#0C0C0C]">{name}</h3>
                <p className="mt-2 max-w-2xl text-[clamp(.85rem,1.6vw,1.25rem)] font-light leading-relaxed text-[#0C0C0C]/60">
                  {desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
