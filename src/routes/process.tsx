import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, Stagger, itemVariants } from "@/components/Reveal";
import { PROCESS } from "@/components/data";
import { CTABand } from "./index";
import { PageHeader } from "./services";
import { createSeo } from "@/lib/seo";

export const Route = createFileRoute("/process")({
  head: () =>
    createSeo({
      title: "How We Work — Optimism For Business & Consulting",
      description:
        "Discover, diagnose, design, implement, and monitor with Optimism's practical five-step consulting process.",
      path: "/process",
      socialTitle: "How Optimism Works",
    }),
  component: ProcessPage,
});

function ProcessPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.05, 0.85], ["0%", "100%"]);

  return (
    <>
      <PageHeader
        eyebrow="How we work"
        title="The five steps that decide whether a consulting engagement actually changes anything."
      />
      <section className="py-24">
        <div ref={ref} className="container-90 max-w-4xl relative">
          {/* Spine */}
          <div className="absolute left-7 md:left-10 top-2 bottom-2 w-px bg-[var(--navy)]/10" />
          <motion.div
            style={{ height: lineH }}
            className="absolute left-7 md:left-10 top-2 w-px bg-[var(--gold)]"
          />

          <Stagger className="space-y-16">
            {PROCESS.map((p, i) => (
              <motion.div key={p.phase} variants={itemVariants} className="relative pl-20 md:pl-28">
                <div className="absolute left-0 md:left-2 top-1 h-14 w-14 rounded-full bg-[var(--warm-white)] border-2 border-[var(--gold)] text-[var(--navy)] font-display text-lg flex items-center justify-center">
                  {p.phase}
                </div>
                <h2 className="font-display text-3xl md:text-5xl mb-4">{p.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{p.body}</p>
                {i === 4 && (
                  <div className="mt-6 inline-block text-xs uppercase tracking-[0.22em] text-[var(--gold)] border border-[var(--gold)]/40 rounded-full px-4 py-1.5">
                    The work doesn't end at handover.
                  </div>
                )}
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-32 bg-[var(--sand)]/40">
        <div className="container-90 grid md:grid-cols-3 gap-8">
          {[
            {
              t: "We measure outcomes, not hours.",
              b: "Every engagement defines success up front — and we report against it.",
            },
            {
              t: "We work in the operation.",
              b: "Not from a back room. The team sees us, learns from us, and owns the change.",
            },
            {
              t: "We stay until it holds.",
              b: "A change that reverses six months later isn't a result. We don't book those.",
            },
          ].map((c) => (
            <Reveal
              key={c.t}
              className="p-8 rounded-2xl bg-warm-white border border-[var(--navy)]/8"
            >
              <h3 className="font-display text-2xl mb-3">{c.t}</h3>
              <p className="text-muted-foreground">{c.b}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
