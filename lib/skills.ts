export type SkillGroup = {
  name: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Native",
      "UI architecture",
      "Responsive design",
    ],
  },
  {
    name: "Backend",
    items: [
      "Python",
      "Frappe Framework",
      "Django",
      "REST APIs",
      "Authentication",
      "Background workers",
      "Redis",
      "MariaDB",
    ],
  },
  {
    name: "AI & Automation",
    items: [
      "OpenAI API",
      "Anthropic API",
      "CV parsing",
      "AI scoring",
      "NLP workflows",
      "Prompt engineering",
      "Voice AI agents",
    ],
  },
  {
    name: "Infrastructure",
    items: [
      "Docker",
      "Nginx",
      "Supervisor",
      "Linux VPS",
      "LiveKit",
      "Deployment debugging",
      "Production monitoring basics",
    ],
  },
];
