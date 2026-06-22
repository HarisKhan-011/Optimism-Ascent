import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ConsultationFlow } from "@/components/ConsultationFlow";
import { QuoteInquiry } from "@/components/QuoteInquiry";
import { PageHeader } from "./services";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { createSeo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    createSeo({
      title: "Contact & Book a Consultation — Optimism",
      description:
        "Book a consultation with Optimism For Business & Consulting in Saudi Arabia. Start with a free 30-minute discovery call.",
      path: "/contact",
      socialTitle: "Book a Consultation with Optimism",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk."
        subtitle="Pick the path that fits — a full consultation, a quick quote inquiry, or a direct line to the team."
      />

      <section className="py-24">
        <div className="container-90 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-7">
            <div className="bg-warm-white rounded-3xl p-8 md:p-12 border border-[var(--navy)]/8 shadow-[var(--shadow-elegant)]">
              <div className="text-xs uppercase tracking-[0.22em] text-[var(--gold)] mb-3">
                Primary · 4 steps · ~2 minutes
              </div>
              <h2 className="font-display text-3xl md:text-4xl mb-8">
                Request a free consultation
              </h2>
              <ConsultationFlow />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 space-y-6">
            <div className="bg-[var(--navy-deep)] text-warm-white rounded-3xl p-8">
              <div className="text-xs uppercase tracking-[0.22em] text-[var(--gold)] mb-3">
                Get a quote
              </div>
              <h3 className="font-display text-2xl mb-6">
                Have a defined scope? Get a tailored quote.
              </h3>
              <QuoteInquiry />
            </div>

            <div className="bg-[var(--sand)]/60 rounded-3xl p-8 space-y-4">
              <div className="text-xs uppercase tracking-[0.22em] text-[var(--gold)]">
                Direct contact
              </div>
              <Row icon={<Phone />} label="Phone" value="+966 11 000 0000" />
              <Row icon={<Mail />} label="Email" value="hello@optimism.sa" />
              <Row icon={<MapPin />} label="Office" value="Riyadh, Saudi Arabia" />
              <Row
                icon={<Linkedin />}
                label="LinkedIn"
                value="Ibrahim Abdul Rahman"
                href="https://www.linkedin.com/in/ibrahimhussaien/"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-90">
          <div className="rounded-3xl overflow-hidden border border-[var(--navy)]/10 aspect-[16/7]">
            <iframe
              title="Optimism office location"
              src="https://maps.google.com/maps?q=Riyadh%2C%20Saudi%20Arabia&t=&z=11&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Row({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const Inner = (
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 rounded-lg bg-[var(--gold)]/15 text-[var(--gold)] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
  if (href)
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="block hover:opacity-80 transition-opacity"
      >
        {Inner}
      </a>
    );
  return Inner;
}
