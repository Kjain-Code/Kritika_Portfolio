import React, { useEffect, useRef, useState } from 'react';
import { projects } from '../data/content';

// Real client-site screenshots, tripled for a seamless scroll loop — same
// mechanics as the original template's GIF marquee, but showing the actual
// work (with each tile linking straight to the live site).
const row1 = [...projects, ...projects, ...projects];
const row2 = [...projects.slice(3), ...projects.slice(0, 3), ...projects, ...projects];

function Tile({ project }: { project: (typeof projects)[number] }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-[270px] w-[420px] shrink-0 overflow-hidden rounded-2xl"
    >
      <img
        src={project.image}
        alt={project.name}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA]">{project.name}</p>
      </div>
    </a>
  );
}

/** Scroll-driven two-row marquee, ported from the original Jack template. */
export function Marquee() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(200);

  useEffect(() => {
    const on = () => {
      if (!ref.current) return;
      const top = ref.current.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - top + window.innerHeight) * 0.3);
    };
    window.addEventListener('scroll', on, { passive: true });
    on();
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <section ref={ref} className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40">
      <div className="flex flex-col gap-3">
        <div className="flex w-max gap-3" style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}>
          {row1.map((p, i) => (
            <Tile key={p.name + i} project={p} />
          ))}
        </div>
        <div className="flex w-max gap-3" style={{ transform: `translateX(-${offset - 200}px)`, willChange: 'transform' }}>
          {row2.map((p, i) => (
            <Tile key={p.name + i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
