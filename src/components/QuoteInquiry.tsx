import { motion } from "framer-motion";
import { useState } from "react";
import { CTAButton } from "./CTAButton";
import { Check } from "lucide-react";

export function QuoteInquiry() {
  const [done, setDone] = useState(false);
  const [f, setF] = useState({ service: "", scope: "", name: "", company: "", email: "", phone: "" });
  const set = (k: string, v: string) => setF(p => ({ ...p, [k]: v }));
  const ok = f.service && f.name && f.company && f.email && f.phone;

  if (done) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--gold)]/15 text-[var(--gold)] mb-5">
          <Check className="h-8 w-8" strokeWidth={2.5} />
        </div>
        <h3 className="font-display text-2xl mb-2">Quote request received</h3>
        <p className="text-muted-foreground">We'll respond with a tailored proposal within 1–2 business days.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={e => { e.preventDefault(); if (ok) setDone(true); }} className="space-y-4">
      <Row>
        <In label="Service needed" value={f.service} onChange={v => set("service", v)} placeholder="e.g. Financial consulting" />
        <In label="Company" value={f.company} onChange={v => set("company", v)} />
      </Row>
      <div>
        <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Brief scope</label>
        <textarea rows={3} value={f.scope} onChange={e => set("scope", e.target.value)} className="w-full rounded-xl border border-[var(--navy)]/15 bg-warm-white p-4 text-sm focus:border-[var(--gold)] focus:outline-none" />
      </div>
      <Row>
        <In label="Full name" value={f.name} onChange={v => set("name", v)} />
        <In label="Email" type="email" value={f.email} onChange={v => set("email", v)} />
      </Row>
      <In label="Phone" value={f.phone} onChange={v => set("phone", v)} />
      <div className="pt-2">
        <CTAButton type="submit" variant="navy">Request Quote</CTAButton>
      </div>
    </form>
  );
}

function Row({ children }: { children: React.ReactNode }) { return <div className="grid sm:grid-cols-2 gap-4">{children}</div>; }
function In({ label, value, onChange, type = "text", placeholder }: { label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">{label}</label>
      <input type={type} value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} className="w-full rounded-xl border border-[var(--navy)]/15 bg-warm-white p-4 text-sm focus:border-[var(--gold)] focus:outline-none" />
    </div>
  );
}
