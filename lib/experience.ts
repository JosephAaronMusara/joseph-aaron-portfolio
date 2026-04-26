export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineer",
    company: "Colossal Hub",
    period: "2025 — Present",
    description:
      "Building full-stack software systems, AI-powered recruitment tools, backend APIs, and production deployments.",
    highlights: [
      "Developed AI-assisted recruitment workflows",
      "Integrated real-time interview infrastructure",
      "Worked on production backend deployment and infrastructure",
      "Designed usage-based billing concepts for AI-heavy SaaS features",
    ],
  },
    {
    role: "Software Development Intern",
    company: "Vanguard Economics Ltd Rwanda",
    period: "2024-2025",
    description:
      "Gained practical experience in software development, system design, and project delivery.",
    highlights: [
      "Supported development of business software features",
      "Worked with real-world requirements",
      "Improved debugging and delivery discipline",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Spiderbit Ltd, Rwanda",
    period: "2024-2024",
    description:
      "Worked on software development tasks involving web systems, backend logic, and business-focused applications.",
    highlights: [
      "Contributed to practical software systems",
      "Improved full-stack development skills",
      "Worked in a professional software environment",
    ],
  },
  {
    role: "Software Developer",
    company: "Enes Harness Management Services, South Africa",
    period: "2022-2022",
    description:
      "Inhouse software development for a small business, building web-based tools to support operations and management.",
    highlights: [
      "Designed and built web-based management tools from scratch",
      "Gained experience with web technologies",
      "Communication with non-technical stakeholders",
      "User Training and support",
    ],
  },
];

export const technicalDepth = [
  {
    title: "AI workflows that connect to real products",
    body: "Not just chatbots. I build AI features around actual product flows — CV parsing, candidate scoring, interview sessions, analytics — where the AI output has to fit into a schema and a workflow.",
  },
  {
    title: "Full-stack systems from UI to deployment",
    body: "Frontend interfaces, backend APIs, databases, authentication, server configuration, and production deployment. I prefer owning the path from feature to shipped.",
  },
  {
    title: "Real-time communication systems",
    body: "LiveKit-based interview rooms, voice AI agents, session tokens, and recording workflows. Real-time is mostly a systems problem, and I treat it that way.",
  },
  {
    title: "Zimbabwe-aware software products",
    body: "Local payment flows, infrastructure cost, connectivity, and adoption realities are first-class constraints, not afterthoughts.",
  },
];
