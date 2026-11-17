export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineer",
    company: "Colossal Hub",
    period: "Oct 2025 - Present",
    location: "Remote",
    description:
      "Lead delivery on one system for running a business (HR, payroll, accounting, recruitment, and conversational business intelligence) end to end: data model, secure backend APIs, AI workflows, frontends, and production deployment.",
    highlights: [
      "Built an HR platform with an integrated conversational business-intelligence layer",
      "Shipped dual-currency payroll (US$ / ZiG) against NEC sector wage grids, PAYE tables, and NSSA ceilings",
      "Fiscalised the accounting module against ZIMRA's FDMS, with statutory returns ready to file",
      "Made WhatsApp a product channel for payslips, leave, clock-in, expense claims from a photo, and analytics Q&A with charts, all behind layered role-based access control",
      "Shipped an AI recruitment product with CV parsing and audited candidate scoring",
      "Built a credit-based billing layer with Paynow payment integration",
      "Stack: Next.js, TypeScript, Python (Frappe), PostgreSQL / MariaDB, Redis, Docker, Nginx",
    ],
  },
  {
    role: "Head of Technology & Innovation",
    company: "Gibraltar Research Africa",
    period: "2026 - Present",
    location: "Remote",
    description:
      "Lead technology for a consultancy offering business advisory, project management, and technical assistance across Southern and Eastern Africa. Designed, built, and deployed its secure business-development intelligence platform and corporate website.",
    highlights: [
      "Tender pipeline with KPIs, win-rate analytics, and automated deadline reminders",
      "JWTs in httpOnly cookies via a backend-for-frontend proxy, rate-limited login",
      "Role-based permissions and a full audit trail across a shared multi-user workspace",
      "Built and shipped gibraltarresearch.africa with SEO and a responsive UI",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Vanguard Economics",
    period: "Nov 2024 - Apr 2025",
    location: "Rwanda",
    description:
      "Developed, tested, and deployed full-stack, data-driven applications for an economics consultancy operating across Rwanda and the wider region.",
    highlights: [
      "Built interactive React dashboards and data visualisations for analyst-facing reporting",
      "Wrote Django and Node.js services for advanced analytics",
      "Optimised data storage and retrieval over large datasets",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Spiderbit",
    period: "Jul 2024 - Nov 2024",
    location: "Rwanda",
    description:
      "Delivered production web systems and backend logic as part of a professional software team.",
    highlights: [
      "Shipped backend logic and web systems into production",
      "Several of the systems built remain in production today",
      "Worked to professional review, testing, and delivery standards",
    ],
  },
  {
    role: "In-House Software Developer",
    company: "Enes Harness Management Services",
    period: "Feb 2022 - Jun 2022",
    location: "South Africa",
    description:
      "In-house development for a manufacturing business, building web tools that supported day-to-day operations and management.",
    highlights: [
      "Shipped a Django stock-management system that flagged low raw-material levels early",
      "Prevented stock gaps from disrupting the production floor, improving reliability",
      "Built internal tooling and the company website",
      "Ran user training and supported non-technical stakeholders post-launch",
    ],
  },
];

export const technicalDepth = [
  {
    title: "Analytics and BI people can actually audit",
    body: "Natural-language questions to SQL over a tenant-scoped semantic layer, so every chart traces back to the exact metric definition and query that produced it, and anyone can check where a number came from.",
  },
  {
    title: "Security-first backend design",
    body: "JWTs in httpOnly cookies behind a backend-for-frontend proxy, rate-limited auth, role-based access control, and audit trails across shared multi-user workspaces. Security is designed into the data model from the start.",
  },
  {
    title: "AI workflows wired into real products",
    body: "CV parsing, candidate scoring, and multi-agent pipelines with an adversarial review pass. The AI output has to land in a schema and survive a workflow before anyone acts on it.",
  },
  {
    title: "Full-stack systems from UI to deployment",
    body: "Frontend, backend APIs, databases, authentication, server configuration, and production deployment on Docker + Nginx + Linux VPS. I prefer owning the path from feature to shipped.",
  },
  {
    title: "Real-time communication systems",
    body: "LiveKit voice agents, streaming STT and TTS, session tokens, and recording workflows tuned under ~600 ms end to end. Real-time is mostly a systems problem, and I treat it that way.",
  },
  {
    title: "Zimbabwe-aware software products",
    body: "Local payment flows like Paynow, infrastructure cost, connectivity, and adoption realities are treated as first-class constraints from day one.",
  },
];
