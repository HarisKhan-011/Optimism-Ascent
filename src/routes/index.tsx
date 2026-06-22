import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GeometricHero } from "@/components/GeometricHero";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, Stagger, itemVariants } from "@/components/Reveal";
import { Carousel } from "@/components/Carousel";
import { MetricCounter } from "@/components/MetricCounter";
import {
  SERVICES,
  INDUSTRIES,
  CHALLENGES,
  PROCESS,
  RESULTS,
  TESTIMONIALS,
  CREDENTIALS,
} from "@/components/data";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import skyline from "@/assets/riyadh-skyline.jpg";
import founder from "@/assets/founder.jpg";
import cta from "@/assets/cta-band.jpg";
import { createSeo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    createSeo({
      title: "Optimism For Business & Consulting — Riyadh, Saudi Arabia",
      description:
        "Business development, financial, and administrative consulting in Saudi Arabia. Practical outcomes, Vision 2030 aligned.",
      path: "/",
      socialTitle: "Optimism — Saudi Business Consulting",
    }),
  component: Home,
});

const HEADLINES = [
  "Optimize Your Operations.",
  "Strengthen Your Finances.",
  "Grow with Confidence.",
  "Align with Vision 2030.",
];

function Home() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HEADLINES.length), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] bg-[var(--navy-deep)] text-warm-white overflow-hidden">
        <div className="absolute inset-0 geo-pattern opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--navy-deep)]" />
        <div className="container-90 relative z-10 pt-32 pb-20 min-h-[100svh] grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-xs uppercase tracking-[0.28em] text-[var(--gold)] mb-6"
            >
              Saudi Arabia · Business & Management Consulting
            </motion.div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-balance mb-8">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="block"
              >
                Build the operation
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="block"
              >
                your ambition deserves.
              </motion.span>
            </h1>

            <div className="h-10 mb-10">
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl font-display text-[var(--gold-light)]"
              >
                {HEADLINES[idx]}
              </motion.div>
            </div>

            <p className="text-warm-white/75 max-w-xl text-lg leading-relaxed mb-10">
              We're a Saudi-based consulting firm helping leaders fix what slows the business,
              sharpen the numbers, and grow with structure — without the deck-first,
              deliverable-light approach.
            </p>

            <div className="flex flex-wrap gap-4">
              <CTAButton to="/contact" variant="gold" size="lg">
                Book a Consultation <ArrowUpRight className="h-4 w-4" />
              </CTAButton>
              <CTAButton to="/services" variant="outline" size="lg">
                Explore Services
              </CTAButton>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="lg:col-span-5 hidden md:block"
          >
            <div className="aspect-square max-w-[540px] mx-auto">
              <GeometricHero />
            </div>
          </motion.div>

          {/* Mobile static hero accent */}
          <div className="md:hidden lg:hidden">
            <img src={skyline} alt="" className="rounded-2xl opacity-60" loading="lazy" />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-[var(--navy-deep)] text-warm-white border-t border-white/8 pb-24">
        <div className="container-90 grid md:grid-cols-3 gap-8 md:gap-12">
          {[
            { v: 8, suf: "+", l: "Industries Served" },
            { v: 15, suf: "+", l: "Years Combined Experience" },
            { v: 120, suf: "+", l: "Engagements Delivered" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.1} className="border-l border-[var(--gold)]/40 pl-6">
              <div className="font-display text-5xl md:text-6xl text-[var(--gold)]">
                <MetricCounter value={s.v} suffix={s.suf} />
              </div>
              <div className="mt-2 text-sm uppercase tracking-[0.18em] text-warm-white/60">
                {s.l}
              </div>
            </Reveal>
          ))}
        </div>
        <div className="container-90 mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/8 pt-8">
          <span className="text-xs uppercase tracking-[0.22em] text-[var(--gold)]/80">
            Credentials
          </span>
          {CREDENTIALS.map((c) => (
            <span key={c} className="text-sm text-warm-white/70 flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-[var(--gold)]" />
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-32">
        <div className="container-90">
          <SectionHeading
            eyebrow="What we fix"
            title="The business pain you actually feel."
            subtitle="The work is rarely glamorous. It's the things that quietly compound until they don't."
          />
          <Stagger className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHALLENGES.map((c) => (
              <motion.div
                key={c.title}
                variants={itemVariants}
                className="group p-8 rounded-2xl bg-[var(--sand)]/60 hover:bg-warm-white hover:shadow-[var(--shadow-elegant)] transition-all"
              >
                <div className="h-8 w-8 rounded-full bg-[var(--gold)]/15 text-[var(--gold)] flex items-center justify-center font-display mb-5 group-hover:bg-[var(--gold)] group-hover:text-[var(--navy-deep)] transition-colors">
                  ·
                </div>
                <h3 className="font-display text-2xl mb-3">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SERVICES CAROUSEL */}
      <section className="py-32 bg-[var(--sand)]/40 geo-pattern">
        <div className="container-90">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <SectionHeading
              eyebrow="Services"
              title="Seven disciplines. One operating philosophy."
              subtitle="We work where execution meets accountability — not in slide decks."
            />
            <CTAButton to="/services" variant="ghost">
              All services →
            </CTAButton>
          </div>
          <Carousel itemWidth={360}>
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.slug}
                  className="h-full bg-warm-white rounded-2xl p-8 border border-[var(--navy)]/8 hover:border-[var(--gold)] hover:shadow-[var(--shadow-gold)] transition-all duration-500 group"
                >
                  <div className="h-12 w-12 rounded-xl bg-[var(--navy)]/5 text-[var(--navy)] flex items-center justify-center mb-6 group-hover:bg-[var(--gold)] group-hover:text-[var(--navy-deep)] transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl leading-tight mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-6">{s.short}</p>
                  <Link
                    to="/services"
                    className="text-sm font-medium text-[var(--gold)] inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Learn more <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>

      {/* HOW WE WORK TEASER */}
      <section className="py-32">
        <div className="container-90 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="How we work" title="Five steps. No theatrics." />
            <p className="text-muted-foreground mt-6 leading-relaxed">
              We diagnose what's actually wrong, agree on the path forward, and stay in the work
              until the change holds. The plan is the easy part — implementation is where most
              engagements break. We don't.
            </p>
            <div className="mt-8">
              <CTAButton to="/process" variant="navy">
                See the process
              </CTAButton>
            </div>
          </div>
          <div className="lg:col-span-7">
            <Stagger className="space-y-3" gap={0.1}>
              {PROCESS.map((p) => (
                <motion.div
                  key={p.phase}
                  variants={itemVariants}
                  className="group flex gap-6 p-6 rounded-xl border border-[var(--navy)]/8 hover:border-[var(--gold)] transition-colors"
                >
                  <div className="text-[var(--gold)] font-display text-3xl">{p.phase}</div>
                  <div>
                    <h4 className="font-display text-xl mb-1">{p.title}</h4>
                    <p className="text-muted-foreground text-sm">{p.body}</p>
                  </div>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-32 bg-[var(--navy-deep)] text-warm-white">
        <div className="container-90">
          <SectionHeading
            eyebrow="Industries"
            title="Where we work."
            subtitle="Sector fluency matters. We build the muscle for each industry we serve."
            light
          />
          <Carousel itemWidth={300}>
            {INDUSTRIES.map((i) => {
              const Icon = i.icon;
              return (
                <div
                  key={i.name}
                  className="h-full rounded-2xl p-8 bg-white/5 border border-white/10 hover:border-[var(--gold)] hover:bg-white/8 transition-all"
                >
                  <div className="h-12 w-12 rounded-xl bg-[var(--gold)]/15 text-[var(--gold)] flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl mb-2">{i.name}</h3>
                  <p className="text-warm-white/70 text-sm leading-relaxed">{i.blurb}</p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-32">
        <div className="container-90">
          <SectionHeading
            eyebrow="Outcomes"
            title="The numbers that mattered to our clients."
            subtitle="Representative engagements. Specifics anonymized; outcomes verifiable on request."
          />
          <Stagger className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESULTS.map((r) => (
              <motion.div
                key={r.metric + r.label}
                variants={itemVariants}
                className="p-8 rounded-2xl bg-warm-white border border-[var(--navy)]/8 hover:border-[var(--gold)] hover:shadow-[var(--shadow-gold)] transition-all"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] mb-4">
                  {r.tag}
                </div>
                <div className="font-display text-5xl text-[var(--navy-deep)] mb-2">{r.metric}</div>
                <div className="text-sm font-medium mb-4">{r.label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.body}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-32 bg-[var(--sand)]/40">
        <div className="container-90 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <img
                src={founder}
                alt="Ibrahim Abdul Rahman"
                width={896}
                height={1120}
                loading="lazy"
                className="rounded-2xl shadow-[var(--shadow-elegant)] w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-[var(--gold)] text-[var(--navy-deep)] p-6 rounded-xl max-w-[220px] shadow-xl">
                <div className="text-xs uppercase tracking-[0.18em] mb-1">Founder</div>
                <div className="font-display text-lg leading-tight">Ibrahim Abdul Rahman</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-7">
            <SectionHeading eyebrow="About" title="A practitioner's firm. Not a slide-deck firm." />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Optimism was founded on a simple premise: most consulting fails not at strategy, but
              at the seam where strategy meets the operation. Our work lives in that seam.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Led by Ibrahim Abdul Rahman, with experience across business operations, finance,
              insurance, collections, and public administration — we bring the kind of
              cross-disciplinary judgment that complex Saudi businesses need.
            </p>
            <div className="mt-8">
              <CTAButton to="/about" variant="navy">
                About Optimism
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISION 2030 */}
      <section className="py-32">
        <div className="container-90 max-w-4xl text-center">
          <div className="text-xs uppercase tracking-[0.28em] text-[var(--gold)] mb-6">
            Vision 2030
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-balance">
            Saudi Arabia is rewriting its economic playbook. We help organizations write their
            chapter in it.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Diversification, private-sector growth, regulatory modernization — Vision 2030 is the
            backdrop to nearly every engagement we run. We treat it as the operating context, not a
            marketing line.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-[var(--navy-deep)] text-warm-white">
        <div className="container-90">
          <SectionHeading
            eyebrow="Clients"
            title="What our clients say when no one's listening."
            light
          />
          <Carousel itemWidth={460}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="h-full rounded-2xl p-10 bg-white/5 border border-white/10">
                <div className="font-display text-4xl text-[var(--gold)] mb-4">"</div>
                <p className="text-lg leading-relaxed text-warm-white/90 mb-6">{t.quote}</p>
                <div className="text-sm text-warm-white/60">— {t.author}</div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTABand />
    </>
  );
}

export function CTABand() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={cta}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[var(--navy-deep)]/85" />
      <div className="container-90 relative py-32 text-center text-warm-white">
        <Reveal>
          <h2 className="font-display text-5xl md:text-7xl text-balance max-w-4xl mx-auto leading-[1.05]">
            Let's talk about what's slowing you down.
          </h2>
          <p className="mt-6 text-warm-white/75 text-lg max-w-xl mx-auto">
            A 30-minute consultation. No pitch deck. Just a clear read on where to start.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CTAButton to="/contact" variant="gold" size="lg">
              Book a Consultation
            </CTAButton>
            <CTAButton to="/services" variant="outline" size="lg">
              Browse Services
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
