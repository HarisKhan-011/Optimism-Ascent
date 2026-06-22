import { TrendingUp, Calculator, Settings2, Shield, Wallet, Building2, Network, Briefcase, HeartPulse, Landmark, ShoppingBag, Factory, Sprout, Zap } from "lucide-react";

export const SERVICES = [
  {
    slug: "business-development",
    icon: TrendingUp,
    title: "Business Development & Growth Strategy",
    short: "Market entry, growth planning, and partnership development aligned with Vision 2030.",
    challenge: "Growth feels reactive — you sense the opportunity but lack a clear path to capture it.",
    approach: "We map the market, model the upside, and build a sequenced growth plan with the partnerships and channels to execute.",
    outcome: "A defensible market position, a pipeline that compounds, and partnerships that open doors.",
  },
  {
    slug: "financial-consulting",
    icon: Calculator,
    title: "Financial Consulting & Accounting",
    short: "Budgeting, forecasting, compliance, and audit-ready reporting that finance leaders trust.",
    challenge: "Finance is closing books late, decisions wait on numbers, and audits feel like a scramble.",
    approach: "We rebuild the financial backbone: chart of accounts, forecasting cadence, controls, and reporting that surfaces signal — not noise.",
    outcome: "Books close in days, not weeks. Forecasts you can defend. Audits that pass quietly.",
  },
  {
    slug: "administrative-operational",
    icon: Settings2,
    title: "Administrative & Operational Consulting",
    short: "Process reengineering, SOPs, and operating models that scale without adding overhead.",
    challenge: "Admin work multiplies as you grow. Teams duplicate effort and decisions get stuck.",
    approach: "We diagnose where time leaks, redesign workflows, and codify SOPs that travel with the team.",
    outcome: "Less overhead, faster decisions, and a team that scales without scaling chaos.",
  },
  {
    slug: "insurance-advisory",
    icon: Shield,
    title: "Insurance Advisory",
    short: "Risk assessment, policy structuring, and claims management under CCHI and SAMA frameworks.",
    challenge: "You're paying premiums that don't match your risk profile, and claims feel adversarial.",
    approach: "We assess exposure, restructure policies, and run claims as a managed workflow — not a fight.",
    outcome: "Right-sized coverage, faster claim outcomes, and full regulatory alignment.",
  },
  {
    slug: "collections-debt-recovery",
    icon: Wallet,
    title: "Collections & Debt Recovery",
    short: "Receivables strategy, aging analysis, and recovery workflows that protect cash flow.",
    challenge: "Receivables drift past 60, 90, 120 days. Cash flow tightens while the work piles up.",
    approach: "We segment the book, sequence outreach, and build a recovery engine that preserves the customer relationship.",
    outcome: "DSO down, cash unlocked, and a collections operation that no longer drains your team.",
  },
  {
    slug: "public-administration",
    icon: Landmark,
    title: "Public Administration Support",
    short: "Government relations, licensing, regulatory compliance, and public-sector operational advisory.",
    challenge: "Licensing, permits, and regulatory filings are slowing the business — or putting it at risk.",
    approach: "We navigate the regulatory map, manage filings, and build the compliance discipline that keeps doors open.",
    outcome: "Approvals on time, regulators on side, and operations that scale without legal drag.",
  },
  {
    slug: "organizational-restructuring",
    icon: Network,
    title: "Organizational Restructuring",
    short: "Corporate restructuring, change management, governance, and workforce optimization.",
    challenge: "The org chart no longer matches the business. Decisions are slow and accountability is unclear.",
    approach: "We redesign structure, define decision rights, and shepherd the change so people stay with you through it.",
    outcome: "A leaner, clearer organization with governance that holds and a team that's bought in.",
  },
];

export const INDUSTRIES = [
  { name: "Banking & Finance", icon: Briefcase, blurb: "Risk, compliance, and growth strategy for banks, NBFIs, and fintech." },
  { name: "Insurance", icon: Shield, blurb: "Regulatory navigation, product structuring, and claims operations." },
  { name: "Government & Public Sector", icon: Landmark, blurb: "Operational reform, governance, and Vision 2030 program support." },
  { name: "Real Estate & Construction", icon: Building2, blurb: "Project finance, contractor governance, and receivables discipline." },
  { name: "Healthcare", icon: HeartPulse, blurb: "Revenue cycle, compliance, and operational efficiency for providers." },
  { name: "Retail & Trade", icon: ShoppingBag, blurb: "Margin recovery, supply chain, and multi-location operations." },
  { name: "SMEs & Startups", icon: Sprout, blurb: "Finance, ops, and growth infrastructure for fast-moving founders." },
  { name: "Energy & Utilities", icon: Zap, blurb: "Capital planning, contractor management, and regulatory alignment." },
];

