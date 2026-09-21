import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { projects, type Project } from '../data/content';

// Each real client site only has one screenshot (its live homepage), so the
// card shows that as one large image rather than the original's 3-image
// mosaic (which needed 3 distinct shots per project). Header is kept small
// on purpose so the image gets almost the entire card — description/tech
// tags live as an overlay on the image itself instead of separate rows.
function ProjectCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start start'] });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="relative h-[85vh]" style={{ top: index * 28 }}>
      <motion.article
        style={{ scale }}
        className="sticky top-24 flex h-[min(78vh,760px)] flex-col overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-3 sm:top-32 sm:rounded-[50px] sm:p-4 md:rounded-[60px] md:p-5"
      >
        <div className="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
          <span className="text-[clamp(1.5rem,4vw,3rem)] font-black leading-[.7] text-[#D7E2EA]">{project.num}</span>
          <div className="min-w-0 flex-1">
            <div className="text-[10px] font-medium uppercase tracking-widest text-[#D7E2EA]/60 sm:text-xs">
              {project.category}
            </div>
            <h3 className="truncate text-[clamp(1rem,2vw,1.7rem)] font-medium uppercase text-[#D7E2EA]">
              {project.name}
            </h3>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-4 py-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:flex"
          >
            Live Project <ArrowUpRight size={14} />
          </a>
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block min-h-0 flex-1 overflow-hidden rounded-[32px] sm:rounded-[42px] md:rounded-[50px]"
        >
          <img
            src={project.image}
            alt={`${project.name} homepage`}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 pt-10 sm:p-5">
            <p className="hidden text-xs font-light leading-relaxed text-[#D7E2EA]/80 sm:block sm:text-sm">
              {project.description}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="rounded-full border border-[#D7E2EA]/30 bg-black/30 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#D7E2EA] sm:text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </a>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] sm:hidden"
        >
          Live Project <ArrowUpRight size={16} />
        </a>
      </motion.article>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative z-10 bg-[#0C0C0C] px-5 pb-10 pt-20 sm:px-8 sm:pt-24 md:px-10 md:pt-32">
      <FadeIn y={20}>
        <p className="text-center text-sm font-medium uppercase tracking-[0.3em] text-[#D7E2EA]/40">03 — Projects</p>
      </FadeIn>
      <FadeIn delay={0.1} y={30}>
        <h2 className="hero-heading mb-12 mt-3 text-center text-[clamp(2.5rem,9vw,110px)] font-black uppercase leading-none tracking-tight sm:mb-16 md:mb-20">
          Things I&apos;ve Built
        </h2>
      </FadeIn>

      <div>
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} total={projects.length} />
        ))}
      </div>
    </section>
  );
}
