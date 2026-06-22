import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Carousel({ children, itemWidth = 360, gap = 24 }: { children: ReactNode[]; itemWidth?: number; gap?: number }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [bounds, setBounds] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const update = () => {
      if (!trackRef.current) return;
      const containerW = trackRef.current.parentElement?.clientWidth ?? 0;
      const totalW = children.length * (itemWidth + gap) - gap;
      setBounds({ left: Math.min(0, containerW - totalW), right: 0 });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [children.length, itemWidth, gap]);

  const slide = (dir: 1 | -1) => {
    const next = Math.max(bounds.left, Math.min(bounds.right, x.get() - dir * (itemWidth + gap)));
    animate(x, next, { duration: 0.6, ease: [0.22, 1, 0.36, 1] });
  };

  return (
    <div className="relative">
      <div className="overflow-hidden" data-lenis-prevent>
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={bounds}
          style={{ x, gap }}
          className="flex cursor-grab active:cursor-grabbing"
        >
          {children.map((c, i) => (
            <div key={i} style={{ width: itemWidth, flexShrink: 0 }}>{c}</div>
          ))}
        </motion.div>
      </div>
      <div className="mt-8 flex justify-end gap-3">
        <button onClick={() => slide(-1)} aria-label="Previous" className="h-12 w-12 rounded-full border border-[var(--navy)]/15 hover:border-[var(--gold)] hover:text-[var(--gold)] flex items-center justify-center transition-colors">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={() => slide(1)} aria-label="Next" className="h-12 w-12 rounded-full border border-[var(--navy)]/15 hover:border-[var(--gold)] hover:text-[var(--gold)] flex items-center justify-center transition-colors">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
