import { Reveal } from "./Reveal";

export function SectionHeading({ eyebrow, title, subtitle, light, align = "left" }: { eyebrow?: string; title: string; subtitle?: string; light?: boolean; align?: "left" | "center" }) {
  return (
    <Reveal className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`text-xs uppercase tracking-[0.24em] mb-4 ${light ? "text-[var(--gold-light)]" : "text-[var(--gold)]"}`}>{eyebrow}</div>
      )}
      <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl text-balance ${light ? "text-warm-white" : "text-[var(--navy-deep)]"}`}>{title}</h2>
      {subtitle && <p className={`mt-5 text-lg text-balance ${light ? "text-warm-white/75" : "text-muted-foreground"}`}>{subtitle}</p>}
    </Reveal>
  );
}
