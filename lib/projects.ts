export type ProjectCategory =
  | "Full-stack AI SaaS"
  | "Voice AI / Real-time systems"
  | "AI / Public health / Analytics"
  | "Mobile / Agriculture / AI"
  | "Payments / SaaS infrastructure";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  summary: string;
  description: string;
  problem: string;
  solution: string;
  stack: string[];
  highlights: string[];
  metrics: string[];
  caseStudy?: {
    overview: string;
    role: string;
    architecture: { title: string; body: string }[];
    features: { title: string; body: string }[];
    challenges: { title: string; body: string }[];
    learnings: string[];
  };
  screenshots?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  hero?: { src: string; alt: string };
  architectureDiagram?: { src: string; alt: string; caption?: string };
  links?: {
    repo?: string;
    live?: string;
  };
  cta: string;
  hasCaseStudy: boolean;
};

export const projects: Project[] = [
  {
    slug: "ai-recruitment-platform",
    title: "AI-Powered Recruitment SaaS Platform",
    category: "Full-stack AI SaaS",
    year: "2025 - 2026",
    summary:
      "A recruitment SaaS that uses AI to parse CVs, score candidates, and structure the hiring pipeline from application to interview.",
    description:
      "A recruitment platform that uses AI to parse CVs, shortlist candidates, manage applications, and support structured hiring workflows.",
    problem:
      "Recruiters spend most of their time on the lowest-leverage parts of hiring: reading the same CV fields over and over, copying notes between tools, and chasing candidates through unstructured pipelines.",
    solution:
      "A full-stack platform that ingests CVs, extracts structured candidate data, ranks applicants against a job spec, and walks recruiters through a single workflow from shortlist to interview to decision.",
    stack: [
      "Next.js",
      "TypeScript",
      "Frappe",
      "Python",
      "OpenAI",
      "Redis",
      "Docker",
      "Nginx",
    ],
    highlights: [
      "AI-assisted candidate scoring and shortlisting",
      "Bias-verification notes attached to each AI score",
      "Backend APIs for interview sessions and candidate workflows",
      "Production deployment with Nginx and supervisor",
      "Usage-based billing direction using credits",
    ],
    metrics: [
      "Designed to reduce manual screening workload by an estimated 60%+",
      "Supports structured candidate review from application through interview",
    ],
    caseStudy: {
      overview:
        "Built as a production SaaS for recruitment teams that need to move faster without losing structure. The system pairs a Next.js frontend with a Frappe backend, and uses OpenAI for CV parsing and candidate scoring against role requirements.",
      role: "End-to-end engineer: data model, backend APIs, AI workflows, frontend, and production deployment.",
      architecture: [
        {
          title: "Frontend",
          body: "Next.js (App Router) with TypeScript and Tailwind. Recruiter dashboards, candidate views, and shortlist management. Server actions for sensitive mutations; client state kept narrow.",
        },
        {
          title: "Backend",
          body: "Frappe framework on Python for the data model (Jobs, Candidates, Applications, Interviews, Credits). REST endpoints for the Next.js client and webhook surfaces for AI workers.",
        },
        {
          title: "AI layer",
          body: "OpenAI for CV parsing into a structured candidate profile and for scoring candidates against a normalized job spec. Each score is paired with a short rationale and a bias-flag pass.",
        },
        {
          title: "Infra",
          body: "Docker images for the app and worker tiers. Nginx as the public ingress, supervisor for process management, Redis for queues and caching. Deployed on a Linux VPS.",
        },
      ],
      features: [
        {
          title: "Structured CV parsing",
          body: "Uploaded CVs are parsed into a consistent candidate schema so search, filtering, and scoring all operate on the same fields.",
        },
        {
          title: "Candidate scoring with rationale",
          body: "Each candidate is scored against the job spec with a written rationale, so recruiters can review the reasoning rather than trusting an opaque number.",
        },
        {
          title: "Bias-verification notes",
          body: "A second pass surfaces wording or signals that may indicate bias in the score, giving recruiters a check before acting on AI output.",
        },
        {
          title: "Interview session APIs",
          body: "Backend endpoints to create, run, and close interview sessions, designed to plug into both human and AI-led interview flows.",
        },
        {
          title: "Credit-based billing foundation",
          body: "Usage is metered against a credit balance per workspace, with hooks for top-ups and reporting.",
        },
      ],
      challenges: [
        {
          title: "Keeping AI output trustworthy",
          body: "Free-form AI output is hard to act on. Constraining the model to a structured response and pairing every score with a rationale and bias note made the AI useful instead of decorative.",
        },
        {
          title: "Data model that survives change",
          body: "Recruitment workflows differ across roles and teams. The schema separates job spec, candidate profile, and application stage so new flows can be added without migrations.",
        },
        {
          title: "Production deployment on a VPS",
          body: "Running Frappe + Next.js + Redis + workers behind a single Nginx ingress meant getting supervisor, container boundaries, and reverse-proxy paths right before any feature could be shipped reliably.",
        },
      ],
      learnings: [
        "Treat the AI as a junior teammate whose output must be auditable: structured fields, rationale, and a check pass.",
        "Invest in deployment early — a half-running staging environment is worth more than three more features.",
        "Billing is a product feature. Modeling credits before the AI calls go out keeps unit economics in view.",
      ],
    },
    hero: {
      src: "/screenshots/ai-recruitment-platform/hero.png",
      alt: "AI-powered recruitment platform — overview",
    },
    architectureDiagram: {
      src: "/screenshots/ai-recruitment-platform/architecture.png",
      alt: "Recruitment platform system architecture",
      caption: "Next.js + Frappe + OpenAI behind an Nginx ingress, with Redis-backed workers.",
    },
    screenshots: [
      {
        src: "/screenshots/ai-recruitment-platform/01-jobs.png",
        alt: "Jobs and roles dashboard",
        caption: "Jobs dashboard with active roles and candidate counts.",
      },
      {
        src: "/screenshots/ai-recruitment-platform/02-candidates.png",
        alt: "Candidate list view",
        caption: "Candidate list with AI-assisted scoring.",
      },
      {
        src: "/screenshots/ai-recruitment-platform/03-scoring.png",
        alt: "AI candidate scoring with rationale",
        caption: "Per-candidate score with rationale and bias-verification note.",
      },
      {
        src: "/screenshots/ai-recruitment-platform/04-shortlist.png",
        alt: "Shortlist management view",
        caption: "Shortlist management and stage progression.",
      },
    ],
    links: {
      repo: undefined,
      live: "https://hr-frontend-colossal.vercel.app/",
    },
    cta: "Read case study",
    hasCaseStudy: true,
  },
  {
    slug: "ai-interview-agent",
    title: "Real-Time AI Interview Agent",
    category: "Voice AI / Real-time systems",
    year: "2026",
    summary:
      "A voice AI agent that joins a live interview room, asks role-specific questions, listens, and produces a recording for human review.",
    description:
      "A real-time AI interview experience using voice, room tokens, session management, and recording infrastructure.",
    problem:
      "First-round interviews are repetitive and don't scale. Recruiters end up asking the same five questions to fifty candidates while better-fit candidates wait in the queue.",
    solution:
      "A real-time voice agent that joins a LiveKit room, runs a structured interview, and saves a recording. Humans handle the rounds that matter; the agent handles the front of the funnel.",
    stack: [
      "LiveKit",
      "Python",
      "OpenAI",
      "Deepgram",
      "Cartesia",
      "Silero VAD",
      "Next.js",
      "Frappe",
    ],
    highlights: [
      "LiveKit room token generation and session lifecycle",
      "Deepgram speech-to-text and Cartesia text-to-speech in the loop",
      "Silero VAD for natural turn-taking",
      "Server-side recording with LiveKit Egress",
      "Candidate-facing interview frontend with a single-room join",
    ],
    metrics: [
      "Built for scalable first-round interview automation",
      "Designed to preserve interview recordings for human review",
    ],
    caseStudy: {
      overview:
        "A real-time interview agent that turns a structured job spec into a live voice interview. The candidate joins a browser-based room; the agent connects on the server side, runs the interview, and writes a recording that recruiters review later.",
      role: "Designed and built the real-time pipeline end to end: room provisioning, agent runtime, STT/TTS integration, recording, and the candidate-facing frontend.",
      architecture: [
        {
          title: "Realtime transport",
          body: "LiveKit handles the audio transport. The Next.js frontend mints a room token via a backend endpoint and joins as the candidate; the Python agent joins the same room as a participant.",
        },
        {
          title: "Agent runtime",
          body: "A Python worker built on the LiveKit agents pattern: Silero VAD detects turn-taking, Deepgram streams transcripts, OpenAI plans the next question against the job spec and the running transcript, and Cartesia speaks the response.",
        },
        {
          title: "Session lifecycle",
          body: "Frappe owns the InterviewSession record: created when a candidate is invited, updated as the agent connects and disconnects, and closed when egress completes.",
        },
        {
          title: "Recording",
          body: "LiveKit Egress writes the room recording to object storage. The session record stores the resulting URL so recruiters can scrub through the interview later.",
        },
      ],
      features: [
        {
          title: "Role-aware question planning",
          body: "The agent reads the job spec and the running transcript to pick the next question, instead of running a fixed script.",
        },
        {
          title: "Natural turn-taking",
          body: "Silero VAD and a short barge-in window let the candidate interrupt without the agent stepping over them.",
        },
        {
          title: "Tokenized room access",
          body: "Each candidate gets a single-use room token tied to their session, so links can be shared without exposing the room.",
        },
        {
          title: "Recording for human review",
          body: "Interviews are recorded server-side, decoupling the live experience from anything the human team needs to watch later.",
        },
      ],
      challenges: [
        {
          title: "Latency budget",
          body: "Voice apps live or die at ~600 ms end-to-end. Most of the work was in cutting STT, planning, and TTS hops without breaking quality — careful streaming, minimal prompt context, and overlapping the TTS with the next-question plan.",
        },
        {
          title: "Failure modes nobody sees",
          body: "Network blips, partial transcripts, and abrupt disconnects all happen mid-interview. The session lifecycle was designed so a dropped agent doesn't leave a half-open record or a candidate stuck in a silent room.",
        },
        {
          title: "Recording vs. real-time",
          body: "Egress runs on its own pipeline. Coordinating session close with egress completion (and surfacing the recording URL only when it's actually ready) was a small but load-bearing piece of the design.",
        },
      ],
      learnings: [
        "Real-time AI is mostly a systems problem. The model is one component in a pipeline that has to behave well under bad networks.",
        "Designing for the recruiter who watches the recording later is as important as designing for the candidate in the live room.",
        "VAD-driven turn-taking is what makes the experience feel like a conversation instead of a kiosk.",
      ],
    },
    hero: {
      src: "/screenshots/ai-interview-agent/hero.png",
      alt: "Real-time AI interview agent — candidate room",
    },
    architectureDiagram: {
      src: "/screenshots/ai-interview-agent/architecture.png",
      alt: "Interview agent real-time pipeline",
      caption: "LiveKit transport, Python agent with Deepgram STT, OpenAI planner, Cartesia TTS, and LiveKit Egress for recording.",
    },
    screenshots: [
      {
        src: "/screenshots/ai-interview-agent/01-room.png",
        alt: "Candidate joining the interview room",
        caption: "Candidate-facing interview room with single-token join.",
      },
      {
        src: "/screenshots/ai-interview-agent/02-transcript.png",
        alt: "Live transcript during the interview",
        caption: "Live transcript driven by Deepgram streaming STT.",
      },
      {
        src: "/screenshots/ai-interview-agent/03-session.png",
        alt: "Interview session record",
        caption: "Interview session record stored in Frappe.",
      },
      {
        src: "/screenshots/ai-interview-agent/04-recording.png",
        alt: "Interview recording in the recruiter view",
        caption: "Server-side recording surfaced for human review.",
      },
    ],
    links: {
      repo: undefined,
      live: "https://hr-frontend-colossal.vercel.app/",
    },
    cta: "View technical breakdown",
    hasCaseStudy: true,
  },
  {
    slug: "community-health-platform",
    title: "Community Health Reporting and Analytics Platform",
    category: "AI / Public health / Analytics",
    year: "2024 - 2026",
    summary:
      "Anonymous community health reporting with heatmaps, verification workflows, and AI-assisted pattern detection for early outbreak visibility.",
    description:
      "A platform for anonymous community health reporting, incident tracking, heatmaps, analytics, and AI-assisted outbreak detection.",
    problem:
      "Local health incidents often go unreported, or stay invisible to the people who could act, until they are already a wider outbreak.",
    solution:
      "A reporting and analytics platform where community members can submit health incidents anonymously, and health workers can verify, analyze, and visualize patterns on a hotspot map.",
    stack: [
      "Python",
      "Django",
      "Next.js",
      "Daphne",
      "Docker",
      "PostgreSQL",
      "Leaflet",
      "Machine Learning",
      "NLP",
      "Data Visualization",
    ],
    highlights: [
      "Anonymous incident reporting flow",
      "Health worker dashboard with verification workflow",
      "Heatmap visualization with Leaflet",
      "AI-assisted pattern detection concept",
      "Report verification and resolution workflow",
    ],
    metrics: [
      "Designed for Zimbabwean community health reporting contexts",
      "Focused on early outbreak visibility and response",
    ],
    caseStudy: {
      overview:
        "A reporting platform aimed at the gap between what communities see day-to-day and what health workers can act on. Reports are anonymous and lightweight to submit; the analytics side gives health workers verification tools and a hotspot view.",
      role: "Designed the data model, reporting flows, verification workflow, and analytics surface.",
      architecture: [
        {
          title: "Reporting frontend",
          body: "A lightweight, mobile-first reporting flow that captures incident type, rough location, and free-text detail without requiring an account.",
        },
        {
          title: "Backend",
          body: "Python backend (Django/Frappe) modeling Reports, Verifications, Cases, and Locations. Endpoints split between the public reporting surface and the authenticated health-worker dashboard.",
        },
        {
          title: "Analytics layer",
          body: "Heatmap rendering with Leaflet, time-window filters, and category breakdowns. NLP on free-text fields to surface clusters of similar reports.",
        },
        {
          title: "Verification workflow",
          body: "Health workers can mark reports as pending, verified, duplicate, or resolved, so the analytics surface reflects what's actually been triaged.",
        },
      ],
      features: [
        { title: "Anonymous reporting", body: "Low friction to submit, designed for users on poor connections." },
        { title: "Heatmap visualization", body: "Hotspots over time, filtered by incident type and verification status." },
        { title: "Verification workflow", body: "Health workers triage reports rather than treating raw submissions as ground truth." },
        { title: "Pattern detection", body: "NLP on the free-text fields surfaces likely duplicates and clusters of similar reports." },
      ],
      challenges: [
        {
          title: "Anonymity vs. signal",
          body: "Reports need to be anonymous enough to encourage submission, but structured enough to act on. The schema captures enough metadata for analytics without identifying the reporter.",
        },
        {
          title: "Trust in the data",
          body: "Without verification, a hotspot map is just noise. Building the verification workflow before scaling submissions was the right ordering, even though it was less visible.",
        },
      ],
      learnings: [
        "Public-health software lives or dies on whether the people doing the work trust the data.",
        "Building for poor connectivity is a feature, not an afterthought.",
      ],
    },
    hero: {
      src: "/screenshots/community-health-platform/hero.png",
      alt: "Community Health Reporting and Analytics Platform — overview",
    },
    architectureDiagram: {
      src: "/screenshots/community-health-platform/architecture.png",
      alt: "Community health platform architecture",
      caption: "Public reporting frontend, Python backend, Leaflet analytics, and a verification workflow that feeds the heatmap.",
    },
    screenshots: [
      {
        src: "/screenshots/community-health-platform/01-report.png",
        alt: "Anonymous incident reporting flow",
        caption: "Anonymous incident reporting flow.",
      },
      {
        src: "/screenshots/community-health-platform/02-dashboard.png",
        alt: "Health worker dashboard",
        caption: "Health worker dashboard.",
      },
      {
        src: "/screenshots/community-health-platform/03-heatmap.png",
        alt: "Heatmap of reported incidents",
        caption: "Heatmap of reported incidents.",
      },
      {
        src: "/screenshots/community-health-platform/04-verification.png",
        alt: "Verification workflow",
        caption: "Verification workflow.",
      },
    ],
    cta: "Explore project",
    hasCaseStudy: true,
  },
  {
    slug: "agrisphere",
    title: "AgriSphere Smart Agriculture Platform",
    category: "Mobile / Agriculture / AI",
    year: "2026",
    summary:
      "A two-sided mobile app for smallholder potato farmers and agro-dealers — on-device disease detection, stage-based advisories, and proximity dealer discovery, built to work offline.",
    description:
      "A React Native + Firebase platform for Zimbabwean potato farmers and agro-dealers, combining on-device TensorFlow Lite disease detection, GPS-based dealer discovery using the Haversine formula, and crop-stage advisories driven by variety and planting date.",
    problem:
      "Smallholder potato farmers in Zimbabwe lose yield to late-detected disease, miss the right inputs at the right stage, and struggle to find reliable agro-dealers nearby. Connectivity is intermittent, devices are modest, and most existing tooling assumes none of that is true.",
    solution:
      "A mobile-first, offline-capable app that puts disease detection, stage-aware advisories, and a verified dealer directory on the farmer's phone, paired with a dealer-side app for inventory, warehouses, and ratings. AI inference runs on-device so it works without a connection; Firebase syncs when the phone is online.",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase Auth",
      "Firestore",
      "Firebase Storage",
      "TensorFlow Lite",
      "CNN",
      "GPS / Haversine",
    ],
    highlights: [
      "On-device CNN (TensorFlow Lite) for potato leaf disease classification — Healthy, Early Blight, Late Blight",
      "Field management with variety (BP1, Diamond, Mont Claire) and planting date driving stage-specific advisories",
      "Proximity dealer discovery using GPS coordinates and the Haversine formula",
      "Two-sided platform: farmer app and agro-dealer app with multi-warehouse inventory",
      "Two-way 1-5 star ratings between farmers and dealers",
      "Offline-first with automatic Firestore sync on reconnect",
      "Localization-ready interface (English, Shona, Ndebele)",
    ],
    metrics: [
      "Targets a 3-5 second on-device inference budget on average Android phones",
      "Designed for Zimbabwean smallholder agriculture: intermittent connectivity, modest hardware, GPS-equipped phones",
    ],
    caseStudy: {
      overview:
        "AgriSphere is a stand-alone React Native application for smallholder potato farmers and agro-dealers in Zimbabwe. It combines AI disease detection, geolocation-based dealer recommendations, and stage-specific crop advisories in a single app that keeps working when the network doesn't.",
      role: "End-to-end design and engineering: data model, dual-role authentication, on-device AI integration, geolocation, advisory engine, and dashboards.",
      architecture: [
        {
          title: "Mobile app (React Native + Expo)",
          body: "Single codebase shipping an Android-first build (iOS optional). Tab-based navigation across Home, Dashboard, Dealers, Advisories, and Disease Scan. Local logic handles capture, inference, and offline state; Firebase handles persistence and identity.",
        },
        {
          title: "Authentication & roles",
          body: "Firebase Authentication backs separate registration and login flows for Farmers and Agro-Dealers. Role drives the entire navigation tree, the dashboard surface, and which entities the app can read or write.",
        },
        {
          title: "On-device AI (TensorFlow Lite)",
          body: "A CNN classifier embedded in the app runs locally on captured or uploaded leaf images. Each scan returns a class (Healthy, Early Blight, Late Blight, etc.), a confidence score, and a management recommendation. Scans are saved with the field they belong to so history and dashboards stay coherent.",
        },
        {
          title: "Location engine",
          body: "GPS coordinates captured at registration and per field/warehouse. Distance between a farmer and dealers is computed with the Haversine formula and used to rank the dealer finder list.",
        },
        {
          title: "Data model (Firestore)",
          body: "Users (farmers, dealers), Fields linked to farmers, Warehouses linked to dealers, Products, Ratings, Scans, and Advisories. Designed so each entity carries the metadata the dashboards and notifications need without N+1 reads.",
        },
        {
          title: "Notifications",
          body: "Crop-stage transitions trigger advisories with variety-specific guidance. The notification module supports both local (offline) reminders and push (online) delivery so guidance lands even when the phone is air-gapped.",
        },
        {
          title: "Offline-first sync",
          body: "Firestore offline persistence plus app-level reconciliation: writes queue locally, sync resumes automatically when the device reconnects, and the UI never blocks on the network for read paths.",
        },
      ],
      features: [
        {
          title: "Field management",
          body: "Farmers add multiple fields, each with a name, potato variety, planting date, and optional GPS. Stage is derived automatically from variety + planting date so the advisory engine has something to act on.",
        },
        {
          title: "Disease detection with management advice",
          body: "Capture or upload a leaf photo; the on-device model returns the disease class, confidence, and a recommended action. Scan history is preserved per field.",
        },
        {
          title: "Stage-based advisory alerts",
          body: "When a field crosses into a new growth stage, the app fires an advisory notification tailored to the variety. Works offline through local notifications.",
        },
        {
          title: "Proximity dealer finder",
          body: "Nearby agro-dealers ranked by Haversine distance, with product listings, ratings, and warehouse locations.",
        },
        {
          title: "Dealer-side workflows",
          body: "Dealers manage business profile, multiple warehouse branches with independent inventory, products (price, image, stock), and farmer ratings — all from the same app.",
        },
        {
          title: "Two-way ratings",
          body: "After a transaction, farmers and dealers can rate each other 1-5 with comments. Averaged scores roll up into the user profile and dashboard.",
        },
        {
          title: "Dashboards",
          body: "Farmer dashboard summarizes total fields, stage breakdown, scans done, healthy vs. infected results, and recent advisories. Dealer dashboard summarizes products, stock status, warehouses, ratings, and recent activity.",
        },
      ],
      challenges: [
        {
          title: "Running AI on the phone",
          body: "Cloud inference was a non-starter for users with intermittent data. Shipping a TensorFlow Lite model into a React Native app meant constraining model size, choosing input resolution carefully, and budgeting inference time so the scan feels instant on average Android hardware.",
        },
        {
          title: "Designing for offline first",
          body: "Most of the app has to behave correctly with no network: capture, classify, view fields, read advisories, and queue writes. The data layer was built so the UI never branches on connectivity — Firestore persistence does the heavy lifting and reconciliation handles edge cases on reconnect.",
        },
        {
          title: "Trust on both sides of the marketplace",
          body: "Farmers need dealer data they can trust; dealers need farmers who actually transact. The two-way rating system, dealer verification, and transparent comments were intentional product decisions, not afterthoughts.",
        },
        {
          title: "Localization without bloat",
          body: "The interface is built to support English, Shona, and Ndebele. Keeping copy externalized from components from day one avoided a painful retrofit later.",
        },
      ],
      learnings: [
        "Offline is a product feature, not a footnote — designing for it changes the data layer, the UI, and the notification strategy.",
        "On-device AI is mostly an engineering problem: model size, input pipeline, and the user's expectation that it just works.",
        "A two-sided app is two products that share a codebase; the role split has to be clean at the data layer or the UI gets tangled fast.",
        "Building for Zimbabwean infrastructure realities (modest devices, patchy data, GPS-equipped but battery-constrained phones) produces a sturdier product than designing for ideal conditions and degrading.",
      ],
    },
    hero: {
      src: "/screenshots/agrisphere/hero.png",
      alt: "AgriSphere — farmer home screen",
    },
    architectureDiagram: {
      src: "/screenshots/agrisphere/architecture.png",
      alt: "AgriSphere mobile architecture",
      caption: "React Native app with on-device TensorFlow Lite inference, Firebase backend, and GPS + Haversine for dealer ranking.",
    },
    screenshots: [
      {
        src: "/screenshots/agrisphere/01-fields.png",
        alt: "Field management screen",
        caption: "Field management with variety and planting date.",
      },
      {
        src: "/screenshots/agrisphere/02-scan.png",
        alt: "Disease detection scan result",
        caption: "On-device disease classification with confidence and advice.",
      },
      {
        src: "/screenshots/agrisphere/03-dealers.png",
        alt: "Nearby dealer finder",
        caption: "Proximity-ranked dealer finder using Haversine distance.",
      },
      {
        src: "/screenshots/agrisphere/04-dashboard.png",
        alt: "Farmer dashboard",
        caption: "Farmer dashboard summarizing fields, scans, and advisories.",
      },
    ],
    cta: "Read case study",
    hasCaseStudy: true,
  },
  {
    slug: "paynow-billing",
    title: "Usage-Based Billing and Paynow Integration",
    category: "Payments / SaaS infrastructure",
    year: "2026",
    summary:
      "A credit-based billing foundation for SaaS products, with Paynow integration tuned for Zimbabwean payment flows.",
    description:
      "A billing foundation for SaaS products using credits, payment initiation, transaction tracking, and Paynow integration for Zimbabwean payment flows.",
    problem:
      "AI-heavy SaaS products need usage-based billing to protect margins and offer flexible pricing — and in Zimbabwe, that means handling Paynow correctly.",
    solution:
      "A credit-based billing model with Paynow payment initiation, status polling, transaction records, and per-feature usage logging.",
    stack: ["Python", "Frappe", "Paynow", "REST APIs", "SaaS Billing"],
    highlights: [
      "Credit-based usage model",
      "Paynow payment initiation and polling",
      "Transaction lifecycle tracking",
      "Hook points for AI usage cost logging",
    ],
    metrics: ["Designed for Zimbabwean SaaS payment realities"],
    cta: "See implementation",
    hasCaseStudy: false,
  },
];

export const categories: ProjectCategory[] = [
  "Full-stack AI SaaS",
  "Voice AI / Real-time systems",
  "AI / Public health / Analytics",
  "Mobile / Agriculture / AI",
  "Payments / SaaS infrastructure",
];

export const featuredSlugs = [
  "ai-recruitment-platform",
  "ai-interview-agent",
  "community-health-platform",
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return featuredSlugs
    .map((s) => projects.find((p) => p.slug === s))
    .filter((p): p is Project => Boolean(p));
}
