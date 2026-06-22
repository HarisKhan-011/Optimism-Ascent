import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal, Stagger, itemVariants } from "@/components/Reveal";
import { INSIGHTS } from "@/components/data";
import { CTABand } from "./index";
import { PageHeader } from "./services";
import { ArrowUpRight } from "lucide-react";
import { createSeo } from "@/lib/seo";

export const Route = createFileRoute("/insights")({
  head: () =>
    createSeo({
      title: "Insights — Optimism For Business & Consulting",
      description:
        "Practical writing on finance, operations, collections, and Vision 2030 from the Optimism consulting team.",
      path: "/insights",
      socialTitle: "Consulting Insights from Optimism",
    }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Writing from the work — not from the brochure."
        subtitle="Short, practical pieces on the operational and financial decisions our clients face most often."
      />

      <section className="py-24">
        <div className="container-90">
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSIGHTS.map((p, i) => (
              <motion.a
                key={p.title}
                href="https://www.linkedin.com/in/ibrahimhussaien/"
                target="_blank"
                rel="noreferrer"
                variants={itemVariants}
                className="group flex flex-col p-8 rounded-2xl bg-warm-white border border-[var(--navy)]/8 hover:border-[var(--gold)] hover:shadow-[var(--shadow-gold)] transition-all"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] mb-6">
                  <span className="text-[var(--gold)]">{p.category}</span>
                  <span className="text-muted-foreground">{p.read}</span>
                </div>
                <h3 className="font-display text-2xl leading-tight mb-6 flex-1 text-balance group-hover:text-[var(--navy-deep)]">
                  {p.title}
                </h3>
                <div className="text-sm font-medium text-[var(--gold)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read on LinkedIn <ArrowUpRight className="h-4 w-4" />
                </div>
              </motion.a>
            ))}
          </Stagger>

          <Reveal className="mt-24 text-center">
            <p className="text-muted-foreground">
              More writing on{" "}
              <a
                href="https://www.linkedin.com/in/ibrahimhussaien/"
                target="_blank"
                rel="noreferrer"
                className="text-[var(--gold)] hover:underline"
              >
                Ibrahim's LinkedIn
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
