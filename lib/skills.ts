export type SkillGroup = {
  name: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    name: "Frontend",
    items: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "React Native",
      "UI architecture",
      "Responsive design",
    ],
  },
  {
    name: "Backend",
    items: [
      "REST API design",
      "Frappe Framework",
      "Django",
      "Node.js",
      "Server actions",
      "Background workers",
      "Automated testing & evals",
    ],
  },
  {
    name: "Databases & Data",
    items: [
      "PostgreSQL",
      "MySQL / MariaDB",
      "MongoDB",
      "Firestore",
      "Redis",
      "Data modelling",
      "Query optimisation",
    ],
  },
  {
    name: "Analytics & BI",
    items: [
      "Natural language to SQL",
      "Semantic layers",
      "KPI reporting",
      "Dashboards",
      "Recharts",
      "Leaflet",
    ],
  },
  {
    name: "Security",
    items: [
      "JWT & httpOnly cookies",
      "Backend-for-frontend proxy",
      "Role-based access control",
      "Rate limiting",
      "Audit trails",
      "Secure deployment",
    ],
  },
  {
    name: "AI & Real-time",
    items: [
      "OpenAI API",
      "Anthropic API",
      "CrewAI multi-agent",
      "Prompt engineering",
      "NLP workflows",
      "LiveKit voice agents",
      "TensorFlow Lite",
    ],
  },
  {
    name: "Cloud & DevOps",
    items: [
      "Docker",
      "Nginx",
      "Linux VPS",
      "Vercel",
      "Firebase",
      "MongoDB Atlas",
      "CI/CD",
      "Production monitoring",
    ],
  },
];
