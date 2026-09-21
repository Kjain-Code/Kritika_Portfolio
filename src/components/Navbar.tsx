import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/content';
import { FadeIn } from './FadeIn';
import { GradientButton } from './GradientButton';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={0} y={-20} className="fixed inset-x-0 top-0 z-50 px-6 pt-6 md:px-10 md:pt-8">
      <nav className="flex items-center justify-between">
        <a href="#home" className="hero-heading text-lg font-black uppercase tracking-wider md:text-xl">
          KJ
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] lg:flex lg:text-base">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="transition-opacity duration-200 hover:opacity-70">
              {l.label}
            </a>
          ))}
        </div>
        <div className="hidden lg:block">
          <GradientButton href="#contact" className="!px-6 !py-2.5 !text-xs">
            Hire Me
          </GradientButton>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="text-[#D7E2EA] lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="mt-4 flex flex-col gap-4 rounded-3xl border border-[#D7E2EA]/20 bg-[#0C0C0C]/95 p-6 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] backdrop-blur">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1">
                  {l.label}
                </a>
              ))}
              <GradientButton href="#contact" onClick={() => setOpen(false)} className="mt-2 w-full">
                Hire Me
              </GradientButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </FadeIn>
  );
}
