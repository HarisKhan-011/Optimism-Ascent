import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "./index";
import { PageHeader } from "./services";
import { CTAButton } from "@/components/CTAButton";
import { Linkedin } from "lucide-react";
import founder from "@/assets/founder.jpg";
import boardroom from "@/assets/boardroom.jpg";
import { createSeo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    createSeo({
      title: "About — Optimism For Business & Consulting",
      description:
        "Founded by Ibrahim Abdul Rahman. A practitioner's consulting firm in Saudi Arabia, built on integrity, efficiency, growth, and partnership.",
      path: "/about",
      socialTitle: "About Optimism",
    }),
  component: AboutPage,
});

const VALUES = [
  { t: "Integrity", b: "We say what we see — even when it's not what the room wants to hear." },
  {
    t: "Efficiency",
    b: "Time is the client's most expensive asset. We respect it in every deliverable.",
  },
  {
    t: "Growth",
    b: "Our work is judged by whether the business grew. Not by whether the report was thick.",
  },
  {
    t: "Partnership",
    b: "We're long-term operators, not transactional vendors. Most clients stay for years.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A firm built on the work — not the slide."
        subtitle="Optimism For Business & Consulting was founded to close the gap between strategy and execution that breaks most consulting engagements."
      />

      <section className="py-24">
        <div className="container-90 grid lg:grid-cols-12 gap-16 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
            <img
              src={founder}
              alt="Ibrahim Abdul Rahman, Founder"
              width={896}
              height={1120}
              loading="lazy"
              className="rounded-2xl shadow-[var(--shadow-elegant)]"
            />
            <div className="mt-8">
              <div className="text-xs uppercase tracking-[0.22em] text-[var(--gold)] mb-2">
                Founder · Lead Consultant
              </div>
              <div className="font-display text-3xl">Ibrahim Abdul Rahman</div>
              <a
                href="https://www.linkedin.com/in/ibrahimhussaien/"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--gold)] hover:underline"
              >
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-5">Our story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Optimism was founded out of a frustration we kept seeing across the Saudi market:
                brilliant strategies arriving in beautiful decks, then quietly dying in the
                operation. The consultants left, the binder went on a shelf, and the business looked
                the same six months later.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We built Optimism to fix that. We stay in the operation. We measure ourselves on
                whether the change holds. And we work shoulder-to-shoulder with the team that has to
                live with the result.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-5">About Ibrahim</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ibrahim Abdul Rahman is a Saudi business development and administrative consulting
                professional with experience spanning operations, financial and administrative
                consulting, insurance, collections, accounting, and public administration. That
                breadth is deliberate — most consulting problems sit at the intersection of two or
                three disciplines, not inside one.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-5">Why "Optimism"?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Consulting often defaults to a problem-first vocabulary — risks, gaps, deficiencies.
                Useful, but exhausting. We named the firm Optimism because the work itself is
                fundamentally hopeful: organizations can be sharper, finances can be cleaner, growth
                can be built. The name is a discipline as much as a promise.
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--sand)]/60 p-10">
              <div className="text-xs uppercase tracking-[0.22em] text-[var(--gold)] mb-4">
                Vision 2030 alignment
              </div>
              <p className="text-lg leading-relaxed">
                We work with private-sector organizations preparing for the next phase of Saudi
                Arabia's transformation — financial discipline, operational maturity, regulatory
                readiness, and growth that compounds. Vision 2030 isn't a slogan we add at the end
                of a proposal. It's the strategic context for nearly every engagement we run.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-32 bg-[var(--navy-deep)] text-warm-white relative overflow-hidden">
        <div className="absolute inset-0 geo-pattern opacity-30" />
        <div className="container-90 relative">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.28em] text-[var(--gold)] mb-5">
              Our values
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-balance max-w-2xl">
              Four commitments. Tested on every engagement.
            </h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {VALUES.map((v, i) => (
              <Reveal
                key={v.t}
                delay={i * 0.08}
                className="p-10 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="font-display text-3xl text-[var(--gold)] mb-3">{v.t}</div>
                <p className="text-warm-white/80 leading-relaxed">{v.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container-90 grid lg:grid-cols-12 gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <img
              src={boardroom}
              alt=""
              width={1280}
              height={896}
              loading="lazy"
              className="rounded-2xl shadow-[var(--shadow-elegant)]"
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="text-xs uppercase tracking-[0.22em] text-[var(--gold)] mb-4">
              Mission
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-6 text-balance">
              Improving organizational efficiency. Supporting growth. Optimizing the process.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We exist to help Saudi and Gulf businesses operate at the level their ambitions
              require. Less drag, sharper numbers, clearer governance — and an operating system that
              scales with the business instead of breaking under it.
            </p>
            <div className="mt-8">
              <CTAButton to="/contact" variant="navy">
                Start a conversation
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
