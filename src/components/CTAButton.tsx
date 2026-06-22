import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "navy" | "ghost" | "outline";
const styles: Record<Variant, string> = {
  gold: "bg-[var(--gold)] text-[var(--navy-deep)] hover:bg-[var(--gold-light)] gold-glow",
  navy: "bg-[var(--navy)] text-[var(--warm-white)] hover:bg-[var(--navy-deep)]",
  ghost: "bg-transparent text-current hover:bg-[color-mix(in_oklab,var(--gold)_15%,transparent)]",
  outline: "border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--navy-deep)]",
};

export function CTAButton({
  children, to, href, onClick, variant = "gold", className, size = "md", type = "button",
}: {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const sizes = { sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-sm", lg: "px-8 py-4 text-base" };

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };
  const handleLeave = () => { if (ref.current) ref.current.style.transform = ""; };

  const inner = (
    <motion.span
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "relative inline-flex items-center gap-2 rounded-full font-medium tracking-wide uppercase transition-colors duration-300 will-change-transform",
        styles[variant], sizes[size], className
      )}
    >
      <span ref={ref} className="inline-flex items-center gap-2 transition-transform duration-200 ease-out">
        {children}
      </span>
    </motion.span>
  );

  if (to) return <Link to={to}>{inner}</Link>;
  if (href) return <a href={href} target="_blank" rel="noreferrer">{inner}</a>;
  return <button type={type} onClick={onClick} className="inline-block">{inner}</button>;
}
