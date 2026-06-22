import { Link, useRouterState } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { CTAButton } from "./CTAButton";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/process", label: "Process" },
  { to: "/results", label: "Results" },
  { to: "/about", label: "About" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const onDark = location.pathname === "/";

  useEffect(() => scrollY.on("change", v => setSolid(v > 60)), [scrollY]);
  useEffect(() => setOpen(false), [location.pathname]);

  const bg = useTransform(scrollY, [0, 80], [0, 1]);
  const textLight = onDark && !solid;

  return (
    <>
      <motion.header
        className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b"
        style={{
          backgroundColor: solid ? "rgba(254,252,247,0.92)" : (onDark ? "rgba(15,27,61,0.0)" : "rgba(254,252,247,0.6)"),
          borderColor: solid ? "rgba(15,27,61,0.08)" : "transparent",
        }}
      >
        <div className="container-90 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <Logo dark={textLight} />
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-colors ${textLight ? "text-warm-white/85 hover:text-warm-white" : "text-[var(--navy)]/80 hover:text-[var(--navy)]"}`}
                activeProps={{ className: "text-[var(--gold)]" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {({ isActive }) => (
                  <>
                    <span>{l.label}</span>
                    {isActive && (
                      <motion.span layoutId="navUnderline" className="absolute left-3 right-3 -bottom-0.5 h-px bg-[var(--gold)]" />
                    )}
                  </>
                )}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <CTAButton to="/contact" variant="gold" size="sm">Book a Consultation</CTAButton>
          </div>
          <button className="lg:hidden p-2" onClick={() => setOpen(true)} aria-label="Menu">
            <Menu className={textLight ? "text-warm-white" : "text-[var(--navy)]"} />
          </button>
        </div>
      </motion.header>

      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[60] bg-[var(--navy-deep)] text-warm-white flex flex-col">
          <div className="container-90 flex items-center justify-between h-20">
            <Logo dark />
            <button onClick={() => setOpen(false)} aria-label="Close"><X /></button>
          </div>
          <nav className="container-90 flex-1 flex flex-col gap-2 justify-center">
            {links.map((l, i) => (
              <motion.div key={l.to} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                <Link to={l.to} className="block text-4xl font-display py-3 hover:text-[var(--gold)] transition-colors">{l.label}</Link>
              </motion.div>
            ))}
            <div className="mt-8"><CTAButton to="/contact" variant="gold" size="lg">Book a Consultation</CTAButton></div>
          </nav>
        </motion.div>
      )}
    </>
  );
}

function Logo({ dark }: { dark?: boolean }) {
  return (
    <span className={`flex items-center gap-2.5 ${dark ? "text-warm-white" : "text-[var(--navy-deep)]"}`}>
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
        <path d="M16 3 L28 10 L28 22 L16 29 L4 22 L4 10 Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 20 L14 16 L18 18 L22 12" stroke="#C9A24D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="22" cy="12" r="2" fill="#C9A24D" />
      </svg>
      <span className="font-display text-lg leading-tight">
        Optimism<span className="text-[var(--gold)]">.</span>
      </span>
    </span>
  );
}