export const CHALLENGES = [
  { title: "Operational Inefficiency", body: "Teams duplicating work, decisions stuck in approval, costs rising faster than revenue." },
  { title: "Financial Compliance Gaps", body: "Reports that don't reconcile, controls that exist on paper, audits that turn into fire drills." },
  { title: "Collections Bottlenecks", body: "Receivables aging past 90 days, working capital tied up, cash flow uncertainty." },
  { title: "Administrative Overhead", body: "Process bloat, manual approvals, and back-office costs that scale with headcount." },
  { title: "Growth Barriers", body: "A clear market opportunity but no operational backbone to capture it sustainably." },
  { title: "Regulatory Friction", body: "Licensing delays, compliance ambiguity, and Vision 2030 alignment gaps." },
];

export const PROCESS = [
  { phase: "01", title: "Discover", body: "We listen first. Stakeholder interviews, data review, and a working understanding of where you are." },
  { phase: "02", title: "Diagnose", body: "We map the system — operations, finances, people, governance — and pinpoint the leverage points." },
  { phase: "03", title: "Design", body: "We co-design the path forward: clear scope, realistic sequencing, measurable outcomes." },
  { phase: "04", title: "Implement", body: "We work alongside your team to execute — not from a deck, but in the operation itself." },
  { phase: "05", title: "Monitor & Optimize", body: "We stay close. KPIs, reviews, and adjustments until the change holds." },
];

export const RESULTS = [
  { metric: "42%", label: "Reduction in DSO", body: "Retail group, 8-month engagement. Receivables strategy + collections operating model.", tag: "Collections" },
  { metric: "3.2x", label: "Faster Monthly Close", body: "Mid-market healthcare provider. Financial reporting and controls overhaul.", tag: "Finance" },
  { metric: "SAR 14M", label: "Annualized Cost Saved", body: "Construction group restructuring — process, governance, and workforce optimization.", tag: "Restructuring" },
  { metric: "18%", label: "Margin Recovery", body: "Multi-location retail operator. Operating model redesign and procurement discipline.", tag: "Operations" },
  { metric: "100%", label: "Audit Pass Rate", body: "Across all financial advisory clients, three consecutive fiscal years.", tag: "Compliance" },
  { metric: "9 mo", label: "Vision 2030 Licensing", body: "Cross-sector client — accelerated regulatory pathway and approvals.", tag: "Public Admin" },
];

export const TESTIMONIALS = [
  { quote: "Optimism didn't hand us a deck. They sat with our team, rebuilt the financial close, and stayed until it held. That's rare.", author: "CFO, Regional Healthcare Group" },
  { quote: "Our collections operation was a black hole. Six months later, DSO is down 40% and the team owns the process. Best return we've had on any engagement.", author: "Managing Director, Trading Company" },
  { quote: "Practical, grounded, and culturally fluent. They understand the Saudi market in a way most international firms don't.", author: "Founder, FinTech Startup" },
  { quote: "Restructured our admin layer without losing a single key person. The change management was as careful as the strategy.", author: "COO, Construction Group" },
];

export const INSIGHTS = [
  { title: "5 Financial Compliance Gaps Most Saudi SMEs Miss", category: "Finance", read: "6 min read" },
  { title: "Why Collections Strategy Is Your Hidden Cash-Flow Lever", category: "Operations", read: "5 min read" },
  { title: "Aligning Operations with Vision 2030: A Practical Playbook", category: "Strategy", read: "8 min read" },
  { title: "The Restructuring Mistakes That Cost You Your Best People", category: "Change", read: "7 min read" },
  { title: "Insurance Advisory Under CCHI: What's Actually Changed", category: "Insurance", read: "4 min read" },
  { title: "Why 'Process' Beats 'Talent' When You're Scaling Past 50 People", category: "Operations", read: "6 min read" },
];

export const CREDENTIALS = [
  "Saudi Vision 2030 Aligned",
  "CCHI & SAMA Framework Experience",
  "ZATCA Compliance Practice",
  "ISO 9001 Methodology",
  "Cross-Sector Engagement Record",
];
