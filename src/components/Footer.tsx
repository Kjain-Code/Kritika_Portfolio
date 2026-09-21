import React from 'react';
import { personal } from '../data/content';

export function Footer() {
  return (
    <footer className="border-t border-[#D7E2EA]/10 bg-[#0C0C0C] px-5 py-8 text-center sm:px-8 md:px-10">
      <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/30">
        Designed &amp; Built by {personal.name} · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
