import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export function GeometricHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const isMobile = useIsMobile();

  // 7-step ascending growth points (chart trajectory)
  const points = [
    { x: 60, y: 380 },
    { x: 130, y: 340 },
    { x: 200, y: 310 },
    { x: 270, y: 250 },
    { x: 340, y: 200 },
    { x: 410, y: 140 },
    { x: 480, y: 80 },
  ];
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

  return (
    <motion.div ref={ref} style={{ y: isMobile ? 0 : y }} className="relative w-full h-full">
      <svg viewBox="0 0 560 440" className="w-full h-full" aria-hidden role="img">
        <defs>
          <linearGradient id="goldStroke" x1="0" x2="1" y1="1" y2="0">
            <stop offset="0%" stopColor="#A8862E" />
            <stop offset="100%" stopColor="#E8C76F" />
          </linearGradient>
          <linearGradient id="lineFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#E8C76F" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#E8C76F" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="halo" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#E8C76F" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#E8C76F" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Tessellation backdrop */}
        <g opacity="0.18" stroke="#C9A24D" strokeWidth="0.6" fill="none">
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 8 }).map((_, col) => {
              const cx = 40 + col * 70;
              const cy = 60 + row * 70;
              return (
                <motion.polygon
                  key={`${row}-${col}`}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.02 * (row + col), duration: 0.8 }}
                  points={`${cx},${cy - 18} ${cx + 16},${cy - 9} ${cx + 16},${cy + 9} ${cx},${cy + 18} ${cx - 16},${cy + 9} ${cx - 16},${cy - 9}`}
                />
              );
            })
          )}
        </g>

        {/* Axis hints */}
        <motion.line
          x1="40" y1="400" x2="520" y2="400"
          stroke="#FEFCF7" strokeOpacity="0.15" strokeWidth="1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2 }}
        />

        {/* Area fill under curve */}
        <motion.path
          d={`${path} L 480 400 L 60 400 Z`}
          fill="url(#lineFill)"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 1 }}
        />

        {/* Growth curve */}
        <motion.path
          d={path}
          fill="none"
          stroke="url(#goldStroke)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.6, duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Data points */}
        {points.map((p, i) => (
          <motion.g key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 + i * 0.12, duration: 0.5 }}
          >
            <circle cx={p.x} cy={p.y} r="14" fill="url(#halo)" />
            <circle cx={p.x} cy={p.y} r="4" fill="#E8C76F" />
            <circle cx={p.x} cy={p.y} r="6.5" fill="none" stroke="#E8C76F" strokeOpacity="0.6" />
          </motion.g>
        ))}

        {/* Arrow head */}
        <motion.g
          initial={{ opacity: 0, x: -10, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          <polygon points="480,80 462,70 470,86" fill="#E8C76F" />
        </motion.g>

        {/* Ascending geometric shapes top right */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <polygon points="490,40 506,49 506,67 490,76 474,67 474,49" fill="none" stroke="#E8C76F" strokeWidth="1.2" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
