import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CTAButton } from "./CTAButton";
import { Check, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

const services = [
  "Business Development Strategy",
  "Financial & Accounting Consulting",
  "Administrative & Operational Consulting",
  "Insurance Advisory",
  "Collections & Debt Recovery",
  "Public Administration Support",
  "Organizational Restructuring",
  "Not sure — help me decide",
];
const industries = ["Banking & Finance", "Insurance", "Government", "Real Estate", "Healthcare", "Retail", "Energy", "SME / Startup", "Other"];
const sizes = ["1–10", "11–50", "51–200", "201–1000", "1000+"];
const windows = ["Within 1 week", "Within 2 weeks", "This month", "Flexible"];

type State = {
  service: string;
  industry: string;
  size: string;
  challenge: string;
  window: string;
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  description: string;
};

const initial: State = { service: "", industry: "", size: "", challenge: "", window: "", name: "", company: "", role: "", email: "", phone: "", description: "" };

export function ConsultationFlow() {
  const [step, setStep] = useState(1);
  const [s, setS] = useState<State>(initial);
  const [done, setDone] = useState(false);

  const update = (k: keyof State, v: string) => setS(p => ({ ...p, [k]: v }));
  const canNext = step === 1 ? !!s.service : step === 2 ? s.industry && s.size && s.challenge.trim().length > 5 : step === 3 ? !!s.window : s.name && s.company && s.email && s.phone;

  if (done) {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[var(--gold)]/15 text-[var(--gold)] mb-6">
          <Check className="h-10 w-10" strokeWidth={2.5} />
        </div>
        <h3 className="font-display text-4xl mb-3">Thank you, {s.name.split(" ")[0]}.</h3>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">Our team will contact you within 24 hours to schedule your consultation.</p>
        <div className="max-w-md mx-auto text-left bg-[var(--sand)]/60 rounded-2xl p-6 space-y-2 text-sm">
          <Summary label="Service" value={s.service} />
          <Summary label="Industry" value={s.industry} />
          <Summary label="Company size" value={s.size} />
          <Summary label="Time window" value={s.window} />
          <Summary label="Contact" value={`${s.email} · ${s.phone}`} />
        </div>
        <button onClick={() => { setDone(false); setStep(1); setS(initial); }} className="mt-8 text-sm text-[var(--gold)] hover:underline">Submit another</button>
      </motion.div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-10">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="flex-1 h-1 rounded-full overflow-hidden bg-[var(--navy)]/10">
            <motion.div initial={false} animate={{ width: step >= i ? "100%" : "0%" }} transition={{ duration: 0.5 }} className="h-full bg-[var(--gold)]" />
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
          {step === 1 && (
            <Step title="What do you need help with?" subtitle="Pick the area closest to your goal. We'll refine the rest together.">
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map(svc => (
                  <button key={svc} onClick={() => update("service", svc)} className={`text-left p-5 rounded-xl border-2 transition-all ${s.service === svc ? "border-[var(--gold)] bg-[var(--gold)]/8" : "border-[var(--navy)]/10 hover:border-[var(--navy)]/30"}`}>
                    <div className="text-sm font-medium">{svc}</div>
                  </button>
                ))}
              </div>
            </Step>
          )}
          {step === 2 && (
            <Step title="Tell us about your business" subtitle="A few details so we come prepared.">
              <div className="space-y-6">
                <Field label="Industry">
                  <div className="flex flex-wrap gap-2">{industries.map(x => <Pill key={x} active={s.industry === x} onClick={() => update("industry", x)}>{x}</Pill>)}</div>
                </Field>
                <Field label="Company size">
                  <div className="flex flex-wrap gap-2">{sizes.map(x => <Pill key={x} active={s.size === x} onClick={() => update("size", x)}>{x}</Pill>)}</div>
                </Field>
                <Field label="Biggest challenge right now">
                  <textarea value={s.challenge} onChange={e => update("challenge", e.target.value)} rows={4} placeholder="e.g. Collections aging out past 90 days, financial reporting feels reactive…" className="w-full rounded-xl border border-[var(--navy)]/15 bg-warm-white p-4 text-sm focus:border-[var(--gold)] focus:outline-none" />
                </Field>
              </div>
            </Step>
          )}
          {step === 3 && (
            <Step title="When would you like to talk?" subtitle="We'll work around your schedule.">
              <div className="grid sm:grid-cols-2 gap-3">
                {windows.map(w => (
                  <button key={w} onClick={() => update("window", w)} className={`p-5 rounded-xl border-2 transition-all ${s.window === w ? "border-[var(--gold)] bg-[var(--gold)]/8" : "border-[var(--navy)]/10 hover:border-[var(--navy)]/30"}`}>
                    {w}
                  </button>
                ))}
              </div>
            </Step>
          )}
          {step === 4 && (
            <Step title="Where can we reach you?" subtitle="One last step.">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input label="Full name" value={s.name} onChange={v => update("name", v)} />
                <Input label="Company" value={s.company} onChange={v => update("company", v)} />
                <Input label="Role" value={s.role} onChange={v => update("role", v)} />
                <Input label="Email" type="email" value={s.email} onChange={v => update("email", v)} />
                <Input label="Phone" value={s.phone} onChange={v => update("phone", v)} className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <Field label="Brief description (optional)">
                    <textarea value={s.description} onChange={e => update("description", e.target.value)} rows={3} className="w-full rounded-xl border border-[var(--navy)]/15 bg-warm-white p-4 text-sm focus:border-[var(--gold)] focus:outline-none" />
                  </Field>
                </div>
              </div>
            </Step>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 flex items-center justify-between">
        <button onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[var(--navy)] disabled:opacity-30">
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        {step < 4 ? (
          <CTAButton onClick={() => canNext && setStep(step + 1)} variant={canNext ? "gold" : "ghost"}>
            Continue <ArrowRight className="h-4 w-4" />
          </CTAButton>
        ) : (
          <CTAButton onClick={() => canNext && setDone(true)} variant={canNext ? "gold" : "ghost"}>
            <Sparkles className="h-4 w-4" /> Submit
          </CTAButton>
        )}
      </div>
    </div>
  );
}

function Step({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-3xl md:text-4xl mb-2">{title}</h3>
      <p className="text-muted-foreground mb-8">{subtitle}</p>
      {children}
    </div>
  );
}
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <div><label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">{label}</label>{children}</div>;
}
function Pill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return <button onClick={onClick} className={`px-4 py-2 rounded-full text-sm border transition-all ${active ? "bg-[var(--navy)] text-warm-white border-[var(--navy)]" : "border-[var(--navy)]/15 hover:border-[var(--navy)]/40"}`}>{children}</button>;
}
function Input({ label, value, onChange, type = "text", className = "" }: { label: string; value: string; onChange: (v: string) => void; type?: string; className?: string }) {
  return (
    <div className={className}>
      <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">{label}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} className="w-full rounded-xl border border-[var(--navy)]/15 bg-warm-white p-4 text-sm focus:border-[var(--gold)] focus:outline-none" />
    </div>
  );
}
function Summary({ label, value }: { label: string; value: string }) {
  return <div className="flex justify-between gap-4"><span className="text-muted-foreground">{label}</span><span className="font-medium text-right">{value}</span></div>;
}
