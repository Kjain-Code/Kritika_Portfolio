import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { personal } from '../data/content';

const infoRows = [
  { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s+/g, '')}` },
  { icon: MapPin, label: 'Location', value: personal.location, href: undefined },
];

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const mailtoHref = `mailto:${personal.email}?subject=${encodeURIComponent(
    `Portfolio enquiry from ${form.name || 'website visitor'}`
  )}&body=${encodeURIComponent(
    `${form.message}\n\n— ${form.name || ''} (${form.email || ''})`
  )}`;

  return (
    <section id="contact" className="relative bg-[#0C0C0C] px-5 py-24 sm:px-8 md:px-10">
      <FadeIn y={20}>
        <p className="text-center text-sm font-medium uppercase tracking-[0.3em] text-[#D7E2EA]/40">05 — Contact</p>
      </FadeIn>
      <FadeIn delay={0.1} y={30}>
        <h2 className="hero-heading mt-3 text-center text-[clamp(2.5rem,9vw,110px)] font-black uppercase leading-none tracking-tight">
          Let&apos;s Connect
        </h2>
      </FadeIn>
      <FadeIn delay={0.15} y={20}>
        <p className="mx-auto mt-6 max-w-xl text-center text-sm font-light leading-relaxed text-[#D7E2EA]/60 sm:text-base">
          Open to full-time roles, freelance projects, and collaborations. Let&apos;s build something great together.
        </p>
      </FadeIn>

      <div className="mx-auto mt-14 grid max-w-4xl gap-10 md:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-5">
          {infoRows.map((row) => {
            const Icon = row.icon;
            const content = (
              <div className="flex items-center gap-4 rounded-2xl border border-[#D7E2EA]/15 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D7E2EA]/10 text-[#D7E2EA]">
                  <Icon size={18} />
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/40">{row.label}</div>
                  <div className="truncate text-sm font-medium text-[#D7E2EA] sm:text-base">{row.value}</div>
                </div>
              </div>
            );
            return (
              <FadeIn key={row.label} delay={0.1} y={20}>
                {row.href ? (
                  <a href={row.href} className="block transition-opacity hover:opacity-80">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </FadeIn>
            );
          })}

          <FadeIn delay={0.2} y={20} className="flex gap-3">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10"
            >
              <Github size={18} />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10"
            >
              <Linkedin size={18} />
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.15} y={20}>
          <form
            className="flex flex-col gap-4 rounded-3xl border border-[#D7E2EA]/15 p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailtoHref;
            }}
          >
            <input
              required
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="rounded-xl border border-[#D7E2EA]/20 bg-transparent px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/40 focus:border-[#D7E2EA]/50 focus:outline-none"
            />
            <input
              required
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="rounded-xl border border-[#D7E2EA]/20 bg-transparent px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/40 focus:border-[#D7E2EA]/50 focus:outline-none"
            />
            <textarea
              required
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="resize-none rounded-xl border border-[#D7E2EA]/20 bg-transparent px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/40 focus:border-[#D7E2EA]/50 focus:outline-none"
            />
            <button
              type="submit"
              className="relative mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(123deg,#18011F_7%,#B600A8_37%,#7621B0_72%,#BE4C00_100%)] px-8 py-3.5 text-sm font-medium uppercase tracking-widest text-white shadow-[0px_4px_4px_rgba(181,1,167,.25),4px_4px_12px_#7721B1_inset] before:absolute before:inset-[-3px] before:-z-10 before:rounded-full before:border-2 before:border-white before:content-[''] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
