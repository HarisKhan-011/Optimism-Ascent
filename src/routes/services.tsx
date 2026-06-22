import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal, Stagger, itemVariants } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "./index";
import { SERVICES } from "@/components/data";
import { CheckCircle2 } from "lucide-react";
import { createSeo } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () =>
    createSeo({
      title: "Consulting Services — Optimism Saudi Arabia",
      description:
        "Business development, finance, operations, insurance, collections, public administration, and restructuring consulting in Saudi Arabia.",
      path: "/services",
      socialTitle: "Consulting Services — Optimism",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="The work, named honestly."
        subtitle="Each engagement starts with the same question: what's actually broken, and what's the fastest path to fix it? These are the disciplines we lead with."
      />
      <section className="py-24">
        <div className="container-90 space-y-24">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const reverse = i % 2 === 1;
            return (
              <Reveal key={s.slug}>
                <div
                  className={`grid lg:grid-cols-12 gap-12 items-start ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className="lg:col-span-5">
                    <div className="sticky top-32">
                      <div className="text-xs uppercase tracking-[0.22em] text-[var(--gold)] mb-3">
                        Service {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="h-16 w-16 rounded-2xl bg-[var(--navy)] text-warm-white flex items-center justify-center mb-6">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
                        {s.title}
                      </h2>
                      <p className="mt-5 text-muted-foreground leading-relaxed">{s.short}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-7 space-y-8">
                    <Block label="The challenge" body={s.challenge} />
                    <Block label="Our approach" body={s.approach} accent />
                    <Block label="The outcome" body={s.outcome} />
                  </div>
                </div>
                {i < SERVICES.length - 1 && <div className="mt-24 h-px bg-[var(--navy)]/10" />}
              </Reveal>
            );
          })}
        </div>
      </section>
      <CTABand />
    </>
  );
}

function Block({ label, body, accent }: { label: string; body: string; accent?: boolean }) {
  return (
    <div
      className={`p-8 rounded-2xl border ${accent ? "bg-[var(--navy-deep)] text-warm-white border-[var(--navy-deep)]" : "bg-[var(--sand)]/50 border-transparent"}`}
    >
      <div
        className={`text-xs uppercase tracking-[0.22em] mb-3 ${accent ? "text-[var(--gold)]" : "text-[var(--gold)]"}`}
      >
        {label}
      </div>
      <p
        className={`text-lg leading-relaxed ${accent ? "text-warm-white/90" : "text-[var(--ink)]"}`}
      >
        {body}
      </p>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative pt-40 pb-20 bg-[var(--navy-deep)] text-warm-white overflow-hidden">
      <div className="absolute inset-0 geo-pattern opacity-40" />
      <div className="container-90 relative">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.28em] text-[var(--gold)] mb-5">
            {eyebrow}
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-balance max-w-4xl leading-[1.02]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-8 text-warm-white/70 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
