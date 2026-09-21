import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: 'filled' | 'outline';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
};

/** The signature pill CTA used across the site — gradient-filled or outline. */
export function GradientButton({ href, children, variant = 'filled', className = '', onClick, target, rel }: Props) {
  const base =
    'relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest transition-colors';
  const filled =
    "bg-[linear-gradient(123deg,#18011F_7%,#B600A8_37%,#7621B0_72%,#BE4C00_100%)] text-white shadow-[0px_4px_4px_rgba(181,1,167,.25),4px_4px_12px_#7721B1_inset] before:absolute before:inset-[-3px] before:-z-10 before:rounded-full before:border-2 before:border-white before:content-['']";
  const outline = 'border-2 border-[#D7E2EA] text-[#D7E2EA] hover:bg-[#D7E2EA]/10';
  return (
    <motion.a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variant === 'filled' ? filled : outline} ${className}`}
    >
      {children}
    </motion.a>
  );
}
