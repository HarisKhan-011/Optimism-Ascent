import { Link } from "@tanstack/react-router";
import { CTAButton } from "./CTAButton";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

const services = [
  ["Business Development", "/services"],
  ["Financial & Accounting", "/services"],
  ["Administrative Consulting", "/services"],
  ["Insurance Advisory", "/services"],
  ["Collections & Recovery", "/services"],
  ["Public Administration", "/services"],
  ["Organizational Restructuring", "/services"],
];

const industries = ["Banking & Finance", "Insurance", "Government", "Real Estate", "Healthcare", "Retail", "SMEs & Startups", "Energy"];

export function Footer() {
  return (
    <footer className="bg-[var(--navy-deep)] text-warm-white pt-24 pb-10 mt-32 geo-pattern">
      <div className="container-90">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-6">
              <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
                <path d="M16 3 L28 10 L28 22 L16 29 L4 22 L4 10 Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 20 L14 16 L18 18 L22 12" stroke="#C9A24D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <circle cx="22" cy="12" r="2" fill="#C9A24D" />
              </svg>
              <span className="font-display text-2xl">Optimism<span className="text-[var(--gold)]">.</span></span>
            </div>
            <p className="text-warm-white/70 leading-relaxed max-w-md mb-8">
              Saudi-based business development and consulting firm helping organizations operate sharper, grow faster, and align confidently with Vision 2030.
            </p>
            <CTAButton to="/contact" variant="gold">Book a Consultation</CTAButton>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] mb-5">Services</h4>
            <ul className="space-y-2.5 text-sm text-warm-white/75">
              {services.map(([label, to]) => (
                <li key={label}><Link to={to} className="hover:text-[var(--gold)] transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] mb-5">Company</h4>
            <ul className="space-y-2.5 text-sm text-warm-white/75">
              <li><Link to="/about" className="hover:text-[var(--gold)]">About</Link></li>
              <li><Link to="/process" className="hover:text-[var(--gold)]">Process</Link></li>
              <li><Link to="/results" className="hover:text-[var(--gold)]">Results</Link></li>
              <li><Link to="/insights" className="hover:text-[var(--gold)]">Insights</Link></li>
              <li><Link to="/industries" className="hover:text-[var(--gold)]">Industries</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-warm-white/75">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-[var(--gold)] shrink-0"/>Riyadh, Saudi Arabia</li>
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-[var(--gold)] shrink-0"/>+966 11 000 0000</li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-[var(--gold)] shrink-0"/>hello@optimism.sa</li>
              <li>
                <a href="https://www.linkedin.com/in/ibrahimhussaien/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[var(--gold)]">
                  <Linkedin className="h-4 w-4 text-[var(--gold)]"/>LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-8 border-b border-white/10">
          <div className="text-xs uppercase tracking-[0.2em] text-warm-white/50 mb-4">Industries we serve</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-warm-white/75">
            {industries.map(i => <span key={i}>{i}</span>)}
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-warm-white/50">
          <div>© {new Date().getFullYear()} Optimism For Business & Consulting. All rights reserved.</div>
          <div>
            This website is powered by{" "}
            <a href="https://theinnovations.tech/" target="_blank" rel="noreferrer" className="text-[var(--gold)] hover:underline">The Innovations</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
