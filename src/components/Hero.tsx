import React, { useEffect, useState } from 'react';
import { FadeIn } from './FadeIn';
import { GradientButton } from './GradientButton';
import { Magnet } from './Magnet';
import { personal } from '../data/content';

/** Cycles through the rotating role strings with a simple type / delete effect. */
function useTypewriter(words: string[], typingMs = 65, deletingMs = 35, holdMs = 1400) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deletingMs : typingMs
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingMs, deletingMs, holdMs]);

  return text;
}

export function Hero() {
  const role = useTypewriter(personal.rotatingRoles);

  return (
    // Same skeleton as the original template's HeroSection: h-screen flex-col,
    // giant heading, bottom info-bar (justify-between), portrait absolutely
    // centered/overlapping via Magnet. The section's own nav was dropped
    // since the site now uses the persistent multi-link Navbar instead.
    <section id="home" className="relative flex h-screen flex-col overflow-hidden bg-[#0C0C0C] pt-24 md:pt-28">
      <FadeIn delay={0.1} y={20} className="relative z-30 px-6 md:px-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/30 px-4 py-1.5 text-[11px] font-medium uppercase tracking-widest text-[#D7E2EA]/80 sm:text-xs">
          <span className="h-2 w-2 rounded-full bg-[#4ADE80] shadow-[0_0_8px_#4ADE80]" />
          {personal.availability}
        </span>
      </FadeIn>

      <div className="relative z-30 mt-4 overflow-hidden px-6 sm:mt-4 md:px-10">
        <FadeIn delay={0.2} y={40}>
          <h1 className="hero-heading w-full font-black uppercase leading-[0.95] tracking-tight text-[15vw] sm:text-[13vw] md:text-[10vw] lg:text-[8.5vw]">
            Hi, i&apos;m
            <br />
            {personal.name}
          </h1>
        </FadeIn>
        <FadeIn delay={0.3} y={20} className="mt-3">
          <p className="min-h-[1.4em] text-[clamp(1rem,2.6vw,1.7rem)] font-medium text-[#D7E2EA]">
            {role}
            <span className="animate-pulse text-[#B600A8]">|</span>
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.35} y={20} className="relative z-30 mt-auto px-6 pb-7 sm:px-10 sm:pb-8 md:pb-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <p className="max-w-[220px] text-[clamp(.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[280px] md:max-w-[320px]">
            {personal.tagline}
          </p>
          <FadeIn delay={0.5} y={20} className="flex flex-wrap gap-4">
            <GradientButton href="#projects">View My Work</GradientButton>
            <GradientButton href={personal.resumeHref} variant="outline" target="_blank" rel="noopener noreferrer">
              Download CV
            </GradientButton>
          </FadeIn>
        </div>
      </FadeIn>

      <FadeIn
        delay={0.6}
        y={30}
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[220px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[300px] sm:translate-y-0 md:w-[380px] lg:w-[460px]"
      >
        <Magnet padding={150} strength={3}>
          <img src={personal.photoUrl} alt={personal.name} className="w-full select-none object-contain" />
        </Magnet>
      </FadeIn>
    </section>
  );
}
