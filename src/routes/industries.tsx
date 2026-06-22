import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Stagger, itemVariants } from "@/components/Reveal";
import { motion } from "framer-motion";
import { INDUSTRIES } from "@/components/data";
import { CTABand } from "./index";
import { PageHeader } from "./services";
import { CTAButton } from "@/components/CTAButton";
import { ArrowUpRight } from "lucide-react";
import { createSeo } from "@/lib/seo";

export const Route = createFileRoute("/industries")({
  head: () =>
    createSeo({
      title: "Industries — Optimism For Business & Consulting",
      description:
        "Sector-fluent consulting across banking, insurance, government, real estate, healthcare, retail, SMEs, and energy.",
      path: "/industries",
      socialTitle: "Industries We Serve — Optimism",
    }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="We learn your sector before we propose anything."
        subtitle="The same financial principle plays out differently in a hospital than a holding company. We respect that — and price our judgment accordingly."
      />
      <section className="py-24">
        <div className="container-90">
          <Stagger className="grid md:grid-cols-2 gap-6" gap={0.05}>
            {INDUSTRIES.map((i) => {
              const Icon = i.icon;
              return (
                <motion.div
                  key={i.name}
                  variants={itemVariants}
                  className="group p-10 rounded-2xl bg-warm-white border border-[var(--navy)]/8 hover:border-[var(--gold)] hover:shadow-[var(--shadow-gold)] transition-all"
                >
                  <div className="flex items-start gap-5 mb-6">
                    <div className="h-14 w-14 shrink-0 rounded-xl bg-[var(--navy)]/5 text-[var(--navy)] flex items-center justify-center group-hover:bg-[var(--gold)] group-hover:text-[var(--navy-deep)] transition-colors">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl mb-2">{i.name}</h2>
                      <p className="text-muted-foreground leading-relaxed">{i.blurb}</p>
                    </div>
                  </div>
                  <a
                    href="/contact"
                    className="text-sm font-medium text-[var(--gold)] inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Discuss your engagement <ArrowUpRight className="h-4 w-4" />
                  </a>
                </motion.div>
              );
            })}
          </Stagger>
        </div>
      </section>
      <CTABand />
    </>
  );
}
