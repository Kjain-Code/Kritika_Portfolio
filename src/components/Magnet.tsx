import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

/**
 * Mouse-following magnetic hover effect — same behaviour as the original
 * Jack 3D Creator template: tracks the cursor relative to the element's
 * center and nudges the element toward it (divided by `strength`) whenever
 * the cursor is within `padding` px of the element's edge.
 */
export function Magnet({
  children,
  padding = 150,
  strength = 3,
}: {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      if (Math.abs(dx) < r.width / 2 + padding && Math.abs(dy) < r.height / 2 + padding) {
        setActive(true);
        x.set(dx / strength);
        y.set(dy / strength);
      } else {
        setActive(false);
        x.set(0);
        y.set(0);
      }
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, [x, y, padding, strength]);

  return (
    <motion.div
      ref={ref}
      style={{ x, y, willChange: 'transform', transition: active ? 'transform .3s ease-out' : 'transform .6s ease-in-out' }}
    >
      {children}
    </motion.div>
  );
}
