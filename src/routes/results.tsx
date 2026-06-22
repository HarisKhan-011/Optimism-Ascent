import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Stagger, itemVariants } from "@/components/Reveal";
import { motion } from "framer-motion";
import { RESULTS, TESTIMONIALS } from "@/components/data";
import { Carousel } from "@/components/Carousel";
import { CTABand } from "./index";
import { PageHeader } from "./services";
import { MetricCounter } from "@/components/MetricCounter";
import { createSeo } from "@/lib/seo";

export const Route = createFileRoute("/results")({
  head: () =>
    createSeo({
      title: "Results & Case Studies — Optimism Consulting",
      description:
        "Explore representative client outcomes from Optimism across finance, operations, collections, and organizational restructuring.",
      path: "/results",
      socialTitle: "Client Results — Optimism Consulting",
    }),
  component: ResultsPage,
});

function ResultsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Results"
        title="Numbers from the work — not from the brochure."
        subtitle="Representative client outcomes. Specifics anonymized; references available under NDA on request."
      />

      <section className="py-24">
        <div className="container-90 grid md:grid-cols-4 gap-8 mb-24">
          {[
            { v: 42, suf: "%", l: "Avg. DSO Reduction" },
            { v: 3, suf: "x", l: "Faster Financial Close" },
            { v: 100, suf: "%", l: "Audit Pass Rate" },
            { v: 14, suf: "M", l: "SAR Saved Annually" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.08} className="text-center">
              <div className="font-display text-5xl md:text-6xl text-[var(--gold)]">
                <MetricCounter value={s.v} suffix={s.suf} />
              </div>
              <div className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                {s.l}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="container-90">
          <Stagger className="grid md:grid-cols-2 gap-6">
            {RESULTS.map((r) => (
              <motion.div
                key={r.label}
                variants={itemVariants}
                className="p-10 rounded-2xl bg-warm-white border border-[var(--navy)]/8 hover:border-[var(--gold)] transition-colors"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-xs uppercase tracking-[0.22em] text-[var(--gold)]">
                    {r.tag}
                  </div>
                  <div className="font-display text-5xl text-[var(--navy-deep)]">{r.metric}</div>
                </div>
                <div className="font-display text-2xl mb-3">{r.label}</div>
                <p className="text-muted-foreground leading-relaxed">{r.body}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-32 bg-[var(--navy-deep)] text-warm-white">
        <div className="container-90">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.28em] text-[var(--gold)] mb-5">
              Testimonials
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-balance max-w-3xl">
              What our clients say.
            </h2>
          </Reveal>
          <div className="mt-16">
            <Carousel itemWidth={500}>
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="h-full rounded-2xl p-10 bg-white/5 border border-white/10">
                  <div className="font-display text-5xl text-[var(--gold)] mb-4">"</div>
                  <p className="text-xl leading-relaxed text-warm-white/90 mb-8">{t.quote}</p>
                  <div className="text-sm text-warm-white/60">— {t.author}</div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
